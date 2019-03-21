let 易码API = {
    登陆:function(账号,密码){
        var urls = http.get("http://api.fxhyd.cn/UserInterface.aspx?action=login&username="+账号+"&password="+密码)
        if(urls.statusMessage=="OK"){
            获取token = urls.body.string().split("|")
            token = 获取token[1]
            return token
        }
        else{
            toastLog("登陆失败！\n原因："+urls.statusMessage)
            return "登陆失败"
        }
    },
    获取号码:function(token,项目编号){ 
        var urls = http.get("http://api.fxhyd.cn/UserInterface.aspx?action=getmobile&token="+token+"&itemid="+项目编号)
        if(urls.statusMessage=="OK"){
            toastLog("获取号码成功...")
            string = urls.body.string().split("|")
            手机号码 = string[1]
            return 手机号码
        }
        else{
            toastLog("登陆失败！\n原因："+urls.statusMessage)
            return "获取号码失败"
        }
    },
    获取验证码:function(token,项目编号,手机号码){  
        var urls = http.get("http://api.fxhyd.cn/UserInterface.aspx?action=getsms&token="+token+"&itemid="+项目编号+"&mobile="+手机号码+"&release=1")
        if(urls.statusMessage=="OK"){
            验证码 = urls.body.string()
            return 验证码
        }
        else{
            toastLog("登陆失败！\n原因："+urls.statusMessage)
            return "获取验证码失败"
        }
    },
}
module.exports = 易码API
