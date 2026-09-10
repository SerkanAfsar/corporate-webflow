const btnToggle = document.getElementById("btn-toggle");
const menuClose = document.getElementById("menu-close");
const odometerItems = document.querySelectorAll(".counter .item .title > span");
const header = document.querySelector(".header");

Fancybox.bind("[data-fancybox]", {
  // options
});
AOS.init();

window.addEventListener("scroll", () => {
  header.classList.toggle(
    "sticky-header",
    window.scrollY >= header.clientHeight,
  );
});

[menuClose, btnToggle].forEach((item) => {
  item.addEventListener("click", () => {
    document.body.classList.toggle("menu-visible");
  });
});

$(".refSlider").slick({
  infinite: true,
  slidesToShow: 9,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  dots: false,
  arrows: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
        infinite: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});

$(".testimonials-slider").slick({
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  dots: false,
  arrows: false,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});

const odometerObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      const elem = entry.target;
      const value = elem.dataset.value;

      setTimeout(() => {
        elem.innerHTML = value;
      }, 300);

      observer.unobserve(elem);
    });
  },
  {
    threshold: 0.4,
  },
);

odometerItems.forEach((item) => odometerObserver.observe(item));
