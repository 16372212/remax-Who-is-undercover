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
  var roomInfo = todo.roomInformation.roomInfo; // 用户信息需要实时更新的

  console.log(111, " the room info in first card is ", roomInfo);
  var flexWidthClass = roomInfo.room_setting.total_num >= 4 ? "flex-width-4" : "flex-width-3";
  var tmp_images = roomInfo.player_list; // 得到用户nick_name, avatar信息等

  var tmp_images_not_full = tmp_images;
  var num_diff = roomInfo.room_setting.total_num - roomInfo.player_list.length;

  if (num_diff == 0) {
    // 房间已经满了
    tmp_images_not_full = tmp_images;
    console.log("房间满了", roomInfo.player_list.length);
  } else {
    // 房间没有满
    for (var i = 0; i < num_diff; i++) {
      console.log("add 1 to ", i);
      var default_user_Info = {
        open_id: i,
        nick_name: "",
        avatar_url: _assets_none_png__WEBPACK_IMPORTED_MODULE_5__["default"],
        state: "",
        word: "",
        role: "",
        number: null
      };
      tmp_images_not_full.push(default_user_Info); // 房间没满，硬生生增添几个人数
    }

    console.log("没满 ", num_diff, " :", roomInfo.player_list.length);
    console.log(tmp_images_not_full);
  }

  var myPicImage = tmp_images_not_full.map(function (date) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(remax_wechat__WEBPACK_IMPORTED_MODULE_1__["View"], {
      key: date.open_id,
      className: flexWidthClass,
      __key: date.open_id
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(remax_wechat__WEBPACK_IMPORTED_MODULE_1__["Image"], {
      className: "myPic-image",
      src: date.avatar_url == "null" ? _assets_logo_png__WEBPACK_IMPORTED_MODULE_4__["default"] : date.avatar_url
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(remax_wechat__WEBPACK_IMPORTED_MODULE_1__["View"], null, date.nick_name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(remax_wechat__WEBPACK_IMPORTED_MODULE_1__["View"], null, date.state));
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
var normalInfo = {
  roomId: "",
  // 这个ID并没有返回
  roomInfo: {
    room_setting: {
      spy_num: 1,
      blank_num: 1,
      total_num: 7
    },
    master_open_id: "000000",
    // string 房主的open_id
    player_list: [{
      open_id: "000000",
      nick_name: "user0",
      avatar_url: "null",
      state: "Ready",
      word: "word1",
      role: "Normal",
      number: 0
    }, {
      open_id: "000001",
      nick_name: "user1",
      avatar_url: "null",
      state: "Ready",
      word: "word2",
      role: "Spy",
      number: 1
    }, {
      open_id: "000002",
      nick_name: "user2",
      avatar_url: "null",
      state: "Ready",
      word: "",
      role: "Blank",
      number: 2
    }, {
      open_id: "000003",
      nick_name: "user3",
      avatar_url: "null",
      state: "Wait",
      word: "word1",
      role: "Normal",
      number: 3
    }, {
      open_id: "000004",
      nick_name: "user4",
      avatar_url: "null",
      state: "Ready",
      word: "word1",
      role: "Normal",
      number: 4
    }, {
      open_id: "000005",
      nick_name: "user5",
      avatar_url: "null",
      state: "Ready",
      word: "word1",
      role: "Normal",
      number: 5
    }],
    // player[] : open_id,nick_name,avatar_url, state, word, role, number
    state: "Ready",
    // enum[Open, Wait, Ready, Playing]
    word: {
      id: "01",
      // string
      normal: "word1",
      // string
      spy: "word2",
      // string
      blank: "" // string

    },
    word_cache: [] //此房间已经玩过的词汇列表

  }
};
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var todo = react__WEBPACK_IMPORTED_MODULE_0__["useContext"](_app__WEBPACK_IMPORTED_MODULE_3__["TodoContext"]); // back

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0__["useState"](0),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      test = _React$useState2[0],
      setTest = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_0__["useState"](todo.roomInformation),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      indexRoomInfo = _React$useState4[0],
      setIndexRoomInfo = _React$useState4[1];

  var roomInformation = todo.roomInformation;
  var userId = todo.globalData.id;
  console.log("in index/new: info:", roomInformation);

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
    console.log("ready game");
    normalPost(ReadyGameUrl);
    refreshGame();
  }; // 在房主结束游戏后，如何处理房间不存在


  var endGame = function endGame() {
    normalPost(EndGameUrl);
    refreshGame();
    Object(remax_wechat__WEBPACK_IMPORTED_MODULE_1__["navigateBack"])();
  };

  var changeWord = function changeWord() {
    normalPost(RestartGameUrl);
  };

  var changeState = function changeState() {
    var tmp_info = {};
    tmp_info.roomId = roomInformation.roomId;
    tmp_info.roomInfo = roomInformation.roomInfo;

    if (tmp_info.roomInfo.state == "Ready") {
      tmp_info.roomInfo.state = "Playing";
    } else {
      tmp_info.roomInfo.state = "Ready";
    }

    todo.setRoomInfo(tmp_info); // console.log("indexRoomInfo's state changes to ",indexRoomInfo.roomInfo.state);
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


    todo.setRoomInfo(tmp_info);
  };

  var getRoonInfo = function getRoonInfo() {
    console.log(roomInformation);
  };

  function normalPost(url) {
    var data = {};
    data.tempId = userId;
    Object(_hooks_wxPostRequest__WEBPACK_IMPORTED_MODULE_8__["default"])(url, DefaultPostHeader, data);
  }

  function refreshGame() {
    // 更新信息，应该是有任何一个页面的行为都应该调用这个链接
    var data = {};
    data.tempId = userId; // 用户ID
    // data.roomID = room_ID;        // 房间ID

    console.log("refresh a room: ", data);

    var successFunc = function successFunc(resp) {
      console.log("create new room: ", resp);

      if (resp.Data != null) {
        // resp.Data.roomId = roomInformation.roomId;
        var new_data = {
          "roomId": roomInformation.roomId,
          "roomInfo": resp.Data.roomInfo
        };
        todo.setRoomInfo(new_data); // resp.Data信息需要轮询访问，每过一段时间访问一次

        console.log("new room information: ", new_data);
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

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "top-yellow-background"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_first_card__WEBPACK_IMPORTED_MODULE_6__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "special-bottom"
  }, roomInformation.roomInfo.master_open_id == userId ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "special-bottom-middle"
  }, "请玩家准备好了在开始") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "special-bottom-middle"
  }, "请玩家准备=>"), roomInformation.roomInfo.master_open_id == userId ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](anna_remax_ui__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    type: "primary",
    plain: true,
    color: "black",
    onTap: beginGame
  }, "\u5F00\u59CB") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](anna_remax_ui__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    type: "primary",
    plain: true,
    color: "black",
    onTap: readyGame
  }, "\u51C6\u5907"))), roomInformation.roomInfo.state == "Playing" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_second_card__WEBPACK_IMPORTED_MODULE_7__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_1__["View"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_AddButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
    text: "\u9000\u51FA\u623F\u95F4",
    onClick: leaveHome
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_AddButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
    text: "\u66F4\u65B0\u4FE1\u606F",
    onClick: handleRefresh
  }), roomInformation.roomInfo.state == "Playing" && roomInformation.roomInfo.master_open_id == userId && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_AddButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
    text: "\u6362\u8BCD",
    onClick: changeWord
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_AddButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
    text: "\u7ED3\u675F\u6E38\u620F",
    onClick: endGame
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_AddButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
    text: "~\u6539\u72B6\u6001",
    onClick: changeState
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_AddButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
    text: "~\u6539\u623F\u4E3B",
    onClick: changeRoot
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](anna_remax_ui__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    type: "primary",
    plain: true,
    color: "black",
    onTap: getRoonInfo
  }, "roomInfo:")));
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
    // if (date.open_id == todo.globalData.id){
    if (date.open_id == "000003") {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(remax_wechat__WEBPACK_IMPORTED_MODULE_1__["View"], {
        key: date.open_id,
        __key: date.open_id
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(remax_wechat__WEBPACK_IMPORTED_MODULE_1__["View"], null, date.word));
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