var localData = {
    "BestNine": [
        {
        "Url": "https://cdn.ruguoapp.com/FlDJf1DHaxcHY53qgb-gXie59cT_.png?imageMogr2/auto-orient/thumbnail/1611000@", 
        "Id": "5c23cc92248d57001130a998", 
        "LikeCount": "459"
        }, 
        {
        "Url": "https://cdn.ruguoapp.com/FgnTsVHPN8-EDi6qKLR3Y5sGhSfq.jpg?imageMogr2/auto-orient/thumbnail/921600@", 
        "Id": "5bfe9526447b2900104b9bc6", 
        "LikeCount": "138"
        }, 
        {
        "Url": "https://cdn.ruguoapp.com/FoxkNeISN858WTraFDqt0I0L6r6c.jpg?imageMogr2/auto-orient/thumbnail/1599750@", 
        "Id": "5c244b29b4c09400101d730d", 
        "LikeCount": "126"
        }, 
        {
        "Url": "https://cdn.ruguoapp.com/Fmmn4NwjWCXi_KtU5kYPYmoFm4FT.jpg?imageMogr2/auto-orient/thumbnail/1265625@", 
        "Id": "5c24f103ee84be001748d446", 
        "LikeCount": "98"
        }, 
        {
        "Url": "https://cdn.ruguoapp.com/FiBGYxkFyr7SaMPQIJgdQEy4OMYr.jpg?imageMogr2/auto-orient/thumbnail/1085625@", 
        "Id": "5c038c77021d970016372e31", 
        "LikeCount": "56"
        }, 
        {
        "Url": "https://cdn.ruguoapp.com/FvPkmbzPM5oXBOOoG8BshibotYKg.jpg?imageMogr2/auto-orient/thumbnail/2250000@", 
        "Id": "5c20dea58ec50400113f648a", 
        "LikeCount": "38"
        }, 
        {
        "Url": "https://cdn.ruguoapp.com/Ft_c5py3cahAdNI8kIenhIvuVFgQ.jpg?imageMogr2/auto-orient/thumbnail/516375@", 
        "Id": "5c09d7a4902fc500172d4a0a", 
        "LikeCount": "31"
        }, 
        {
        "Url": "https://cdn.ruguoapp.com/FrrwSwr5z-Ns-3RavpnChH7leFoX.jpg?imageMogr2/auto-orient/thumbnail/2812500@", 
        "Id": "5c1e333e3086110011781326", 
        "LikeCount": "28"
        }, 
        {
        "Url": "https://cdn.ruguoapp.com/FobiO0cWFhq6glE8GHoxkik3Enp3.jpg?imageMogr2/auto-orient/thumbnail/1265625@", 
        "Id": "5c0a6f788634c5001718df52", 
        "LikeCount": "18"
        }
    ], 
    "UserInfo": {
        "username": "7AB42093-406C-46EC-854E-75CEF51CC236", 
        "bio": "\u24bf\u74e6\u6041 \u7b49\u4eba\u90fd\u5728\u5173\u6ce8\u4ed6\n\u4e3b\u673a\u6e38\u620f\u8d44\u6d45\u73a9\u5bb6 / \u5f71\u89c6\u5185\u5bb9\u91cd\u5ea6\u6d88\u8d39\u8005", 
        "verifyIcon": "https://cdn.ruguoapp.com/jike-web/static/images/verified.6e5b91e.svg", 
        "registerTime": 234, 
        "medals": [
        {
            "url": "https://h5.okjike.com/partner-fe/#/", 
            "gotMedalAt": "2018.09.01", 
            "picUrl": "https://cdn.ruguoapp.com/resources/userProfile/medal_jike_parnter.png", 
            "name": "\u5373\u523b\u5408\u4f19\u4eba"
        }
        ], 
        "avatarImage": "https://cdn.ruguoapp.com/FgK0lsTdobo1uEvn2xMSWFKjo3yH.jpg?imageView2/0/w/300/h/300/q/100!", 
        "verifyMessage": "", 
        "statsCount": {
        "following": 159, 
        "liked": 1860, 
        "editorPicked": 8, 
        "followed": 523
        }, 
        "isVerified": false, 
        "screenName": "\u6446\u67ff\u9614\u843d"
    }, 
    "SUCCESS": true
}

var mTimer = null;
var count = 1;

// 判断是否为隐藏(css)样式
function isHide(obj) {
    var ret = obj.style.display === "none" ||  
        obj.style.display === "" ||  
        (obj.currentStyle && obj.currentStyle === "none") ||
        (window.getComputedStyle && window.getComputedStyle(obj, null).display === "none") 
    return ret;
}

function showMask() {
    //disable button
    $("#btn1").attr({"disabled":"disabled"});

    var guoguoMsg = [
        "🐱 果果来陪陪你吧！",
        "🐷 新的一年 有什么愿望呢？",
        "👍 nb！ nb！ nb！ ",
        "🐱 果果也有个新年愿望",
        "😹 你们不要再打瓦恁了",
        "🐱 好不好~",
        "😸 你答应了！",
        "🐱 即刻镇有你们",
        "🐱 这些可爱的人",
        "🐱 可真是太好了！",
        "🐱 你可真是个动态黑洞啊",
        "🐱 都快超过七个梦了",
        "🐈 对啦对啦",
        "🐈 来介绍一下摆柿阔落吧",
        "🐈 非典型产品经理",
        "🐈 喜欢女朋友 喜欢写代码",
        "🐈 谢谢大家对他的支持",
        "🙀 字幕坚持不住了",
        "🙀 马上就要从头开始啦！",
        "🙀 once again~",
    ];
    var loadingMsg = [
        ".",
        "..",
        "...",
        "....",
        ".....",
        "......"
    ];

    var mask_bg = document.getElementById("mask_bg");
    mask_bg.style.width = document.body.scrollWidth+"px";
    mask_bg.style.height = document.body.scrollHeight+"px";
    mask_bg.style.display = "inline";

    var mask_msg = document.getElementById("mask_msg");
    // screen width and height
    var cHeight = document.documentElement.clientHeight || document.body.clientHeight;
    var cWidth = document.documentElement.clientWidth || document.body.clientWidth;
    var defaultLeft=(cWidth-450)/2;
    var defaultTop=(cHeight-200)/2;
    // scroll distance
    var scrollLeft = document.documentElement.scrollLeft || document.body.scrollLeft;
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    mask_msg.style.left = defaultLeft + scrollLeft + "px";
    mask_msg.style.top = defaultTop + scrollTop + "px";

    mask_msg.style.display = "flex";

    // var count = 1;
    count = 1;
    var msg_title = document.getElementById("msg_title");
    var msg_text = document.getElementById("msg_text");
    mTimer = window.setInterval(function(){
        msg_title.innerText = "正在读取你的2018"+loadingMsg[parseInt(count/1)%loadingMsg.length];
        msg_text.innerText = guoguoMsg[parseInt(count/3)%guoguoMsg.length];
        count = count + 1;
    },1000);
}

function dismissMask() {
    //enable button
    $("#btn1").removeAttr("disabled");

    var msg_title = document.getElementById("msg_title");
    var msg_text = document.getElementById("msg_text");
    msg_title.innerText = "正在读取你的2018.";
    msg_text.innerText = "🐱 果果来陪陪你吧！";

    var mask_bg = document.getElementById("mask_bg");
    mask_bg.style.display = "none";
    
    var mask_msg = document.getElementById("mask_msg");
    mask_msg.style.display = "none";

    window.clearInterval(mTimer);  
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
        // 判断是否有缓存
        if (img.complete) {
            if (img.width >= img.height) {
                temp.style.background = "url(" + str + ") center center/auto 100% no-repeat border-box border-box";
            } else {
                temp.style.background = "url(" + str + ") center center/100% auto no-repeat border-box border-box";
            }
        } else {
            // 加载完成执行
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

    // var u = navigator.userAgent;
    // var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1;
    // var isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
    // if (isAndroid) {
    //     var node = document.getElementById("best-nine-canvas");

    //     domtoimage.toPng(node)
    //         .then(function (dataUrl) {
    //             var img = new Image();
    //             img.src = dataUrl;
    //             document.body.appendChild(img);
    //         })
    //         .catch(function (error) {
    //             console.error('oops, something went wrong!', error);
    //     });
    // }
    // if (isIOS) {
        
    //     html2canvas(document.querySelector("#best-nine-canvas"),{useCORS:true,logging:true}).then(canvas => {
    //         let base64ImgSrc = canvas.toDataURL("image/png")
    //         /* 如果只是显示,可用以下代码 */
    //         let img = document.createElement("img")
    //         img.src = base64ImgSrc 
    //         document.body.appendChild(img)
    //         // document.body.appendChild(canvas)
    //     });
    // }

    // return;

    var username = document.getElementById("input-name");
    if (username.value=="") {
        dismissMask();
        alert("╥﹏╥\n没有接收到你的昵称！");
        return;
    }

    $.ajax({
        url: "https://kuoluo.applinzi.com/jike/",//getBestNine/"+username.value,
        async: true,
        type: "GET",
        data: {},
        success: function (result) {
            result = localData;
            if (result.SUCCESS==false) {
                dismissMask();
                alert("╥﹏╥\n出错啦！没有9张满足要求的皂片啦~");
                return;
            }
            // bind data to html
            bindData("user-avatar-image",result.UserInfo.avatarImage,"src");
            bindData("user-name",result.UserInfo.screenName);
            bindData("user-like-info","在过去的一年里，有"+result.UserInfo.statsCount.followed+"人为你👏👏👏"+result.UserInfo.statsCount.liked+"次");
            // when user is not verified, use medal instead
            if (!result.UserInfo.isVerified) {
                if (JSON.stringify(result.UserInfo.medals) == '[]') {
                    bindData("verify-icon","https://cdn.ruguoapp.com/resources/userProfile/medal_jike_parnter.png","src");
                    bindData("verify-message","一位透明的小同学");
                } else {
                    bindData("verify-icon",result.UserInfo.medals[0].picUrl,"src");
                    bindData("verify-message",result.UserInfo.medals[0].name.toString().replace("“", "「").replace("”", "」"));
                }
            } else {
                bindData("verify-icon",result.UserInfo.verifyIcon,"src");
                bindData("verify-message",result.UserInfo.verifyMessage);
            }

            for (var i=0;i<9;i++)
            {
                bindData("pic-"+(i+1).toString(),result.BestNine[i].Url,"best-nine");
            } 

            //dismissMask();
            return;   

            // make qrcode
            var userHomePageUrl = "https://m.okjike.com/user/" + result.UserInfo.username;
            var qrcode = new QRCode(document.getElementById("qrcode"), {
                width : parseInt(0.144*document.body.clientWidth),//100,
                height : parseInt(0.144*document.body.clientWidth),//100,
                colorDark : '#ffffff',
                colorLight : '#fce100',
                correctLevel : QRCode.CorrectLevel.L
            });
            qrcode.makeCode(userHomePageUrl);
        }
    }); 
}