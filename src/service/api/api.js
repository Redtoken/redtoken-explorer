import Config from "./config";

export default {

  async baseApi(sub_url, method, json_data, cb) {
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
      const base_url = Config.API_URL;
      let response = await fetch(base_url + sub_url, request);
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
    this.baseApi(`/transactions?pageNum=${params.page}&pageSize=${params.pageSize}`, "GET", {}, (err, res) => {
      if (err == null) {
        console.log("success!");
      }
      cb(err, res);
    });
  },
};
