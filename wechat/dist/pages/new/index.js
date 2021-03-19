require('./../../runtime.js');
require('./../../remax-vendors.js');
require('./../../remax-styles.js');
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/new/index"],{

/***/ "./src/components/AddButton/index.css":
/*!********************************************!*\
  !*** ./src/components/AddButton/index.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/AddButton/index.tsx":
/*!********************************************!*\
  !*** ./src/components/AddButton/index.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var remax_wechat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! remax/wechat */ "./node_modules/remax/wechat.js");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.css */ "./src/components/AddButton/index.css");
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

/***/ "./src/pages/new/answer-card.js":
/*!**************************************!*\
  !*** ./src/pages/new/answer-card.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var remax_wechat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! remax/wechat */ "./node_modules/remax/wechat.js");
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/app */ "./src/app.js");
/* harmony import */ var anna_remax_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! anna-remax-ui */ "./node_modules/anna-remax-ui/esm/index.js");
/* harmony import */ var _assets_logo_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/assets/logo.png */ "./src/assets/logo.png");
/* harmony import */ var _assets_none_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/assets/none.png */ "./src/assets/none.png");
/* harmony import */ var _hooks_wxPostRequest__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../hooks/wxPostRequest */ "./src/hooks/wxPostRequest.js");






 // var default_user_Info = {open_id:"#1",nick_name:"",avatar_url:none,state:"",word:"",role:"",number:null};

var userProductInfo = [{
  title: "答案：",
  // + 房间ID 
  specialBottom: {
    imageSrc: "/images/all.png",
    description: "等待玩家重新开始游戏"
  }
}];

function MyCardAndPic(props) {
  var todo = react__WEBPACK_IMPORTED_MODULE_0___default.a.useContext(_app__WEBPACK_IMPORTED_MODULE_2__["TodoContext"]);
  var roomInfo = todo.roomInformation.roomInfo;
  var flexWidthClass = "flex-width-1";
  var tmp_images_not_full = [];

  for (var i = 0; i < roomInfo.player_list.length; i++) {
    //循环LIST，实现浅拷贝
    var veh = roomInfo.player_list[i];
    tmp_images_not_full.push(veh);
  }

  var myPicImage = tmp_images_not_full.map(function (date) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(remax_wechat__WEBPACK_IMPORTED_MODULE_1__["View"], {
      key: date.open_id,
      className: flexWidthClass,
      __key: date.open_id
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(remax_wechat__WEBPACK_IMPORTED_MODULE_1__["View"], {
      className: "img-view"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(remax_wechat__WEBPACK_IMPORTED_MODULE_1__["Image"], {
      className: "myPic-image-answer",
      src: date.avatar_url
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(remax_wechat__WEBPACK_IMPORTED_MODULE_1__["View"], null, date.nick_name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(remax_wechat__WEBPACK_IMPORTED_MODULE_1__["View"], null, date.word));
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(remax_wechat__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "special-bottom"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(remax_wechat__WEBPACK_IMPORTED_MODULE_1__["View"], null, myPicImage), "  ");
}

/* harmony default export */ __webpack_exports__["default"] = (function () {
  var MyCardAndPics = userProductInfo.map(function (date) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MyCardAndPic, {
      key: date.title,
      title: date.title,
      arrayImage: date.arrayImage,
      specialBottom: date.specialBottom
    });
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(remax_wechat__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "card rule-card"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(remax_wechat__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "white-text"
  }, "\u7B54\u6848:"), MyCardAndPics);
});

/***/ }),

/***/ "./src/pages/new/first-card.js":
/*!*************************************!*\
  !*** ./src/pages/new/first-card.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var remax_wechat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! remax/wechat */ "./node_modules/remax/wechat.js");
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/app */ "./src/app.js");
/* harmony import */ var anna_remax_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! anna-remax-ui */ "./node_modules/anna-remax-ui/esm/index.js");
/* harmony import */ var _assets_logo_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/assets/logo.png */ "./src/assets/logo.png");
/* harmony import */ var _assets_none_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/assets/none.png */ "./src/assets/none.png");
/* harmony import */ var _hooks_wxPostRequest__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../hooks/wxPostRequest */ "./src/hooks/wxPostRequest.js");






 // var default_user_Info = {open_id:"#1",nick_name:"",avatar_url:none,state:"",word:"",role:"",number:null};

var userProductInfo = [{
  title: "房间",
  // + 房间ID 
  specialBottom: {
    imageSrc: "/images/all.png",
    description: "请等玩家都准备好再开始游戏"
  }
}];

function MyCardAndPic(props) {
  var todo = react__WEBPACK_IMPORTED_MODULE_0___default.a.useContext(_app__WEBPACK_IMPORTED_MODULE_2__["TodoContext"]);
  var roomInfo = todo.roomInformation.roomInfo;
  var flexWidthClass = roomInfo.room_setting.total_num >= 4 ? "flex-width-4" : "flex-width-3"; // 得到用户nick_name, avatar信息等

  var tmp_images_not_full = []; // tmp_images_not_full = roomInfo.player_list; // 如果像这样直接赋值，就会改变roomInfo的内容，因为赋值成了地址（深拷贝

  for (var i = 0; i < roomInfo.player_list.length; i++) {
    //循环LIST，实现浅拷贝
    var veh = roomInfo.player_list[i];
    tmp_images_not_full.push(veh);
  }

  var num_diff = roomInfo.room_setting.total_num - roomInfo.player_list.length;

  if (num_diff <= 0) {
    // 房间已经满了  
    console.log("房间满了", roomInfo.player_list.length);
  } else {
    // 房间没有满
    for (var i = 0; i < num_diff; i++) {
      var default_user_Info = {
        open_id: i,
        nick_name: "空座位",
        avatar_url: _assets_none_png__WEBPACK_IMPORTED_MODULE_5__["default"],
        state: "",
        word: "",
        role: "",
        number: null
      };
      tmp_images_not_full.push(default_user_Info); // 房间没满，硬生生增添几个人数
    }
  }

  var myPicImage = tmp_images_not_full.map(function (date) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(remax_wechat__WEBPACK_IMPORTED_MODULE_1__["View"], {
      key: date.open_id,
      className: flexWidthClass,
      __key: date.open_id
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(remax_wechat__WEBPACK_IMPORTED_MODULE_1__["View"], {
      className: "img-view"
    }, date.state == "Ready" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(remax_wechat__WEBPACK_IMPORTED_MODULE_1__["Image"], {
      className: "myPic-image-ready",
      src: date.avatar_url == "null" ? _assets_logo_png__WEBPACK_IMPORTED_MODULE_4__["default"] : date.avatar_url
    }), date.state != "Ready" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(remax_wechat__WEBPACK_IMPORTED_MODULE_1__["Image"], {
      className: "myPic-image",
      src: date.avatar_url == "null" ? _assets_logo_png__WEBPACK_IMPORTED_MODULE_4__["default"] : date.avatar_url
    }), date.state == "Ready" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(anna_remax_ui__WEBPACK_IMPORTED_MODULE_3__["Icon"], {
      type: "roundcheck",
      size: "25px",
      color: "#a8f55fe7"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(remax_wechat__WEBPACK_IMPORTED_MODULE_1__["View"], null, date.nick_name)));
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(remax_wechat__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "myCard"
  }, myPicImage);
}

/* harmony default export */ __webpack_exports__["default"] = (function () {
  var MyCardAndPics = userProductInfo.map(function (date) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MyCardAndPic, {
      key: date.title,
      title: date.title,
      arrayImage: date.arrayImage,
      specialBottom: date.specialBottom
    });
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(remax_wechat__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "first-card"
  }, MyCardAndPics);
});

/***/ }),

/***/ "./src/pages/new/index.css":
/*!*********************************!*\
  !*** ./src/pages/new/index.css ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/new/index.entry.js":
/*!**************************************!*\
  !*** ./src/pages/new/index.entry.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _remax_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @remax/runtime */ "./node_modules/@remax/runtime/esm/index.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.js */ "./src/pages/new/index.js");


Page(Object(_remax_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_index_js__WEBPACK_IMPORTED_MODULE_1__["default"], 'pages/new/index'));

/***/ }),

/***/ "./src/pages/new/index.js":
/*!********************************!*\
  !*** ./src/pages/new/index.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _remax_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @remax/runtime */ "./node_modules/@remax/runtime/esm/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var remax_wechat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! remax/wechat */ "./node_modules/remax/wechat.js");
/* harmony import */ var _components_AddButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/AddButton */ "./src/components/AddButton/index.tsx");
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/app */ "./src/app.js");
/* harmony import */ var anna_remax_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! anna-remax-ui */ "./node_modules/anna-remax-ui/esm/index.js");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./index.css */ "./src/pages/new/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _first_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./first-card */ "./src/pages/new/first-card.js");
/* harmony import */ var _second_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./second-card */ "./src/pages/new/second-card.js");
/* harmony import */ var _answer_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./answer-card */ "./src/pages/new/answer-card.js");
/* harmony import */ var _rules_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./rules-card */ "./src/pages/new/rules-card.js");
/* harmony import */ var _hooks_wxPostRequest__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../hooks/wxPostRequest */ "./src/hooks/wxPostRequest.js");
/* harmony import */ var _assets_logo_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @/assets/logo.png */ "./src/assets/logo.png");
/* harmony import */ var _assets_none_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @/assets/none.png */ "./src/assets/none.png");
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
var interval = null;
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var todo = react__WEBPACK_IMPORTED_MODULE_1__["useContext"](_app__WEBPACK_IMPORTED_MODULE_4__["TodoContext"]); // back

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1__["useState"](100),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      test = _React$useState2[0],
      setTest = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_1__["useState"](false),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      seeAnswer = _React$useState4[0],
      setSeeAnswer = _React$useState4[1]; // const [roomInformation,setRoomInfo] = React.use


  var roomInformation = todo.roomInformation;
  var userId = todo.globalData.id;
  Object(_remax_runtime__WEBPACK_IMPORTED_MODULE_0__["usePageEvent"])('onShareAppMessage', function (res) {
    console.log("转发！");

    if (res.from === 'button') {
      // 说明是通过邀请得到的
      return {
        title: '朋友邀请您玩谁是卧底！',
        path: 'pages/index/index?room_ID=' + roomInformation.roomId,
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
  Object(_remax_runtime__WEBPACK_IMPORTED_MODULE_0__["usePageEvent"])('onLoad', function (option) {
    console.log(" on game!~~~");
    startInter();

    if (!todo.onGame) {
      // 没有游戏中的话
      todo.setOnGame(true);
    }
  });
  Object(_remax_runtime__WEBPACK_IMPORTED_MODULE_0__["usePageEvent"])('onHide', function (option) {
    console.log("-------------new 页面hide------------");
  });
  Object(_remax_runtime__WEBPACK_IMPORTED_MODULE_0__["usePageEvent"])('onUnload', function (option) {
    console.log("-------------new 页面unload------------");
    stopInter(); // todo.setOnGame(true);
  });

  var leaveHome = function leaveHome() {
    // 离开房间后再进入，todo可能对它就是null了，因此最好refresh一下
    // 判断状态是否是ready, 如果是，则调用ready_game, 然后再调用exit
    var find = false;

    for (var i = 0; i < roomInformation.roomInfo.player_list.length; i++) {
      //循环LIST，实现浅拷贝
      var veh = roomInformation.roomInfo.player_list[i];
      console.log("对比", veh.nick_name, " ", todo.globalData.userInfo.nick_name);

      if (veh.nick_name == todo.globalData.userInfo.nickName) {
        // 其实不应该判断用户的nick_name
        // return veh.open_id == "Ready";
        find = true;
        console.log("找到了这个用户");

        if (veh.state == "Ready") {
          console.log("it was ready");
          var data = {};
          data.tempId = userId;
          console.log("执行ready");

          var successFunc = function successFunc(resp) {
            console.log("执行exit!");
            normalPost(ExitRoomUrl);
          };

          Object(_hooks_wxPostRequest__WEBPACK_IMPORTED_MODULE_11__["default"])(ReadyGameUrl, DefaultPostHeader, data, successFunc);
        } else {
          normalPost(ExitRoomUrl); //如果没有准备，就可以直接离开游戏
        }

        break;
      }
    }

    Object(remax_wechat__WEBPACK_IMPORTED_MODULE_2__["navigateBack"])();
    todo.setOnGame(false);
    console.log("是否在游戏中:", todo.onGame);

    if (!find) {
      console.log("你没在这个房间里");
      normalPost(ExitRoomUrl);
    }

    stopInter();
  };

  var handleRefresh = function handleRefresh() {
    refreshGame();
  };

  var beginGame = function beginGame() {
    normalPost(StartGameUrl);
    refreshGame();
  };

  var readyGame = function readyGame() {
    console.log("ready game"); // 放一个加圈圈的

    wx.showToast({
      title: '操作成功',
      icon: 'true'
    });
    normalPost(ReadyGameUrl);
    refreshGame();
  }; // 在房主结束游戏, 显示房间的卧底牌


  var endGame = function endGame() {
    normalPost(EndGameUrl); // stopInter();
    // navigateBack();
    // todo.setOnGame(false);
  };

  var changeWord = function changeWord() {
    normalPost(RestartGameUrl);
    refreshGame();
  };

  var changeState = function changeState() {
    console.log("---change state: ---");
    var tmp_info = {};
    tmp_info.roomId = roomInformation.roomId;
    tmp_info.roomInfo = roomInformation.roomInfo;

    if (tmp_info.roomInfo.state == "Ready") {
      console.log("Clearing");
      tmp_info.roomInfo.state = "Clear";
    } else if (tmp_info.roomInfo.state == "Clear") {
      console.log("playing");
      tmp_info.roomInfo.state = "Playing";
    } else {
      tmp_info.roomInfo.state = "Ready";
      console.log("Ready");
    }

    todo.setRoomInfo(tmp_info);
  };

  var isNotBegin = function isNotBegin() {
    // 如果房间的状态等于playing
    if (roomInformation.roomInfo.state == "Ready" || roomInformation.roomInfo.state == "Clear") {
      return false;
    } else {
      return true;
    }
  };

  var returnYourWord = function returnYourWord() {
    for (var i = 0; i < roomInformation.roomInfo.player_list.length; i++) {
      //循环LIST，实现浅拷贝
      var veh = roomInformation.roomInfo.player_list[i];

      if (veh.open_id == userId || veh.nick_name == todo.globalData.userInfo.nickName) {
        // 其实不应该判断用户的nick_name
        // return veh.open_id == "Ready";
        return veh.word;
      }
    }

    console.log("没有找到您的词");
    return "?";
  };

  var isReady = function isReady() {
    // 找到用户，并且判断状态
    for (var i = 0; i < roomInformation.roomInfo.player_list.length; i++) {
      //循环LIST，实现浅拷贝
      var veh = roomInformation.roomInfo.player_list[i];

      if (veh.open_id == userId || veh.nick_name == todo.globalData.userInfo.nickName) {
        // 其实不应该判断用户的nick_name
        // return veh.open_id == "Ready";
        console.log("找到了这个用户");

        if (veh.state == "Ready") {
          console.log("用户的状态是ready,现在取消准备");
          return "取消准备";
        } else {
          console.log("用户还没准备，马上！");
          return "准备";
        }
      }
    } // // 没有从玩家列表中找到用户这个人
    // wx.showLoading({
    //   title: '抱歉您暂时不属于这个房间',
    //   mask: true
    // });


    return "观战ing";
  };

  var changeRoot = function changeRoot() {
    // react只要props改变，就会重新渲染
    var tmp_info = {}; // 只要setTest里面赋的值拥有的是新的地址，就可以即使渲染。但如果直接等于indexRoomInfo，则不会导致渲染

    tmp_info.roomId = roomInformation.roomId;
    tmp_info.roomInfo = roomInformation.roomInfo;

    if (tmp_info.roomInfo.master_open_id == userId) {
      tmp_info.roomInfo.master_open_id = "00000";
    } else {
      tmp_info.roomInfo.master_open_id = userId;
    } // setIndexRoomInfo(tmp_info);  


    console.log("change root了");
    todo.setRoomInfo(tmp_info);
  };

  var getRoonInfo = function getRoonInfo() {
    console.log(roomInformation);
  };

  var addPeople = function addPeople() {
    var tmp_info = {}; // 只要setTest里面赋的值拥有的是新的地址，就可以即使渲染。但如果直接等于indexRoomInfo，则不会导致渲染

    tmp_info.roomId = roomInformation.roomId;
    tmp_info.roomInfo = roomInformation.roomInfo;
    var userLists = tmp_info.roomInfo.player_list;
    userLists.push({
      open_id: test,
      nick_name: "beauty",
      avatar_url: _assets_logo_png__WEBPACK_IMPORTED_MODULE_12__["default"],
      state: "Ready",
      word: "",
      role: "",
      number: null
    });
    setTest(test + 1); // 加上这个就会多刷新一次, 但是临时增加的人的id不会重复

    tmp_info.roomInfo.player_list = userLists;
    todo.setRoomInfo(tmp_info);
    console.log("add people");
  };

  function normalPost(url) {
    var data = {};
    data.tempId = userId;
    Object(_hooks_wxPostRequest__WEBPACK_IMPORTED_MODULE_11__["default"])(url, DefaultPostHeader, data);
  }

  function refreshGame() {
    // 更新信息，应该是有任何一个页面的行为都应该调用这个链接
    var data = {};
    data.tempId = userId; // 用户ID

    var successFunc = function successFunc(resp) {
      console.log("refresh请求数据：", data);
      console.log("refresh返回数据: ", resp);

      if (resp.Data != null) {
        var new_data = {
          "roomId": roomInformation.roomId,
          "roomInfo": resp.Data.roomInfo
        };
        todo.setRoomInfo(new_data);
        console.log("------房间状态: ", roomInformation.roomInfo.state, "--> new data: ", new_data.roomInfo.state);
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

    Object(_hooks_wxPostRequest__WEBPACK_IMPORTED_MODULE_11__["default"])(RefreshRoomUrl, DefaultPostHeader, data, successFunc, requestFailFunc, responseFailFunc, true);
  }

  function startInter() {
    if (interval) {
      clearInterval(interval);
      interval = null;
    }

    interval = setInterval(refreshGame, 1100); //启动计时器，调用overs函数，

    console.log("启动轮询访问--");
  }

  function stopInter() {
    console.log("停止轮询访问--");
    clearInterval(interval);
    interval = null;
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "total-content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "top-yellow-background"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_first_card__WEBPACK_IMPORTED_MODULE_7__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "mid-content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "mid-button-content"
  }, roomInformation.roomInfo.is_master ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](anna_remax_ui__WEBPACK_IMPORTED_MODULE_5__["Button"], {
    size: "superlarge",
    disabled: isNotBegin(),
    onTap: beginGame
  }, "\u5F00\u59CB") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](anna_remax_ui__WEBPACK_IMPORTED_MODULE_5__["Button"], {
    size: "superlarge",
    disabled: roomInformation.roomInfo.state == "Playing",
    onTap: readyGame
  }, isReady())), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "mid-draw-content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "staff"
  }), roomInformation.roomInfo.state == "Playing" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_second_card__WEBPACK_IMPORTED_MODULE_8__["default"], null), roomInformation.roomInfo.state == "Clear" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_answer_card__WEBPACK_IMPORTED_MODULE_9__["default"], null), roomInformation.roomInfo.state != "Playing" && roomInformation.roomInfo.state != "Clear" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_rules_card__WEBPACK_IMPORTED_MODULE_10__["default"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_first_card__WEBPACK_IMPORTED_MODULE_7__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "low-content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "buttons-view"
  }, roomInformation.roomInfo.is_master && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](anna_remax_ui__WEBPACK_IMPORTED_MODULE_5__["Button"], {
    plain: true,
    color: "#d1cdda",
    size: "large",
    disabled: roomInformation.roomInfo.state != "Playing",
    onTap: changeWord,
    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](anna_remax_ui__WEBPACK_IMPORTED_MODULE_5__["Icon"], {
      type: "forwardfill",
      size: "85px",
      color: "#d1cdda"
    })
  }, " \u6362\u8BCD"), roomInformation.roomInfo.is_master && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](anna_remax_ui__WEBPACK_IMPORTED_MODULE_5__["Button"], {
    plain: true,
    color: "#d1cdda",
    size: "large",
    disabled: roomInformation.roomInfo.state != "Playing",
    onTap: endGame,
    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](anna_remax_ui__WEBPACK_IMPORTED_MODULE_5__["Icon"], {
      type: "creativefill",
      size: "85px",
      color: "#d1cdda"
    })
  }, "\u7B54\u6848"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](anna_remax_ui__WEBPACK_IMPORTED_MODULE_5__["Button"], {
    plain: true,
    color: "#d1cdda",
    size: "large",
    disabled: roomInformation.roomInfo.state == "Playing",
    onTap: leaveHome,
    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](anna_remax_ui__WEBPACK_IMPORTED_MODULE_5__["Icon"], {
      type: "exit",
      size: "85px",
      color: "#d1cdda"
    })
  }, "\u9000\u51FA"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](anna_remax_ui__WEBPACK_IMPORTED_MODULE_5__["Button"], {
    plain: true,
    color: "#d1cdda",
    size: "large",
    "open-type": "share",
    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](anna_remax_ui__WEBPACK_IMPORTED_MODULE_5__["Icon"], {
      type: "addressbook",
      size: "85px",
      color: "#d1cdda"
    })
  }, "\u9080\u8BF7"))));
});

/***/ }),

/***/ "./src/pages/new/rules-card.js":
/*!*************************************!*\
  !*** ./src/pages/new/rules-card.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var remax_wechat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! remax/wechat */ "./node_modules/remax/wechat.js");
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/app */ "./src/app.js");
/* harmony import */ var anna_remax_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! anna-remax-ui */ "./node_modules/anna-remax-ui/esm/index.js");
/* harmony import */ var _assets_logo_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/assets/logo.png */ "./src/assets/logo.png");





/* harmony default export */ __webpack_exports__["default"] = (function () {
  var todo = react__WEBPACK_IMPORTED_MODULE_0___default.a.useContext(_app__WEBPACK_IMPORTED_MODULE_2__["TodoContext"]);
  var roomInfo = todo.roomInformation.roomInfo; // 用户信息需要实时更新的

  var tmp_images = roomInfo.player_list; // 得到用户nickName, avatar信息等

  var myPicImage = tmp_images.map(function (date) {
    // 循环找到该用户对应的word信息
    if (date.open_id == todo.globalData.id || date.nick_name == todo.globalData.userInfo.nickName) {
      // if (date.open_id == "000003"){
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(remax_wechat__WEBPACK_IMPORTED_MODULE_1__["View"], {
        key: date.open_id,
        __key: date.open_id
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(remax_wechat__WEBPACK_IMPORTED_MODULE_1__["View"], null, date.word));
    }
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(remax_wechat__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "card rule-card"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(remax_wechat__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "white-text"
  }, "\u8C01\u662F\u5367\u5E95 . \u6E38\u620F\u89C4\u5219:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(remax_wechat__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "special-bottom"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(remax_wechat__WEBPACK_IMPORTED_MODULE_1__["View"], null, "\u672C\u6E38\u620F\u4E3A\u8C01\u662F\u5367\u5E95\u53D1\u724C\u5668\uFF0C\u6240\u4EE5\u73A9\u5BB6\u90FD\u51C6\u5907\u597D\u540E\uFF0C\u623F\u4E3B\u624D\u53EF\u4EE5\u5F00\u59CB\u623F\u95F4")));
});

/***/ }),

/***/ "./src/pages/new/second-card.js":
/*!**************************************!*\
  !*** ./src/pages/new/second-card.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var remax_wechat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! remax/wechat */ "./node_modules/remax/wechat.js");
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/app */ "./src/app.js");
/* harmony import */ var anna_remax_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! anna-remax-ui */ "./node_modules/anna-remax-ui/esm/index.js");
/* harmony import */ var _assets_logo_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/assets/logo.png */ "./src/assets/logo.png");





/* harmony default export */ __webpack_exports__["default"] = (function () {
  var todo = react__WEBPACK_IMPORTED_MODULE_0___default.a.useContext(_app__WEBPACK_IMPORTED_MODULE_2__["TodoContext"]);
  var roomInfo = todo.roomInformation.roomInfo; // 用户信息需要实时更新的

  var tmp_images = roomInfo.player_list; // 得到用户nickName, avatar信息等

  var myPicImage = tmp_images.map(function (date) {
    // 循环找到该用户对应的word信息
    if (date.open_id == todo.globalData.id || date.nick_name == todo.globalData.userInfo.nickName) {
      // if (date.open_id == "000003"){
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(remax_wechat__WEBPACK_IMPORTED_MODULE_1__["View"], {
        key: date.open_id,
        __key: date.open_id
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(remax_wechat__WEBPACK_IMPORTED_MODULE_1__["View"], null, date.word));
    }
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(remax_wechat__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "card rule-card"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(remax_wechat__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "white-text"
  }, "\u4F60\u7684\u8BCD:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(remax_wechat__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "special-bottom"
  }, myPicImage));
});

/***/ }),

/***/ 2:
/*!********************************************!*\
  !*** multi ./src/pages/new/index.entry.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\WORKSPACE\Tecent\remax\examples-master\wechat\src\pages\new\index.entry.js */"./src/pages/new/index.entry.js");


/***/ })

},[[2,"runtime","remax-vendors","remax-styles"]]]);