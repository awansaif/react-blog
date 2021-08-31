window.addEventListener("load", () => {
  // preloader
  const preloader = document.querySelector(".preloader");
  preloader.style.display = "none";

  const menuBtn = document.querySelector(".menu-btn");
  const body = document.querySelector("body");
  const sidemenu = document.querySelector(".side-menu");
  menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("active");
    body.classList.toggle("active");
    sidemenu.classList.toggle("active");
  });

  // close sidemenu
  const closeSideMenu = document.querySelector(".close-sidemenu");
  closeSideMenu.addEventListener("click", () => {
    sidemenu.classList.remove("active");
    menuBtn.classList.remove("active");
  });
  // $(".navigation ul, .side-menu .blog-items")
  //   .parent()
  //   .addClass("menu-item-has-children");
  // $(".navigation li.menu-item-has-children > a").on("click", function () {
  //   $(this).parent().toggleClass("active").siblings().removeClass("active");
  //   $(this).next("ul, .blog-items").slideToggle();
  //   $(this).parent().siblings().find("ul, .blog-items").slideUp();
  //   return false;
  // });
});
