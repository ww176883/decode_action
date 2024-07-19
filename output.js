//Fri Jul 19 2024 02:28:27 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const _0x2f0011 = new _0x59cacf("古茗奶茶抢券"),
  _0xa7c3d6 = require("axios"),
  _0x4255a2 = "gmnc",
  _0x424d4a = process.env[_0x4255a2] || "";
let _0x632cd3 = "1.0.0",
  _0x5de651 = "";
let _0x2f4061;
!(async () => {
  await _0x1cf84e();
})().catch(_0x2adeac => _0x2f0011.logErr(_0x2adeac)).finally(() => _0x2f0011.done());
async function _0x1cf84e() {
  if (_0x424d4a == "") {
    console.log("没有填写变量,请查看脚本说明: " + _0x4255a2);
    return;
  }
  let _0x1229fb = _0x424d4a.split("\n");
  _0x170d66("\n========== 共找到 " + _0x1229fb.length + " 个账号 ==========");
  if (_0x1229fb.length > 3) {
    return;
  }
  let _0x371472 = 1;
  for (let _0x4d9306 of _0x1229fb) {
    if (!_0x4d9306) {
      continue;
    }
    let _0x3a8954 = _0x4d9306.split("&"),
      _0x3e3cd8 = _0x3a8954[0],
      _0x57a079 = _0x3a8954[1],
      _0x5b0bcb = _0x3a8954[2],
      _0x38e2ef = _0x3a8954[3];
    const _0x5bc856 = {
      index: _0x371472,
      authorization: _0x3e3cd8,
      activityId: _0x57a079,
      keyWordAnswer: _0x5b0bcb,
      consumptionInventoryId: _0x38e2ef
    };
    _0x371472 = _0x371472 + 1;
    await _0x279881(_0x5bc856);
  }
}
async function _0x279881(_0x2d6813) {
  _0x170d66("\n========== 账号[" + _0x2d6813.index + "]开始抢兑 ==========");
  await _0x2a860c(_0x2d6813);
}
async function _0x2a860c(_0xbd06ca) {
  console.log("等待时间到12:00 请耐心等待⌛️");
  let _0x4c4659 = new Date();
  if (!_0x2f4061 || _0x4c4659 >= _0x2f4061) {
    _0x2f4061 = new Date();
    _0x2f4061.setHours(12, 0, 0, 0);
  }
  while (_0x4c4659 < _0x2f4061) {
    await new Promise(_0x3adfca => setTimeout(_0x3adfca, 1000));
    _0x4c4659 = new Date();
  }
  console.log("时间已到达12:00 开始抢兑");
  const _0x8d02bc = [];
  for (let _0x2b50f4 = 0; _0x2b50f4 < 800; _0x2b50f4++) {
    _0x8d02bc.push(_0x959fbc(_0xbd06ca));
  }
  await Promise.all(_0x8d02bc);
}
async function _0x959fbc(_0x5dd928) {
  try {
    const _0x2604f5 = {
      "User-Agent": "Mozilla/5.0 (Linux; Android 10; Mi 10 Pro Build/TKQ1.221114.001; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/122.0.6261.120 Mobile Safari/537.36 XWEB/1220089 MMWEBSDK/20240301 MMWEBID/1663 MicroMessenger/8.0.48.2580(0x28003052) WeChat/arm64 Weixin NetType/WIFI Language/zh_CN ABI/arm64 miniProgram/wxe766d738ad655e8c",
      "Content-Type": "application/json",
      authorization: _0x5dd928.authorization
    };
    const _0x4aaddb = {
      channelCode: 20,
      activityId: _0x5dd928.activityId,
      brandId: 1,
      keyWordAnswer: "" + _0x5dd928.keyWordAnswer,
      consumptionInventoryId: _0x5dd928.consumptionInventoryId
    };
    const _0x4daf98 = {
      method: "post",
      url: "https://h5.gumingnc.com/newton-buyer/newton/buyer/ump/milk/tea/activity/fcfs",
      headers: _0x2604f5,
      data: _0x4aaddb
    };
    let {
      data: _0x3b8e60
    } = await _0xa7c3d6.request(_0x4daf98);
    if (_0x3b8e60) {
      console.log(_0x3b8e60);
    } else {
      console.log("叼毛，出错了！！！");
    }
  } catch (_0x272aba) {
    console.log(_0x272aba.response.data);
  }
}
async function _0x14dbc1(_0xf2fbb8) {
  if (!_0xf2fbb8) {
    return;
  }
  if (_0x2f0011.isNode()) {
    var _0x5caa58 = require("./sendNotify");
    await _0x5caa58.sendNotify(_0x2f0011.name, _0xf2fbb8);
  } else {
    _0x2f0011.msg(_0x2f0011.name, "", _0xf2fbb8);
  }
}
function _0x170d66(_0x24c099) {
  if (_0x2f0011.isNode()) {
    if (_0x24c099) {
      console.log("" + _0x24c099);
      _0x5de651 += "\n" + _0x24c099;
    }
  } else {
    console.log("" + _0x24c099);
    _0x5de651 += "\n" + _0x24c099;
  }
}
function _0x59dd9b(_0x47e7c0) {
  return new Promise(function (_0x4c9c3f) {
    setTimeout(_0x4c9c3f, _0x47e7c0 * 1000);
  });
}
function _0x582450() {
  return new Date().getTime();
}
function _0x953d22(_0x5e4a96, _0x25ecc6 = 1000) {
  method = _0x5e4a96.method ? _0x5e4a96.method.toLowerCase() : _0x5e4a96.body ? "post" : "get";
  return new Promise(_0x5e5f5e => {
    setTimeout(() => {
      _0x2f0011[method](_0x5e4a96, (_0x5a7967, _0x3ad2ea, _0x1943d0) => {
        try {
          if (_0x5a7967) {
            console.log(JSON.stringify(_0x5a7967));
            _0x2f0011.logErr(_0x5a7967);
          } else {
            try {
              _0x1943d0 = JSON.parse(_0x1943d0);
            } catch (_0x3494dd) {}
          }
        } catch (_0x3c6e04) {
          console.log(_0x3c6e04);
          _0x2f0011.logErr(_0x3c6e04, _0x3ad2ea);
        } finally {
          _0x5e5f5e(_0x1943d0);
        }
      });
    }, _0x25ecc6);
  });
}
function _0x137114(..._0x2ff5a9) {}
async function _0x478b99() {
  try {
    const _0x150ec9 = ["https://gitee.com/ohhhooh/jd_haoyangmao/raw/master/Notice.json"];
    let _0x161f52 = null;
    for (const _0x98d959 of _0x150ec9) {
      const _0x307dee = {
        "User-Agent": ""
      };
      const _0x47b26f = {
        url: _0x98d959,
        headers: _0x307dee
      };
      const _0x48ed51 = await _0x953d22(_0x47b26f);
      if (_0x48ed51 && "notice" in _0x48ed51) {
        _0x161f52 = _0x48ed51.notice.replace(/\\n/g, "\n");
        break;
      }
    }
    if (_0x161f52) {
      _0x2f0011.DoubleLog(_0x161f52);
    }
  } catch (_0x544658) {
    console.log(_0x544658);
  }
}
function _0x234050(_0x54e7e8, _0x134556 = 3000) {
  return new Promise(_0x29e5ce => {
    const _0x47ceb6 = {
      url: "https://fastly.jsdelivr.net/gh/" + _0x54e7e8
    };
    _0x2f0011.get(_0x47ceb6, (_0xced3ae, _0x3bc651, _0x162f4a) => {
      try {
        const _0x469103 = /scriptVersionNow\s*=\s*(["'`])([\d.]+)\1/,
          _0x57836d = _0x162f4a.match(_0x469103),
          _0x226359 = _0x57836d ? _0x57836d[2] : "";
        console.log("\n====== 当前版本：" + _0x632cd3 + " 📌 最新版本：" + _0x226359 + " ======");
      } catch (_0x1aeef5) {
        _0x2f0011.logErr(_0x1aeef5, _0x3bc651);
      }
      _0x29e5ce();
    }, _0x134556);
  });
}
function _0x59cacf(_0x22bad8, _0x11a7d7) {
  class _0x195dd2 {
    constructor(_0x412067) {
      this.env = _0x412067;
    }
    send(_0xf9cfe5, _0x5a62e5 = "GET") {
      _0xf9cfe5 = "string" == typeof _0xf9cfe5 ? {
        url: _0xf9cfe5
      } : _0xf9cfe5;
      let _0x52a958 = this.get;
      "POST" === _0x5a62e5 && (_0x52a958 = this.post);
      return new Promise((_0x5739f9, _0x3c78d7) => {
        _0x52a958.call(this, _0xf9cfe5, (_0x4a4bb7, _0x38bd22, _0x110f77) => {
          _0x4a4bb7 ? _0x3c78d7(_0x4a4bb7) : _0x5739f9(_0x38bd22);
        });
      });
    }
    get(_0x54cfd7) {
      return this.send.call(this.env, _0x54cfd7);
    }
    post(_0x7c0ae7) {
      return this.send.call(this.env, _0x7c0ae7, "POST");
    }
  }
  return new class {
    constructor(_0x489094, _0x2514c0) {
      this.userList = [];
      this.userIdx = 0;
      this.name = _0x489094;
      this.http = new _0x195dd2(this);
      this.data = null;
      this.dataFile = "box.dat";
      this.logs = [];
      this.isMute = !1;
      this.isNeedRewrite = !1;
      this.logSeparator = "\n";
      this.encoding = "utf-8";
      this.startTime = new Date().getTime();
      Object.assign(this, _0x2514c0);
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
    toObj(_0x315b38, _0x173232 = null) {
      try {
        return JSON.parse(_0x315b38);
      } catch {
        return _0x173232;
      }
    }
    toStr(_0x1b3034, _0xee2dd2 = null) {
      try {
        return JSON.stringify(_0x1b3034);
      } catch {
        return _0xee2dd2;
      }
    }
    getjson(_0x488355, _0x3c9e7e) {
      let _0x5fb046 = _0x3c9e7e;
      const _0x16c989 = this.getdata(_0x488355);
      if (_0x16c989) {
        try {
          _0x5fb046 = JSON.parse(this.getdata(_0x488355));
        } catch {}
      }
      return _0x5fb046;
    }
    setjson(_0xf1666b, _0x46fa1e) {
      try {
        return this.setdata(JSON.stringify(_0xf1666b), _0x46fa1e);
      } catch {
        return !1;
      }
    }
    getScript(_0x5791c8) {
      return new Promise(_0x79f316 => {
        const _0x4be49a = {
          url: _0x5791c8
        };
        this.get(_0x4be49a, (_0x6cc235, _0x41f711, _0xe07d0d) => _0x79f316(_0xe07d0d));
      });
    }
    runScript(_0x25ba91, _0x3e8511) {
      return new Promise(_0x48066a => {
        let _0xbda05b = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        _0xbda05b = _0xbda05b ? _0xbda05b.replace(/\n/g, "").trim() : _0xbda05b;
        let _0x3c7fc2 = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        _0x3c7fc2 = _0x3c7fc2 ? 1 * _0x3c7fc2 : 20;
        _0x3c7fc2 = _0x3e8511 && _0x3e8511.timeout ? _0x3e8511.timeout : _0x3c7fc2;
        const _0x4fb760 = {
          script_text: _0x25ba91,
          mock_type: "cron",
          timeout: _0x3c7fc2
        };
        const [_0x4bd17f, _0x360f2a] = _0xbda05b.split("@"),
          _0x41016e = {
            url: "http://" + _0x360f2a + "/v1/scripting/evaluate",
            body: _0x4fb760,
            headers: {
              "X-Key": _0x4bd17f,
              Accept: "*/*"
            },
            timeout: _0x3c7fc2
          };
        this.post(_0x41016e, (_0x35acfd, _0x1525e0, _0x3ee625) => _0x48066a(_0x3ee625));
      }).catch(_0x564651 => this.logErr(_0x564651));
    }
    loaddata() {
      if (!this.isNode()) {
        return {};
      }
      {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const _0xaf42b2 = this.path.resolve(this.dataFile),
          _0x450a8f = this.path.resolve(process.cwd(), this.dataFile),
          _0x122de2 = this.fs.existsSync(_0xaf42b2),
          _0x1d053c = !_0x122de2 && this.fs.existsSync(_0x450a8f);
        if (!_0x122de2 && !_0x1d053c) {
          return {};
        }
        {
          const _0x46fa62 = _0x122de2 ? _0xaf42b2 : _0x450a8f;
          try {
            return JSON.parse(this.fs.readFileSync(_0x46fa62));
          } catch (_0x26243b) {
            return {};
          }
        }
      }
    }
    writedata() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const _0x21c49f = this.path.resolve(this.dataFile),
          _0x3ed712 = this.path.resolve(process.cwd(), this.dataFile),
          _0x1fe9a2 = this.fs.existsSync(_0x21c49f),
          _0x51a815 = !_0x1fe9a2 && this.fs.existsSync(_0x3ed712),
          _0x40b33f = JSON.stringify(this.data);
        _0x1fe9a2 ? this.fs.writeFileSync(_0x21c49f, _0x40b33f) : _0x51a815 ? this.fs.writeFileSync(_0x3ed712, _0x40b33f) : this.fs.writeFileSync(_0x21c49f, _0x40b33f);
      }
    }
    lodash_get(_0x5cb377, _0x531bff, _0x699054) {
      const _0x10e767 = _0x531bff.replace(/\[(\d+)\]/g, ".$1").split(".");
      let _0x13e0b1 = _0x5cb377;
      for (const _0x12a711 of _0x10e767) if (_0x13e0b1 = Object(_0x13e0b1)[_0x12a711], void 0 === _0x13e0b1) {
        return _0x699054;
      }
      return _0x13e0b1;
    }
    lodash_set(_0x4593bb, _0x5bcb40, _0x55664e) {
      return Object(_0x4593bb) !== _0x4593bb ? _0x4593bb : (Array.isArray(_0x5bcb40) || (_0x5bcb40 = _0x5bcb40.toString().match(/[^.[\]]+/g) || []), _0x5bcb40.slice(0, -1).reduce((_0x54327f, _0x5b8435, _0x53a8c0) => Object(_0x54327f[_0x5b8435]) === _0x54327f[_0x5b8435] ? _0x54327f[_0x5b8435] : _0x54327f[_0x5b8435] = Math.abs(_0x5bcb40[_0x53a8c0 + 1]) >> 0 == +_0x5bcb40[_0x53a8c0 + 1] ? [] : {}, _0x4593bb)[_0x5bcb40[_0x5bcb40.length - 1]] = _0x55664e, _0x4593bb);
    }
    getdata(_0x2b0788) {
      let _0x23f87f = this.getval(_0x2b0788);
      if (/^@/.test(_0x2b0788)) {
        const [, _0x124372, _0x4c2d61] = /^@(.*?)\.(.*?)$/.exec(_0x2b0788),
          _0x50e196 = _0x124372 ? this.getval(_0x124372) : "";
        if (_0x50e196) {
          try {
            const _0x5ecb15 = JSON.parse(_0x50e196);
            _0x23f87f = _0x5ecb15 ? this.lodash_get(_0x5ecb15, _0x4c2d61, "") : _0x23f87f;
          } catch (_0x45134d) {
            _0x23f87f = "";
          }
        }
      }
      return _0x23f87f;
    }
    setdata(_0x3f1ce6, _0x22f36e) {
      let _0x201e4d = !1;
      if (/^@/.test(_0x22f36e)) {
        const [, _0xac1606, _0x199a3b] = /^@(.*?)\.(.*?)$/.exec(_0x22f36e),
          _0x1b78bf = this.getval(_0xac1606),
          _0x3bb4e7 = _0xac1606 ? "null" === _0x1b78bf ? null : _0x1b78bf || "{}" : "{}";
        try {
          const _0x25b3b1 = JSON.parse(_0x3bb4e7);
          this.lodash_set(_0x25b3b1, _0x199a3b, _0x3f1ce6);
          _0x201e4d = this.setval(JSON.stringify(_0x25b3b1), _0xac1606);
        } catch (_0x1dd010) {
          const _0x55c2c9 = {};
          this.lodash_set(_0x55c2c9, _0x199a3b, _0x3f1ce6);
          _0x201e4d = this.setval(JSON.stringify(_0x55c2c9), _0xac1606);
        }
      } else {
        _0x201e4d = this.setval(_0x3f1ce6, _0x22f36e);
      }
      return _0x201e4d;
    }
    getval(_0x5ea58e) {
      switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
          return $persistentStore.read(_0x5ea58e);
        case "Quantumult X":
          return $prefs.valueForKey(_0x5ea58e);
        case "Node.js":
          this.data = this.loaddata();
          return this.data[_0x5ea58e];
        default:
          return this.data && this.data[_0x5ea58e] || null;
      }
    }
    setval(_0x5953ef, _0x25ac83) {
      switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
          return $persistentStore.write(_0x5953ef, _0x25ac83);
        case "Quantumult X":
          return $prefs.setValueForKey(_0x5953ef, _0x25ac83);
        case "Node.js":
          this.data = this.loaddata();
          this.data[_0x25ac83] = _0x5953ef;
          this.writedata();
          return !0;
        default:
          return this.data && this.data[_0x25ac83] || null;
      }
    }
    initGotEnv(_0x267ee5) {
      this.got = this.got ? this.got : require("got");
      this.cktough = this.cktough ? this.cktough : require("tough-cookie");
      this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar();
      _0x267ee5 && (_0x267ee5.headers = _0x267ee5.headers ? _0x267ee5.headers : {}, void 0 === _0x267ee5.headers.Cookie && void 0 === _0x267ee5.cookieJar && (_0x267ee5.cookieJar = this.ckjar));
    }
    get(_0x29621a, _0x5a534c = () => {}) {
      switch (_0x29621a.headers && (delete _0x29621a.headers["Content-Type"], delete _0x29621a.headers["Content-Length"], delete _0x29621a.headers["content-type"], delete _0x29621a.headers["content-length"]), this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        default:
          const _0x4a380a = {
            "X-Surge-Skip-Scripting": !1
          };
          this.isSurge() && this.isNeedRewrite && (_0x29621a.headers = _0x29621a.headers || {}, Object.assign(_0x29621a.headers, _0x4a380a));
          $httpClient.get(_0x29621a, (_0x678a7e, _0x1b8402, _0x3e1c8a) => {
            !_0x678a7e && _0x1b8402 && (_0x1b8402.body = _0x3e1c8a, _0x1b8402.statusCode = _0x1b8402.status ? _0x1b8402.status : _0x1b8402.statusCode, _0x1b8402.status = _0x1b8402.statusCode);
            _0x5a534c(_0x678a7e, _0x1b8402, _0x3e1c8a);
          });
          break;
        case "Quantumult X":
          const _0x563c32 = {
            hints: !1
          };
          this.isNeedRewrite && (_0x29621a.opts = _0x29621a.opts || {}, Object.assign(_0x29621a.opts, _0x563c32));
          $task.fetch(_0x29621a).then(_0x5629d4 => {
            const {
                statusCode: _0x319f38,
                statusCode: _0x38070b,
                headers: _0x382dce,
                body: _0x2b36f1,
                bodyBytes: _0x47582f
              } = _0x5629d4,
              _0x24078e = {
                status: _0x319f38,
                statusCode: _0x38070b,
                headers: _0x382dce,
                body: _0x2b36f1,
                bodyBytes: _0x47582f
              };
            _0x5a534c(null, _0x24078e, _0x2b36f1, _0x47582f);
          }, _0x4e62f4 => _0x5a534c(_0x4e62f4 && _0x4e62f4.error || "UndefinedError"));
          break;
        case "Node.js":
          let _0x424883 = require("iconv-lite");
          this.initGotEnv(_0x29621a);
          this.got(_0x29621a).on("redirect", (_0x492bda, _0x1fcdd9) => {
            try {
              if (_0x492bda.headers["set-cookie"]) {
                const _0x129834 = _0x492bda.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
                _0x129834 && this.ckjar.setCookieSync(_0x129834, null);
                _0x1fcdd9.cookieJar = this.ckjar;
              }
            } catch (_0x182296) {
              this.logErr(_0x182296);
            }
          }).then(_0x554838 => {
            const {
                statusCode: _0x2e8885,
                statusCode: _0x1edeaa,
                headers: _0x19ad6a,
                rawBody: _0x2ccf1d
              } = _0x554838,
              _0x482377 = _0x424883.decode(_0x2ccf1d, this.encoding),
              _0x1bcb4d = {
                status: _0x2e8885,
                statusCode: _0x1edeaa,
                headers: _0x19ad6a,
                rawBody: _0x2ccf1d,
                body: _0x482377
              };
            _0x5a534c(null, _0x1bcb4d, _0x482377);
          }, _0x30ab5d => {
            const {
              message: _0x1da7c4,
              response: _0x52a0b4
            } = _0x30ab5d;
            _0x5a534c(_0x1da7c4, _0x52a0b4, _0x52a0b4 && _0x424883.decode(_0x52a0b4.rawBody, this.encoding));
          });
      }
    }
    post(_0x57b0f3, _0x5431e5 = () => {}) {
      const _0x1afadc = _0x57b0f3.method ? _0x57b0f3.method.toLocaleLowerCase() : "post";
      switch (_0x57b0f3.body && _0x57b0f3.headers && !_0x57b0f3.headers["Content-Type"] && !_0x57b0f3.headers["content-type"] && (_0x57b0f3.headers["content-type"] = "application/x-www-form-urlencoded"), _0x57b0f3.headers && (delete _0x57b0f3.headers["Content-Length"], delete _0x57b0f3.headers["content-length"]), this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        default:
          const _0x21b2d7 = {
            "X-Surge-Skip-Scripting": !1
          };
          this.isSurge() && this.isNeedRewrite && (_0x57b0f3.headers = _0x57b0f3.headers || {}, Object.assign(_0x57b0f3.headers, _0x21b2d7));
          $httpClient[_0x1afadc](_0x57b0f3, (_0x3f2e52, _0x25da07, _0xcc2a79) => {
            !_0x3f2e52 && _0x25da07 && (_0x25da07.body = _0xcc2a79, _0x25da07.statusCode = _0x25da07.status ? _0x25da07.status : _0x25da07.statusCode, _0x25da07.status = _0x25da07.statusCode);
            _0x5431e5(_0x3f2e52, _0x25da07, _0xcc2a79);
          });
          break;
        case "Quantumult X":
          const _0x1b1940 = {
            hints: !1
          };
          _0x57b0f3.method = _0x1afadc;
          this.isNeedRewrite && (_0x57b0f3.opts = _0x57b0f3.opts || {}, Object.assign(_0x57b0f3.opts, _0x1b1940));
          $task.fetch(_0x57b0f3).then(_0x4b6790 => {
            const {
                statusCode: _0x1dbfc5,
                statusCode: _0xe4b70f,
                headers: _0x7c913c,
                body: _0x2329e0,
                bodyBytes: _0x32dce4
              } = _0x4b6790,
              _0x181dbf = {
                status: _0x1dbfc5,
                statusCode: _0xe4b70f,
                headers: _0x7c913c,
                body: _0x2329e0,
                bodyBytes: _0x32dce4
              };
            _0x5431e5(null, _0x181dbf, _0x2329e0, _0x32dce4);
          }, _0x418eb6 => _0x5431e5(_0x418eb6 && _0x418eb6.error || "UndefinedError"));
          break;
        case "Node.js":
          let _0x29fed2 = require("iconv-lite");
          this.initGotEnv(_0x57b0f3);
          const {
            url: _0x5b1521,
            ..._0x467613
          } = _0x57b0f3;
          this.got[_0x1afadc](_0x5b1521, _0x467613).then(_0x598c9c => {
            const {
                statusCode: _0x78133,
                statusCode: _0x443e46,
                headers: _0x4ef697,
                rawBody: _0x10e4ae
              } = _0x598c9c,
              _0x54eeaf = _0x29fed2.decode(_0x10e4ae, this.encoding),
              _0x426c55 = {
                status: _0x78133,
                statusCode: _0x443e46,
                headers: _0x4ef697,
                rawBody: _0x10e4ae,
                body: _0x54eeaf
              };
            _0x5431e5(null, _0x426c55, _0x54eeaf);
          }, _0x27f35e => {
            const {
              message: _0x41f349,
              response: _0x3a37a7
            } = _0x27f35e;
            _0x5431e5(_0x41f349, _0x3a37a7, _0x3a37a7 && _0x29fed2.decode(_0x3a37a7.rawBody, this.encoding));
          });
      }
    }
    time(_0x887d91, _0x1de7d3 = null) {
      const _0x36a000 = _0x1de7d3 ? new Date(_0x1de7d3) : new Date();
      let _0xf6620e = {
        "M+": _0x36a000.getMonth() + 1,
        "d+": _0x36a000.getDate(),
        "H+": _0x36a000.getHours(),
        "m+": _0x36a000.getMinutes(),
        "s+": _0x36a000.getSeconds(),
        "q+": Math.floor((_0x36a000.getMonth() + 3) / 3),
        S: _0x36a000.getMilliseconds()
      };
      /(y+)/.test(_0x887d91) && (_0x887d91 = _0x887d91.replace(RegExp.$1, (_0x36a000.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let _0x411938 in _0xf6620e) new RegExp("(" + _0x411938 + ")").test(_0x887d91) && (_0x887d91 = _0x887d91.replace(RegExp.$1, 1 == RegExp.$1.length ? _0xf6620e[_0x411938] : ("00" + _0xf6620e[_0x411938]).substr(("" + _0xf6620e[_0x411938]).length)));
      return _0x887d91;
    }
    queryStr(_0x1eb30b) {
      let _0x33ed5e = "";
      for (const _0xcde8e in _0x1eb30b) {
        let _0x3ffaf5 = _0x1eb30b[_0xcde8e];
        null != _0x3ffaf5 && "" !== _0x3ffaf5 && ("object" == typeof _0x3ffaf5 && (_0x3ffaf5 = JSON.stringify(_0x3ffaf5)), _0x33ed5e += _0xcde8e + "=" + _0x3ffaf5 + "&");
      }
      _0x33ed5e = _0x33ed5e.substring(0, _0x33ed5e.length - 1);
      return _0x33ed5e;
    }
    msg(_0x5b2529 = _0x22bad8, _0x9cffb6 = "", _0x4db0e8 = "", _0x4b70f4) {
      const _0xc82088 = _0x10455f => {
        switch (typeof _0x10455f) {
          case void 0:
            return _0x10455f;
          case "string":
            switch (this.getEnv()) {
              case "Surge":
              case "Stash":
              default:
                const _0x2bd16d = {
                  url: _0x10455f
                };
                return _0x2bd16d;
              case "Loon":
              case "Shadowrocket":
                return _0x10455f;
              case "Quantumult X":
                const _0x35f619 = {
                  "open-url": _0x10455f
                };
                return _0x35f619;
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
                  let _0x535a5b = _0x10455f.url || _0x10455f.openUrl || _0x10455f["open-url"];
                  const _0x223dcc = {
                    url: _0x535a5b
                  };
                  return _0x223dcc;
                }
              case "Loon":
                {
                  let _0x5eecc7 = _0x10455f.openUrl || _0x10455f.url || _0x10455f["open-url"],
                    _0x3834e4 = _0x10455f.mediaUrl || _0x10455f["media-url"];
                  const _0x2c968b = {
                    openUrl: _0x5eecc7,
                    mediaUrl: _0x3834e4
                  };
                  return _0x2c968b;
                }
              case "Quantumult X":
                {
                  let _0x27a3b6 = _0x10455f["open-url"] || _0x10455f.url || _0x10455f.openUrl,
                    _0xe3fee3 = _0x10455f["media-url"] || _0x10455f.mediaUrl,
                    _0x4195c9 = _0x10455f["update-pasteboard"] || _0x10455f.updatePasteboard;
                  const _0x48b82e = {
                    "open-url": _0x27a3b6,
                    "media-url": _0xe3fee3,
                    "update-pasteboard": _0x4195c9
                  };
                  return _0x48b82e;
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
            $notification.post(_0x5b2529, _0x9cffb6, _0x4db0e8, _0xc82088(_0x4b70f4));
            break;
          case "Quantumult X":
            $notify(_0x5b2529, _0x9cffb6, _0x4db0e8, _0xc82088(_0x4b70f4));
            break;
          case "Node.js":
        }
      }
      if (!this.isMuteLog) {
        let _0x10dd46 = ["", "==============📣系统通知📣=============="];
        _0x10dd46.push(_0x5b2529);
        _0x9cffb6 && _0x10dd46.push(_0x9cffb6);
        _0x4db0e8 && _0x10dd46.push(_0x4db0e8);
        console.log(_0x10dd46.join("\n"));
        this.logs = this.logs.concat(_0x10dd46);
      }
    }
    log(..._0x3a576b) {
      _0x3a576b.length > 0 && (this.logs = [...this.logs, ..._0x3a576b]);
      console.log(_0x3a576b.join(this.logSeparator));
    }
    logErr(_0x2633b3, _0xb8e5c6) {
      switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        case "Quantumult X":
        default:
          this.log("", "❗️" + this.name + ",错误!", _0x2633b3);
          break;
        case "Node.js":
          this.log("", "❗️" + this.name + ",错误!", _0x2633b3.stack);
      }
    }
    wait(_0x459483) {
      return new Promise(_0x5c8c11 => setTimeout(_0x5c8c11, _0x459483));
    }
    DoubleLog(_0x5758d0) {
      this.isNode() ? _0x5758d0 && (console.log("" + _0x5758d0), _0x5de651 += "\n " + _0x5758d0) : (console.log("" + _0x5758d0), _0x5de651 += "\n " + _0x5758d0);
    }
    async SendMsg(_0x329feb) {
      if (!_0x329feb) {
        return;
      }
      if (this.isNode()) {
        var _0x515f32 = require("./sendNotify");
        await _0x515f32.sendNotify(this.name, _0x329feb);
      } else {
        this.msg(this.name, "", _0x329feb);
      }
    }
    done(_0x4c8cdb = {}) {
      const _0x44f1f3 = new Date().getTime(),
        _0xc0359 = (_0x44f1f3 - this.startTime) / 1000;
      switch (this.log("", "🔔" + this.name + ",结束!🕛" + _0xc0359 + "秒"), this.log(), this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        case "Quantumult X":
        default:
          $done(_0x4c8cdb);
          break;
        case "Node.js":
          process.exit(1);
      }
    }
  }(_0x22bad8, _0x11a7d7);
}
C笔记;