require('./../../runtime.js');
require('./../../remax-vendors.js');
require('./../../remax-styles.js');
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/new/index"],{

/***/ "./src/assets/none.png":
/*!*****************************!*\
  !*** ./src/assets/none.png ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "abc3b193a96c7d97ebb9752f4e7f1273.png");

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







var default_user_Info = {
  openid: "######",
  nickName: "",
  avatarUrl: _assets_none_png__WEBPACK_IMPORTED_MODULE_5__["default"],
  state: "",
  word: "",
  role: "",
  number: null
};
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
  var roomInfo = todo.roomInfo; // 用户信息需要实时更新的

  var flexWidthClass = roomInfo.roomSetting.total >= 4 ? "flex-width-4" : "flex-width-3";
  var tmp_images = roomInfo.playerList; // 得到用户nickName, avatar信息等

  var tmp_images_not_full = tmp_images;
  var num_diff = roomInfo.roomSetting.total - roomInfo.playerList.length;

  if (num_diff == 0) {
    // 房间已经满了
    tmp_images_not_full = tmp_images;
    console.log("房间满了", roomInfo.playerList.length);
  } else {
    // 房间没有满
    for (var i = 0; i < num_diff; i++) {
      tmp_images_not_full.push(default_user_Info);
    }

    console.log("没满 ", num_diff, " :", roomInfo.playerList.length);
    console.log(tmp_images_not_full);
  }

  var myPicImage = tmp_images_not_full.map(function (date) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(remax_wechat__WEBPACK_IMPORTED_MODULE_1__["View"], {
      key: date.openid,
      className: flexWidthClass,
      __key: date.openid
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(remax_wechat__WEBPACK_IMPORTED_MODULE_1__["Image"], {
      className: "myPic-image",
      src: date.avatarUrl == "null" ? _assets_logo_png__WEBPACK_IMPORTED_MODULE_4__["default"] : date.avatarUrl
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(remax_wechat__WEBPACK_IMPORTED_MODULE_1__["View"], null, date.nickName), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(remax_wechat__WEBPACK_IMPORTED_MODULE_1__["View"], null, date.state));
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(remax_wechat__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "card myCard"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(remax_wechat__WEBPACK_IMPORTED_MODULE_1__["View"], null, props.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(remax_wechat__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "myPic"
  }, myPicImage), "  ");
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
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(remax_wechat__WEBPACK_IMPORTED_MODULE_1__["View"], null, MyCardAndPics);
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var remax_wechat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! remax/wechat */ "./node_modules/remax/wechat.js");
/* harmony import */ var _components_AddButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/AddButton */ "./src/components/AddButton/index.tsx");
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/app */ "./src/app.js");
/* harmony import */ var anna_remax_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! anna-remax-ui */ "./node_modules/anna-remax-ui/esm/index.js");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index.css */ "./src/pages/new/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _first_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./first-card */ "./src/pages/new/first-card.js");
/* harmony import */ var _second_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./second-card */ "./src/pages/new/second-card.js");
/* harmony import */ var _hooks_wxPostRequest__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../hooks/wxPostRequest */ "./src/hooks/wxPostRequest.js");










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
var normalInfo = {
  roomID: "",
  // 这个ID并没有返回
  roomSetting: {
    spys: null,
    blank: null,
    total: null
  },
  masterOpenid: "000000",
  // string 房主的Openid
  playerList: [],
  // player[] : openid,nickName,avatarUrl, state, word, role, number
  state: "Wait",
  // enum[Open, Wait, Ready, Playing]
  word: {},
  wordList: null //此房间已经玩过的词汇列表

};
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var todo = react__WEBPACK_IMPORTED_MODULE_0__["useContext"](_app__WEBPACK_IMPORTED_MODULE_3__["TodoContext"]); // back

  var roomInfomation = todo.roomInfo;

  var leaveHome = function leaveHome() {
    normalPost(ExitRoomUrl);
    refreshGame();
    Object(remax_wechat__WEBPACK_IMPORTED_MODULE_1__["navigateBack"])();
  };

  var handleRefresh = function handleRefresh() {
    refreshGame();
  };

  var beginGame = function beginGame() {
    normalPost(StartGameUrl);
    refreshGame();
  };

  var readyGame = function readyGame() {
    console.log("ready game"); // todo.globalData.

    normalPost(ReadyGameUrl);
    refreshGame();
  }; // 在房主结束游戏后，如何处理房间不存在


  var endGame = function endGame() {
    normalPost(EndGameUrl); // todo.setRoomInfo(normalPost);

    refreshGame();
    Object(remax_wechat__WEBPACK_IMPORTED_MODULE_1__["navigateBack"])();
  };

  var changeWord = function changeWord() {
    normalPost(RestartGameUrl);
  };

  var changeState = function changeState() {
    var tmp_info = roomInfomation;
    tmp_info.state = "Ready";
    todo.setRoomInfo(tmp_info);
    console.log(todo.roomInfo.state);
  };

  var changeRoot = function changeRoot() {
    var tmp_info = roomInfomation;
    tmp_info.masterOpenid = todo.globalData.id;
    todo.setRoomInfo(tmp_info);
    console.log(todo.roomInfo.masterOpenid);
  };

  function normalPost(url) {
    var data = {};
    data.tempId = todo.globalData.id;
    Object(_hooks_wxPostRequest__WEBPACK_IMPORTED_MODULE_8__["default"])(url, DefaultPostHeader, data);
  } // 更新信息，应该是有任何一个页面的行为都应该调用这个链接


  function refreshGame() {
    var data = {};
    data.tempId = todo.globalData.id; // 用户ID
    // data.roomID = room_ID;        // 房间ID

    console.log("refresh a room: ", data);

    var successFunc = function successFunc(resp) {
      console.log("create new room: ", resp); // 构建房间返回的数据，更新todo.roomInfo

      if (resp.Data != null) {
        todo.setRoomInfo(resp.Data); // resp.Data信息需要轮询访问，每过一段时间访问一次

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
    Object(_hooks_wxPostRequest__WEBPACK_IMPORTED_MODULE_8__["default"])(RefreshRoomUrl, DefaultPostHeader, data, successFunc, requestFailFunc, responseFailFunc);
  }

  console.log("in new,username: ", todo.items.userName);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "top-yellow-background"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_first_card__WEBPACK_IMPORTED_MODULE_6__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "special-bottom"
  }, console.log("compare id: ", roomInfomation.masterOpenid, " ", todo.globalData.id), roomInfomation.masterOpenid == todo.globalData.id && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "special-bottom-middle"
  }, "请玩家准备好了在开始"), roomInfomation.masterOpenid != todo.globalData.id && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "special-bottom-middle"
  }, "请玩家准备=>"), roomInfomation.masterOpenid == todo.globalData.id && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](anna_remax_ui__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    type: "primary",
    plain: true,
    color: "black",
    onTap: beginGame
  }, "\u5F00\u59CB"), roomInfomation.masterOpenid != todo.globalData.id && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](anna_remax_ui__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    type: "primary",
    plain: true,
    color: "black",
    onTap: readyGame
  }, "\u51C6\u5907"))), roomInfomation.state == "Playing" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_second_card__WEBPACK_IMPORTED_MODULE_7__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_1__["View"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_AddButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
    text: "\u9000\u51FA\u623F\u95F4",
    onClick: leaveHome
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_AddButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
    text: "\u66F4\u65B0\u4FE1\u606F",
    onClick: handleRefresh
  }), roomInfomation.state == "Playing" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_AddButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
    text: "\u6362\u8BCD",
    onClick: changeWord
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_AddButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
    text: "\u7ED3\u675F\u6E38\u620F",
    onClick: endGame
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_AddButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
    text: "\u6D4B\u8BD5\u6309\u94AE\uFF1A\u6539\u72B6\u6001",
    onClick: changeState
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_AddButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
    text: "\u6D4B\u8BD5\u6309\u94AE\uFF1A\u6539\u623F\u4E3B",
    onClick: changeRoot
  })));
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
  var roomInfo = todo.roomInfo; // 用户信息需要实时更新的

  var tmp_images = roomInfo.playerList; // 得到用户nickName, avatar信息等

  var myPicImage = tmp_images.map(function (date) {
    // 循环找到该用户对应的word信息
    // if (date.openid == todo.globalData.id){
    if (date.openid == "000003") {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(remax_wechat__WEBPACK_IMPORTED_MODULE_1__["View"], null, date.word);
    }
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(remax_wechat__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "card myCard"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(remax_wechat__WEBPACK_IMPORTED_MODULE_1__["View"], {
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