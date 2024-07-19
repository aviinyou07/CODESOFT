$(document).ready(function () {
  $(".slider").slick({
    arrows: false,
    dots: true,
    appendDots: ".slider-dots",
    dotsClass: "dots",
  });

  let hamburger = document.querySelector(".hamburger");
  let close = document.querySelector(".close");
  let mobileNav = document.querySelector(".mobile-nav");
  let navLinks = document.querySelectorAll(".mob-navlink");
  hamburger.addEventListener("click", function () {
    mobileNav.classList.add("open");
  });

  close.addEventListener("click", function () {
    mobileNav.classList.remove("open");
  });

  navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      mobileNav.classList.remove("open");
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  function handleDownload(filePath, fileName) {
    const link = document.createElement("a");
    link.href = filePath;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  let downloadButtons = [
    {
      id: "download-cv",
      filePath: "../doc/resume.pdf",
      fileName: "resume.pdf",
    },
    {
      id: "download-cv1",
      filePath: "../doc/resume.pdf",
      fileName: "resume.pdf",
    },
  ];

  downloadButtons.forEach((button) => {
    let element = document.getElementById(button.id);
    if (element) {
      element.addEventListener("click", function () {
        handleDownload(button.filePath, button.fileName);
      });
    }
  });
});


document.addEventListener('DOMContentLoaded', function() {
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');

    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 100) {
            scrollToTopBtn.style.display = 'block';
        } else {
            scrollToTopBtn.style.display = 'none';
        }
    });

    scrollToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});

