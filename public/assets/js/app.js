var MyScroll = "";
(function (window, document, $, undefined) {
  "use strict";
  var isMobile =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Nokia|Opera Mini/i.test(
      navigator.userAgent
    )
      ? !0
      : !1;
  var Scrollbar = window.Scrollbar;
  var Init = {
    i: function (e) {
      Init.s();
      Init.methods();
    },
    s: function (e) {
      (this._window = $(window)),
        (this._document = $(document)),
        (this._body = $("body")),
        (this._html = $("html"));
    },
    methods: function (e) {
      Init.w();
      Init.BackToTop();
      Init.preloader();
      Init.header();
      Init.slick();
      Init.countdownInit(".countdown", "2025/7/01");
      Init.passwordIcon();
      Init.formValidation();
      Init.contactForm();
      Init.checkBoxes();
      Init.dropdown();
      Init.showReview();
    },

    BackToTop: function () {
      var scrollToTopBtn = document.querySelector(".scrollToTopBtn");
      var rootElement = document.documentElement;
      function handleScroll() {
        var scrollTotal = rootElement.scrollHeight - rootElement.clientHeight;
        if (rootElement.scrollTop / scrollTotal > 0.05) {
          scrollToTopBtn.classList.add("showBtn");
        } else {
          scrollToTopBtn.classList.remove("showBtn");
        }
      }
      function scrollToTop() {
        rootElement.scrollTo({ top: 0, behavior: "smooth" });
      }
      scrollToTopBtn.addEventListener("click", scrollToTop);
      document.addEventListener("scroll", handleScroll);
    },

    preloader: function () {
      setTimeout(function () {
        $("#preloader").hide("slow");
      }, 2400);
    },

    showReview: function () {
      $(".review-btn").on("click", function () {
        $(".review-btn").removeClass("te-button");
        var id = $(this).attr("data-atr");
        $(this).addClass("te-button");

        // Hide all review blocks slowly
        $(".review-block").hide("slow");

        // Show the selected review block slowly
        $("#" + id).show("slow");
      });
    },
    teamMemberShow: function (e) {
      $(".member").on("click", function () {
        var id = $(this).attr("id");
        $(".member").removeClass("active");
        $(this).addClass("active");
        $(".member-details").hide("slow");
        $("." + id).show("slow");
      });
    },

    serviceShow: function (e) {
      $(".service_title").on("click", function () {
        var id = $(this).attr("id");
        $(".service_title").removeClass("active");
        $(this).addClass("active");
        $(".service-detail").hide("slow");
        $("." + id).show("slow");
      });
    },

    w: function (e) {
      if (isMobile) {
        $("body").addClass("is-mobile");
      }
    },

    header: function () {
      function dynamicCurrentMenuClass(selector) {
        let FileName = window.location.href.split("/").reverse()[0];
        selector.find("li").each(function () {
          let anchor = $(this).find("a");
          if ($(anchor).attr("href") == FileName) {
            $(this).addClass("current");
          }
        });
        selector.children("li").each(function () {
          if ($(this).find(".current").length) {
            $(this).addClass("current");
          }
        });
        if ("" == FileName) {
          selector.find("li").eq(0).addClass("current");
        }
      }
      if ($(".main-menu__list").length) {
        let mainNavUL = $(".main-menu__list");
        dynamicCurrentMenuClass(mainNavUL);
      }
      if ($(".main-menu__nav").length && $(".mobile-nav__container").length) {
        let navContent = document.querySelector(".main-menu__nav").innerHTML;
        let mobileNavContainer = document.querySelector(
          ".mobile-nav__container"
        );
        mobileNavContainer.innerHTML = navContent;
      }
      if ($(".sticky-header__content").length) {
        let navContent = document.querySelector(".main-menu").innerHTML;
        let mobileNavContainer = document.querySelector(
          ".sticky-header__content"
        );
        mobileNavContainer.innerHTML = navContent;
      }
      if ($(".mobile-nav__container .main-menu__list").length) {
        let dropdownAnchor = $(
          ".mobile-nav__container .main-menu__list .dropdown > a"
        );
        dropdownAnchor.each(function () {
          let self = $(this);
          let toggleBtn = document.createElement("BUTTON");
          toggleBtn.setAttribute("aria-label", "dropdown toggler");
          toggleBtn.innerHTML = "<i class='fa fa-angle-down'></i>";
          self.append(function () {
            return toggleBtn;
          });
          self.find("button").on("click", function (e) {
            e.preventDefault();
            let self = $(this);
            self.toggleClass("expanded");
            self.parent().toggleClass("expanded");
            self.parent().parent().children("ul").slideToggle();
          });
        });
      }
      if ($(".mobile-nav__toggler").length) {
        $(".mobile-nav__toggler").on("click", function (e) {
          e.preventDefault();
          $(".mobile-nav__wrapper").toggleClass("expanded");
          $("body").toggleClass("locked");
        });
      }
      $(window).on("scroll", function () {
        if ($(".stricked-menu").length) {
          var headerScrollPos = 130;
          var stricky = $(".stricked-menu");
          if ($(window).scrollTop() > headerScrollPos) {
            stricky.addClass("stricky-fixed");
          } else if ($(this).scrollTop() <= headerScrollPos) {
            stricky.removeClass("stricky-fixed");
          }
        }
      });
    },

    slick: function () {
      if ($(".about-slider").length) {
        $(".about-slider").slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          draggable: true,
          lazyLoad: "linear",
          speed: 800,
          autoplaySpeed: 2000,
        });
      }
      if ($(".services-slider").length) {
        $(".services-slider").slick({
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay: true,
          draggable: true,
          arrows: false,
          lazyLoad: "linear",
          centerMode: true,
          centerPadding: "10%",
          speed: 800,
          autoplaySpeed: 1400,

          responsive: [
            {
              breakpoint: 1399,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                centerPadding: "0",
                centerMode: false,
              },
            },
            {
              breakpoint: 778,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: true,
                centerPadding: "12%",
              },
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: false,
                centerPadding: "5%",
              },
            },
          ],
        });
      }

      if ($(".testimonial-slider").length) {
        $(".testimonial-slider").slick({
          slidesToShow: 3,
          slidesToScroll: 1,
          autoplay: true,
          draggable: true,
          arrows: false,
          dots: true,
          lazyLoad: "linear",
          speed: 800,
          autoplaySpeed: 2000,
          responsive: [
            {
              breakpoint: 1025,
              settings: {
                slidesToShow: 2,
              },
            },
            {
              breakpoint: 490,
              settings: {
                slidesToShow: 1,
              },
            },
          ],
        });
      }

      $(document).ready(function () {
        if ($(".product-slider").length) {
          var $slider = $(".product-slider");

          var sliderCounter = $("<div class='slider__counter'></div>");
          $slider.after(sliderCounter);

          var updateSliderCounter = function (slick, currentIndex) {
            var currentSlide = currentIndex + 1;
            var slidesCount = slick.slideCount;
            sliderCounter.text(
              currentSlide.toString().padStart(2, "0") +
                "/" +
                slidesCount.toString().padStart(2, "0")
            );
          };

          $slider.on("init", function (event, slick) {
            updateSliderCounter(slick, 0);
          });

          $slider.on("afterChange", function (event, slick, currentSlide) {
            updateSliderCounter(slick, currentSlide);
          });

          $slider.slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            draggable: true,
            lazyLoad: "progressive",
            arrows: false,
            autoplay: true,
            speed: 800,
            autoplaySpeed: 2000,
            centerMode: true,
            centerPadding: "0px",
            focusOnSelect: true,
            adaptiveHeight: true,
            responsive: [
              {
                breakpoint: 821,
                settings: {
                  slidesToShow: 1,
                  centerMode: true,
                  centerPadding: "10%",
                },
              },
              {
                breakpoint: 490,
                settings: {
                  slidesToShow: 1,
                  centerMode: false,
                },
              },
            ],
          });
        }
      });

      $(".btn-prev").click(function () {
        var $this = $(this).attr("data-slide");
        $("." + $this).slick("slickPrev");
      });
      $(".btn-next").click(function () {
        var $this = $(this).attr("data-slide");
        $("." + $this).slick("slickNext");
      });
    },

    // Countdown Timer
    countdownInit: function (countdownSelector, countdownTime, countdown) {
      var eventCounter = $(countdownSelector);
      if (eventCounter.length) {
        eventCounter.countdown(countdownTime, function (e) {
          $(this).html(
            e.strftime(
              "<li><h2>%D</h2><p>Days</p></li>\
              <li><h2>%H</h2><p>Hrs</p></li>\
              <li><h2>%M</h2><p>Mins</p></li>\
              <li><h2>%S</h2><p>Secs</p></li>"
            )
          );
        });
      }
    },

    // Toggle CheckBoxes
    checkBoxes: function () {
      $(".sub-checkboxes").hide();
      $(".arrow-block").click(function () {
        var subCheckboxes = $(this).next(".sub-checkboxes");
        var chevronIcon = $(this).find("i");
        subCheckboxes.slideToggle("fast");
        chevronIcon.toggleClass("fa-chevron-down fa-chevron-up");
      });
      $(".check-block, .sub-check-box").click(function (event) {
        event.stopPropagation();
      });

      if ($(".customer-container").length) {
        $(".signin-button").click(function () {
          $(".sign-form").slideToggle();
        });
      }
    },

    dropdown: function () {
      const selectedAll = document.querySelectorAll(".wrapper-dropdown");

      selectedAll.forEach((selected) => {
        const arrow = selected.children[1];
        const optionsContainer = selected.children[2];
        const optionsList = selected.querySelectorAll("ul.topbar-dropdown li");

        selected.addEventListener("click", (event) => {
          event.stopPropagation();

          if (selected.classList.contains("active")) {
            handleDropdown(selected, arrow, false);
          } else {
            let currentActive = document.querySelector(
              ".wrapper-dropdown.active"
            );
            if (currentActive && currentActive !== selected) {
              let anotherArrow = currentActive.children[1];
              handleDropdown(currentActive, anotherArrow, false);
            }

            handleDropdown(selected, arrow, true);
          }
        });

        optionsList.forEach((option) => {
          option.addEventListener("click", () => {
            selected.querySelector(".selected-display").innerHTML =
              option.innerHTML;
          });
        });
      });

      window.addEventListener("click", (e) => {
        if (!e.target.closest(".wrapper-dropdown")) {
          closeAllDropdowns();
        }
      });

      function closeAllDropdowns() {
        selectedAll.forEach((selected) => {
          const arrow = selected.children[1];
          handleDropdown(selected, arrow, false);
        });
      }

      function handleDropdown(dropdown, arrow, open) {
        if (open) {
          arrow.classList.add("rotated");
          dropdown.classList.add("active");
        } else {
          arrow.classList.remove("rotated");
          dropdown.classList.remove("active");
        }
      }
    },

    passwordIcon: function () {
      $("#eye , #eye-icon").click(function () {
        if ($(this).hasClass("fa-eye-slash")) {
          $(this).removeClass("fa-eye-slash");
          $(this).addClass("fa-eye");
          $(".password-input").attr("type", "text");
        } else {
          $(this).removeClass("fa-eye");
          $(this).addClass("fa-eye-slash");
          $(".password-input").attr("type", "password");
        }
      });
    },
    formValidation: function () {
      if ($(".contact-form").length) {
        $(".contact-form").validate();
      }
      if ($(".login-form").length) {
        $(".login-form").validate();
      }
    },
    contactForm: function () {
      $(".contact-form").on("submit", function (e) {
        e.preventDefault();
        if ($(".contact-form").valid()) {
          var _self = $(this);
          _self
            .closest("div")
            .find('button[type="submit"]')
            .attr("disabled", "disabled");
          var data = $(this).serialize();
          $.ajax({
            url: "./assets/mail/contact.php",
            type: "post",
            dataType: "json",
            data: data,
            success: function (data) {
              $(".contact-form").trigger("reset");
              _self.find('button[type="submit"]').removeAttr("disabled");
              if (data.success) {
                document.getElementById("message").innerHTML =
                  "<h5 class='color-primary mt-16 mb-16'>Email Sent Successfully</h5>";
              } else {
                document.getElementById("message").innerHTML =
                  "<h5 class='color-primary mt-16 mb-16'>There is an error</h5>";
              }
              $("#messages").show("slow");
              $("#messages").slideDown("slow");
              setTimeout(function () {
                $("#messages").slideUp("hide");
                $("#messages").hide("slow");
              }, 4000);
            },
          });
        } else {
          return !1;
        }
      });
    },
  };
  Init.i();
})(window, document, jQuery);
