import Config from "./config";

export default {

  async baseEwalletApi(sub_url, method, json_data, cb) {
    try {
      let request = {
        method,
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization:  null,
          API_KEY: Config.API_KEY
        },
      };
      if (method == "POST" || method == "PUT") {
        request["body"] = JSON.stringify(json_data);
      }      
      let response = await fetch(sub_url, request);
      let responseJson = await response.json();
      if (response.status >= 200 && response.status < 300) {
        cb && cb(null, responseJson);
      } else {
        cb && cb(responseJson, null);
      }
    } catch (error) {
      cb && cb(error, null);
    }
  },

  async baseMiddleApi(sub_url, method, json_data, auth_token, cb) {
    try {
      let request = {
        method,
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization:  auth_token? `Bearer ${auth_token}` : null,          
        },
      };
      if (method == "POST" || method == "PUT") {
        request["body"] = JSON.stringify(json_data);
      }      

      console.log('sub_url', sub_url, request);
      let response = await fetch(sub_url, request);
      console.log('response', response);
      let responseJson = await response.json();      
      if (response.status >= 200 && response.status < 300) {
        cb && cb(null, responseJson);
      } else {
        cb && cb(responseJson, null);
      }
    } catch (error) {
      cb && cb(error, null);
    }
  },

  getTransactions(params, cb) {
    this.baseEwalletApi(`${Config.EWALLET_API_URL}/transactions?pageNum=${params.page}&pageSize=${params.pageSize}`, "GET", {}, (err, res) => {
      if (err == null) {
        console.log("success!");
      }
      cb(err, res);
    });
  },

  authenticate(params, cb){
    console.log('params', params);
    this.baseMiddleApi(`${Config.MDDILEWARE_API_URL}/auth/login`, "POST", params, null, (err, res) => {
      if (err == null) {
        console.log("success!");
      }
      cb(err, res);
    });
  },

  createTransaction(params, authToken, cb){
    this.baseMiddleApi(`${Config.MDDILEWARE_API_URL}/unisot/tx`, "POST", params, authToken, (err, res) => {
      if (err == null) {
        console.log("success!");
      }
      cb(err, res);
    });
  }
};
