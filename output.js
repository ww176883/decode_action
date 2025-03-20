//Thu Mar 20 2025 03:18:53 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
var tools = {
    encrypt: function (_0x9e3bf5, _0x13cf9a) {
      const _0x3d10d6 = CryptoJS.enc.Utf8.parse(_0x13cf9a || "telecom_wap_2018"),
        _0x184aeb = CryptoJS.enc.Utf8.parse(_0x9e3bf5),
        _0x333412 = CryptoJS.AES.encrypt(_0x184aeb, _0x3d10d6, {
          mode: CryptoJS.mode.ECB,
          padding: CryptoJS.pad.Pkcs7
        });
      return _0x333412.toString();
    },
    decrypt: function (_0x10ace3, _0x538d32) {
      const _0x535cee = CryptoJS.enc.Utf8.parse(_0x538d32 || "telecom_wap_2018"),
        _0x4f5e73 = CryptoJS.AES.decrypt(_0x10ace3, _0x535cee, {
          mode: CryptoJS.mode.ECB,
          padding: CryptoJS.pad.Pkcs7
        });
      return CryptoJS.enc.Utf8.stringify(_0x4f5e73).toString();
    },
    isTelecomPhone: function (_0x499eb0) {
      var _0x14dd05 = _0x499eb0,
        _0x51dd05 = /1[3-9]+\d{9}/,
        _0x5b3f6e = new RegExp(_0x51dd05);
      if (_0x14dd05.length != 0) {
        if (_0x14dd05.search(_0x5b3f6e) != -1) {
          var _0x23f902 = _0x14dd05.substring(0, 3);
          return _0x23f902 == "133" || _0x23f902 == "153" || _0x23f902 == "189" || _0x23f902 == "180" || _0x23f902 == "181" || _0x23f902 == "177" || _0x23f902 == "171" || _0x23f902 == "173" || _0x23f902 == "199" || _0x23f902 == "191" || _0x23f902 == "166" ? true : false;
        } else {
          var _0x2584a4 = _0x14dd05.substring(0, 5);
          if (_0x2584a4 == "10649" && _0x14dd05.length == 13) {
            return true;
          } else {
            return false;
          }
        }
      }
    },
    isPhoneNumber: function (_0x45179d) {
      var _0x518a53 = /^((13|14|15|16|17|18|19)){1}\d{9}$/;
      if (!_0x518a53.test(_0x45179d)) {
        return false;
      } else {
        return true;
      }
    },
    pending: false,
    isNull: function (_0x526556) {
      _0x526556 = $.trim(_0x526556);
      if (!_0x526556 || _0x526556 == "" || _0x526556 == "null" || _0x526556 == "undefined") {
        return true;
      }
      return false;
    },
    isEmail: function (_0x17c997) {
      var _0x37be74;
      _0x37be74 = /^([a-zA-Z0-9]+[_|\-|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\-|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
      if (!_0x37be74.exec(_0x17c997)) {
        return false;
      }
      return true;
    },
    isIDCardNum: function (_0x241fc8) {
      _0x241fc8 = _0x241fc8.toUpperCase();
      if (!/(^\d{15}$)|(^\d{17}([0-9]|X)$)/.test(_0x241fc8)) {
        return "输入的身份证号长度不对，或者号码不符合规定！<br>15位号码应全为数字，18位号码末位可以为数字或X。";
      }
      var _0x20c574, _0x3d1b34;
      _0x20c574 = _0x241fc8.length;
      if (_0x20c574 == 15) {
        _0x3d1b34 = new RegExp(/^(\d{6})(\d{2})(\d{2})(\d{2})(\d{3})$/);
        var _0x22d268 = _0x241fc8.match(_0x3d1b34),
          _0x1c769b = new Date("19" + _0x22d268[2] + "/" + _0x22d268[3] + "/" + _0x22d268[4]),
          _0x28d50b;
        _0x28d50b = _0x1c769b.getYear() == Number(_0x22d268[2]) && _0x1c769b.getMonth() + 1 == Number(_0x22d268[3]) && _0x1c769b.getDate() == Number(_0x22d268[4]);
        if (!_0x28d50b) {
          return "输入的身份证号里出生日期不对！";
        } else {
          var _0x1aab1b = new Array(7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2),
            _0x3cf44a = new Array("1", "0", "X", "9", "8", "7", "6", "5", "4", "3", "2"),
            _0x3be80d = 0,
            _0x23ebf1;
          _0x241fc8 = _0x241fc8.substr(0, 6) + "19" + _0x241fc8.substr(6, _0x241fc8.length - 6);
          for (_0x23ebf1 = 0; _0x23ebf1 < 17; _0x23ebf1++) {
            _0x3be80d += _0x241fc8.substr(_0x23ebf1, 1) * _0x1aab1b[_0x23ebf1];
          }
          _0x241fc8 += _0x3cf44a[_0x3be80d % 11];
          return true;
        }
      }
      if (_0x20c574 == 18) {
        _0x3d1b34 = new RegExp(/^(\d{6})(\d{4})(\d{2})(\d{2})(\d{3})([0-9]|X)$/);
        var _0x22d268 = _0x241fc8.match(_0x3d1b34),
          _0x1c769b = new Date(_0x22d268[2] + "/" + _0x22d268[3] + "/" + _0x22d268[4]),
          _0x28d50b;
        _0x28d50b = _0x1c769b.getFullYear() == Number(_0x22d268[2]) && _0x1c769b.getMonth() + 1 == Number(_0x22d268[3]) && _0x1c769b.getDate() == Number(_0x22d268[4]);
        if (!_0x28d50b) {
          return "输入的身份证号里出生日期不对！";
        } else {
          var _0x5105aa,
            _0x1aab1b = new Array(7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2),
            _0x3cf44a = new Array("1", "0", "X", "9", "8", "7", "6", "5", "4", "3", "2"),
            _0x3be80d = 0,
            _0x23ebf1;
          for (_0x23ebf1 = 0; _0x23ebf1 < 17; _0x23ebf1++) {
            _0x3be80d += _0x241fc8.substr(_0x23ebf1, 1) * _0x1aab1b[_0x23ebf1];
          }
          _0x5105aa = _0x3cf44a[_0x3be80d % 11];
          if (_0x5105aa != _0x241fc8.substr(17, 1)) {
            return "18位身份证的校验码不正确！";
          }
          return true;
        }
      }
      return "18位身份证的校验码不正确！";
    },
    showLoginWaitCurr: function (_0x2ba1de, _0x5d03da) {
      var _0x29ed0f = $("body");
      if (tools.isNull(_0x29ed0f.find("#loginWait")) || _0x29ed0f.find("#loginWait").length <= 0) {
        var _0x95475c = "\t\t\t\t<div name=\"a\" style=\"position:fixed;width:100%;height:100%;top:0;display:none;z-index:1001;background-color:rgba(0,0,0,0);\" id=\"loginWait\">\t\t\t\t<div style=\"position:absolute;height:100%;width:100%;\">\t\t\t\t<div id=\"loadding\"style=\"position:absolute;width:140px;height:90px;border-radius:8px;-webkit-box-shadow:1px 1px 1px #ccc;background:#ffffff;text-align:center;opacity:0.8;top:50%\">\t\t\t\t<img src=\"https://www.189.cn/client/wap/common/images/load.gif\" style=\"position:relative;top:25%\"></div>\t\t\t\t</div>\t\t\t\t</div>";
        _0x29ed0f.append(_0x95475c);
      }
      _0x29ed0f.find("#loadding").css("left", $("body").width() / 2 - 70);
      _0x29ed0f.find("#loginWait").css("top", _0x2ba1de);
      _0x29ed0f.find("#loginWait").show();
    },
    hideLoginWaitCurr: function () {
      $("body").find("#loginWait").hide();
    },
    doAjax: function (_0x12d6f6, _0x140f20, _0x3b728d, _0x1302dd, _0x4ce8ab, _0x8671ef, _0x118a9a, _0x1be9d5, _0x1fb02e, _0xdf45) {
      if (_0x1fb02e) {
        if (tools.pending) {
          return false;
        } else {
          tools.pending = true;
        }
      }
      _0x8671ef && tools.showLoginWaitCurr();
      tools.isNull(_0x118a9a) && (_0x118a9a = false);
      typeof _0x140f20 == "object" ? _0x140f20 = JSON.stringify(_0x140f20) : _0x140f20 = "{" + _0x140f20 + "}";
      sessionId = "";
      var _0xde5a2f = sessionId,
        _0x4f3368 = "",
        _0x1e700c = 60000,
        _0x43e6fd = {};
      sessionId = tools.isNull(sessionStorage.sessionId) ? "" : sessionStorage.sessionId;
      tools.isNull(_0xdf45 ? sessionStorage.getItem(_0xdf45) : sessionStorage.toolsObj) ? _0x4f3368 = "" : (_0x43e6fd = JSON.parse(_0xdf45 ? sessionStorage.getItem(_0xdf45) : sessionStorage.toolsObj), _0xde5a2f = tools.isNull(_0x43e6fd.activityType) ? "" : _0x43e6fd.activityType, _0x4f3368 = tools.isNull(_0x43e6fd.ajaxUrl) ? "" : _0x43e6fd.ajaxUrl, _0x1e700c = tools.isNull(_0x43e6fd.outTime) ? _0x1e700c : parseInt(_0x43e6fd.outTime));
      var _0x20fa1a = "{\"headerInfo\": { " + (tools.isNull(_0xde5a2f) ? "" : "\"activityType\":\"" + _0xde5a2f + "\",") + (tools.isNull(sessionId) ? "" : "\"sessionId\":\"" + sessionId + "\",") + "\"functionCode\": \"" + _0x12d6f6 + "\"" + "}," + "\"requestContent\":" + _0x140f20 + "}";
      $.ajax({
        type: "POST",
        url: _0x4f3368,
        async: true,
        data: _0x20fa1a,
        dataType: "json",
        timeout: _0x1e700c,
        success: function (_0x3d7b3b) {
          tools.pending = false;
          if (_0x3d7b3b) {
            if (_0x3d7b3b.headerInfo.to404 && _0x3d7b3b.headerInfo.to404 === true) {
              window.location.href = "https://www.189.cn/client/wap/common/page/error_404.html?errorCode=20001";
              return false;
            } else {
              if (_0x3d7b3b.headerInfo.code == "W_0000") {
                if (_0x3d7b3b.responseContent.serviceCode == "0") {
                  _0x3d7b3b.message = _0x3d7b3b.headerInfo.message;
                } else {
                  _0x3d7b3b.message = _0x3d7b3b.responseContent.serviceMessage;
                  if (_0x1be9d5) {
                    if (_0x1be9d5(_0x3d7b3b) == false) {
                      _0x8671ef && tools.hideLoginWaitCurr();
                      return false;
                    }
                  }
                }
              } else {
                _0x3d7b3b.message = _0x3d7b3b.headerInfo.message;
                if (_0x1be9d5) {
                  if (_0x1be9d5(_0x3d7b3b) == false) {
                    _0x8671ef && tools.hideLoginWaitCurr();
                    return false;
                  }
                }
              }
            }
            if (_0x3b728d) {
              _0x3b728d(_0x3d7b3b);
            }
          } else {
            if (_0x1302dd) {
              _0x1302dd(_0x3d7b3b);
            }
          }
          if (_0x8671ef) {
            tools.hideLoginWaitCurr();
          }
        },
        complete: function (_0x2fbf98, _0xaee1dd) {
          tools.pending = false;
          var _0x548b3 = {
            message: "系统繁忙，再试一次吧 ！",
            status: _0xaee1dd
          };
          if (_0xaee1dd == "timeout") {
            _0x1302dd(_0x548b3);
            tools.hideLoginWaitCurr();
          } else {
            _0xaee1dd == "error" && (_0x4ce8ab(_0x548b3), tools.hideLoginWaitCurr());
          }
        }
      });
    },
    getParam: function (_0xabc045, _0x1170d5, _0x33de33) {
      _0x1170d5 = _0x1170d5 ? _0x1170d5.split("?")[1] : window.location.search.slice(1);
      if (_0x1170d5) {
        var _0x2b2d9 = {};
        $.each(_0x1170d5.split("&"), function (_0x818580, _0xb696dd) {
          _0x2b2d9[_0xb696dd.split("=")[0]] = _0xb696dd.split("=")[1];
        });
        if (_0xabc045) {
          window.sessionStorage[_0xabc045] = JSON.stringify(_0x2b2d9);
        } else {
          _0x33de33 && $.each(_0x2b2d9, function (_0x2e6349, _0x38387c) {
            window.sessionStorage[_0x2e6349] = _0x38387c;
          });
        }
        return _0x2b2d9;
      }
      return "";
    },
    isWeiXin: function () {
      var _0x2abc4f = window.navigator.userAgent.toLowerCase();
      if (_0x2abc4f.match(/MicroMessenger/i) == "micromessenger") {
        return true;
      } else {
        return false;
      }
    },
    getPhoneType: function () {
      var _0x4d9387 = navigator.userAgent,
        _0x239a05 = String(navigator.platform).indexOf("Linux") > -1,
        _0x193a38 = _0x4d9387.toLowerCase().match(/android/i) == "android",
        _0xec6eed = _0x4d9387.toLowerCase().match(/iphone/i) == "iphone",
        _0x1803e1 = _0x4d9387.toLowerCase().match(/ipod/i) == "ipod",
        _0x2285fe = _0x4d9387.toLowerCase().match(/ipad/i) == "ipad";
      var _0x26da15 = _0x4d9387.toLowerCase().match(/harmony/i) == "harmony",
        _0x2cdb5c = _0x4d9387.toLowerCase().match(/androidharmony/i) == "androidharmony";
      if (_0x239a05) {
        if (_0x193a38) {
          if (_0x2cdb5c) {
            return 5;
          } else {
            return 2;
          }
        } else {
          if (_0x26da15) {
            return 4;
          } else {
            return 3;
          }
        }
      } else {
        if (_0xec6eed || _0x1803e1 || _0x2285fe) {
          return 1;
        } else {
          return 3;
        }
      }
    },
    getServerDate: function (_0x166ecd, _0x395df0, _0xc421fe) {
      var _0x2c0e7d = "",
        _0x3cee27 = "",
        _0x1f0ef2 = {};
      var _0x5272c7 = new XMLHttpRequest();
      _0x5272c7.open("HEAD", location.href + (location.href.indexOf("?") == "-1" ? "?" : "&") + (_0x395df0 || ""), true);
      _0x5272c7.onreadystatechange = function () {
        if (_0x5272c7.readyState == 4) {
          if (_0x5272c7.status == 200) {
            _0x2c0e7d = _0x5272c7.getResponseHeader("Date");
            tools.isNull(_0x2c0e7d) && (_0x2c0e7d = _0x5272c7.getResponseHeader("last-modified"));
            _0x3cee27 = new Date(_0x2c0e7d);
            _0x1f0ef2 = {
              year: _0x3cee27.getFullYear(),
              month: _0x3cee27.getMonth() + 1,
              day: _0x3cee27.getDate(),
              hours: _0x3cee27.getHours(),
              minutes: _0x3cee27.getMinutes(),
              seconds: _0x3cee27.getSeconds()
            };
            if (_0x166ecd) {
              _0x166ecd(_0x1f0ef2, _0x3cee27, _0x2c0e7d);
            }
          } else {
            _0xc421fe || _0xc421fe();
          }
        }
      };
      _0x5272c7.send(null);
    },
    clientJumpLink: function (_0x5519a3, _0x4a650d) {
      var _0x139b27 = tools.getPhoneType();
      if (!tools.isNull(_0x5519a3)) {
        if (_0x139b27 == 1) {
          tools.openIOS(_0x5519a3, _0x4a650d);
        } else {
          if (_0x139b27 == 2) {
            tools.openAndroid(_0x5519a3, _0x4a650d);
          } else {
            !tools.isNull(_0x4a650d) ? window.location.href = _0x4a650d : window.location.href = "https://a.189.cn/xiazai?channelid=90";
          }
        }
      } else {
        if (!tools.isNull(_0x4a650d)) {
          window.location.href = _0x4a650d;
        } else {
          _0x139b27 == 1 ? window.location.href = "https://itunes.apple.com/cn/app/zhong-guo-dian-xin-zhang-shang/id513836029?mt=8" : window.location.href = "https://a.189.cn/xiazai?channelid=90";
        }
      }
    },
    openAndroid: function (_0xcc1acd, _0x5a6b4b) {
      var _0x4b4947 = "ctclient://startapp/android/open?LinkType=" + _0xcc1acd.androidLinkType + "&Link=" + encodeURIComponent(_0xcc1acd.androidLink) + "&BackUrl=http%3A%2F%2Fwww.189.cn&Recomnbr=" + encodeURIComponent(_0xcc1acd.recomnbr);
      !_0x4b4947 && (_0x4b4947 = "ctclient://startapp/android/open?LinkType=1&Link=10001");
      var _0x35b7c3 = navigator.userAgent.match(/(?:\bV1_AND_SQI?_|QQ\/)([\d\.]+)/);
      (!tools.isNull(_0x35b7c3) || tools.isWeiXin()) && (_0x4b4947 = "https://a.app.qq.com/o/simple.jsp?pkgname=com.ct.client&android_schema=" + encodeURIComponent(_0x4b4947));
      window.location.href = _0x4b4947;
      t = Date.now();
      setTimeout(function () {
        if (Date.now() - t < 2100) {
          !tools.isNull(_0x5a6b4b) ? window.location.href = _0x5a6b4b : window.location.href = "https://a.189.cn/xiazai?channelid=90";
        }
      }, 2000);
    },
    openIOS: function (_0x4a14a9, _0x38fba0) {
      var _0x1f4cee = "ctclient://startapp/ios/open?LinkType=" + _0x4a14a9.iosLinkType + "&Link=" + encodeURIComponent(_0x4a14a9.iosLink) + "&BackUrl=http%3A%2F%2Fwww.189.cn&Recomnbr=" + encodeURIComponent(_0x4a14a9.recomnbr);
      !_0x1f4cee && (_0x1f4cee = "ctclient://startapp/ios/open?LinkType=1&Link=10001");
      var _0x31ed62 = navigator.userAgent.match(/(?:\bV1_AND_SQI?_|QQ\/)([\d\.]+)/);
      if (!tools.isNull(_0x31ed62) || tools.isWeiXin()) {
        _0x1f4cee = "https://a.app.qq.com/o/simple.jsp?pkgname=com.ct.client&ios_scheme=" + encodeURIComponent(_0x1f4cee);
      }
      window.location.href = _0x1f4cee;
      t = Date.now();
      setTimeout(function () {
        Date.now() - t < 2100 && (!tools.isNull(_0x38fba0) ? window.location.href = _0x38fba0 : window.location.href = "https://itunes.apple.com/cn/app/zhong-guo-dian-xin-zhang-shang/id513836029?mt=8");
      }, 2000);
    },
    isClient: function () {
      var _0x318670 = navigator.userAgent.toLocaleLowerCase(),
        _0x283bba = _0x318670.indexOf("android") > -1 && _0x318670.indexOf("ctclient") > -1,
        _0x3e6f05 = _0x318670.indexOf("ios") > -1 && _0x318670.indexOf("ctclient") > -1,
        _0x23ee43 = _0x318670.indexOf("harmony") > -1 && _0x318670.indexOf("ctclient") > -1;
      if (_0x283bba) {
        return 1;
      } else {
        if (_0x3e6f05) {
          return 2;
        } else {
          return _0x23ee43 ? 4 : 0;
        }
      }
    }
  },
  _0x3ae672 = {
    wxMiniSharePath: "/pages/generalWebView/commJump2/commJump2?id=64bf8258bf15d542fd10b960",
    wxUserName: "gh_77d07394e351"
  };
var _0x422259 = {
  title: "金豆商城",
  content: "幸运金豆 兑换好物",
  imgurl: "https://img.189.cn/images/2024/5/11/00000000DB27D9B7860649D3AC92F23174601159.jpg",
  weburl: " http://a.189.cn/zvUBe6",
  zdsinfo: "",
  extendShareObj: _0x3ae672,
  imageUrl: "",
  type: "1"
};
function onShare() {
  CtclientJS.share(_0x422259.title, _0x422259.content, _0x422259.imgurl, _0x422259.weburl, "", JSON.stringify(_0x422259.extendShareObj), _0x422259.imageUrl, _0x422259.type);
}
function share(_0xbb8579, _0x22bb2a, _0x32947e, _0x1124d4, _0x59d239, _0x1cd3ca, _0x109512, _0x25fbff) {
  _0x59d239 ? window.location.href = "objc://share?title=" + encodeURIComponent(_0xbb8579) + "&content=" + encodeURIComponent(_0x22bb2a) + "&imgurl=" + encodeURIComponent(_0x32947e) + "&weburl=" + encodeURIComponent(_0x1124d4) + "&zdsinfo=" + encodeURIComponent(_0x59d239) + "&" + convertObj(_0x1cd3ca) + "&imageUrl=" + encodeURIComponent(_0x109512) + "&type=" + encodeURIComponent(_0x25fbff) : window.location.href = "objc://share?title=" + encodeURIComponent(_0xbb8579) + "&content=" + encodeURIComponent(_0x22bb2a) + "&imgurl=" + encodeURIComponent(_0x32947e) + "&weburl=" + encodeURIComponent(_0x1124d4) + "&" + convertObj(_0x1cd3ca) + "&imageUrl=" + encodeURIComponent(_0x109512) + "&type=" + encodeURIComponent(_0x25fbff);
}
function convertObj(_0x2dae2a) {
  var _0x332062 = [];
  for (var _0x3e22ee in _0x2dae2a) {
    var _0x3d8d71 = _0x2dae2a[_0x3e22ee];
    _0x3d8d71.constructor == Array ? _0x3d8d71.forEach(function (_0x2e98b9) {
      _0x332062.push(_0x3e22ee + "=" + encodeURIComponent(_0x2e98b9));
    }) : _0x332062.push(_0x3e22ee + "=" + encodeURIComponent(_0x3d8d71));
  }
  return _0x332062.join("&");
}
function iOnShare() {
  share(_0x422259.title, _0x422259.content, _0x422259.imgurl, _0x422259.weburl, "", _0x422259.extendShareObj, _0x422259.imageUrl, _0x422259.type);
  return "successed";
}
function keycodes(_0x10d6cf) {
  if (_0x10d6cf == false) {
    document.body.oncontextmenu = function () {
      return true;
    };
  } else {
    document.body.oncontextmenu = function () {
      return false;
    };
    document.body.onselectstart = function () {
      self.event.returnValue = false;
    };
    document.onkeydown = function () {
      if (window.event && window.event.keyCode == 123) {
        event.keyCode = 0;
        event.returnValue = false;
        return false;
      }
      if (event.ctrlKey && window.event.keyCode == 85 || window.event.keyCode == 83 || window.event.keyCode == 73 || window.event.keyCode == 76) {
        return false;
      }
    };
    function _0x1390e3() {
      alert("请关闭开发者工具");
      window.location.href = "https://www.189.cn/client/wap/common/page/error_404.html";
    }
    !function () {
      let _0x406335 = setInterval(() => {
        var _0x11da12 = new Date();
        debugger;
        var _0x24cdc2 = new Date(),
          _0x53446e = _0x24cdc2.getTime() - _0x11da12.getTime();
        if (_0x53446e > 100) {
          _0x1390e3();
          clearInterval(_0x406335);
        }
      }, 1000);
    }();
  }
}
function goLink(_0x560260, _0x1e255c, _0x4dc36e) {
  window.location.href = "objc://goLink?linkType=" + encodeURIComponent(_0x560260) + "&Link=" + encodeURIComponent(_0x1e255c) + "&backLink=" + encodeURIComponent(_0x4dc36e);
}
function closeWebView() {
  window.location.href = "objc://closeWebView";
}
function refreshData() {
  window.location.href = "objc://refreshData";
}
var randomBtn = {};
(function () {
  randomBtn = function (_0x3beed9) {
    var _0x33c5f7 = this,
      _0x31b14c = {
        target: [],
        style: "",
        btnClass: "commonButton_yellow",
        reClass: "commonRandom_load",
        html: "获取验证码",
        reHtml: "重新获取",
        loadHtml: "#random#",
        funCode: "",
        param: "",
        isLoadding: true,
        sucCode: "W_0000",
        time: 60,
        callBack: function () {},
        defClick: true,
        before: null,
        strToolObj: null
      };
    this.settings = _0x31b14c;
    $.extend(this.settings, _0x3beed9);
    this.resetCode = function () {
      _0x1409ce.randomLock = false;
      var _0x484ef2 = _0x33c5f7.settings;
      clearInterval(_0x1409ce.randomTimer);
      _0x484ef2.target.removeClass(_0x484ef2.btnClass + " " + _0x484ef2.reClass).addClass(_0x484ef2.btnClass).attr("style", _0x33c5f7.settings.style).html(_0x484ef2.html);
    };
    this.getRandom = function (_0x320b15) {
      _0x1409ce.getRandom(_0x320b15);
    };
    var _0x1409ce = {
      randomLock: false,
      getRandom: function (_0x21add2) {
        if (tools.isNull(_0x33c5f7.settings.funCode)) {
          var _0x5d536a = {
            code: "1",
            message: "functionCode is Null"
          };
          var _0x277ade = {
            headerInfo: _0x5d536a
          };
          var _0x42faa7 = _0x277ade;
          _0x33c5f7.settings.callBack(_0x42faa7);
        } else {
          if (_0x33c5f7.settings.before) {
            if (_0x33c5f7.settings.before() === false) {
              return false;
            }
          }
          if (_0x1409ce.randomLock == true) {
            return false;
          } else {
            _0x1409ce.randomLock = true;
          }
          _0x21add2 = $(_0x21add2);
          tools.doAjax(_0x33c5f7.settings.funCode, _0x33c5f7.settings.param, function (_0x7ba1cc) {
            _0x33c5f7.settings.callBack(_0x7ba1cc);
            if (_0x7ba1cc.responseContent.result) {
              if (_0x7ba1cc.headerInfo.code === _0x33c5f7.settings.sucCode) {
                if (_0x7ba1cc.responseContent.serviceCode == "0") {
                  var _0x3589d6 = _0x33c5f7.settings.time;
                  _0x21add2.html(_0x33c5f7.settings.loadHtml.replace("#random#", _0x3589d6)).addClass(_0x33c5f7.settings.reClass);
                  _0x1409ce.randomTimer = setInterval(function () {
                    if (_0x3589d6 == 0) {
                      _0x1409ce.randomLock = false;
                      clearInterval(_0x1409ce.randomTimer);
                      _0x21add2.html(_0x33c5f7.settings.reHtml).removeClass(_0x33c5f7.settings.reClass);
                    } else {
                      _0x3589d6--;
                      _0x21add2.html(_0x33c5f7.settings.loadHtml.replace("#random#", _0x3589d6));
                    }
                  }, 1000);
                } else {
                  _0x1409ce.randomLock = false;
                  _0x21add2.html(_0x33c5f7.settings.reHtml);
                }
              } else {
                _0x1409ce.randomLock = false;
                _0x21add2.html(_0x33c5f7.settings.reHtml);
              }
            } else {
              _0x1409ce.randomLock = false;
            }
          }, function (_0x2d0988) {
            _0x1409ce.randomLock = false;
            _0x33c5f7.settings.callBack(_0x2d0988);
            _0x21add2.html(_0x33c5f7.settings.reHtml);
          }, function (_0x46892d) {
            _0x1409ce.randomLock = false;
            _0x33c5f7.settings.callBack(_0x46892d);
            _0x21add2.html(_0x33c5f7.settings.reHtml);
          }, _0x33c5f7.settings.isLoadding, true, false, false, _0x33c5f7.settings.strToolObj);
        }
      },
      draw: function () {
        if (tools.isNull(_0x33c5f7.settings.target) || _0x33c5f7.settings.target.length == 0) {
          var _0x5bcbcf = {
            code: "2",
            message: "target is Null"
          };
          var _0x300c59 = {
            headerInfo: _0x5bcbcf
          };
          var _0x25a98d = _0x300c59;
          _0x33c5f7.settings.callBack(_0x25a98d);
        } else {
          _0x33c5f7.settings.target.addClass(_0x33c5f7.settings.btnClass).html(_0x33c5f7.settings.html).attr("style", _0x33c5f7.settings.style);
          if (_0x33c5f7.settings.defClick == true) {
            _0x33c5f7.settings.target.off("click").on("click", function (_0x70c8c8) {
              _0x1409ce.getRandom(this);
            });
          }
        }
      }
    };
    _0x1409ce.draw();
  };
})();