var md5 = require('../md5.js');
var salt = "123456";
const server = "http://81.70.201.7:9205";                
const WxLoginUrl = server + "/user/wx_login";
const UpdateUserInfoUrl = server + "/user/update_userInfo";
export default function WxPostRequest(url, header, data ,successFunc, requestFailFunc, responseFailFunc) {

    console.log("*********",url,": *********");   
    let reqDataJsonString = JSON.stringify(data);
    let temp_data = {
        "data": reqDataJsonString,
        "sign": md5.hexMD5(salt + reqDataJsonString + salt), 
    }
    wx.request({
        url: url,
        header: header,
        // data: data,
        data: temp_data,
        method: 'POST',
        success: function (res) {
            console.log("##",temp_data," is request data in hook/wxPostRequest");
            console.log(header,"请求返回的值: ",res);
            if (res.data.Success) {
                console.log(url + ": success");
                if (successFunc) {
                    successFunc(res.data)
                }
            } else {
                console.log(url + ": response fail, msg: " + res.data.Message);
                if (responseFailFunc) {
                    responseFailFunc()
                }
            }
        },
        fail: function () {
            console.log(url + ": request fail in hook/wxPostRequest");
            if (requestFailFunc) {
                requestFailFunc()
            }
        }
    })
    // return WxPostRequest;
}
