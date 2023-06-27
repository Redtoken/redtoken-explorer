
class Config {
    constructor() {
        this.EWALLET_API_URL = "http://153.112.160.162:9000/api/unisot" 
        this.MDDILEWARE_API_URL = "http://ec2-54-167-81-188.compute-1.amazonaws.com:3000" 
        this.API_KEY = "aws-redtoken-middleware"
    }
}

export default (new Config);
