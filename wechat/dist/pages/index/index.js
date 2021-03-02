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
/* harmony import */ var _components_AddButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/AddButton */ "./src/components/AddButton/index.tsx");
/* harmony import */ var _components_LoginButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/LoginButton */ "./src/components/LoginButton/index.js");
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/app */ "./src/app.js");
/* harmony import */ var _assets_logo_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/assets/logo.png */ "./src/assets/logo.png");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./index.css */ "./src/pages/index/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var anna_remax_ui__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! anna-remax-ui */ "./node_modules/anna-remax-ui/esm/index.js");
/* harmony import */ var _hooks_wxPostRequest__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../hooks/wxPostRequest */ "./src/hooks/wxPostRequest.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }













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
  var _useUserInfo = Object(_hooks_useUserInfo__WEBPACK_IMPORTED_MODULE_4__["default"])(),
      _useUserInfo2 = _slicedToArray(_useUserInfo, 2),
      user = _useUserInfo2[0],
      login = _useUserInfo2[1]; // 登录按钮


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


  var _React$useState7 = react__WEBPACK_IMPORTED_MODULE_1__["useState"](),
      _React$useState8 = _slicedToArray(_React$useState7, 2),
      spys = _React$useState8[0],
      setSpys = _React$useState8[1]; // roomSetting


  var _React$useState9 = react__WEBPACK_IMPORTED_MODULE_1__["useState"](),
      _React$useState10 = _slicedToArray(_React$useState9, 2),
      blank = _React$useState10[0],
      setBlank = _React$useState10[1]; // roomSetting


  var _React$useState11 = react__WEBPACK_IMPORTED_MODULE_1__["useState"](),
      _React$useState12 = _slicedToArray(_React$useState11, 2),
      room_ID = _React$useState12[0],
      inputRoomID = _React$useState12[1]; // roomInfo


  var _React$useState13 = react__WEBPACK_IMPORTED_MODULE_1__["useState"](),
      _React$useState14 = _slicedToArray(_React$useState13, 2),
      room_password_user = _React$useState14[0],
      inputRoomPassword = _React$useState14[1]; // 玩家输入的密码，用来进入某房间


  var globalDatas = todo.globalData;
  Object(_remax_runtime__WEBPACK_IMPORTED_MODULE_0__["usePageEvent"])('onLoad', function () {
    wx.showLoading({
      title: '登录中',
      mask: true
    });
    console.log("---onLoad---");
    wxGetUserInfo.api.requestApi(1).then(function (res_userInfo) {
      //成功回调函数，已获取UserInfo信息
      var temp_data = {};
      temp_data.userInfo = res_userInfo.userInfo; // 获取用户ID

      return new Promise(function (resolve, reject) {
        wx.login({
          success: function success(res) {
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

              var responseFailFunc = function responseFailFunc() {
                wx.showToast({
                  title: '登录失败',
                  icon: 'none'
                });
              }; // console.log("run onLoad CallBack");


              Object(_hooks_wxPostRequest__WEBPACK_IMPORTED_MODULE_11__["default"])(WxLoginUrl, DefaultPostHeader, data, successFunc, requestFailFunc, responseFailFunc);
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
      console.log("updateUserInfo: ", data);
      Object(_hooks_wxPostRequest__WEBPACK_IMPORTED_MODULE_11__["default"])(UpdateUserInfoUrl, DefaultPostHeader, data);
    }).catch(function (res) {
      //失败回调函数
      wx.hideLoading();
      wx.showToast({
        title: res.data.msg,
        icon: 'none',
        duration: 2000
      });
    });
  }); // 输入房间设置信息，得到创建的房间ID, 然后再enterRoom进入该房间

  function createNewRoom(roomSetting) {
    var data = {};
    data.tempId = globalDatas.id;
    data.roomSetting = JSON.stringify(roomSetting);
    console.log("create new room: ", data); // 构建请求，得到roomID, 用roomID进入新房间

    var successFunc = function successFunc(resp) {
      console.log("create new room: ", resp); // 构建房间返回的数据，更新todo.roomInfo

      if (resp.Data != null) {
        inputRoomID(resp.Data);
        console.log("new room ID: ", room_ID);
        enterRoom();
      }
    };

    var requestFailFunc = function requestFailFunc() {
      wx.showToast({
        title: '服务器维护中',
        icon: 'none'
      });
    };

    var responseFailFunc = function responseFailFunc() {
      wx.showToast({
        title: '登录失败',
        icon: 'none'
      });
    };

    console.log("run onLoad CallBack");
    Object(_hooks_wxPostRequest__WEBPACK_IMPORTED_MODULE_11__["default"])(CreateNewRoomUrl, DefaultPostHeader, data, successFunc, requestFailFunc, responseFailFunc);
  } // 向API输入要加入房间的ID，得到房间roomInfo


  function enterRoom() {
    var data = {};
    data.tempId = globalDatas.id; // 用户ID

    data.roomID = room_ID; // 房间ID

    console.log("in a room: ", data);

    var successFunc = function successFunc(resp) {
      console.log("create new room: ", resp); // 构建房间返回的数据，更新todo.roomInfo

      if (resp.Data != null) {
        todo.setRoomInfo(resp.Data); // resp.Data信息需要轮询访问，每过一段时间访问一次

        inputRoomID(resp.Data);
        console.log("new room information: ", resp.Data);
      }
    };

    var requestFailFunc = function requestFailFunc() {
      wx.showToast({
        title: '服务器维护中',
        icon: 'none'
      });
    };

    var responseFailFunc = function responseFailFunc() {
      wx.showToast({
        title: '登录失败',
        icon: 'none'
      });
    };

    console.log("run onLoad CallBack");
    Object(_hooks_wxPostRequest__WEBPACK_IMPORTED_MODULE_11__["default"])(EnterRoomUrl, DefaultPostHeader, data, successFunc, requestFailFunc, responseFailFunc);
  }

  var handleCreate = function handleCreate() {
    var temp_items = todo.items; // items都可以删掉

    temp_items.userName = user ? user.nickName : "none";
    temp_items.playerNums = player_nums;
    temp_items.password = room_password_create;
    temp_items.loginSuccess = user ? true : false;
    todo.setItems(temp_items);
    var temp_roomSetting = todo.roomSetting;
    temp_roomSetting.total = player_nums;
    temp_roomSetting.spys = spys;
    temp_roomSetting.blank = blank;
    todo.setRoomSetting(temp_roomSetting);
    console.log("index| globaldata： ", todo.globalData);
    console.log("index| after setting, todo.roomSetting: ", todo.roomSetting);
    createNewRoom(temp_roomSetting); // 后端接口: 创建房间，返回房间ID，再利用ID从后端接口得到房间信息

    Object(remax_wechat__WEBPACK_IMPORTED_MODULE_2__["navigateTo"])({
      url: '../new/index'
    }); // 跳转链接应该使用promise？ 可以后来再实现promise,运行好createNewRoom之后才跳转
  }; // 进入房间


  var handleIn = function handleIn() {
    enterRoom(); // 利用ID从后端接口得到房间信息

    Object(remax_wechat__WEBPACK_IMPORTED_MODULE_2__["navigateTo"])({
      url: '../new/index'
    });
  };

  var ajaxTry = function ajaxTry() {
    var data = {};
    console.log("app globalData: ", globalDatas); // reuquirePost(WxLoginUrl,data);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "top-yellow-background"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "user"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_components_LoginButton__WEBPACK_IMPORTED_MODULE_6__["default"], {
    login: login
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["Image"], {
    className: "avatar",
    src: user != null ? user.avatar : _assets_logo_png__WEBPACK_IMPORTED_MODULE_8__["default"]
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "nickname"
  }, user ? user.nickName + " here" : "Please login!", user && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    className: "login-tip"
  }, "(Tap to login \u2191)"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](anna_remax_ui__WEBPACK_IMPORTED_MODULE_10__["Button"], {
    Plain: "primary",
    plain: "true",
    color: "black",
    onTap: ajaxTry
  }, "ajax"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "todo-footer"
  }, user && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_components_AddButton__WEBPACK_IMPORTED_MODULE_5__["default"], {
    text: "\u521B\u5EFA\u623F\u95F4",
    onClick: function onClick() {
      return setCount(2);
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](anna_remax_ui__WEBPACK_IMPORTED_MODULE_10__["Popup"], {
    open: count == 2,
    curve: "ease",
    onClose: function onClose() {
      setCount(1);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["View"], {
    style: {
      height: "700rpx",
      padding: "10rpx 25rpx",
      backgroundColor: "#323239"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    className: "InGame-text"
  }, "\u5F00\u59CB\u521B\u5EFA\u623F\u95F4:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["View"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    className: "InGame-small-text"
  }, "\u623F\u95F4\u4EBA\u6570:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["Input"], {
    className: "add-todo-input",
    placeholder: "number of players?",
    onInput: function onInput(e) {
      return setPlayerNums(parseInt(e.detail.value));
    },
    value: parseInt(player_nums)
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["View"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    className: "InGame-small-text"
  }, "\u8BBE\u7F6E\u5BC6\u7801"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["Input"], {
    className: "add-todo-input",
    placeholder: "please set password of your room",
    onInput: function onInput(e) {
      return setRoomPassword(e.detail.value);
    },
    value: room_password_create
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["View"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    className: "InGame-small-text"
  }, "\u767D\u677F\u4E2A\u6570"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["Input"], {
    className: "add-todo-input",
    placeholder: "please set blank nums",
    onInput: function onInput(e) {
      return setBlank(parseInt(e.detail.value));
    },
    value: parseInt(blank)
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["View"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    className: "InGame-small-text"
  }, "\u5367\u5E95\u4E2A\u6570"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["Input"], {
    className: "add-todo-input",
    placeholder: "please set password of your room",
    onInput: function onInput(e) {
      return setSpys(parseInt(e.detail.value));
    },
    value: parseInt(spys)
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](anna_remax_ui__WEBPACK_IMPORTED_MODULE_10__["Button"], {
    Plain: "primary",
    plain: "true",
    color: "black",
    onTap: handleCreate
  }, "\u521B\u5EFA\u623F\u95F4\uFF01")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "todo-footer"
  }, user && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_components_AddButton__WEBPACK_IMPORTED_MODULE_5__["default"], {
    text: "\u52A0\u5165\u623F\u95F4",
    onClick: function onClick() {
      return setCount(3);
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](anna_remax_ui__WEBPACK_IMPORTED_MODULE_10__["Popup"], {
    open: count == 3,
    curve: "ease",
    onClose: function onClose() {
      setCount(1);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["View"], {
    style: {
      height: "500rpx",
      padding: "10rpx 25rpx",
      backgroundColor: "#323239"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    className: "InGame-text"
  }, "\u623F\u95F4ID\u548C\u5BC6\u7801:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["View"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    className: "InGame-small-text"
  }, "\u623F\u95F4ID"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["Input"], {
    className: "add-todo-input",
    placeholder: "number of players?",
    onInput: function onInput(e) {
      return inputRoomID(e.detail.value);
    },
    value: room_ID
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["View"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    className: "InGame-small-text"
  }, "\u5BC6\u7801"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["Input"], {
    className: "add-todo-input",
    placeholder: "password of your room?",
    onInput: function onInput(e) {
      return inputRoomPassword(e.detail.value);
    },
    value: room_password_user
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](anna_remax_ui__WEBPACK_IMPORTED_MODULE_10__["Button"], {
    type: "primary",
    plain: true,
    color: "black",
    onTap: handleIn
  }, "\u8FDB\u5165")))));
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