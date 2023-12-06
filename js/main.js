const loading = document.getElementById("loading");

const loadingDuration = 1500;

setTimeout(() => {
  loading.classList.add('loading-none');
}, loadingDuration);

window.addEventListener("scroll", function () {
  shrink();
});

let navbar = document.getElementById("navigator");

function shrink() {
  if (scrollY > 100) {
    navbar.classList.add("navbar-shrink");
  } else {
		navbar.classList.remove("navbar-shrink");
	}
}

window.addEventListener("scroll", function () {
  toggleBacktop();
});

let backtop = document.getElementById("backtop");

function toggleBacktop() {
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    backtop.classList.add('backtop-show')
  } else {
    backtop.classList.remove('backtop-show')
  }
}

$(document).ready(function(){
  $("#team-carousel").owlCarousel({
    margin: 30,
    loop: true,
    dots: true,
    nav: true,
    navText: ['<img src="../assets/images/prev.svg"/>', '<img src="../assets/images/next.svg"/>'],
    items: 1,
    responsive: {
        500:{
            items: 2,
        },

        800:{
            items: 3,
        },

        1100: {
            items: 4,
        },
    },
  });
});

$(document).ready(function(){
  $("#owl-carousel").owlCarousel({
    margin: 30,
    loop: true,
    dots: true,
    nav: true,
    items: 1,
    navText: ['<img src="../assets/images/prev.svg"/>', '<img src="../assets/images/next.svg"/>'],
    responsive: {
        500:{
            items: 2,
        },

        800:{
            items: 3,
        },
    },
  });
});

$(document).ready(function(){
  $("#photo-carousel").owlCarousel({
    margin: 50,
    loop: true,
    nav: true,
    items: 1,
    dots: false,
    navText: false,
    autoplay:true,
    autoplayTimeout: 1000,
    responsive: {
        200:{
            items: 1,
        },
        
        500:{
            items: 2,
        },

        800:{
            items: 3,
        },
    },
  });
});