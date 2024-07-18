//Thu Jul 18 2024 01:32:53 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const _0x38fd23 = new _0x1af518("古茗奶茶抢券"),
  _0x54b758 = require("axios"),
  _0x5bfa10 = "gmnc",
  _0x40ec79 = process.env[_0x5bfa10] || "",
  _0x442969 = 0;
let _0x11b14b = "1.0.0",
  _0xae3c10 = "",
  _0x2128cb;
!(async () => {
  await _0x836331();
})().catch(_0x112bbf => _0x38fd23.logErr(_0x112bbf)).finally(() => _0x38fd23.done());
async function _0x836331() {
  if (_0x40ec79 == "") {
    console.log("没有填写变量,请查看脚本说明: " + _0x5bfa10);
    return;
  }
  let _0x2bff76 = _0x40ec79.split("\n");
  _0x11562a("\n========== 共找到 " + _0x2bff76.length + " 个账号 ==========");
  if (_0x2bff76.length > 3) {
    return;
  }
  let _0x52e967 = 1;
  for (let _0x14ec7c of _0x2bff76) {
    if (!_0x14ec7c) {
      continue;
    }
    let _0x40707c = _0x14ec7c.split("&"),
      _0x5c39f0 = _0x40707c[0],
      _0x4dd28f = _0x40707c[1],
      _0x2503cd = _0x40707c[2],
      _0x567371 = _0x40707c[3];
    const _0x2466c6 = {
      index: _0x52e967,
      authorization: _0x5c39f0,
      activityId: _0x4dd28f,
      keyWordAnswer: _0x2503cd,
      consumptionInventoryId: _0x567371
    };
    _0x52e967 = _0x52e967 + 1;
    await _0x221010(_0x2466c6);
  }
}
async function _0x221010(_0x5398c8) {
  _0x11562a("\n========== 账号[" + _0x5398c8.index + "]开始抢兑 ==========");
  await _0x463d0e(_0x5398c8);
}
async function _0x463d0e(_0x5de226) {
  console.log("等待时间到12:00 请耐心等待⌛️");
  let _0x4de0ef = new Date();
  (!_0x2128cb || _0x4de0ef >= _0x2128cb) && (_0x2128cb = new Date(), _0x2128cb.setHours(12, 0, 0, 0));
  while (_0x4de0ef < _0x2128cb) {
    await new Promise(_0xe49108 => setTimeout(_0xe49108, 1000));
    _0x4de0ef = new Date();
  }
  console.log("时间已到达12:00 开始抢兑");
  const _0x22ded9 = [];
  for (let _0x13083b = 0; _0x13083b < 50; _0x13083b++) {
    _0x22ded9.push(_0xc3ebec(_0x5de226));
  }
  await Promise.all(_0x22ded9);
}
async function _0xc3ebec(_0x278372) {
  try {
    const _0x41cfbb = {
      "User-Agent": "Mozilla/5.0 (Linux; Android 10; Mi 10 Pro Build/TKQ1.221114.001; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/122.0.6261.120 Mobile Safari/537.36 XWEB/1220089 MMWEBSDK/20240301 MMWEBID/1663 MicroMessenger/8.0.48.2580(0x28003052) WeChat/arm64 Weixin NetType/WIFI Language/zh_CN ABI/arm64 miniProgram/wxe766d738ad655e8c",
      "Content-Type": "application/json",
      authorization: _0x278372.authorization
    };
    const _0x149836 = {
      channelCode: 20,
      activityId: _0x278372.activityId,
      brandId: 1,
      keyWordAnswer: "" + _0x278372.keyWordAnswer,
      consumptionInventoryId: _0x278372.consumptionInventoryId
    };
    const _0x38c89f = {
      method: "post",
      url: "https://h5.gumingnc.com/newton-buyer/newton/buyer/ump/milk/tea/activity/fcfs",
      headers: _0x41cfbb,
      data: _0x149836
    };
    let {
      data: _0x5147d0
    } = await _0x54b758.request(_0x38c89f);
    _0x5147d0 ? console.log(_0x5147d0) : console.log("叼毛，出错了！！！");
  } catch (_0x1296ec) {
    console.log(_0x1296ec.response.data);
  }
}
async function _0x264eaf(_0x106873) {
  if (!_0x106873) {
    return;
  }
  if (_0x38fd23.isNode()) {
    var _0x2aace6 = require("./sendNotify");
    await _0x2aace6.sendNotify(_0x38fd23.name, _0x106873);
  } else {
    _0x38fd23.msg(_0x38fd23.name, "", _0x106873);
  }
}
function _0x11562a(_0x210ce7) {
  if (_0x38fd23.isNode()) {
    _0x210ce7 && (console.log("" + _0x210ce7), _0xae3c10 += "\n" + _0x210ce7);
  } else {
    console.log("" + _0x210ce7);
    _0xae3c10 += "\n" + _0x210ce7;
  }
}
function _0x200acc(_0x13dfb4) {
  return new Promise(function (_0xbf29b5) {
    setTimeout(_0xbf29b5, _0x13dfb4 * 1000);
  });
}
function _0x1ea022() {
  return new Date().getTime();
}
function _0x3fdbb4(_0x209a8c, _0x2c5613 = 1000) {
  method = _0x209a8c.method ? _0x209a8c.method.toLowerCase() : _0x209a8c.body ? "post" : "get";
  return new Promise(_0x30b410 => {
    setTimeout(() => {
      _0x38fd23[method](_0x209a8c, (_0x66d210, _0x18582b, _0x23ddf0) => {
        try {
          if (_0x66d210) {
            console.log(JSON.stringify(_0x66d210));
            _0x38fd23.logErr(_0x66d210);
          } else {
            try {
              _0x23ddf0 = JSON.parse(_0x23ddf0);
            } catch (_0xf22b2c) {}
          }
        } catch (_0x537a46) {
          console.log(_0x537a46);
          _0x38fd23.logErr(_0x537a46, _0x18582b);
        } finally {
          _0x30b410(_0x23ddf0);
        }
      });
    }, _0x2c5613);
  });
}
function _0x1b4289(..._0x945825) {
  _0x442969 && console.log(..._0x945825);
}
async function _0x5a59c3() {
  try {
    const _0xa9aa8e = ["https://gitee.com/ohhhooh/jd_haoyangmao/raw/master/Notice.json"];
    let _0x43effe = null;
    for (const _0x2fecbd of _0xa9aa8e) {
      const _0x1fe53c = {
        "User-Agent": ""
      };
      const _0x2d9bc1 = {
        url: _0x2fecbd,
        headers: _0x1fe53c
      };
      const _0x26f2dd = await _0x3fdbb4(_0x2d9bc1);
      if (_0x26f2dd && "notice" in _0x26f2dd) {
        _0x43effe = _0x26f2dd.notice.replace(/\\n/g, "\n");
        break;
      }
    }
    if (_0x43effe) {
      _0x38fd23.DoubleLog(_0x43effe);
    }
  } catch (_0x26d653) {
    console.log(_0x26d653);
  }
}
function _0x477bce(_0x34b41d, _0x4c38b9 = 3000) {
  return new Promise(_0x456156 => {
    const _0x53a8c4 = {
      url: "https://fastly.jsdelivr.net/gh/" + _0x34b41d
    };
    _0x38fd23.get(_0x53a8c4, (_0x49426b, _0x5b18f0, _0x2264cd) => {
      try {
        const _0x3a4fcf = /scriptVersionNow\s*=\s*(["'`])([\d.]+)\1/,
          _0x45f843 = _0x2264cd.match(_0x3a4fcf),
          _0x1522e7 = _0x45f843 ? _0x45f843[2] : "";
        console.log("\n====== 当前版本：" + _0x11b14b + " 📌 最新版本：" + _0x1522e7 + " ======");
      } catch (_0x1b8e37) {
        _0x38fd23.logErr(_0x1b8e37, _0x5b18f0);
      }
      _0x456156();
    }, _0x4c38b9);
  });
}
function _0x1af518(_0x2935da, _0x46bc34) {
  class _0x414609 {
    constructor(_0x3b0b40) {
      this.env = _0x3b0b40;
    }
    send(_0x2534c2, _0x1dc669 = "GET") {
      _0x2534c2 = "string" == typeof _0x2534c2 ? {
        url: _0x2534c2
      } : _0x2534c2;
      let _0x5a8922 = this.get;
      "POST" === _0x1dc669 && (_0x5a8922 = this.post);
      return new Promise((_0x2e8a96, _0x1aa6d3) => {
        _0x5a8922.call(this, _0x2534c2, (_0x81b4cd, _0x54123, _0x4892af) => {
          _0x81b4cd ? _0x1aa6d3(_0x81b4cd) : _0x2e8a96(_0x54123);
        });
      });
    }
    get(_0x52c098) {
      return this.send.call(this.env, _0x52c098);
    }
    post(_0x107ef7) {
      return this.send.call(this.env, _0x107ef7, "POST");
    }
  }
  return new class {
    constructor(_0x4f2ec9, _0x34f31d) {
      this.userList = [];
      this.userIdx = 0;
      this.name = _0x4f2ec9;
      this.http = new _0x414609(this);
      this.data = null;
      this.dataFile = "box.dat";
      this.logs = [];
      this.isMute = !1;
      this.isNeedRewrite = !1;
      this.logSeparator = "\n";
      this.encoding = "utf-8";
      this.startTime = new Date().getTime();
      Object.assign(this, _0x34f31d);
      this.log("", "🔔" + this.name + ",开始!");
    }
    getEnv() {
      return "undefined" != typeof $environment && $environment["surge-version"] ? "Surge" : "undefined" != typeof $environment && $environment["stash-version"] ? "Stash" : "undefined" != typeof module && module.exports ? "Node.js" : "undefined" != typeof $task ? "Quantumult X" : "undefined" != typeof $loon ? "Loon" : "undefined" != typeof $rocket ? "Shadowrocket" : void 0;
    }
    isNode() {
      return "Node.js" === this.getEnv();
    }
    isQuanX() {
      return "Quantumult X" === this.getEnv();
    }
    isSurge() {
      return "Surge" === this.getEnv();
    }
    isLoon() {
      return "Loon" === this.getEnv();
    }
    isShadowrocket() {
      return "Shadowrocket" === this.getEnv();
    }
    isStash() {
      return "Stash" === this.getEnv();
    }
    toObj(_0x267b14, _0x318b34 = null) {
      try {
        return JSON.parse(_0x267b14);
      } catch {
        return _0x318b34;
      }
    }
    toStr(_0x30d2e8, _0x3d880a = null) {
      try {
        return JSON.stringify(_0x30d2e8);
      } catch {
        return _0x3d880a;
      }
    }
    getjson(_0x5a2c9e, _0x364eda) {
      let _0x160b7d = _0x364eda;
      const _0x1c4649 = this.getdata(_0x5a2c9e);
      if (_0x1c4649) {
        try {
          _0x160b7d = JSON.parse(this.getdata(_0x5a2c9e));
        } catch {}
      }
      return _0x160b7d;
    }
    setjson(_0x494809, _0x162a6b) {
      try {
        return this.setdata(JSON.stringify(_0x494809), _0x162a6b);
      } catch {
        return !1;
      }
    }
    getScript(_0x3c678b) {
      return new Promise(_0x144562 => {
        const _0x4f9fc8 = {
          url: _0x3c678b
        };
        this.get(_0x4f9fc8, (_0x5e38cf, _0x5c2bbe, _0x330a6e) => _0x144562(_0x330a6e));
      });
    }
    runScript(_0x49e476, _0x11c567) {
      return new Promise(_0x4561c7 => {
        let _0x23e0f3 = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        _0x23e0f3 = _0x23e0f3 ? _0x23e0f3.replace(/\n/g, "").trim() : _0x23e0f3;
        let _0xe9bd0f = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        _0xe9bd0f = _0xe9bd0f ? 1 * _0xe9bd0f : 20;
        _0xe9bd0f = _0x11c567 && _0x11c567.timeout ? _0x11c567.timeout : _0xe9bd0f;
        const _0x1de0ab = {
          script_text: _0x49e476,
          mock_type: "cron",
          timeout: _0xe9bd0f
        };
        const [_0x1e7024, _0x3be35f] = _0x23e0f3.split("@"),
          _0x2ac717 = {
            url: "http://" + _0x3be35f + "/v1/scripting/evaluate",
            body: _0x1de0ab,
            headers: {
              "X-Key": _0x1e7024,
              Accept: "*/*"
            },
            timeout: _0xe9bd0f
          };
        this.post(_0x2ac717, (_0x3b6445, _0x30d943, _0xd6b047) => _0x4561c7(_0xd6b047));
      }).catch(_0x5dbbf2 => this.logErr(_0x5dbbf2));
    }
    loaddata() {
      if (!this.isNode()) {
        return {};
      }
      {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const _0x377bf4 = this.path.resolve(this.dataFile),
          _0x450638 = this.path.resolve(process.cwd(), this.dataFile),
          _0x308041 = this.fs.existsSync(_0x377bf4),
          _0x512565 = !_0x308041 && this.fs.existsSync(_0x450638);
        if (!_0x308041 && !_0x512565) {
          return {};
        }
        {
          const _0x1c5767 = _0x308041 ? _0x377bf4 : _0x450638;
          try {
            return JSON.parse(this.fs.readFileSync(_0x1c5767));
          } catch (_0x2d76e9) {
            return {};
          }
        }
      }
    }
    writedata() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const _0x41792b = this.path.resolve(this.dataFile),
          _0x4d64d5 = this.path.resolve(process.cwd(), this.dataFile),
          _0x39833f = this.fs.existsSync(_0x41792b),
          _0x54f252 = !_0x39833f && this.fs.existsSync(_0x4d64d5),
          _0x3375bd = JSON.stringify(this.data);
        _0x39833f ? this.fs.writeFileSync(_0x41792b, _0x3375bd) : _0x54f252 ? this.fs.writeFileSync(_0x4d64d5, _0x3375bd) : this.fs.writeFileSync(_0x41792b, _0x3375bd);
      }
    }
    lodash_get(_0x31b8dc, _0x2d0b23, _0x5ef122) {
      const _0x51f099 = _0x2d0b23.replace(/\[(\d+)\]/g, ".$1").split(".");
      let _0x1d7470 = _0x31b8dc;
      for (const _0x3f05bf of _0x51f099) if (_0x1d7470 = Object(_0x1d7470)[_0x3f05bf], void 0 === _0x1d7470) {
        return _0x5ef122;
      }
      return _0x1d7470;
    }
    lodash_set(_0x5a3ae7, _0x10f3b0, _0x18c7a7) {
      return Object(_0x5a3ae7) !== _0x5a3ae7 ? _0x5a3ae7 : (Array.isArray(_0x10f3b0) || (_0x10f3b0 = _0x10f3b0.toString().match(/[^.[\]]+/g) || []), _0x10f3b0.slice(0, -1).reduce((_0x19bc76, _0x1919ea, _0x5c309b) => Object(_0x19bc76[_0x1919ea]) === _0x19bc76[_0x1919ea] ? _0x19bc76[_0x1919ea] : _0x19bc76[_0x1919ea] = Math.abs(_0x10f3b0[_0x5c309b + 1]) >> 0 == +_0x10f3b0[_0x5c309b + 1] ? [] : {}, _0x5a3ae7)[_0x10f3b0[_0x10f3b0.length - 1]] = _0x18c7a7, _0x5a3ae7);
    }
    getdata(_0x455b2b) {
      let _0x3dc3db = this.getval(_0x455b2b);
      if (/^@/.test(_0x455b2b)) {
        const [, _0x286205, _0x375d5b] = /^@(.*?)\.(.*?)$/.exec(_0x455b2b),
          _0x299e0e = _0x286205 ? this.getval(_0x286205) : "";
        if (_0x299e0e) {
          try {
            const _0xf63df1 = JSON.parse(_0x299e0e);
            _0x3dc3db = _0xf63df1 ? this.lodash_get(_0xf63df1, _0x375d5b, "") : _0x3dc3db;
          } catch (_0x4df690) {
            _0x3dc3db = "";
          }
        }
      }
      return _0x3dc3db;
    }
    setdata(_0x3b01d4, _0xef202f) {
      let _0x56ec22 = !1;
      if (/^@/.test(_0xef202f)) {
        const [, _0x1bf4e2, _0x3646fb] = /^@(.*?)\.(.*?)$/.exec(_0xef202f),
          _0x21a652 = this.getval(_0x1bf4e2),
          _0x6ef0f5 = _0x1bf4e2 ? "null" === _0x21a652 ? null : _0x21a652 || "{}" : "{}";
        try {
          const _0x3a3a17 = JSON.parse(_0x6ef0f5);
          this.lodash_set(_0x3a3a17, _0x3646fb, _0x3b01d4);
          _0x56ec22 = this.setval(JSON.stringify(_0x3a3a17), _0x1bf4e2);
        } catch (_0x1af4b1) {
          const _0x1a330c = {};
          this.lodash_set(_0x1a330c, _0x3646fb, _0x3b01d4);
          _0x56ec22 = this.setval(JSON.stringify(_0x1a330c), _0x1bf4e2);
        }
      } else {
        _0x56ec22 = this.setval(_0x3b01d4, _0xef202f);
      }
      return _0x56ec22;
    }
    getval(_0x4c75f0) {
      switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
          return $persistentStore.read(_0x4c75f0);
        case "Quantumult X":
          return $prefs.valueForKey(_0x4c75f0);
        case "Node.js":
          this.data = this.loaddata();
          return this.data[_0x4c75f0];
        default:
          return this.data && this.data[_0x4c75f0] || null;
      }
    }
    setval(_0x44f4c5, _0x1f0a39) {
      switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
          return $persistentStore.write(_0x44f4c5, _0x1f0a39);
        case "Quantumult X":
          return $prefs.setValueForKey(_0x44f4c5, _0x1f0a39);
        case "Node.js":
          this.data = this.loaddata();
          this.data[_0x1f0a39] = _0x44f4c5;
          this.writedata();
          return !0;
        default:
          return this.data && this.data[_0x1f0a39] || null;
      }
    }
    initGotEnv(_0x60e2e1) {
      this.got = this.got ? this.got : require("got");
      this.cktough = this.cktough ? this.cktough : require("tough-cookie");
      this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar();
      _0x60e2e1 && (_0x60e2e1.headers = _0x60e2e1.headers ? _0x60e2e1.headers : {}, void 0 === _0x60e2e1.headers.Cookie && void 0 === _0x60e2e1.cookieJar && (_0x60e2e1.cookieJar = this.ckjar));
    }
    get(_0x1c6fd7, _0x2e0ac9 = () => {}) {
      switch (_0x1c6fd7.headers && (delete _0x1c6fd7.headers["Content-Type"], delete _0x1c6fd7.headers["Content-Length"], delete _0x1c6fd7.headers["content-type"], delete _0x1c6fd7.headers["content-length"]), this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        default:
          const _0x310efe = {
            "X-Surge-Skip-Scripting": !1
          };
          this.isSurge() && this.isNeedRewrite && (_0x1c6fd7.headers = _0x1c6fd7.headers || {}, Object.assign(_0x1c6fd7.headers, _0x310efe));
          $httpClient.get(_0x1c6fd7, (_0x379975, _0x26c6fe, _0x43eb93) => {
            !_0x379975 && _0x26c6fe && (_0x26c6fe.body = _0x43eb93, _0x26c6fe.statusCode = _0x26c6fe.status ? _0x26c6fe.status : _0x26c6fe.statusCode, _0x26c6fe.status = _0x26c6fe.statusCode);
            _0x2e0ac9(_0x379975, _0x26c6fe, _0x43eb93);
          });
          break;
        case "Quantumult X":
          const _0x3e28fc = {
            hints: !1
          };
          this.isNeedRewrite && (_0x1c6fd7.opts = _0x1c6fd7.opts || {}, Object.assign(_0x1c6fd7.opts, _0x3e28fc));
          $task.fetch(_0x1c6fd7).then(_0x126127 => {
            const {
                statusCode: _0x351125,
                statusCode: _0x2d44af,
                headers: _0x41a6dc,
                body: _0x42b427,
                bodyBytes: _0x119613
              } = _0x126127,
              _0x2a1e36 = {
                status: _0x351125,
                statusCode: _0x2d44af,
                headers: _0x41a6dc,
                body: _0x42b427,
                bodyBytes: _0x119613
              };
            _0x2e0ac9(null, _0x2a1e36, _0x42b427, _0x119613);
          }, _0x1d518a => _0x2e0ac9(_0x1d518a && _0x1d518a.error || "UndefinedError"));
          break;
        case "Node.js":
          let _0x4056db = require("iconv-lite");
          this.initGotEnv(_0x1c6fd7);
          this.got(_0x1c6fd7).on("redirect", (_0x3581d6, _0x418511) => {
            try {
              if (_0x3581d6.headers["set-cookie"]) {
                const _0x5e7fe9 = _0x3581d6.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
                _0x5e7fe9 && this.ckjar.setCookieSync(_0x5e7fe9, null);
                _0x418511.cookieJar = this.ckjar;
              }
            } catch (_0x1d80be) {
              this.logErr(_0x1d80be);
            }
          }).then(_0x214220 => {
            const {
                statusCode: _0x4c9964,
                statusCode: _0x1d037e,
                headers: _0x44d6b,
                rawBody: _0x4a0fdf
              } = _0x214220,
              _0x13d051 = _0x4056db.decode(_0x4a0fdf, this.encoding),
              _0x231370 = {
                status: _0x4c9964,
                statusCode: _0x1d037e,
                headers: _0x44d6b,
                rawBody: _0x4a0fdf,
                body: _0x13d051
              };
            _0x2e0ac9(null, _0x231370, _0x13d051);
          }, _0x8e6a3b => {
            const {
              message: _0x54589f,
              response: _0x31241b
            } = _0x8e6a3b;
            _0x2e0ac9(_0x54589f, _0x31241b, _0x31241b && _0x4056db.decode(_0x31241b.rawBody, this.encoding));
          });
      }
    }
    post(_0x51f514, _0x1c0103 = () => {}) {
      const _0x5a7072 = _0x51f514.method ? _0x51f514.method.toLocaleLowerCase() : "post";
      switch (_0x51f514.body && _0x51f514.headers && !_0x51f514.headers["Content-Type"] && !_0x51f514.headers["content-type"] && (_0x51f514.headers["content-type"] = "application/x-www-form-urlencoded"), _0x51f514.headers && (delete _0x51f514.headers["Content-Length"], delete _0x51f514.headers["content-length"]), this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        default:
          const _0x1056b7 = {
            "X-Surge-Skip-Scripting": !1
          };
          this.isSurge() && this.isNeedRewrite && (_0x51f514.headers = _0x51f514.headers || {}, Object.assign(_0x51f514.headers, _0x1056b7));
          $httpClient[_0x5a7072](_0x51f514, (_0x53f8ee, _0x31efd0, _0x24ef27) => {
            !_0x53f8ee && _0x31efd0 && (_0x31efd0.body = _0x24ef27, _0x31efd0.statusCode = _0x31efd0.status ? _0x31efd0.status : _0x31efd0.statusCode, _0x31efd0.status = _0x31efd0.statusCode);
            _0x1c0103(_0x53f8ee, _0x31efd0, _0x24ef27);
          });
          break;
        case "Quantumult X":
          const _0x37f292 = {
            hints: !1
          };
          _0x51f514.method = _0x5a7072;
          this.isNeedRewrite && (_0x51f514.opts = _0x51f514.opts || {}, Object.assign(_0x51f514.opts, _0x37f292));
          $task.fetch(_0x51f514).then(_0x1249f9 => {
            const {
                statusCode: _0x1da81b,
                statusCode: _0x1f8b3a,
                headers: _0x515d9e,
                body: _0xf55aa9,
                bodyBytes: _0x48e5f7
              } = _0x1249f9,
              _0x23e6a9 = {
                status: _0x1da81b,
                statusCode: _0x1f8b3a,
                headers: _0x515d9e,
                body: _0xf55aa9,
                bodyBytes: _0x48e5f7
              };
            _0x1c0103(null, _0x23e6a9, _0xf55aa9, _0x48e5f7);
          }, _0x16e99e => _0x1c0103(_0x16e99e && _0x16e99e.error || "UndefinedError"));
          break;
        case "Node.js":
          let _0x520f9e = require("iconv-lite");
          this.initGotEnv(_0x51f514);
          const {
            url: _0x383a3e,
            ..._0x48f570
          } = _0x51f514;
          this.got[_0x5a7072](_0x383a3e, _0x48f570).then(_0x213591 => {
            const {
                statusCode: _0xc8dd73,
                statusCode: _0xc1d75a,
                headers: _0x44421e,
                rawBody: _0x3cec66
              } = _0x213591,
              _0x22d747 = _0x520f9e.decode(_0x3cec66, this.encoding),
              _0xc108d = {
                status: _0xc8dd73,
                statusCode: _0xc1d75a,
                headers: _0x44421e,
                rawBody: _0x3cec66,
                body: _0x22d747
              };
            _0x1c0103(null, _0xc108d, _0x22d747);
          }, _0x1e9f99 => {
            const {
              message: _0x52a32c,
              response: _0x409d66
            } = _0x1e9f99;
            _0x1c0103(_0x52a32c, _0x409d66, _0x409d66 && _0x520f9e.decode(_0x409d66.rawBody, this.encoding));
          });
      }
    }
    time(_0x105090, _0x2f98a7 = null) {
      const _0x51cd65 = _0x2f98a7 ? new Date(_0x2f98a7) : new Date();
      let _0x3fd732 = {
        "M+": _0x51cd65.getMonth() + 1,
        "d+": _0x51cd65.getDate(),
        "H+": _0x51cd65.getHours(),
        "m+": _0x51cd65.getMinutes(),
        "s+": _0x51cd65.getSeconds(),
        "q+": Math.floor((_0x51cd65.getMonth() + 3) / 3),
        S: _0x51cd65.getMilliseconds()
      };
      /(y+)/.test(_0x105090) && (_0x105090 = _0x105090.replace(RegExp.$1, (_0x51cd65.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let _0x1a3ea9 in _0x3fd732) new RegExp("(" + _0x1a3ea9 + ")").test(_0x105090) && (_0x105090 = _0x105090.replace(RegExp.$1, 1 == RegExp.$1.length ? _0x3fd732[_0x1a3ea9] : ("00" + _0x3fd732[_0x1a3ea9]).substr(("" + _0x3fd732[_0x1a3ea9]).length)));
      return _0x105090;
    }
    queryStr(_0x22f40b) {
      let _0x5cedea = "";
      for (const _0x2be5ce in _0x22f40b) {
        let _0x29f70e = _0x22f40b[_0x2be5ce];
        null != _0x29f70e && "" !== _0x29f70e && ("object" == typeof _0x29f70e && (_0x29f70e = JSON.stringify(_0x29f70e)), _0x5cedea += _0x2be5ce + "=" + _0x29f70e + "&");
      }
      _0x5cedea = _0x5cedea.substring(0, _0x5cedea.length - 1);
      return _0x5cedea;
    }
    msg(_0x584334 = _0x2935da, _0x257da5 = "", _0x4d0324 = "", _0x2a2cde) {
      const _0x69aab3 = _0x40cae0 => {
        switch (typeof _0x40cae0) {
          case void 0:
            return _0x40cae0;
          case "string":
            switch (this.getEnv()) {
              case "Surge":
              case "Stash":
              default:
                const _0x4ddaf4 = {
                  url: _0x40cae0
                };
                return _0x4ddaf4;
              case "Loon":
              case "Shadowrocket":
                return _0x40cae0;
              case "Quantumult X":
                const _0x28d537 = {
                  "open-url": _0x40cae0
                };
                return _0x28d537;
              case "Node.js":
                return;
            }
          case "object":
            switch (this.getEnv()) {
              case "Surge":
              case "Stash":
              case "Shadowrocket":
              default:
                {
                  let _0x55d00b = _0x40cae0.url || _0x40cae0.openUrl || _0x40cae0["open-url"];
                  const _0x433fcd = {
                    url: _0x55d00b
                  };
                  return _0x433fcd;
                }
              case "Loon":
                {
                  let _0x30a1a7 = _0x40cae0.openUrl || _0x40cae0.url || _0x40cae0["open-url"],
                    _0x3a2b5d = _0x40cae0.mediaUrl || _0x40cae0["media-url"];
                  const _0x3aedcb = {
                    openUrl: _0x30a1a7,
                    mediaUrl: _0x3a2b5d
                  };
                  return _0x3aedcb;
                }
              case "Quantumult X":
                {
                  let _0x5cf1b2 = _0x40cae0["open-url"] || _0x40cae0.url || _0x40cae0.openUrl,
                    _0x18da6e = _0x40cae0["media-url"] || _0x40cae0.mediaUrl,
                    _0x4f8757 = _0x40cae0["update-pasteboard"] || _0x40cae0.updatePasteboard;
                  const _0x356912 = {
                    "open-url": _0x5cf1b2,
                    "media-url": _0x18da6e,
                    "update-pasteboard": _0x4f8757
                  };
                  return _0x356912;
                }
              case "Node.js":
                return;
            }
          default:
            return;
        }
      };
      if (!this.isMute) {
        switch (this.getEnv()) {
          case "Surge":
          case "Loon":
          case "Stash":
          case "Shadowrocket":
          default:
            $notification.post(_0x584334, _0x257da5, _0x4d0324, _0x69aab3(_0x2a2cde));
            break;
          case "Quantumult X":
            $notify(_0x584334, _0x257da5, _0x4d0324, _0x69aab3(_0x2a2cde));
            break;
          case "Node.js":
        }
      }
      if (!this.isMuteLog) {
        let _0x34842c = ["", "==============📣系统通知📣=============="];
        _0x34842c.push(_0x584334);
        _0x257da5 && _0x34842c.push(_0x257da5);
        _0x4d0324 && _0x34842c.push(_0x4d0324);
        console.log(_0x34842c.join("\n"));
        this.logs = this.logs.concat(_0x34842c);
      }
    }
    log(..._0x34e47e) {
      _0x34e47e.length > 0 && (this.logs = [...this.logs, ..._0x34e47e]);
      console.log(_0x34e47e.join(this.logSeparator));
    }
    logErr(_0x130f8f, _0x84aad1) {
      switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        case "Quantumult X":
        default:
          this.log("", "❗️" + this.name + ",错误!", _0x130f8f);
          break;
        case "Node.js":
          this.log("", "❗️" + this.name + ",错误!", _0x130f8f.stack);
      }
    }
    wait(_0x20439a) {
      return new Promise(_0x25a1f6 => setTimeout(_0x25a1f6, _0x20439a));
    }
    DoubleLog(_0x4248d6) {
      this.isNode() ? _0x4248d6 && (console.log("" + _0x4248d6), _0xae3c10 += "\n " + _0x4248d6) : (console.log("" + _0x4248d6), _0xae3c10 += "\n " + _0x4248d6);
    }
    async SendMsg(_0x443dde) {
      if (!_0x443dde) {
        return;
      }
      if (this.isNode()) {
        var _0x1c2f1f = require("./sendNotify");
        await _0x1c2f1f.sendNotify(this.name, _0x443dde);
      } else {
        this.msg(this.name, "", _0x443dde);
      }
    }
    done(_0x68b30b = {}) {
      const _0x5abd7a = new Date().getTime(),
        _0x4f4fef = (_0x5abd7a - this.startTime) / 1000;
      switch (this.log("", "🔔" + this.name + ",结束!🕛" + _0x4f4fef + "秒"), this.log(), this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        case "Quantumult X":
        default:
          $done(_0x68b30b);
          break;
        case "Node.js":
          process.exit(1);
      }
    }
  }(_0x2935da, _0x46bc34);
}