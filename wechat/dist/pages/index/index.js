require('./../../runtime.js');
require('./../../remax-vendors.js');
require('./../../remax-styles.js');
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/index/index"],{

/***/ "./node_modules/clsx/dist/clsx.m.js":
/*!******************************************!*\
  !*** ./node_modules/clsx/dist/clsx.m.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function toVal(mix) {
  var k,
      y,
      str = '';

  if (typeof mix === 'string' || typeof mix === 'number') {
    str += mix;
  } else if (_typeof(mix) === 'object') {
    if (Array.isArray(mix)) {
      for (k = 0; k < mix.length; k++) {
        if (mix[k]) {
          if (y = toVal(mix[k])) {
            str && (str += ' ');
            str += y;
          }
        }
      }
    } else {
      for (k in mix) {
        if (mix[k]) {
          str && (str += ' ');
          str += k;
        }
      }
    }
  }

  return str;
}

/* harmony default export */ __webpack_exports__["default"] = (function () {
  var i = 0,
      tmp,
      x,
      str = '';

  while (i < arguments.length) {
    if (tmp = arguments[i++]) {
      if (x = toVal(tmp)) {
        str && (str += ' ');
        str += x;
      }
    }
  }

  return str;
});

/***/ }),

/***/ "./src/components/LoginButton/index.css":
/*!**********************************************!*\
  !*** ./src/components/LoginButton/index.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/LoginButton/index.js":
/*!*********************************************!*\
  !*** ./src/components/LoginButton/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var remax_wechat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! remax/wechat */ "./node_modules/remax/wechat.js");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.css */ "./src/components/LoginButton/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_2__);




var LoginButton = function LoginButton(_ref) {
  var login = _ref.login,
      children = _ref.children;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    className: "login-button",
    hoverClassName: "none",
    openType: "getUserInfo",
    onGetUserInfo: login
  }, children);
};

/* harmony default export */ __webpack_exports__["default"] = (LoginButton);

/***/ }),

/***/ "./src/components/ShineButton/index.css":
/*!**********************************************!*\
  !*** ./src/components/ShineButton/index.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/ShineButton/index.tsx":
/*!**********************************************!*\
  !*** ./src/components/ShineButton/index.tsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var remax_wechat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! remax/wechat */ "./node_modules/remax/wechat.js");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.css */ "./src/components/ShineButton/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_2__);




var AddButton = function AddButton(_ref) {
  var onClick = _ref.onClick,
      text = _ref.text;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    className: "add-button",
    hoverClassName: "none",
    onClick: onClick
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    className: "add-icon"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_1__["Text"], null, text));
};

/* harmony default export */ __webpack_exports__["default"] = (AddButton);

/***/ }),

/***/ "./src/hooks/useUserInfo.js":
/*!**********************************!*\
  !*** ./src/hooks/useUserInfo.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useUserInfo; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


function useUserInfo() {
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0__["useState"](null),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      userInfo = _React$useState2[0],
      setUserInfo = _React$useState2[1];

  function login(response) {
    var userInfo = response.detail.userInfo;
    userInfo.avatar = userInfo.avatarUrl;
    setUserInfo(response.detail.userInfo);
  }

  return [userInfo, login];
}

/***/ }),

/***/ "./src/hooks/wxGetUserInfo.js":
/*!************************************!*\
  !*** ./src/hooks/wxGetUserInfo.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 使用promise封装request
var api = {
  requestApi: function requestApi(num) {
    console.log(num);
    return new Promise(function (resolve, reject) {
      wx.getSetting({
        success: function success(res) {
          wx.hideLoading();
          console.log("WxGetUserInfo| res of getSetting: ", res);

          if (res.authSetting['scope.userInfo']) {
            wx.getUserInfo({
              success: function success(res) {
                resolve(res); // 将res信息作为正常回调         
              }
            });
          } else {
            wx.hideLoading();
          }
        },
        fail: function fail(res) {
          reject(res); //失败之后reject方法

          wx.hideLoading();
          wx.showToast({
            title: res.data.msg,
            icon: 'none',
            duration: 2000
          });
        }
      });
    });
  }
}; //导出我们封装好的方法

module.exports = {
  api: api
};

/***/ }),

/***/ "./src/pages/index/index.css":
/*!***********************************!*\
  !*** ./src/pages/index/index.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/index/index.entry.js":
/*!****************************************!*\
  !*** ./src/pages/index/index.entry.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _remax_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @remax/runtime */ "./node_modules/@remax/runtime/esm/index.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.js */ "./src/pages/index/index.js");


Page(Object(_remax_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_index_js__WEBPACK_IMPORTED_MODULE_1__["default"], 'pages/index/index'));

/***/ }),

/***/ "./src/pages/index/index.js":
/*!**********************************!*\
  !*** ./src/pages/index/index.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _remax_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @remax/runtime */ "./node_modules/@remax/runtime/esm/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var remax_wechat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! remax/wechat */ "./node_modules/remax/wechat.js");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _hooks_useUserInfo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../hooks/useUserInfo */ "./src/hooks/useUserInfo.js");
/* harmony import */ var _components_ShineButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/ShineButton */ "./src/components/ShineButton/index.tsx");
/* harmony import */ var _components_LoginButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/LoginButton */ "./src/components/LoginButton/index.js");
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/app */ "./src/app.js");
/* harmony import */ var _assets_logo_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/assets/logo.png */ "./src/assets/logo.png");
/* harmony import */ var _assets_none_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/assets/none.png */ "./src/assets/none.png");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./index.css */ "./src/pages/index/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var anna_remax_ui__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! anna-remax-ui */ "./node_modules/anna-remax-ui/esm/index.js");
/* harmony import */ var _hooks_wxPostRequest__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../hooks/wxPostRequest */ "./src/hooks/wxPostRequest.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }












 // import { Swiper, SwiperSlide } from 'swiper/react';


var DefaultPostHeader = {
  "Content-Type": "application/x-www-form-urlencoded"
};
var FilePostHeader = {
  "Content-Type": "multipart/form-data"
};
var JsonPostHeader = {
  "Content-Type": "application/json"
};
var TextPostHeader = {
  "Content-Type": "text/xml"
};
var server = "http://81.70.201.7:9205"; // http://81.70.201.7:9205/user/wx_login            

var WxLoginUrl = server + "/user/wx_login";
var UpdateUserInfoUrl = server + "/user/update_userInfo";
var CreateNewRoomUrl = server + "/room/new_room"; // http://81.70.201.7:9205/user/room/new_room

var EnterRoomUrl = server + "/room/enter_room";
var ExitRoomUrl = server + "/room/exit_room";
var RefreshRoomUrl = server + "/room/refresh_room";
var ReadyGameUrl = server + "/game/ready_game";
var StartGameUrl = server + "/game/start_game";
var EndGameUrl = server + "/game/end_game";
var RestartGameUrl = server + "/game/restart_game";

var wxGetUserInfo = __webpack_require__(/*! ../../hooks/wxGetUserInfo */ "./src/hooks/wxGetUserInfo.js");

/* harmony default export */ __webpack_exports__["default"] = (function () {
  var todo = react__WEBPACK_IMPORTED_MODULE_1__["useContext"](_app__WEBPACK_IMPORTED_MODULE_7__["TodoContext"]);

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1__["useState"](0),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      count = _React$useState2[0],
      setCount = _React$useState2[1]; // 用来控制Popup的出现和消失


  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_1__["useState"](''),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      room_password_create = _React$useState4[0],
      setRoomPassword = _React$useState4[1]; // 玩家设置的密码，用来创建某房间


  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_1__["useState"](),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      player_nums = _React$useState6[0],
      setPlayerNums = _React$useState6[1]; // roomSetting


  var _React$useState7 = react__WEBPACK_IMPORTED_MODULE_1__["useState"](1),
      _React$useState8 = _slicedToArray(_React$useState7, 2),
      spy_num = _React$useState8[0],
      setspy_num = _React$useState8[1]; // roomSetting


  var _React$useState9 = react__WEBPACK_IMPORTED_MODULE_1__["useState"](0),
      _React$useState10 = _slicedToArray(_React$useState9, 2),
      blank_num = _React$useState10[0],
      setblank_num = _React$useState10[1]; // roomSetting


  var _React$useState11 = react__WEBPACK_IMPORTED_MODULE_1__["useState"](),
      _React$useState12 = _slicedToArray(_React$useState11, 2),
      room_ID = _React$useState12[0],
      inputRoomID = _React$useState12[1]; // roomInfo


  var _React$useState13 = react__WEBPACK_IMPORTED_MODULE_1__["useState"](),
      _React$useState14 = _slicedToArray(_React$useState13, 2),
      room_password_user = _React$useState14[0],
      inputRoomPassword = _React$useState14[1]; // 玩家输入的密码，用来进入某房间


  var globalDatas = todo.globalData;
  Object(_remax_runtime__WEBPACK_IMPORTED_MODULE_0__["usePageEvent"])('onShareAppMessage', function (res) {
    console.log("转发！");

    if (res.from === 'button') {
      // 说明是通过邀请得到的
      return {
        title: '朋友邀请您玩谁是卧底！',
        path: 'pages/index/index?room_ID=' + todo.roomInformation.roomId,
        success: function success(res) {// 转发成功
        },
        fail: function fail(res) {// 转发失败
        }
      };
      console.log(res.target);
    } else {
      // 正常转发
      return {
        title: '朋友邀请您玩谁是卧底！',
        path: 'pages/index/index'
      };
    }
  });
  Object(_remax_runtime__WEBPACK_IMPORTED_MODULE_0__["usePageEvent"])('onHide', function (option) {
    console.log("-----on hide index---");
  });
  Object(_remax_runtime__WEBPACK_IMPORTED_MODULE_0__["usePageEvent"])('onUnload', function (option) {
    console.log("-----on un load index---");
  });
  Object(_remax_runtime__WEBPACK_IMPORTED_MODULE_0__["usePageEvent"])('onLoad', function (option) {
    console.log("============", option);
    wx.showLoading({
      title: '登录中',
      mask: true
    }); // 1 首先获取用户UserInfo

    wxGetUserInfo.api.requestApi(1).then(function (res_userInfo) {
      // 成功回调函数，已获取UserInfo信息(无后端交流)
      var temp_data = {};
      temp_data.userInfo = res_userInfo.userInfo; // 2 获取用户ID

      return new Promise(function (resolve, reject) {
        wx.login({
          success: function success(res) {
            // wx.hideLoading();
            if (res.code) {
              //发起网络请求
              var data = {
                code: res.code
              }; // 微信验证码

              var successFunc = function successFunc(resp) {
                console.log("2 ID: ", resp); // resp包括Data,Message,Success三部分

                if (resp.Data != null) {
                  temp_data.id = resp.Data;
                  console.log("2 now temp_data: ", temp_data);
                  resolve(temp_data);
                }
              };

              var requestFailFunc = function requestFailFunc() {
                wx.showToast({
                  title: '服务器维护中',
                  icon: 'none'
                });
              };

              var responseFailFunc = function responseFailFunc(message) {
                wx.showToast({
                  title: message,
                  icon: 'none'
                });
              };

              console.log("run onLoad CallBack");
              Object(_hooks_wxPostRequest__WEBPACK_IMPORTED_MODULE_12__["default"])(WxLoginUrl, DefaultPostHeader, data, successFunc, requestFailFunc, responseFailFunc, false);
            }
          },
          fail: function fail(res) {
            reject(res); //失败之后reject方法
          }
        });
      });
    }).then(function (res) {
      todo.setGlobalData(res); // 接下来更新用户信息，传入后端

      var data = {
        tempId: res.id,
        userInfo: JSON.stringify(res.userInfo)
      };
      console.log("用户信息: ", data);

      var successFunc = function successFunc(resp) {
        // 新加入的这个已经成功传入了
        if (option && option.room_ID) {
          // 判断用户是不是被邀请来的，如果是，就直接进入房间
          wx.showToast({
            title: '您想进入房间' + option.room_ID,
            icon: 'none'
          });
          console.log(res.id, " 正在尝试进入的房间 ", option.room_ID);
          inputRoomID(option.room_ID);
          var _data = {
            id: res.id,
            userInfo: res.userInfo
          };
          todo.setGlobalData(_data);
          refreshGame_before_enter(option.room_ID, res.id); // 涉及到如果房间id失效
        } else {
          // 用户不是被邀请进来的
          // 
          refreshGame_before_enter(null, res.id); // 涉及到，如果房间id失效
        }
      };

      var requestFailFunc = function requestFailFunc() {
        wx.showToast({
          title: '服务器维护中',
          icon: 'none'
        });
      };

      var responseFailFunc = function responseFailFunc(message) {
        wx.showToast({
          title: message,
          icon: 'none'
        });
      };

      Object(_hooks_wxPostRequest__WEBPACK_IMPORTED_MODULE_12__["default"])(UpdateUserInfoUrl, DefaultPostHeader, data, successFunc, requestFailFunc, responseFailFunc, false);
    }).catch(function (res) {
      //失败回调函数
      // wx.hideLoading()
      wx.showToast({
        title: res.data.msg,
        icon: 'none',
        duration: 2000
      });
    });
  });

  function refreshGame_before_enter(res_roomid, res_userid) {
    // 更新信息，应该是有任何一个页面的行为都应该调用这个链接
    var data = {};
    data.tempId = res_userid; // 用户ID

    console.log("refresh请求数据：", data);

    var successFunc = function successFunc(resp) {
      console.log("refresh返回数据: ", resp);

      if (resp.Data != null && resp.Data.roomInfo != null) {
        // 属于某房间，直接跳转
        var new_data = {
          "roomId": res_roomid,
          "roomInfo": resp.Data.roomInfo
        };
        todo.setRoomInfo(new_data);
        console.log("找到了属于的房间，正在进入");
        Object(remax_wechat__WEBPACK_IMPORTED_MODULE_2__["navigateTo"])({
          url: '../new/index'
        });
      } else {
        // 不属于任何房间
        console.log("本身不在房间，需要enter进入");

        if (res_roomid) {
          // 有邀请链接
          enterRoom(res_roomid, res_userid);
        } else {
          console.log("本人refresh后发现不属于任何房间，且没受邀请"); // 没有邀请链接
        }
      }
    };

    var requestFailFunc = function requestFailFunc() {
      wx.showToast({
        title: '服务器维护中',
        icon: 'none'
      });
    };

    var responseFailFunc = function responseFailFunc(message) {
      // refresh之后发现
      wx.showToast({
        title: '房间ID失效了',
        icon: 'none'
      });
      console.log(message);
      console.log("enter前的refresh失败");

      if (res_roomid) {
        console.log("但是被邀请了，refresh false也要尝试进入房间啊");
        enterRoom(res_roomid, res_userid);
      }
    };

    Object(_hooks_wxPostRequest__WEBPACK_IMPORTED_MODULE_12__["default"])(RefreshRoomUrl, DefaultPostHeader, data, successFunc, requestFailFunc, responseFailFunc, false);
  }

  function refreshGame_before_create(res_userid, res_roomSetting) {
    // 更新信息，应该是有任何一个页面的行为都应该调用这个链接
    // 判断用户是不是在房间里，refresh如果不返回null，则跳转，否则创建
    var data = {};
    data.tempId = res_userid;
    wx.showLoading({
      title: '更新房间信息中'
    });
    console.log("refresh请求数据：", data);

    var successFunc = function successFunc(resp) {
      // refresh后发现user在房间里，能得到这种信息，则直接进入
      console.log("refresh返回数据: ", resp);

      if (resp.Data != null && resp.Data.roomInfo != null) {
        // 更新发现可以收到房间的info，直接跳转
        var new_data = {
          "roomId": todo.roomInformation.roomId,
          "roomInfo": resp.Data.roomInfo
        };
        todo.setRoomInfo(new_data);
        Object(remax_wechat__WEBPACK_IMPORTED_MODULE_2__["navigateTo"])({
          url: '../new/index'
        });
      } else {
        // 收不到房间info,说明用户没在房间里面, 则正常create房间
        console.log("create发现用户没在房间，则调用create");
        createNewRoom(res_roomSetting);
      }

      wx.hideLoading();
    };

    var requestFailFunc = function requestFailFunc() {
      wx.showToast({
        title: '服务器维护中',
        icon: 'none'
      });
    };

    var responseFailFunc = function responseFailFunc(message) {
      // refresh之后发现
      wx.showToast({
        title: '房间ID失效',
        icon: 'none'
      });
      console.log("create前的refresh失败");
      console.log("refresh false也要创建房间啊");
      console.log(message);
      createNewRoom(res_roomSetting);
    };

    Object(_hooks_wxPostRequest__WEBPACK_IMPORTED_MODULE_12__["default"])(RefreshRoomUrl, DefaultPostHeader, data, successFunc, requestFailFunc, responseFailFunc, false);
  } // 输入房间设置信息，得到创建的房间ID, 然后再enterRoom进入该房间


  function createNewRoom(roomSetting) {
    var data = {};
    data.tempId = globalDatas.id; // 用户ID

    data.roomSetting = JSON.stringify(roomSetting);
    console.log("create room申请数据： ", data); // 构建请求，得到roomID, 用roomID进入新房间

    var successFunc = function successFunc(resp) {
      console.log("create room返回数据: ", resp); // 构建房间返回的数据，更新todo.roomInfo

      if (resp.Data != null && resp.Data.roomId != null) {
        todo.setRoomInfo(resp.Data);
        Object(remax_wechat__WEBPACK_IMPORTED_MODULE_2__["navigateTo"])({
          url: '../new/index'
        });
      }
    };

    var requestFailFunc = function requestFailFunc() {
      wx.showToast({
        title: '服务器维护中',
        icon: 'none'
      });
    };

    var responseFailFunc = function responseFailFunc(message) {
      wx.showToast({
        title: '创建房间失败',
        icon: 'none'
      });
      console.log(message);
      console.log("create 失败了");
    };

    Object(_hooks_wxPostRequest__WEBPACK_IMPORTED_MODULE_12__["default"])(CreateNewRoomUrl, DefaultPostHeader, data, successFunc, requestFailFunc, responseFailFunc, false);
  } // 向API输入要加入房间的ID，得到房间roomInfo


  function enterRoom(id_of_room, userid) {
    var data = {};
    data.tempId = userid; // 用户ID

    data.roomId = id_of_room;
    console.log("enter room 申请数据: ", data);

    var successFunc = function successFunc(resp) {
      console.log("enter room返回数据: ", resp);

      if (resp.Data != null) {
        // 进入房间成功，并更新房间信息
        resp.Data.roomId = id_of_room;
        todo.setRoomInfo(resp.Data);
        console.log("这时候跳转界面", resp.Data);
        Object(remax_wechat__WEBPACK_IMPORTED_MODULE_2__["navigateTo"])({
          url: '../new/index'
        });
      } else {
        // 没有返回数据，不进入房间了吧
        // navigateTo({ url: '../new/index'}); 
        console.log("enter room没返回数据！！！！");
      }
    };

    var requestFailFunc = function requestFailFunc() {
      wx.showToast({
        title: 'enterRoom服务器维护中',
        icon: 'none'
      });
    };

    var responseFailFunc = function responseFailFunc(message) {
      wx.showToast({
        title: message,
        icon: 'none'
      });
    };

    Object(_hooks_wxPostRequest__WEBPACK_IMPORTED_MODULE_12__["default"])(EnterRoomUrl, DefaultPostHeader, data, successFunc, requestFailFunc, responseFailFunc);
  }

  var handleCreate = function handleCreate() {
    // 先refresh以下，然后判断
    setCount(1);
    var temp_roomSetting = todo.roomSetting;
    temp_roomSetting.total_num = player_nums;
    temp_roomSetting.spy_num = spy_num;
    temp_roomSetting.blank_num = blank_num;
    refreshGame_before_create(globalDatas.id, temp_roomSetting);
  }; // 进入房间


  var handleIn = function handleIn() {
    if (todo.onGame) {
      // 用户在游戏中
      wx.showToast({
        title: '您正在游戏中,正在为您返回该房间',
        icon: 'none'
      });
      Object(remax_wechat__WEBPACK_IMPORTED_MODULE_2__["navigateTo"])({
        url: '../new/index'
      }); // promise 这里也应该是先赋值后再navigate
    } else {
      enterRoom(); // 利用ID从后端接口得到房间信息
    }
  };

  var ajaxTry = function ajaxTry() {
    var data = {};
    console.log("app globalData: ", globalDatas);
    console.log("room information: ", todo.roomInformation); // reuquirePost(WxLoginUrl,data);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "top-yellow-background"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "user"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_components_LoginButton__WEBPACK_IMPORTED_MODULE_6__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["Image"], {
    className: "avatar",
    src: globalDatas.userInfo != null ? globalDatas.userInfo.avatarUrl : _assets_logo_png__WEBPACK_IMPORTED_MODULE_8__["default"]
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "nickname"
  }, globalDatas.userInfo ? globalDatas.userInfo.nickName + " here" : "稍等正在登录~")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "todo-footer"
  }, globalDatas.userInfo && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_components_ShineButton__WEBPACK_IMPORTED_MODULE_5__["default"], {
    text: "\u521B\u5EFA\u623F\u95F4",
    onClick: function onClick() {
      return setCount(2);
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](anna_remax_ui__WEBPACK_IMPORTED_MODULE_11__["Popup"], {
    open: todo.onGame,
    curve: "ease",
    onClose: function onClose() {}
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["View"], {
    style: {
      height: "400rpx",
      width: "600rpx",
      padding: "10rpx 25rpx",
      backgroundColor: "#323239"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["View"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    className: "InGame-white-text"
  }, "\u68C0\u6D4B\u51FA\u60A8\u8FD8\u5728\u623F\u95F4\u91CC ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    className: "InGame-small-white-text"
  }, "\u82E5\u60F3\u9000\u51FA\uFF0C\u8BF7\u5148\u8FD4\u56DE\u623F\u95F4\uFF0C\u518D\u70B9\u51FB\u79BB\u5F00\u6309\u94AE"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "normal_stepper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_components_ShineButton__WEBPACK_IMPORTED_MODULE_5__["default"], {
    text: "\u8FD4\u56DE\u623F\u95F4",
    onClick: handleIn
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](anna_remax_ui__WEBPACK_IMPORTED_MODULE_11__["Popup"], {
    open: count == 2,
    curve: "ease",
    onClose: function onClose() {
      setCount(1);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["View"], {
    style: {
      height: "600rpx",
      width: "400rpx",
      padding: "10rpx 25rpx",
      backgroundColor: "#323239"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    className: "InGame-text"
  }, "\u5F00\u59CB\u521B\u5EFA\u623F\u95F4: "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "normal_stepper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    className: "InGame-small-text"
  }, "\u623F\u95F4\u4EBA\u6570: "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](anna_remax_ui__WEBPACK_IMPORTED_MODULE_11__["Stepper"], {
    plain: true,
    value: player_nums,
    onChange: function onChange(val) {
      return setPlayerNums(parseInt(val));
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "normal_stepper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    className: "InGame-small-text"
  }, "\u767D\u677F\u4E2A\u6570: "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](anna_remax_ui__WEBPACK_IMPORTED_MODULE_11__["Stepper"], {
    plain: true,
    value: blank_num,
    min: 0,
    max: player_nums - 1,
    onChange: function onChange(val) {
      return setblank_num(parseInt(val));
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "normal_stepper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    className: "InGame-small-text"
  }, "\u5367\u5E95\u4E2A\u6570: "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](anna_remax_ui__WEBPACK_IMPORTED_MODULE_11__["Stepper"], {
    plain: true,
    value: spy_num,
    min: 1,
    max: player_nums - 1 - blank_num,
    onChange: function onChange(val) {
      return setspy_num(parseInt(val));
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "normal_stepper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](anna_remax_ui__WEBPACK_IMPORTED_MODULE_11__["Button"], {
    Plain: "primary",
    plain: "true",
    color: "black",
    onTap: handleCreate
  }, "\u521B\u5EFA\u623F\u95F4\uFF01"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "bottom"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("swiper", {
    "indicator-dots": "true",
    circular: "true",
    autoplay: "true",
    width: "100%",
    interval: "2000",
    duration: "500",
    current: "0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("swiper-item", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["Image"], {
    src: "http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg",
    mode: "widthFix"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("swiper-item", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["Image"], {
    src: "http://bing.getlove.cn/bingImage",
    width: "100%"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("swiper-item", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["Image"], {
    src: _assets_none_png__WEBPACK_IMPORTED_MODULE_9__["default"],
    width: "100%"
  })))));
});

/***/ }),

/***/ 1:
/*!**********************************************!*\
  !*** multi ./src/pages/index/index.entry.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\WORKSPACE\Tecent\remax\examples-master\wechat\src\pages\index\index.entry.js */"./src/pages/index/index.entry.js");


/***/ })

},[[1,"runtime","remax-vendors","remax-styles"]]]);