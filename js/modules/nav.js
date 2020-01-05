// $(document).ready(() => {
//   let nav = $(".nav__item");

//   nav.on('click', function (e) {
//     e.preventDefault();
    
//     let indexNav = $(this).index();
//     let slideIndex = indexNav * 100 + "%";

//     $("section").eq(indexNav).attr("class", "active");

//     $(".main").attr("style", `position: relative; transform: translate3d(0px, -${slideIndex}, 0px); transition: all 1000ms ease 0s;`);
//     $("body").attr("class", `viewing-page-${index}`);
//   })
// });