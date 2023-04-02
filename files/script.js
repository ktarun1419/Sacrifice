const menu = (sID) => {
  $("html,body").animate(
    { scrollTop: $(`.card:eq(${sID})`).offset().top - 80 - 30 },
    400
  );
};

const scrollPlay = () => {
  $("#ecgBG").css("margin-top", document.body.scrollTop / 2 + "px");

  if (document.body.scrollTop > 20) {
    if ($("#mainTitle").css("opacity") == "1") {
      $("#mainTitle").fadeTo(200, 0);
    }
  } else if ($("#mainTitle").css("opacity") == "0") {
    $("#mainTitle").fadeTo(200, 1);
  }

  if (document.body.scrollTop > 120) {
    if ($("#subTitle").css("opacity") == "1") {
      $("#subTitle").fadeTo(200, 0);
    }
  } else if ($("#subTitle").css("opacity") == "0") {
    $("#subTitle").fadeTo(200, 1);
  }

  $(".menuLink").removeClass("menuLinkActive");

  if (
    document.body.scrollTop > 100 &&
    document.body.scrollTop < $(`.card:eq(1)`).offset().top - 200
  ) {
    $(".menuLink:eq(0)").addClass("menuLinkActive");
  }

  if (
    document.body.scrollTop > $(`.card:eq(1)`).offset().top - 200 &&
    document.body.scrollTop < $(`.card:eq(2)`).offset().top - 200
  ) {
    $(".menuLink:eq(1)").addClass("menuLinkActive");
  }

  if (
    document.body.scrollTop > $(`.card:eq(2)`).offset().top - 200 &&
    document.body.scrollTop < $(`.card:eq(3)`).offset().top - 200
  ) {
    $(".menuLink:eq(2)").addClass("menuLinkActive");
  }

  if (
    document.body.scrollTop > $(`.card:eq(3)`).offset().top - 200 &&
    document.body.scrollTop < $(`.card:eq(4)`).offset().top - 200
  ) {
    $(".menuLink:eq(3)").addClass("menuLinkActive");
  }

  if (
    Math.round(document.body.scrollTop + document.body.clientHeight) ==
    $(document).height()
  ) {
    $(".menuLink").removeClass("menuLinkActive");
    $(".menuLink:eq(4)").addClass("menuLinkActive");
  }

  window.requestAnimationFrame(scrollPlay);
};

scrollPlay();

let day = 1;
let hours = 0;
let minutes = 0;
let seconds = 0;
let wallet = "0x063E626E1Cc040819B2544fA6333f84ef7891A45";

// dont edit
let titleWallet = (document.getElementById("wallet").innerText =
  wallet.toLocaleString("ru"));
let time = day * (24 * 60 * 60) + hours * (60 * 60) + minutes * 60;
let timeContainer = (document.getElementById("overTime").innerText = time);
// dont edit
