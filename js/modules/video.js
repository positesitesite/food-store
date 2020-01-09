$(document).ready( () => {
  let player = $("#video");
  let btnBegin = $(".presentation__video-begin");
  let btnPlayPause = $("#play-pause");
  let idProgress = $("#progress-id");
  let btnMuteUnmute = $("#mute-unmute");

  // If BEGIN button has clicked
  btnBegin.on('click', function (e) {
    $(btnBegin).attr("style", "display: none");

    $(".presentation__video-begin").attr("style", "display: none");
    player.get(0).play();

    // Change PLAY state
    btnPlayPause.addClass("video-played");
    $("#play-pause-icon-trigger").attr("href", "img/icons/sprite.svg#pause");
  });

  // If PLAY button has clicked
  btnPlayPause.on('click', function () {
    $(btnBegin).attr("style", "display: none");

    if ($(this).hasClass("video-played")) {
      $("#play-pause-icon-trigger").attr("href", "img/icons/sprite.svg#play");
      player.get(0).pause();
      ($(this).removeClass("video-played"));
    } else {
      $(this).addClass("video-played");
      $("#play-pause-icon-trigger").attr("href", "img/icons/sprite.svg#pause");
      player.get(0).play();
    };
  });

  // Watch video progress and change indicator accordingly
  player.on("timeupdate", function(e) {
    let progressPos = (this.currentTime / this.duration * 100) + "%";
    
    idProgress.attr("style", `left: ${progressPos}`);
  });

  // Mute Unmute button
  btnMuteUnmute.on("click", function(e) {

    // player.volume = 0;
    player.setAttribute('muted', true);
    // player.attr("volume", "0");
    // console.log("t");

    // if (player.hasAttribute(muted)) {
    //   player.removeAttr("muted");  
    // } else {
    //   player.attr("muted");
    // }
  });
});

