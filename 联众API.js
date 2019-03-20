let 联众打码API = function(用户,密码){
    this.打码 = function(a,b,c,d,图像类型ID){
        base64 = this.getImgBase64(a,b,c,d)
        var urls = http.postJson("https://v2-api.jsdama.com/upload", {
            softwareId: "13153",  //软件ID
            softwareSecret: "oAQ8tQRwJTcp6uog0oBxIXvX4DpIJuaZykPQgdoh",  //软件密钥
            username: 用户,
            password: 密码,
            captchaData: base64,
            captchaType: 图像类型ID,
            captchaMinLength: 1,
            captchaMaxLength: 1,
        });
        坐标 = urls.body.json().data.recognition.toString()
        return 坐标
        
        /*else{
            log(urls.body.json().message)
            return "打码失败"
        }*/
    }
    this.getImgBase64 = function(a,b,c,d){
        clip = images.clip(captureScreen(),a,b,c,d);
        return images.toBase64(clip);
    } 
}
module.exports = 联众打码API
