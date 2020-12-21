var mTimer = null;
var count = 1;
var clipboardText = "总结一下2020吧！\n----------\n";

// 判断是否为移动端
function isMobile() {
    var u = navigator.userAgent;
    // 和服务端index.wsgi保持一致：userAgent.find('iPhone')!=-1 or userAgent.find('Android')!=-1 or userAgent.find('iPad')!=-1:
    var isMobile = u.indexOf('Android') > -1 || u.indexOf('iPhone') > -1 || u.indexOf('iPad') > -1;
    return isMobile;
}

// 判断是否为隐藏(css)样式
function isHide(obj) {
    var ret = obj.style.display === "none" ||  
        obj.style.display === "" ||  
        (obj.currentStyle && obj.currentStyle === "none") ||
        (window.getComputedStyle && window.getComputedStyle(obj, null).display === "none") 
    return ret;
}

function openPost(str) {
    // https://m.okjike.com/originalPosts/5c271c73698927001794e5a3?username=7AB42093-406C-46EC-854E-75CEF51CC236
    var targetUrl = "https://m.okjike.com/originalPosts/"+str;
    window.open(targetUrl);
}

function middleWindow(ele) {
    // screen width and height
    var cHeight = document.documentElement.clientHeight || document.body.clientHeight;
    var cWidth = document.documentElement.clientWidth || document.body.clientWidth;
    var defaultLeft=(cWidth-ele.offsetWidth)/2;
    var defaultTop=(cHeight-ele.offsetHeight)/2;
    // scroll distance
    var scrollLeft = document.documentElement.scrollLeft || document.body.scrollLeft;
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    ele.style.left = defaultLeft + scrollLeft + "px";
    ele.style.top = defaultTop + scrollTop + "px";
}

function showMsg() {
    var guoguoMsg = [
        "🐱 果果来陪陪你吧！",
        "🐮 新年有什么愿望呢？",
        "👍 nb！ nb！ nb！ ",
        "🐱 果果也有个新年愿望",
        "🐱 就是一切都要好起来",
        "🐱 今年发生了好多事情",
        "😸 大家都陪我挺过来了",
        "🐱 即刻镇有你们",
        "🐱 这些可爱的人",
        "🐱 可真是太好了！",
        "🐱 你可真是个动态黑洞啊",
        "🐱 都快超过鸡腿了",
        "🙀 人家2076条动态",
        "🙀 被ppp了14万次",
        "🐱 如果你比她多的话",
        "🐱 请联系摆柿阔落改文案",
        "🐈 正好那就",
        "🐈 来介绍一下摆柿阔落吧",
        "🐈 非典型产品经理",
        "🐈 居然喜欢写代码",
        "🐈 刚和女朋友领证",
        "🐈 谢谢大家对他的支持",
        "🙀 字幕坚持不住了",
        "🙀 马上就要从头开始啦！",
        "🙀 once again~"
    ];
    var loadingMsg = [
        ".",
        "..",
        "...",
        "....",
        ".....",
        "......"
    ];

    var mask_msg = document.getElementById("mask_msg");
    
    if (isMobile()) mask_msg.style.display = "inline";
    else mask_msg.style.display = "flex";

    // middle after display
    middleWindow(mask_msg);

    // var count = 1;
    count = 1;
    var mask_msg_title = document.getElementById("mask_msg_title");
    var mask_msg_text = document.getElementById("mask_msg_text");
    mTimer = window.setInterval(function(){
        mask_msg_title.innerText = "正在读取你的2020"+loadingMsg[parseInt(count/1)%loadingMsg.length];
        mask_msg_text.innerText = guoguoMsg[parseInt(count/3)%guoguoMsg.length];
        count = count + 1;
    },1000);
    
}

function showMask() {
    //disable button
    $("#btn1").attr({"disabled":"disabled"});

    var mask_bg = document.getElementById("mask_bg");
    mask_bg.style.width = document.body.scrollWidth+"px";
    mask_bg.style.height = document.body.scrollHeight+"px";
    mask_bg.style.display = "inline";
}

function showAlert(msg) {
    showMask();
    
    var alert_msg = document.getElementById("alert_msg");
    
    if (isMobile()) alert_msg.style.display = "inline";
    else alert_msg.style.display = "flex";

    middleWindow(alert_msg);

    var alert_msg_text = document.getElementById("alert_msg_text");
    alert_msg_text.innerText = msg;
}

function showImg() {
    var down_img = document.getElementById("down_img");

    if (isMobile()) {
        down_img.style.display = "inline";
        // middle after display
        middleWindow(down_img);
    } 
}

function showGuide() {
    var guide = document.getElementById("guide");
    guide.style.display = "inline";
    // dismiss after 5s
    window.setTimeout(function () {
        guide.style.display = "none";
    }, 5000);
}

function dismissGuide() {
    var guide = document.getElementById("guide");
    guide.style.display = "none";
}

function dismissMsg() {
    var mask_msg_title = document.getElementById("mask_msg_title");
    var mask_msg_text = document.getElementById("mask_msg_text");
    mask_msg_title.innerText = "正在读取你的2020.";
    mask_msg_text.innerText = "🐱 果果来陪陪你吧！";

    var mask_msg = document.getElementById("mask_msg");
    mask_msg.style.display = "none";

    window.clearInterval(mTimer);  
}

function dismissAlert() {
    var alert_msg_text = document.getElementById("alert_msg_text");
    alert_msg_text.innerText = "[ 这是错误原因 ]";

    var alert_msg = document.getElementById("alert_msg");
    alert_msg.style.display = "none";
}

function dismissImg() {
    var down_img = document.getElementById("down_img");
    down_img.style.display = "none";
}

function dismissMask() {
    //enable button
    $("#btn1").removeAttr("disabled");

    var mask_bg = document.getElementById("mask_bg");
    mask_bg.style.display = "none";
}

function dismissAll() {
    dismissMask();
    dismissMsg();
    dismissAlert();
    dismissImg();
}

function downloadImg() {
    dismissGuide();

    // 拷贝到剪切板
    new ClipboardJS('#btn2', {
        text: function(trigger) {
            return clipboardText
        }
    });
    
    if (isMobile()) {
        showMask();

        var targetImg = document.getElementById("target_img");
        
        var u = navigator.userAgent;
        var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1;
        var isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
        //if (isAndroid) {
            var node = document.getElementById("best-nine-canvas");

            domtoimage.toPng(node)
                .then(function (dataUrl) {
                    targetImg.src = dataUrl;
                })
                .catch(function (error) {
                    console.error('oops, something went wrong!', error);
            });
        //}
        // if (isIOS) {
        //     html2canvas(document.querySelector("#best-nine-canvas"),{useCORS:true,logging:true}).then(canvas => {
        //         let base64ImgSrc = canvas.toDataURL("image/png")
        //         targetImg.src = base64ImgSrc;
        //     });
        // }
        showImg();
    } else { // if PC
        var finalBadge = document.getElementById("best-nine-canvas");
        domtoimage.toPng(finalBadge).then(function(blob) {
            window.saveAs(blob, "jike-best-nine.png");
        });
    }
}

function bindData(id,str,type="innerText") {
    var temp = document.getElementById(id);
    switch(type)
    {
    case "src":
        temp.src = str;
        break;
    case "style":
        temp.style = str;
        break;
    case "best-nine":
        var img = new Image();
        img.src = str;
        // cache or not
        if (img.complete) {
            if (img.width >= img.height) {
                temp.style.background = "url(" + str + ") center center/auto 100% no-repeat border-box border-box";
            } else {
                temp.style.background = "url(" + str + ") center center/100% auto no-repeat border-box border-box";
            }
        } else {
            img.onload = function () {
                if (img.width >= img.height) {
                    temp.style.background = "url(" + str + ") center center/auto 100% no-repeat border-box border-box";
                } else {
                    temp.style.background = "url(" + str + ") center center/100% auto no-repeat border-box border-box";
                }
            };
        }
        break;
    default:
        temp.innerText = str;
    }
}

function getBestNine() {
    showMask();
    showMsg();

    clipboardText = "总结一下2020吧！\n----------\n";
    
    var username = document.getElementById("input-name");
    if (username.value=="") {
        dismissAll();
        showAlert("没有收到你的昵称！");
        return;
    }

    $.ajax({
        url: "https://kuoluo.applinzi.com/jike/getBestNine/"+username.value,
        async: true,
        type: "GET",
        data: {},
        error: function(XMLHttpRequest, textStatus, errorThrown) {
            Raven.captureException(errorThrown);
            console.log(errorThrown);
            dismissAll();
            showAlert("服务挂啦！截图 @摆柿阔落 出来挨打！--> " + errorThrown);
            return;
        },
        success: function (result) {
            //result = localData;
            if (result.SUCCESS==false) {
                dismissAll();
                showAlert(result.errorDesc);
                return;
            }
            // bind data to html
            bindData("user-avatar-image",result.UserInfo.avatarImage,"src");
            bindData("user-name",result.UserInfo.screenName);
            // bindData("user-like-info","在过去的一年里，有"+result.UserInfo.statsCount.followed+"人为你👏👏👏"+result.UserInfo.statsCount.liked+"次");
            bindData("user-like-info","在过去的一年里，大家为你的"+result.totalPosts+"条动态👏👏👏"+result.totalLikeCount+"次");

            // 2018年度逻辑：用户未认证时，使用medal
            // if (!result.UserInfo.isVerified) {
            //     if (JSON.stringify(result.UserInfo.medals) == '[]') {
            //         bindData("verify-icon","https://cdn.jellow.site/resources/userProfile/medal_jike_parnter.png","src");
            //         bindData("verify-message","一位透明的小同学");
            //     } else {
            //         bindData("verify-icon",result.UserInfo.medals[0].picUrl,"src");
            //         bindData("verify-message",result.UserInfo.medals[0].name.toString().replace("“", "「").replace("”", "」"));
            //     }
            // } else {
            //     bindData("verify-icon",result.UserInfo.verifyIcon,"src");
            //     bindData("verify-message",result.UserInfo.verifyMessage);
            // }
            // 2020年度逻辑：使用bio
            if (result.UserInfo.bio && result.UserInfo.bio!=-1) {
                var bioText = result.UserInfo.bio.toString().split("\n")[0];
                if (bioText.length>20) {
                    bioText = bioText.substring(0,20) + "..."
                }
                bindData("verify-message",bioText);
            }

            for (var i=0;i<9;i++)
            {
                bindData("pic-"+(i+1).toString(),result.BestNine[i].Url,"best-nine");
                var tempImg = document.getElementById("pic-"+(i+1).toString());
                tempImg.setAttribute("postid",result.BestNine[i].Id);
                // 剪贴板内容构建
                clipboardText = clipboardText + "[" + (i+1).toString() + "] https://m.okjike.com/originalPosts/" + result.BestNine[i].Id.toString() + "\n";
            }         
            // success!
            dismissAll();
            showGuide();
            return;   
        }
    }); 
}
