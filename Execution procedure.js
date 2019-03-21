let 封装API = require(engines.myEngine().cwd() +"/封装API.js");
//叔叔不约滑块类型captchaType:1318
if(!requestScreenCapture()){
    toast("请求截图失败");
    exit();
}
全局变量();
launchApp("猎豹浏览器分身");
封装API.等待(1000,2000);
封装API.text("允许").click();
封装API.text("跳过").click();
进入叔叔不约();
for(let a=1;a<999;a++){
    重新开始参数 = 0;
    log("聊天循环===>"+a)
    if(账号参数 == "账号已死"){
        删除分身APP();
        多开分身();
        制作分身();
        进入叔叔不约();
        账号参数 = "新账号";
    }
    开始聊天();
    if(聊天判断 != "对方离开了"){
        输入微信号();
    }
    if(重新开始参数>=5){
        进入叔叔不约();
    }
}
function 全局变量(){
    账号参数 = 0;
    接码成功 = 0;
    接码数量 = 0;
    获取号码参数 = 0;


    var i = 0;
    var 同步参数 = [];
    套路回复 = [];
    var 读取文本 = files.read("/sdcard/叔叔不约话术.txt");
    var 分割文本=读取文本.split("\n");
    分割文本.forEach(element => {
        log(element);
        同步参数[i] = element;
        i++;
    });
    var 话术1 = 同步参数[0];
    var 话术2 = 同步参数[1];
    var 话术3 = 同步参数[2];
    套路回复[1] = 话术1.split("|");
    套路回复[2] = 话术2.split("|");
    套路回复[3] = 话术3.split("|");


    var i = 0;
    var 同步参数 = [];
    var 读取文本 = files.read("/sdcard/叔叔不约参数.txt");
    var 分割文本=读取文本.split("\n");
    分割文本.forEach(element => {
        log(element);
        同步参数[i] = element;
        i++;
    });
    微信1 = 同步参数[0];
    微信2 = 同步参数[1];
    微信3 = 同步参数[2];
    易码账号 = 同步参数[3];
    易码密码 = 同步参数[4];
    联众账号 = 同步参数[5];
    联众密码 = 同步参数[6];
}
function 超级点击(变量){
        if(desc(变量).exists()==true){封装API.desc(变量).click()}
        else if(text(变量).exists()==true){封装API.text(变量).click()}
}
function 进入叔叔不约(){
    获取号码参数 = 0
    for(let a=0;a<12;a++){
        sleep(5000)
        if(text("允许").exists()==true){
            封装API.text("允许").click();
        }
        if(text("菜单").exists()==true){
            封装API.text("允许").click();
            break;
        }
        if(id("aks").exists()==true){
            封装API.id("aks").click()
            break;
        }
        if(id("a06").exists()==true){
            封装API.id("a06").click();
            break;
        }
    }
    封装API.等待(500,1000)
    if(text("允许").exists()==true){
        封装API.text("允许").click();
    }
    封装API.等待(500,1000)
    if(text("允许").exists()==true){
        封装API.text("允许").click();
    }
    封装API.id("a06").click();
    封装API.id("aks").click()
    封装API.id("lh").click()
    if(text("立即提速").exists()==true){
        封装API.id("alh").click()
    }
    封装API.等待(1000,2000)
    setText("http://www.unclenoway.com/#")
    封装API.text("前往").click()
    for(let a=0;a<10;a++){
        if(text("听花开的树洞服务号").exists()==true||desc("听花开的树洞服务号").exists()==true){
            封装API.id("a06").click();
            封装API.等待(1000,2000)
            进入叔叔不约()
            break;
        } 
        else if(text("开始聊天").exists()==true||desc("开始聊天").exists()==true){
            封装API.等待(1000,2000)
            超级点击("女生")
            封装API.等待(1000,2000)
            封装API.press(500,1540,500)
            封装API.等待(1000,2000)
            超级点击("开始聊天")
            break;
        } 
        else if(textContains("由于用户多次举报").exists()==true||descContains("由于用户多次举报").exists()==true){
            账号参数 = "账号已死"
            break;
        }                                                                                                                                                                                                
        else{
            console.log("没有找到开始聊天控件...");
            sleep(1000)
        }
    }
    for(let a=0;a<6;a++){
        sleep(5000)
        if(text("听花开的树洞服务号").exists()==true||desc("听花开的树洞服务号").exists()==true){
            封装API.id("a06").click();
            封装API.等待(1000,2000)
            进入叔叔不约()
            break;
        } 
        else if(text("点击获取").exists()==true||desc("点击获取").exists()==true){
            易码API = require('./易码API');
            登陆 = 易码API.登陆(易码账号,易码密码);
            sleep(500)
            获取号码 = 易码API.获取号码(登陆,"17968");
            获取号码参数 = 1
            log(获取号码)
            sleep(500)
            text("手机号").setText(获取号码)//手机号码
            sleep(500)
            封装API.text("点击获取").click();
            封装API.desc("点击获取").click();
            sleep(500)
            text("密码(至少需要6位)").setText("abcd1995")//密码
            sleep(500)
            break;
        }
        //||textContains("输入信息").exists()==true不可用
        if(text("反馈问题").exists()==true){
            break
        }
        if(desc("拖动下方滑块完成拼图").exists()==true||text("拖动下方滑块完成拼图").exists()==true){
            接码模块()
        }
        else{超级点击("点击完成验证")}
    }
    for(let a=0;a<10;a++){
        sleep(6000)
        //textContains("输入信息").exists()==true不可用
        if(text("反馈问题").exists()==true){
            log("找到反馈问题...")
            break
        }
        else if(textContains("不可以开多个浏览器").exists()==true||descContains("不可以开多个浏览器").exists()==true){
            超级点击("确定")
            break;
        }
        if(textContains("由于实名制要求").exists()==true||descContains("由于实名制要求").exists()==true){
            log("找到由于实名制要求...")
            获取验证码 = 易码API.获取验证码(登陆,"17968",获取号码);
            if(获取验证码=="获取验证码失败"){toastLog(获取验证码)}
            else if(获取验证码=="3001"){获取验证码 = 易码API.获取验证码(登陆,"17968",获取号码)}
            else{break;}
        }
    }
    //textContains("输入信息").exists()==true不可用
    if(text("反馈问题").exists()==true){
        log("找到反馈问题控件...")
    }
    else if(textContains("不可以开多个浏览器").exists()==true||descContains("不可以开多个浏览器").exists()==true){
        log("找到不可以开多个浏览器...")
        超级点击("确定")
    }
    else{
        if(获取号码参数==1){
            toastLog(获取验证码)
            if(获取验证码=="获取验证码失败"){
                log("获取验证码失败,开始释放号码...")
            }
            else if(获取验证码=="3001"){
                toastLog("获取验证码3001")
                封装API.id("a06").click();
                封装API.等待(1000,2000)
                进入叔叔不约()
            }
            else{
                log("获取验证码成功,开始释放号码...")
                验证码 = 获取验证码.replace(/[^0-9]/ig,"");
                验证码 = 验证码.replace(/[^0-9]/ig,"");//筛选出内容里面的所有数字
                验证码 = 验证码.substr(0,4)//截取字符串从0位开始到第三位
                text("手机验证码").setText(验证码)//验证码
                超级点击("确认")
            }
        }
    }
}
function 开始聊天(){
    聊天判断 = 0
    回复等待时长 = 9
    变量A = 1
    聊天内容=[]
    for(let b=1;b<4;b++){
        回复参数 = 0
        时间变量 = 0
        请稍等参数 = 0
        sleep(2000)
        超级点击("开始聊天")
        if(text("立即提速").exists()==true){
            封装API.id("alh").click()
        }
        if(text("窗口").id("bku").exists()==true){
            log("找到浏览器窗口空控件...").
            封装API.id("a06").click();
            封装API.等待(1000,2000)
            进入叔叔不约()
            break;
        }
        if(textContains("由于用户多次举报").exists()==true||descContains("由于用户多次举报").exists()==true){
            log("找到由于用户多次举报...")
        }
        if(textContains("由于实名制要求").exists()==true||descContains("由于实名制要求").exists()==true){
            log("找到由于实名制要求...")
            封装API.id("a06").click();
            封装API.等待(1000,2000)
            进入叔叔不约()
        }
        for(let a=0;a<12;a++){
            if(textContains("请稍等").exists()==true||descContains("请稍等").exists()==true){
                sleep(6000)
                请稍等参数++
                if(请稍等参数>=10){
                    log("长时间在请稍等页面...").
                    封装API.id("a06").click();
                    封装API.等待(1000,2000)
                    进入叔叔不约()
                    break;
                }
            }
            else{sleep(20)}
        }
        if(desc("拖动下方滑块完成拼图").exists()==true||text("拖动下方滑块完成拼图").exists()==true){接码模块()}
        else{超级点击("点击完成验证")}
        if(聊天判断 == "对方离开了"){
            超级点击("离开")
            超级点击("验证")
            sleep(1000)
            超级点击("确定")
            sleep(2000)
            超级点击("重新开始")
            sleep(1000)
            break;
        }
        if(text("反馈问题").exists()==true||desc("反馈问题").exists()==true){
            log("找到反馈问题...")
            超级点击("离开")
            超级点击("验证")
            超级点击("重新开始")
        }
        if(desc("拖动下方滑块完成拼图").exists()==true||text("拖动下方滑块完成拼图").exists()==true){
            break;
        }
        if(账号参数 == "账号已死"){
            break;
        }
        固定时间回复(b)
    }
}
function 输入微信号(){
    sleep(9000)
    setText(微信1)
    sleep(1000)
    超级点击("发送")
    sleep(1000)
    setText(微信2)
    sleep(1000)
    超级点击("发送")
    sleep(1000)
    setText(微信3)
    sleep(1000)
    超级点击("发送")
    toastLog("输入微信号结束...")
    sleep(6000)
    超级点击("离开")
    超级点击("验证")
    sleep(1000)
    超级点击("确定")
    sleep(2000)
    超级点击("重新开始")
    sleep(1000)
}
function 固定时间回复(变量){
    for(let a=0;a<回复等待时长;a++){
        sleep(1000)
        时间变量++
        if(desc("拖动下方滑块完成拼图").exists()==true||text("拖动下方滑块完成拼图").exists()==true){
            接码模块()
        }
        else{超级点击("点击完成验证")}
        /*if(text("开始聊天").exists()==true||desc("开始聊天").exists()==true){
            封装API.等待(1000,2000)
            超级点击("女生")
            封装API.等待(1000,2000)
            封装API.press(500,1540,500)
            封装API.等待(1000,2000)
            超级点击("开始聊天")
        }*/
        if(text("听花开的树洞服务号").exists()==true||desc("听花开的树洞服务号").exists()==true){
            封装API.id("a06").click();
            封装API.等待(1000,2000)
            进入叔叔不约()
        }
        if(textContains("不可以开多个浏览器").exists()==true||descContains("不可以开多个浏览器").exists()==true){
            超级点击("确定")
        }
        if(text("确定离开?").exists()==true||desc("确定离开?").exists()==true){
            超级点击("取消")
        }
        if(text("分享设置").exists()==true||desc("分享设置").exists()==true){
            超级点击("关闭")
            }
        if(desc("重新开始").exists()==true||text("重新开始").exists()==true){
            超级点击("重新开始")
            重新开始参数++
        }
        if(重新开始参数>=10){
            log("连续找到重新开始控件,判断为页面卡住")
            break;
        }
        c = 0
        聊天 = className("android.view.View").clickable(false).depth(19).find()
        聊天.forEach(element => {
            if(element.text()!=null&element.text()!=""){
                聊天内容[c] = element.text()
                c++
                if(element.text()=="对方离开了。"){
                    log("对方离开了...")
                    聊天判断 = "对方离开了"
                }
                if(desc("重新开始").exists()==true||text("重新开始").exists()==true){
                    超级点击("重新开始")
                }
                if(textContains("由于用户多次举报").exists()==true||descContains("由于用户多次举报").exists()==true){
                    账号参数 = "账号已死"
                }
            }
        });
        消息 = 聊天内容[c-1]
        if(消息==null){
            c = 0
            聊天 = className("android.view.View").clickable(true).depth(18).find()
            聊天.forEach(element => {
                if(element.text()!=null&element.desc()!=""){
                    聊天内容[c] = element.desc()
                    c++
                    if(element.desc()=="对方离开了。"){
                        log("对方离开了...")
                        聊天判断 = "对方离开了"
    
                    }
                    if(desc("重新开始").exists()==true||text("重新开始").exists()==true){
                        超级点击("重新开始")
                    }
                    if(textContains("由于用户多次举报").exists()==true||descContains("由于用户多次举报").exists()==true){
                        账号参数 = "账号已死"
                    }
                }
            });
            消息 = 聊天内容[c-1]
        }
        log("获取的消息为===>"+消息)//最后一条消息内容
        if(消息=="请进行验证~"){
            接码模块()
        }
        if(聊天判断 == "对方离开了"){
            break;
        }
        if(账号参数 == "账号已死"){
            break;
        }
        if(时间变量==回复等待时长-1){
            setText(套路回复[变量][random(0,套路回复[变量].length-1)])
            sleep(500)
            超级点击("发送")
            超级点击("留步")
        }

    } 
}
function 套路回复功能A(变量){
    for(let a=0;a<回复等待时长;a++){
        sleep(2000)
        log("A等待时长===>"+a)
        找到消息变量=0
        if(textContains("不可以开多个浏览器").exists()==true||descContains("不可以开多个浏览器").exists()==true){
            超级点击("确定")
        }
        if(text("确定离开?").exists()==true||desc("确定离开?").exists()==true){
            超级点击("取消")
        }
        if(text("分享设置").exists()==true||desc("分享设置").exists()==true){
            超级点击("关闭")
            }
        c = 0
        聊天 = className("android.view.View").clickable(false).depth(19).find()
        聊天.forEach(element => {
            if(element.text()!=null&element.text()!=""){
                聊天内容[c] = element.text()
                c++
                if(element.text()=="对方离开了。"){
                    log("对方离开了...")
                    聊天判断 = "对方离开了"

                }
                if(desc("重新开始").exists()==true||text("重新开始").exists()==true){
                    超级点击("重新开始")
                }
            }
        });
        消息 = 聊天内容[c-1]
        if(消息==null){
            c = 0
            聊天 = className("android.view.View").clickable(true).depth(18).find()
            聊天.forEach(element => {
                if(element.text()!=null&element.desc()!=""){
                    聊天内容[c] = element.desc()
                    c++
                    if(element.desc()=="对方离开了。"){
                        log("对方离开了...")
                        聊天判断 = "对方离开了"
    
                    }
                    if(desc("重新开始").exists()==true||text("重新开始").exists()==true){
                        超级点击("重新开始")
                    }
                }
            });
            消息 = 聊天内容[c-1]
        }
        log("获取的消息为===>"+消息)//最后一条消息内容
        if(聊天判断 == "对方离开了"){
            break;
        }
        if(消息!=null){
            套路回复[变量].forEach(element => {
                if(消息.indexOf(element) != -1 ){
                       找到消息变量 = 1
                       log("找到自己的消息"+a)//找到了自己的消息
                } 
            });
        }
        if(找到消息变量 != 1){
            setText(套路回复[变量][random(0,套路回复[变量].length-1)])
            log("A===>"+套路回复[变量][random(0,套路回复[变量].length-1)])
            sleep(400)
            超级点击("发送")
            超级点击("留步")
            回复变量 = 1
            break;
        }
    } 
}
function 套路回复功能B(变量){
    for(let a=0;a<回复等待时长;a++){
        sleep(2000)
        log("B等待时长===>"+a)
        找到消息变量=0
        if(textContains("不可以开多个浏览器").exists()==true||descContains("不可以开多个浏览器").exists()==true){
            超级点击("确定")
        }
        if(text("确定离开?").exists()==true||desc("确定离开?").exists()==true){
            超级点击("取消")
        }
        if(text("分享设置").exists()==true||desc("分享设置").exists()==true){
            超级点击("关闭")
            }
        c = 0
        聊天 = className("android.view.View").clickable(false).depth(19).find()
        聊天.forEach(element => {
            if(element.text()!=null&element.text()!=""){
                聊天内容[c] = element.text()
                c++
                if(element.text()=="对方离开了。"){
                    log("对方离开了...")
                    聊天判断 = "对方离开了"

                }
                if(text("重新开始").exists()==true){
                    超级点击("重新开始")
                }
            }
        });
        消息 = 聊天内容[c-1]//最后一条消息内容
        if(消息==null){
            c = 0
            聊天 = className("android.view.View").clickable(true).depth(18).find()
            聊天.forEach(element => {
                if(element.text()!=null&element.desc()!=""){
                    聊天内容[c] = element.desc()
                    c++
                    if(element.desc()=="对方离开了。"){
                        log("对方离开了...")
                        聊天判断 = "对方离开了"
    
                    }
                    if(desc("重新开始").exists()==true||text("重新开始").exists()==true){
                        超级点击("重新开始")
                    }
                }
            });
            消息 = 聊天内容[c-1]
        }
        log("获取的消息为===>"+消息)//最后一条消息内容
        if(聊天判断 == "对方离开了"){
            break;
        }
        if(消息!=null){
            套路回复[变量].forEach(element => {
                if(消息.indexOf(element) != -1 ){
                       找到消息变量 = 1
                       log("找到自己的消息"+a)//找到了自己的消息
                } 
            });
        }
        if(找到消息变量 != 1){
            setText(套路回复[变量+1][random(0,套路回复[变量+1].length-1)])
            log("B===>"+套路回复[变量+1][random(0,套路回复[变量+1].length-1)])
            sleep(400)
            超级点击("发送")
            超级点击("留步")
            回复变量 = 1
            break;
        }
    } 
}
function 多开分身(){
    sleep(1000)
    launchApp("多开分身")
    sleep(2000)
    封装API.text("允许").click();
    sleep(3000)
    var 多开分身添加变量 = 0       
    while(id("iv_btn_create").exists()!=true){
        log("没有找到添加分身的控件ID...,准备返回")
        sleep(1000)
        back();
        sleep(1000)
        if(text("电话").exists()==true){
            log("判断在主页面...,准备重新打开")
            launchApp("多开分身")
            sleep(1000)
            封装API.text("允许").click();
        }
        //N次循环都没有找到,重新打开多开分身
        多开分身添加变量++
        if(多开分身添加变量>30){
            this.返回主界面();
            launchApp("多开分身")
            sleep(1000)
            封装API.text("允许").click();
        }
    }
    封装API.id("iv_btn_create").click();
    for(let a=0;a<5;a++){
        sleep(1000)
        封装API.随机上滑()
        sleep(1000)
        if(text("猎豹浏览器").exists()==true){
            var 陌陌分身坐标 = text("猎豹浏览器").findOne(1000).parent().bounds()
            var X1 = 陌陌分身坐标.left
            var Y1 = 陌陌分身坐标.top
            var X2 = 陌陌分身坐标.right
            var Y2 = 陌陌分身坐标.bottom
            console.log(陌陌分身坐标);
            if(text("制作分身").boundsInside(X1,Y1,X2,Y2).exists() == true){
                let a =text("制作分身").boundsInside(X1,Y1,X2,Y2).findOne(1000);
                封装API.setView(a).click();
                break;
            }
            else{
                var 陌陌分身坐标 = text("猎豹浏览器").findOne(1000).parent().parent().bounds()
                var X1 = 陌陌分身坐标.left
                var Y1 = 陌陌分身坐标.top
                var X2 = 陌陌分身坐标.right
                var Y2 = 陌陌分身坐标.bottom
                if(text("制作分身").boundsInside(X1,Y1,X2,Y2).exists() == true){
                    let a =text("制作分身").boundsInside(X1,Y1,X2,Y2).findOne(1000);
                    封装API.setView(a).click();
                    break;
                }
            }
        }
    }
    sleep(1000)
}
function 制作分身(){
    sleep(1000)
    while(text("开始制作").exists()!=true){
        this.返回主界面()
        this.多开分身()
    }
    封装API.text("去LOGO水印").click();
    sleep(500)
    封装API.text("高级选项").click();
    sleep(500)
    封装API.text("虚拟化SD卡").click();
    var 机型伪装坐标 = text("机型伪装").findOne(1000).parent().parent().bounds()
    var X1 = 机型伪装坐标.left
    var Y1 = 机型伪装坐标.top
    var X2 = 机型伪装坐标.right
    var Y2 = 机型伪装坐标.bottom
    if(text("设置").boundsInside(X1,Y1,X2,Y2).exists() == true){
        text("设置").boundsInside(X1,Y1,X2,Y2).findOne(1000).click();
    }
    sleep(1000)
    this.机型伪装设置();
    sleep(1000)
    var 虚拟位置坐标 = text("虚拟定位").findOne(1000).parent().parent().bounds()
    var X1 = 虚拟位置坐标.left
    var Y1 = 虚拟位置坐标.top
    var X2 = 虚拟位置坐标.right
    var Y2 = 虚拟位置坐标.bottom
    if(text("设置").boundsInside(X1,Y1,X2,Y2).exists() == true){
        text("设置").boundsInside(X1,Y1,X2,Y2).findOne(1000).click();
    }
    sleep(1000)
    this.虚拟定位设置();
    sleep(1000)
    if(text("开始制作").exists()==true){封装API.text("开始制作").click();}
    else{
        sleep(1000)
        home();
        sleep(1000)
        this.多开分身();
        this.制作分身();
        return
    }
    while(text("安装").exists()!=true){
        sleep(500);
    }
    for(let a=0;a<10;a++){
        sleep(1000)
        if(text("安装").exists()==true){
            封装API.text("安装").click();  
        }
        else{break;}
    }
    while(text("打开").exists()!=true){
        sleep(500);
    }
    封装API.text("打开").click();
    for(let a=0;a<12;a++){
        sleep(5000)
        if(text("允许").exists()==true){
            封装API.text("允许").click();
        }
        if(text("菜单").exists()==true){
            封装API.text("允许").click();
            break;
        }
    }
}
function 机型伪装设置(){
    地址位置 = Array("浙江嘉兴","浙江湖州","浙江杭州","浙江绍兴","浙江宁波","浙江丽水","浙江台州","浙江温州","浙江金华","浙江衢州","浙江舟山")
    封装API.id("spinnerBrand").click()
    sleep(1500)
    封装API.text("小米").click()
    sleep(1500)
    封装API.id("spinnerModel").click()
    sleep(1500)
    机型选择 = id("text1").find()
    if(机型选择!=null){id("text1").findOnce(random(0,8)).click();}
    else{
        sleep(1500)
        机型选择 = id("text1").find()
        id("text1").findOnce(random(0,8)).click();
    }
    sleep(1500)
    for(let a=0;a<5;a++){
        封装API.text("换一换").click()
        sleep(300)
    }
    封装API.text("启用机型伪装").click()
}
function 虚拟定位设置(){
    sleep(1000);
    if(text("请打开GPS").exists()==true){
        back();
        sleep(500)
    }
    封装API.id("tv_search").click()
    sleep(1000)
    setText(地址位置[random(0,地址位置.length-1)]+"中学")
    for(let a=0;a<15;a++){
        sleep(1000)
        封装API.text("搜索").click();
        sleep(1000)
        if(text("搜索").exists() == true){
            var 定位地址 = className("TextView").clickable(false).find()
            if(定位地址==null){}
            else{
                封装API.setView(className("TextView").findOnce(random(0,18))).click();
                sleep(1000)
                if(text("定位到此").exists() == true){
                    封装API.text("定位到此").click()
                    break;
                }
            }
        } 
        else{sleep(1000)}  
    }
}
function 删除分身APP(){
    home()
    sleep(2000)
    launchApp("多开分身")
    sleep(2000)
    封装API.text("允许").click();
    sleep(3000)
    封装API.text("管理").click() 
    sleep(3000)
    封装API.text("清理缓存").click() 
    for(let a=0;a<5;a++){
        if(text("完成").exists()==true){
            封装API.text("完成").click() 
            break;
        }
        else{    sleep(3000)}
    }


    sleep(2000)
    封装API.text("删除分身").click() 
    sleep(2000)
    封装API.text("确定").click() 
    封装API.text("确定").click() 
    sleep(2000)
    home();

}
function 接码模块(){
    for(let a=0;a<10;a++){
        sleep(3000)
        if(desc("拖动下方滑块完成拼图").exists()==true||text("拖动下方滑块完成拼图").exists()==true){
            log("找到滑块,准备拼图...")
            接码成功 = 1
            滑块按钮 = className("android.view.View").idContains("tcaptcha_drag_button").packageName("com.ijinshan.browser_fast").findOne(1000)
            if(滑块按钮!=null){
                滑块按钮坐标 = 滑块按钮.bounds()
                var 滑块按钮坐标X1 = 滑块按钮坐标.left
                log(滑块按钮坐标X1)
                var 滑块按钮坐标Y1 = 滑块按钮坐标.top
                log(滑块按钮坐标Y1)
                if(滑块按钮坐标X1>="50"){
                    滑块 = className("Image").idContains("slideBg").findOne(1000)
                    if(滑块!=null){
                        滑块图片 = 滑块.bounds()
                        console.log(滑块图片);
                        var X1 = 滑块图片.left
                        var Y1 = 滑块图片.top
                        var X2 = 滑块图片.right
                        var Y2 = 滑块图片.bottom
                        var 联众打码API = require('./联众API');
                        var 联众打码api = new 联众打码API("kstd2016","Wentao1987223");
                        坐标 = 联众打码api.打码(X1,Y1,X2-X1,Y2-Y1,"1318");
                        if(坐标 != "打码失败"){
                            拼图坐标 = 坐标.split(",")
                            拼图坐标X = parseInt(拼图坐标[0])
                            拼图坐标Y = parseInt(拼图坐标[1])
                            log("拼图坐标X===>"+拼图坐标X);
                            log("拼图坐标Y===>"+拼图坐标Y)
                            sleep(1000)
                            var ra = new RootAutomator();
                            ra.swipe(滑块按钮坐标X1+10,滑块按钮坐标Y1+10,拼图坐标X+15,滑块按钮坐标Y1+10,2000)
                            sleep(1000)
                            ra.exit()
                        }
                    }
                }
                else{
                    log("2号方案")
                    滑块 = className("Image").idContains("slideBg").findOne(1000)
                    if(滑块!=null){
                        滑块图片 = 滑块.bounds()
                        console.log(滑块图片);
                        var X1 = 滑块图片.left
                        var Y1 = 滑块图片.top
                        var X2 = 滑块图片.right
                        var Y2 = 滑块图片.bottom
                        var 联众打码API = require('./联众API');
                        var 联众打码api = new 联众打码API("kstd2016","Wentao1987223");
                        坐标 = 联众打码api.打码(X1,Y1,X2-X1,Y2-Y1,"1318");
                        if(坐标 != "打码失败"){
                            拼图坐标 = 坐标.split(",")
                            拼图坐标X = parseInt(拼图坐标[0])
                            拼图坐标Y = parseInt(拼图坐标[1])
                            log("拼图坐标X===>"+拼图坐标X);
                            sleep(1000)
                            var ra = new RootAutomator();
                            ra.swipe(136,1279,拼图坐标X+15,1279,2000)
                            sleep(1000)
                            ra.exit()
                        }
                        else{
                            封装API.idCon("reload").click()//刷新按钮,更换图片
                        }
                    }
                }
            }
            else{封装API.idCon("reload").click()}
        }
        else{break;}
    }
}
