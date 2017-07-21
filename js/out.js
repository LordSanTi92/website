/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

$(function() {
  if (!/Mobi/.test(navigator.userAgent)) {

    setTimeout(() => {
      $(".loader").fadeOut('slow');
    }, 5000)

    $(".fa-bars").on("click", function() {
      $(this).toggleClass('fa-bars');
      $(this).toggleClass('fa-times');
      $(".burgerList").find("li").toggle(200);
    })

    $(document).on("scroll resize", (function() {
      let sectionAboutElem = $("#about");
      let sectionAboutElemDistanceTop = parseInt(sectionAboutElem.offset().top);
      let sectionArchitecture = $("#architecture");
      let sectionArchitectureElemDistanceTop = parseInt(sectionArchitecture.offset().top);
      let sectionLandscape = $("#landscape");
      let sectionLandscapeElemDistanceTop = parseInt(sectionLandscape.offset().top);
      let sectionContact = $(".parallax4");
      let sectionContactElemDistanceTop = parseInt(sectionContact.offset().top);
      let scrollingStartDistance = $("#header").offset().top;
      let scrollTop = $(document).scrollTop();
      if (scrollTop > scrollingStartDistance) {
        $(".menu").slideDown(1);
      }

      //Border bottom for anchor About Me
      if (scrollTop >= sectionAboutElemDistanceTop - 1 && scrollTop <= sectionAboutElemDistanceTop + 700) {
        $(".menu").find("li").first().css({borderBottom: "4px solid #c19e7e"})
      } else if (scrollTop < sectionAboutElemDistanceTop) {
        $(".menu").find("li").first().css("border-bottom", "");
      } else if (scrollTop >= sectionAboutElemDistanceTop + 700) {
        $(".menu").find("li").first().css("border-bottom", "");
      }
      //Border bottom for anchor Architecture
      if (scrollTop >= sectionArchitectureElemDistanceTop - 1 && scrollTop <= sectionArchitectureElemDistanceTop + parseInt($("#architecture").css("height")) - 60) {
        $(".menu").find("li").eq(1).css({borderBottom: "4px solid #c19e7e"})
      } else if (scrollTop < sectionArchitectureElemDistanceTop) {
        $(".menu").find("li").eq(1).css("border-bottom", "");
      } else if (scrollTop >= sectionArchitectureElemDistanceTop + 660) {
        $(".menu").find("li").eq(1).css("border-bottom", "");
      }
      //Border bottom for anchor Landscape
      if (scrollTop >= sectionLandscapeElemDistanceTop - 1 && scrollTop <= sectionLandscapeElemDistanceTop + parseInt($("#landscape").css("height")) - 61) {
        $(".menu").find("li").eq(2).css({borderBottom: "4px solid #c19e7e"})
      } else if (scrollTop < sectionLandscapeElemDistanceTop) {
        $(".menu").find("li").eq(2).css("border-bottom", "");
      } else if (scrollTop >= sectionLandscapeElemDistanceTop + 660) {
        $(".menu").find("li").eq(2).css("border-bottom", "");
      }
      //Border bottom for anchor contact
      if (scrollTop >= sectionContactElemDistanceTop - 60) {
        $(".menu").find("li").eq(3).css({borderBottom: "4px solid #c19e7e"})
      } else if (scrollTop < sectionContactElemDistanceTop) {
        $(".menu").find("li").eq(3).css("border-bottom", "");
      }
    }));

    $(window).on("load resize", function() {
      if ($(window).outerWidth() >= 680) {
        $(".burgerList").addClass('menuList');
        $(".burgerList").removeClass('burgerList')
      } else if ($(window).outerWidth() < 680) {
        $(".menuList").addClass('burgerList');
        $(".menuList").removeClass('menuList')
      }

    })

    $('a').click(function() {
      $('html, body').animate({
        scrollTop: $($(this).attr('href')).offset().top
      }, 500);
      if ($(".fa-times").css("display") == "block") {
        $(".burgerList").find("li").hide(200);
        $(".menu").find("i").toggleClass('fa-bars');
        $(".menu").find("i").toggleClass('fa-times');
      }
      return false;
    });

    let $animation_elements = $('.info').children();
    let $window = $(window);
    $window.on('scroll resize', check_if_in_view);
    $window.on('scroll resize', check_if_in_view2);
    function check_if_in_view() {
      let window_height = $window.height();
      let window_top_position = $window.scrollTop();
      let window_bottom_position = (window_top_position + window_height);

      $.each($animation_elements, function() {
        var $element = $(this);
        var element_height = $element.outerHeight();
        var element_top_position = $element.offset().top;
        var element_bottom_position = (element_top_position + element_height);

        if ((element_bottom_position >= window_top_position) && (element_top_position <= window_bottom_position)) {
          $element.addClass('in-view');
        }
      });
    }
    var aboutMeElem = $(".aboutMe");
    function check_if_in_view2() {
      var window_height = $window.height();
      var window_top_position = $window.scrollTop();
      var window_bottom_position = (window_top_position + window_height);

      $.each(aboutMeElem, function() {
        var $element = $(this);
        var element_height = $element.outerHeight();
        var element_top_position = $element.offset().top;
        var element_bottom_position = (element_top_position + element_height);
        if ((element_bottom_position >= window_top_position) && (element_top_position <= window_bottom_position)) {
          $element.addClass('in-view2');
        }
      })
    }

    //Pop up gallery architecture

    let visibleImgArchitecture = $(".architecturePics").find("img");
    $.each(visibleImgArchitecture, function() {
      $(this).on("click", event => {
        let currentImg = $(event.target);
        let architecturePics = document.querySelector(".architecturePics");
        let srcImg = $(event.target).attr("src");
        let newDiv = document.createElement("div");
        let prevSpan = document.createElement("span");
        let nextSpan = document.createElement("span");
        let crossElem = document.createElement("span");
        newDiv.classList.add("big");
        prevSpan.classList.add("prev");
        nextSpan.classList.add("next");
        prevSpan.classList.add("fa-angle-left");
        nextSpan.classList.add("fa-angle-right");
        prevSpan.classList.add("fa");
        nextSpan.classList.add("fa");
        crossElem.classList.add("cross");
        crossElem.classList.add("fa");
        crossElem.classList.add("fa-times");
        let newImg = document.createElement("img");
        newImg.setAttribute("src", srcImg);
        newDiv.appendChild(prevSpan);
        newDiv.appendChild(nextSpan);
        newDiv.appendChild(newImg);
        newDiv.appendChild(crossElem);
        architecturePics.appendChild(newDiv);
        nextSpan.addEventListener("click", () => {
          if (currentImg.parent().next().children().attr("src") == null) {
            architecturePics.removeChild(newDiv)
          } else {
            currentImg = currentImg.parent().next().children();
            srcImg = currentImg.attr("src");
            newImg.setAttribute("src", srcImg);
          }
        })
        prevSpan.addEventListener("click", () => {

          if (currentImg.parent().prev().children().attr("src") == null) {
            architecturePics.removeChild(newDiv)
          } else {
            currentImg = currentImg.parent().prev().children();
            srcImg = currentImg.attr("src");
            newImg.setAttribute("src", srcImg);
          }
        })
        crossElem.addEventListener("click", function() {
          architecturePics.removeChild(newDiv)
        })
      })
    })

    // Loading Images at Architecture section
    $(window).on("load resize", function() {
      if ($(window).outerWidth() > 910) {
        $('.architecturePics li').hide();
        $('.architecturePics li:lt(9)').show();
        let heightOfSection = $("#architecture").css("height");
        heightOfSection = "900px";
        $("#architecture").css("height", heightOfSection)
        $('.more').show();
        $('.less').hide();
        let sectionArchitecture = $("#architecture");
        let sectionArchitectureElemDistanceTop = parseInt(sectionArchitecture.offset().top);
      } else if ($(window).outerWidth() <= 910){
        $('.architecturePics li').hide();
        $('.architecturePics li:lt(4)').show();
        let heightOfSection = $("#architecture").css("height");
        heightOfSection = "700px";
        $("#architecture").css("height", heightOfSection)
        $('.more').show();
        $('.less').hide();
        let sectionArchitecture = $("#architecture");
        let sectionArchitectureElemDistanceTop = parseInt(sectionArchitecture.offset().top);
      }
    })
    $('.architecturePics li:lt(4)').show();
    $('.less').hide();
    let items2 = 36;
    if ($(window).outerWidth() <= 910) {
    let shown2 = 4;
  }
  else{
    let shown2 = 9;
  }
    $('.more').click(function() {
      $('.less').attr("style", "display:inline-block");
      shown2 = $('.architecturePics li:visible').length + 6;
      console.log(shown2);
      if (shown2 < items2) {
        $('.architecturePics li:lt(' + shown2 + ')').show(300);
        if ($(window).outerWidth() < 501) {
          let heightOfSection = $("#architecture").css("height");
          heightOfSection = parseInt(heightOfSection) + 1350
          $("#architecture").attr("style", `height: ${heightOfSection}` + 'px' + ' !important')
        } else if ($(window).outerWidth() <= 910) {
          let heightOfSection = $("#architecture").css("height");
          heightOfSection = parseInt(heightOfSection) + 660
          $("#architecture").css("height", heightOfSection + "px", "important")
        } else {
          let heightOfSection = $("#architecture").css("height");
          heightOfSection = parseInt(heightOfSection) + 450
          $("#architecture").css("height", heightOfSection + "px", "important")
        }

      } else {
        $('.architecturePics li:lt(' + items2 + ')').show(300);
        if ($(window).outerWidth() < 501) {
          $('.more').hide();
          let heightOfSection = $("#architecture").css("height");
          heightOfSection = parseInt(heightOfSection) + 350
          $("#architecture").attr("style", `height: ${heightOfSection}` + 'px' + ' !important')
        } else if ($(window).outerWidth() <= 910) {
          $('.more').hide();
          let heightOfSection = $("#architecture").css("height");
          heightOfSection = parseInt(heightOfSection) + 280
          $("#architecture").css("height", heightOfSection + "px", "important")
        } else {
          $('.more').hide();
          let heightOfSection = $("#architecture").css("height");
          heightOfSection = parseInt(heightOfSection) + 250
          $("#architecture").css("height", heightOfSection + "px", "important")
        }
      }
    });
    $('.less').click(function() {

      if ($(window).outerWidth() < 501) {
        $('.architecturePics li').not(':lt(4)').hide(10);
        let heightOfSection = $("#architecture").css("height");
        heightOfSection = "1100px";
        $("#architecture").attr("style", `height: ${heightOfSection}` + 'px' + ' !important')
        $('.more').show();
        $('.less').hide();
        let sectionArchitecture = $("#architecture");
        let sectionArchitectureElemDistanceTop = parseInt(sectionArchitecture.offset().top);
        $('html, body').animate({
          scrollTop: sectionArchitectureElemDistanceTop
        }, 500);
      } else if ($(window).outerWidth() <= 910) {
        $('.architecturePics li').not(':lt(4)').hide(10);
        let heightOfSection = $("#architecture").css("height");
        heightOfSection = "700px";
        $("#architecture").css("height", heightOfSection)
        $('.more').show();
        $('.less').hide();
        let sectionArchitecture = $("#architecture");
        let sectionArchitectureElemDistanceTop = parseInt(sectionArchitecture.offset().top);
        $('html, body').animate({
          scrollTop: sectionArchitectureElemDistanceTop
        }, 500);
      } else {
        $('.architecturePics li').not(':lt(9)').hide(10);
        let heightOfSection = $("#architecture").css("height");
        heightOfSection = "900px";
        $("#architecture").css("height", heightOfSection)
        $('.more').show();
        $('.less').hide();
        let sectionArchitecture = $("#architecture");
        let sectionArchitectureElemDistanceTop = parseInt(sectionArchitecture.offset().top);
        $('html, body').animate({
          scrollTop: sectionArchitectureElemDistanceTop
        }, 500);
      }
    });

    //Popup gallery at landscape section

    let visibleImgLandscape = $(".landscapePics").find("img");
    $.each(visibleImgLandscape, function() {
      $(this).on("click", event => {
        let currentImg = $(event.target);
        let landscapePics = document.querySelector(".landscapePics");
        let srcImg = $(event.target).attr("src");
        let newDiv = document.createElement("div");
        let prevSpan = document.createElement("span");
        let nextSpan = document.createElement("span");
        let crossElem = document.createElement("span");
        newDiv.classList.add("big");
        prevSpan.classList.add("prev");
        nextSpan.classList.add("next");
        prevSpan.classList.add("fa-angle-left");
        nextSpan.classList.add("fa-angle-right");
        prevSpan.classList.add("fa");
        nextSpan.classList.add("fa");
        crossElem.classList.add("cross");
        crossElem.classList.add("fa");
        crossElem.classList.add("fa-times");
        let newImg = document.createElement("img");
        newImg.setAttribute("src", srcImg);
        newDiv.appendChild(prevSpan);
        newDiv.appendChild(nextSpan);
        newDiv.appendChild(newImg);
        newDiv.appendChild(crossElem);
        landscapePics.appendChild(newDiv);
        nextSpan.addEventListener("click", () => {
          if (currentImg.parent().next().children().attr("src") == null) {
            landscapePics.removeChild(newDiv)
          } else {
            currentImg = currentImg.parent().next().children();
            srcImg = currentImg.attr("src");
            newImg.setAttribute("src", srcImg);
          }
        })
        prevSpan.addEventListener("click", () => {

          if (currentImg.parent().prev().children().attr("src") == null) {
            landscapePics.removeChild(newDiv)
          } else {
            currentImg = currentImg.parent().prev().children();
            srcImg = currentImg.attr("src");
            newImg.setAttribute("src", srcImg);
          }
        })
        crossElem.addEventListener("click", function() {
          landscapePics.removeChild(newDiv)
        })
      })
    })

    $(window).on("load resize", function() {
      if ($(window).outerWidth() > 910) {
        $('.landscapePics li').hide();
        $('.landscapePics li:lt(9)').show();
        let heightOfSection = $("#landscape").css("height");
        heightOfSection = "900px";
        $("#landscape").css("height", heightOfSection)
        $('.more2').show();
        $('.more2').attr('style', 'display:inline-block');
        $('.less2').hide();
        let sectionLandscape = $("#landscape");
        let sectionLandscapeElemDistanceTop = parseInt(sectionLandscape.offset().top);
      } else if ($(window).outerWidth() <= 910){
        $('.landscapePics li').hide();
        $('.landscapePics li:lt(4)').show();
        let heightOfSection = $("#landscape").css("height");
        heightOfSection = "700px";
        $("#landscape").css("height", heightOfSection)
        $('.more2').show();
        $('.more2').attr('style', 'display:inline-block');
        $('.less2').hide();
        let sectionLandscape = $("#landscape");
        let sectionLandscapeElemDistanceTop = parseInt(sectionLandscape.offset().top);
      }
    })
    $('.landscapePics li:lt(4)').show();
    $('.less2').hide();
    let items = 11;
    if ($(window).outerWidth() <= 910) {
    let shown = 4;
    }
    else{
    let shown = 9;
    }
    $('.more2').click(function() {
      $('.less2').attr("style", "display:inline-block");
      shown = $('.landscapePics li:visible').length + 6;
      console.log(shown);
      if (shown < items) {
        $('.landscapePics li:lt(' + shown + ')').show(300);
        if ($(window).outerWidth() < 501) {
          let heightOfSection = $("#landscape").css("height");
          heightOfSection = parseInt(heightOfSection) + 1350
          $("#landscape").attr("style", `height: ${heightOfSection}` + 'px' + ' !important')
        } else if ($(window).outerWidth() <= 910) {
          let heightOfSection = $("#landscape").css("height");
          heightOfSection = parseInt(heightOfSection) + 660
          $("#landscape").css("height", heightOfSection + "px", "important")
        } else {
          let heightOfSection = $("#landscape").css("height");
          heightOfSection = parseInt(heightOfSection) + 450
          $("#landscape").css("height", heightOfSection + "px", "important")
        }

      } else {
        $('.landscapePics li:lt(' + items + ')').show(300);
        if ($(window).outerWidth() < 501) {
          $('.more2').hide();
          $('.less2').attr("style", `left: 13%` + ' !important');
          let heightOfSection = $("#landscape").css("height");
          heightOfSection = parseInt(heightOfSection) + 350
          $("#landscape").attr("style", `height: ${heightOfSection}` + 'px' + ' !important')
        } else if ($(window).outerWidth() <= 910) {
          $('.more2').hide();
          $('.less2').attr("style", `left: 13%` + ' !important');
          let heightOfSection = $("#landscape").css("height");
          heightOfSection = parseInt(heightOfSection) + 280
          $("#landscape").css("height", heightOfSection + "px", "important")
        } else {
          $('.more2').hide();
          $('.less2').attr("style", `left: 13%` + ' !important');
          let heightOfSection = $("#landscape").css("height");
          heightOfSection = parseInt(heightOfSection) + 250
          $("#landscape").css("height", heightOfSection + "px", "important")
        }
        console.log($('.less2').attr("left"));
      }
    });
    $('.less2').click(function() {

      if ($(window).outerWidth() < 501) {
        $('.landscapePics li').not(':lt(4)').hide(10);
        let heightOfSection = $("#landscape").css("height");
        heightOfSection = "1100px";
        $("#landscape").attr("style", `height: ${heightOfSection}` + 'px' + ' !important')
        $('.more2').show();
        $('.more2').attr('style', 'display:inline-block');
        $('.less2').hide();
        let sectionLandscape = $("#landscape");
        let sectionLandscapeElemDistanceTop = parseInt(sectionLandscape.offset().top);
        $('html, body').animate({
          scrollTop: sectionLandscapeElemDistanceTop
        }, 500);
      } else if ($(window).outerWidth() <= 910) {
        $('.landscapePics li').not(':lt(4)').hide(10);
        let heightOfSection = $("#landscape").css("height");
        heightOfSection = "700px";
        $("#landscape").css("height", heightOfSection)
        $('.more2').show();
        $('.more2').attr('style', 'display:inline-block');
        $('.less2').hide();
        let sectionLandscape = $("#landscape");
        let sectionLandscapeElemDistanceTop = parseInt(sectionLandscape.offset().top);
        $('html, body').animate({
          scrollTop: sectionLandscapeElemDistanceTop
        }, 500);
      } else {
        $('.landscapePics li').not(':lt(9)').hide(10);
        let heightOfSection = $("#landscape").css("height");
        heightOfSection = "900px";
        $("#landscape").css("height", heightOfSection)
        $('.more2').show();
        $('.less2').hide();
        let sectionLandscape = $("#landscape");
        let sectionLandscapeElemDistanceTop = parseInt(sectionLandscape.offset().top);
        $('html, body').animate({
          scrollTop: sectionLandscapeElemDistanceTop
        }, 500);
      }
    });


  } else {
    const isMobile = {
      getUserAgent: () => {
        return navigator.userAgent;
      },
      Android: function() {
        return /Android/i.test(isMobile.getUserAgent()) && !isMobile.Windows();
      },
      BlackBerry: function() {
        return /BlackBerry|BB10|PlayBook/i.test(isMobile.getUserAgent());;
      },
      iPhone: function() {
        return /iPhone/i.test(isMobile.getUserAgent()) && !isMobile.iPad() && !isMobile.Windows();
      },
      iPod: function() {
        return /iPod/i.test(isMobile.getUserAgent());
      },
      iPad: function() {
        return /iPad/i.test(isMobile.getUserAgent());
      },
      iOS: function() {
        return (isMobile.iPad() || isMobile.iPod() || isMobile.iPhone());
      },
      Opera: function() {
        return /Opera Mini/i.test(isMobile.getUserAgent());
      },
      Windows: function() {
        return /Windows Phone|IEMobile|WPDesktop/i.test(isMobile.getUserAgent());
      },
      KindleFire: function() {
        return /Kindle Fire|Silk|KFAPWA|KFSOWI|KFJWA|KFJWI|KFAPWI|KFAPWI|KFOT|KFTT|KFTHWI|KFTHWA|KFASWI|KFTBWI|KFMEWI|KFFOWI|KFSAWA|KFSAWI|KFARWI/i.test(isMobile.getUserAgent());
      },
      any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
      }
    };
    if (isMobile.iOS() || isMobile.iPhone() || isMobile.iPad()) {
      $(".parallax").css("background-attachment", "scroll", "important")
      $(".parallax2").css("background-attachment", "scroll", "important")
      $(".parallax3").css("background-attachment", "scroll", "important")
      $(".parallax4").css("background-attachment", "scroll", "important")
    }
    setTimeout(() => {
      $(".loader").fadeOut('slow');
    }, 5000)
    //Loading burger and menu border
    $(".fa-bars").on("click", function() {
      $(this).toggleClass('fa-bars');
      $(this).toggleClass('fa-times');
      $(".burgerList").find("li").toggle(200);
    })

    $(document).on("scroll resize", (function() {
      let sectionAboutElem = $("#about");
      let sectionAboutElemDistanceTop = parseInt(sectionAboutElem.offset().top);
      let sectionArchitecture = $("#architecture");
      let sectionArchitectureElemDistanceTop = parseInt(sectionArchitecture.offset().top);
      let sectionLandscape = $("#landscape");
      let sectionLandscapeElemDistanceTop = parseInt(sectionLandscape.offset().top);
      let sectionContact = $(".parallax4");
      let sectionContactElemDistanceTop = parseInt(sectionContact.offset().top);
      let scrollingStartDistance = $("#header").offset().top;
      let scrollTop = $(document).scrollTop();
      if (scrollTop > scrollingStartDistance) {
        $(".menu").slideDown(1);
        $(".menu").css("display", "flex");
      }

      //Border bottom for anchor About Me
      if (scrollTop >= sectionAboutElemDistanceTop - 1 && scrollTop <= sectionAboutElemDistanceTop + 700) {
        $(".menu").find("li").first().css({borderBottom: "4px solid #c19e7e"})
      } else if (scrollTop < sectionAboutElemDistanceTop) {
        $(".menu").find("li").first().css("border-bottom", "");
      } else if (scrollTop >= sectionAboutElemDistanceTop + 700) {
        $(".menu").find("li").first().css("border-bottom", "");
      }
      //Border bottom for anchor Architecture
      if (scrollTop >= sectionArchitectureElemDistanceTop - 1 && scrollTop <= sectionArchitectureElemDistanceTop + parseInt($("#architecture").css("height")) - 60) {
        $(".menu").find("li").eq(1).css({borderBottom: "4px solid #c19e7e"})
      } else if (scrollTop < sectionArchitectureElemDistanceTop) {
        $(".menu").find("li").eq(1).css("border-bottom", "");
      } else if (scrollTop >= sectionArchitectureElemDistanceTop + 660) {
        $(".menu").find("li").eq(1).css("border-bottom", "");
      }
      //Border bottom for anchor Landscape
      if (scrollTop >= sectionLandscapeElemDistanceTop - 1 && scrollTop <= sectionLandscapeElemDistanceTop + parseInt($("#landscape").css("height")) - 61) {
        $(".menu").find("li").eq(2).css({borderBottom: "4px solid #c19e7e"})
      } else if (scrollTop < sectionLandscapeElemDistanceTop) {
        $(".menu").find("li").eq(2).css("border-bottom", "");
      } else if (scrollTop >= sectionLandscapeElemDistanceTop + 660) {
        $(".menu").find("li").eq(2).css("border-bottom", "");
      }
      //Border bottom for anchor contact
      if (scrollTop >= sectionContactElemDistanceTop - 60) {
        $(".menu").find("li").eq(3).css({borderBottom: "4px solid #c19e7e"})
      } else if (scrollTop < sectionContactElemDistanceTop) {
        $(".menu").find("li").eq(3).css("border-bottom", "");
      }
    }));

    $(window).on("load resize", function() {
      if ($(window).outerWidth() >= 680) {
        $(".burgerList").addClass('menuList');
        $(".burgerList").removeClass('burgerList')
      } else if ($(window).outerWidth() < 680) {
        $(".menuList").addClass('burgerList');
        $(".menuList").removeClass('menuList')
      }

    })

    $('a').click(function() {
      $('html, body').animate({
        scrollTop: $($(this).attr('href')).offset().top
      }, 500);
      if ($(".fa-times").css("display") == "block") {
        $(".burgerList").find("li").hide(200);
        $(".menu").find("i").toggleClass('fa-bars');
        $(".menu").find("i").toggleClass('fa-times');
      }
      return false;
    });

    //About Me section Loading and scroll
    let $animation_elements = $('.info').children();
    let $window = $(window);
    $window.on('scroll resize', check_if_in_view);
    $window.on('scroll resize', check_if_in_view2);
    function check_if_in_view() {
      let window_height = $window.height();
      let window_top_position = $window.scrollTop();
      let window_bottom_position = (window_top_position + window_height);

      $.each($animation_elements, function() {
        var $element = $(this);
        var element_height = $element.outerHeight();
        var element_top_position = $element.offset().top;
        var element_bottom_position = (element_top_position + element_height);

        if ((element_bottom_position >= window_top_position) && (element_top_position <= window_bottom_position)) {
          $element.addClass('in-view');
        }
      });
    }
    var aboutMeElem = $(".aboutMe");
    function check_if_in_view2() {
      var window_height = $window.height();
      var window_top_position = $window.scrollTop();
      var window_bottom_position = (window_top_position + window_height);

      $.each(aboutMeElem, function() {
        var $element = $(this);
        var element_height = $element.outerHeight();
        var element_top_position = $element.offset().top;
        var element_bottom_position = (element_top_position + element_height);
        if ((element_bottom_position >= window_top_position) && (element_top_position <= window_bottom_position)) {
          $element.addClass('in-view2');
        }
      })
    }
    // Popup gallery for Architecture
    let visibleImgArchitecture = $(".architecturePics").find("img");
    $.each(visibleImgArchitecture, function() {
      $(this).on("click", event => {
        let currentImg = $(event.target);
        let architecturePics = document.querySelector(".architecturePics");
        let srcImg = $(event.target).attr("src");
        let newDiv = document.createElement("div");
        let crossElem = document.createElement("span");
        newDiv.classList.add("big");
        crossElem.classList.add("cross");
        crossElem.classList.add("fa");
        crossElem.classList.add("fa-times");
        let newImg = document.createElement("img");
        newImg.setAttribute("src", srcImg);
        newDiv.appendChild(newImg);
        newDiv.appendChild(crossElem);
        architecturePics.appendChild(newDiv);
        $(".big").find("img").swipeleft(() => {
          if (currentImg.parent().next().children().attr("src") == null) {
            architecturePics.removeChild(newDiv)
          } else {
            currentImg = currentImg.parent().next().children();
            srcImg = currentImg.attr("src");
            newImg.setAttribute("src", srcImg);
          }
        })
        $(".big").find("img").swiperight(() => {

          if (currentImg.parent().prev().children().attr("src") == null) {
            architecturePics.removeChild(newDiv)
          } else {
            currentImg = currentImg.parent().prev().children();
            srcImg = currentImg.attr("src");
            newImg.setAttribute("src", srcImg);
          }
        })
        crossElem.addEventListener("click", function() {
          architecturePics.removeChild(newDiv)
        })
      })
    })
    //Loading images for Architecture
    $(window).on("load resize", function() {
      if ($(window).outerWidth() > 910) {
        $('.architecturePics li').hide();
        $('.architecturePics li:lt(9)').show();
        let heightOfSection = $("#architecture").css("height");
        heightOfSection = "900px";
        $("#architecture").css("height", heightOfSection)
        $('.more').show();
        $('.less').hide();
        let sectionArchitecture = $("#architecture");
        let sectionArchitectureElemDistanceTop = parseInt(sectionArchitecture.offset().top);
      } else if ($(window).outerWidth() <= 910){
        $('.architecturePics li').hide();
        $('.architecturePics li:lt(4)').show();
        let heightOfSection = $("#architecture").css("height");
        heightOfSection = "700px";
        $("#architecture").css("height", heightOfSection)
        $('.more').show();
        $('.less').hide();
        let sectionArchitecture = $("#architecture");
        let sectionArchitectureElemDistanceTop = parseInt(sectionArchitecture.offset().top);
      }
    })
    $('.architecturePics li:lt(4)').show();
    $('.less').hide();
    let items2 = 36;
    if ($(window).outerWidth() <= 910) {
    let shown2 = 4;
  }
  else{
    let shown2 = 9;
  }
    $('.more').click(function() {
      $('.less').attr('style', 'display:inline-block');
      shown2 = $('.architecturePics li:visible').length + 6;
      console.log(shown2);
      if (shown2 < items2) {
        $('.architecturePics li:lt(' + shown2 + ')').show(300);
        if ($(window).outerWidth() < 501) {
          let heightOfSection = $("#architecture").css("height");
          heightOfSection = parseInt(heightOfSection) + 1350
          $("#architecture").attr("style", `height: ${heightOfSection}` + 'px' + ' !important')
        } else if ($(window).outerWidth() <= 910) {
          let heightOfSection = $("#architecture").css("height");
          heightOfSection = parseInt(heightOfSection) + 660
          $("#architecture").css("height", heightOfSection + "px", "important")
        } else {
          let heightOfSection = $("#architecture").css("height");
          heightOfSection = parseInt(heightOfSection) + 450
          $("#architecture").css("height", heightOfSection + "px", "important")
        }
      } else {
        $('.architecturePics li:lt(' + items2 + ')').show(300);
        if ($(window).outerWidth()<501){
          $('.more').hide();
           let heightOfSection = $("#architecture").css("height");
           heightOfSection= parseInt(heightOfSection)+350
           $("#architecture").attr("style", `height: ${heightOfSection}`+'px'+' !important')
         }
        else if ($(window).outerWidth() <= 910) {
          $('.more').hide();
          let heightOfSection = $("#architecture").css("height");
          heightOfSection = parseInt(heightOfSection) + 280
          $("#architecture").css("height", heightOfSection + "px", "important")
        } else {
          $('.more').hide();
          let heightOfSection = $("#architecture").css("height");
          heightOfSection = parseInt(heightOfSection) + 250
          $("#architecture").css("height", heightOfSection + "px", "important")
        }
      }
    });
    $('.less').click(function() {
      if ($(window).outerWidth()<501){
         $('.architecturePics li').not(':lt(4)').hide(10);
         let heightOfSection = $("#architecture").css("height");
         heightOfSection = "700px";
        $("#architecture").attr("style", `height: ${heightOfSection}`+'px'+' !important')
         $('.more').show();
         $('.less').hide();
         let sectionArchitecture = $("#architecture");
         let sectionArchitectureElemDistanceTop = parseInt(sectionArchitecture.offset().top);
         $('html, body').animate({
           scrollTop: sectionArchitectureElemDistanceTop
         }, 500);
       }
      if ($(window).outerWidth() <= 910) {
        $('.architecturePics li').not(':lt(4)').hide(10);
        let heightOfSection = $("#architecture").css("height");
        heightOfSection = "700px";
        $("#architecture").css("height", heightOfSection)
        $('.more').show();
        $('.less').hide();
        let sectionArchitecture = $("#architecture");
        let sectionArchitectureElemDistanceTop = parseInt(sectionArchitecture.offset().top);
        $('html, body').animate({
          scrollTop: sectionArchitectureElemDistanceTop
        }, 500);
      } else {
        $('.architecturePics li').not(':lt(9)').hide(10);
        let heightOfSection = $("#architecture").css("height");
        heightOfSection = "900px";
        $("#architecture").css("height", heightOfSection)
        $('.more').show();
        $('.less').hide();
        let sectionArchitecture = $("#architecture");
        let sectionArchitectureElemDistanceTop = parseInt(sectionArchitecture.offset().top);
        $('html, body').animate({
          scrollTop: sectionArchitectureElemDistanceTop
        }, 500);
      }
    });

    let visibleImgLandscape = $(".landscapePics").find("img");
    $.each(visibleImgLandscape, function() {
      $(this).on("click", event => {
        let currentImg = $(event.target);
        let landscapePics = document.querySelector(".landscapePics");
        let srcImg = $(event.target).attr("src");
        let newDiv = document.createElement("div");
        let crossElem = document.createElement("span");
        newDiv.classList.add("big");
        crossElem.classList.add("cross");
        crossElem.classList.add("fa");
        crossElem.classList.add("fa-times");
        let newImg = document.createElement("img");
        newImg.setAttribute("src", srcImg);
        newDiv.appendChild(newImg);
        newDiv.appendChild(crossElem);
        landscapePics.appendChild(newDiv);
        $(".big").find("img").swipeleft(() => {
          if (currentImg.parent().next().children().attr("src") == null) {
            landscapePics.removeChild(newDiv)
          } else {
            currentImg = currentImg.parent().next().children();
            srcImg = currentImg.attr("src");
            newImg.setAttribute("src", srcImg);
          }
        })
        $(".big").find("img").swiperight(() => {

          if (currentImg.parent().prev().children().attr("src") == null) {
            landscapePics.removeChild(newDiv)
          } else {
            currentImg = currentImg.parent().prev().children();
            srcImg = currentImg.attr("src");
            newImg.setAttribute("src", srcImg);
          }
        })
        crossElem.addEventListener("click", function() {
          landscapePics.removeChild(newDiv)
        })
      })
    })

    $(window).on("load resize", function() {
      if ($(window).outerWidth() > 910) {
        $('.landscapePics li').hide();
        $('.landscapePics li:lt(9)').show();
        let heightOfSection = $("#landscape").css("height");
        heightOfSection = "900px";
        $("#landscape").css("height", heightOfSection)
        $('.more2').show();
        $('.more2').attr('style', 'display:inline-block');
        $('.less2').hide();
        let sectionLandscape = $("#landscape");
        let sectionLandscapeElemDistanceTop = parseInt(sectionLandscape.offset().top);
      } else if ($(window).outerWidth() <= 910){
        $('.landscapePics li').hide();
        $('.landscapePics li:lt(4)').show();
        let heightOfSection = $("#landscape").css("height");
        heightOfSection = "700px";
        $("#landscape").css("height", heightOfSection)
        $('.more2').show();
        $('.more2').attr('style', 'display:inline-block');
        $('.less2').hide();
        let sectionLandscape = $("#landscape");
        let sectionLandscapeElemDistanceTop = parseInt(sectionLandscape.offset().top);
      }
    })
    $('.landscapePics li:lt(4)').show();
    $('.less2').hide();
    let items = 11;
    if ($(window).outerWidth() <= 910) {
    let shown = 4;
    }
    else{
    let shown = 9;
    }
    $('.more2').click(function() {
      $('.less2').attr("style", "display:inline-block");
      shown = $('.landscapePics li:visible').length + 6;
      console.log(shown);
      if (shown < items) {
        $('.landscapePics li:lt(' + shown + ')').show(300);
        if ($(window).outerWidth() < 501) {
          let heightOfSection = $("#landscape").css("height");
          heightOfSection = parseInt(heightOfSection) + 1350
          $("#landscape").attr("style", `height: ${heightOfSection}` + 'px' + ' !important')
        } else if ($(window).outerWidth() <= 910) {
          let heightOfSection = $("#landscape").css("height");
          heightOfSection = parseInt(heightOfSection) + 660
          $("#landscape").css("height", heightOfSection + "px", "important")
        } else {
          let heightOfSection = $("#landscape").css("height");
          heightOfSection = parseInt(heightOfSection) + 450
          $("#landscape").css("height", heightOfSection + "px", "important")
        }

      } else {
        $('.landscapePics li:lt(' + items + ')').show(300);
        if ($(window).outerWidth() < 501) {
          $('.more2').hide();
          $('.less2').attr("left","13%");
          let heightOfSection = $("#landscape").css("height");
          heightOfSection = parseInt(heightOfSection) + 350
          $("#landscape").attr("style", `height: ${heightOfSection}` + 'px' + ' !important')
        } else if ($(window).outerWidth() <= 910) {
          $('.more2').hide();
          $('.less2').attr("left","13%");
          let heightOfSection = $("#landscape").css("height");
          heightOfSection = parseInt(heightOfSection) + 280
          $("#landscape").css("height", heightOfSection + "px", "important")
        } else {
          $('.more2').hide();
          let heightOfSection = $("#landscape").css("height");
          heightOfSection = parseInt(heightOfSection) + 250
          $("#landscape").css("height", heightOfSection + "px", "important")
        }
      }
    });
    $('.less2').click(function() {

      if ($(window).outerWidth() < 501) {
        $('.landscapePics li').not(':lt(4)').hide(10);
        let heightOfSection = $("#landscape").css("height");
        heightOfSection = "1100px";
        $("#landscape").attr("style", `height: ${heightOfSection}` + 'px' + ' !important')
        $('.more2').show();
        $('.more2').attr('style', 'display:inline-block');
        $('.less2').hide();
        let sectionLandscape = $("#landscape");
        let sectionLandscapeElemDistanceTop = parseInt(sectionLandscape.offset().top);
        $('html, body').animate({
          scrollTop: sectionLandscapeElemDistanceTop
        }, 500);
      } else if ($(window).outerWidth() <= 910) {
        $('.landscapePics li').not(':lt(4)').hide(10);
        let heightOfSection = $("#landscape").css("height");
        heightOfSection = "700px";
        $("#landscape").css("height", heightOfSection)
        $('.more2').show();
        $('.more2').attr('style', 'display:inline-block');
        $('.less2').hide();
        let sectionLandscape = $("#landscape");
        let sectionLandscapeElemDistanceTop = parseInt(sectionLandscape.offset().top);
        $('html, body').animate({
          scrollTop: sectionLandscapeElemDistanceTop
        }, 500);
      } else {
        $('.landscapePics li').not(':lt(9)').hide(10);
        let heightOfSection = $("#landscape").css("height");
        heightOfSection = "900px";
        $("#landscape").css("height", heightOfSection)
        $('.more2').show();
        $('.more2').attr('style', 'display:inline-block');
        $('.less2').hide();
        let sectionLandscape = $("#landscape");
        let sectionLandscapeElemDistanceTop = parseInt(sectionLandscape.offset().top);
        $('html, body').animate({
          scrollTop: sectionLandscapeElemDistanceTop
        }, 500);
      }
    })
}
})


/***/ }),
/* 1 */
/***/ (function(module, exports) {

(function(self) {
  'use strict';

  if (self.fetch) {
    return
  }

  var support = {
    searchParams: 'URLSearchParams' in self,
    iterable: 'Symbol' in self && 'iterator' in Symbol,
    blob: 'FileReader' in self && 'Blob' in self && (function() {
      try {
        new Blob()
        return true
      } catch(e) {
        return false
      }
    })(),
    formData: 'FormData' in self,
    arrayBuffer: 'ArrayBuffer' in self
  }

  if (support.arrayBuffer) {
    var viewClasses = [
      '[object Int8Array]',
      '[object Uint8Array]',
      '[object Uint8ClampedArray]',
      '[object Int16Array]',
      '[object Uint16Array]',
      '[object Int32Array]',
      '[object Uint32Array]',
      '[object Float32Array]',
      '[object Float64Array]'
    ]

    var isDataView = function(obj) {
      return obj && DataView.prototype.isPrototypeOf(obj)
    }

    var isArrayBufferView = ArrayBuffer.isView || function(obj) {
      return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1
    }
  }

  function normalizeName(name) {
    if (typeof name !== 'string') {
      name = String(name)
    }
    if (/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(name)) {
      throw new TypeError('Invalid character in header field name')
    }
    return name.toLowerCase()
  }

  function normalizeValue(value) {
    if (typeof value !== 'string') {
      value = String(value)
    }
    return value
  }

  // Build a destructive iterator for the value list
  function iteratorFor(items) {
    var iterator = {
      next: function() {
        var value = items.shift()
        return {done: value === undefined, value: value}
      }
    }

    if (support.iterable) {
      iterator[Symbol.iterator] = function() {
        return iterator
      }
    }

    return iterator
  }

  function Headers(headers) {
    this.map = {}

    if (headers instanceof Headers) {
      headers.forEach(function(value, name) {
        this.append(name, value)
      }, this)
    } else if (Array.isArray(headers)) {
      headers.forEach(function(header) {
        this.append(header[0], header[1])
      }, this)
    } else if (headers) {
      Object.getOwnPropertyNames(headers).forEach(function(name) {
        this.append(name, headers[name])
      }, this)
    }
  }

  Headers.prototype.append = function(name, value) {
    name = normalizeName(name)
    value = normalizeValue(value)
    var oldValue = this.map[name]
    this.map[name] = oldValue ? oldValue+','+value : value
  }

  Headers.prototype['delete'] = function(name) {
    delete this.map[normalizeName(name)]
  }

  Headers.prototype.get = function(name) {
    name = normalizeName(name)
    return this.has(name) ? this.map[name] : null
  }

  Headers.prototype.has = function(name) {
    return this.map.hasOwnProperty(normalizeName(name))
  }

  Headers.prototype.set = function(name, value) {
    this.map[normalizeName(name)] = normalizeValue(value)
  }

  Headers.prototype.forEach = function(callback, thisArg) {
    for (var name in this.map) {
      if (this.map.hasOwnProperty(name)) {
        callback.call(thisArg, this.map[name], name, this)
      }
    }
  }

  Headers.prototype.keys = function() {
    var items = []
    this.forEach(function(value, name) { items.push(name) })
    return iteratorFor(items)
  }

  Headers.prototype.values = function() {
    var items = []
    this.forEach(function(value) { items.push(value) })
    return iteratorFor(items)
  }

  Headers.prototype.entries = function() {
    var items = []
    this.forEach(function(value, name) { items.push([name, value]) })
    return iteratorFor(items)
  }

  if (support.iterable) {
    Headers.prototype[Symbol.iterator] = Headers.prototype.entries
  }

  function consumed(body) {
    if (body.bodyUsed) {
      return Promise.reject(new TypeError('Already read'))
    }
    body.bodyUsed = true
  }

  function fileReaderReady(reader) {
    return new Promise(function(resolve, reject) {
      reader.onload = function() {
        resolve(reader.result)
      }
      reader.onerror = function() {
        reject(reader.error)
      }
    })
  }

  function readBlobAsArrayBuffer(blob) {
    var reader = new FileReader()
    var promise = fileReaderReady(reader)
    reader.readAsArrayBuffer(blob)
    return promise
  }

  function readBlobAsText(blob) {
    var reader = new FileReader()
    var promise = fileReaderReady(reader)
    reader.readAsText(blob)
    return promise
  }

  function readArrayBufferAsText(buf) {
    var view = new Uint8Array(buf)
    var chars = new Array(view.length)

    for (var i = 0; i < view.length; i++) {
      chars[i] = String.fromCharCode(view[i])
    }
    return chars.join('')
  }

  function bufferClone(buf) {
    if (buf.slice) {
      return buf.slice(0)
    } else {
      var view = new Uint8Array(buf.byteLength)
      view.set(new Uint8Array(buf))
      return view.buffer
    }
  }

  function Body() {
    this.bodyUsed = false

    this._initBody = function(body) {
      this._bodyInit = body
      if (!body) {
        this._bodyText = ''
      } else if (typeof body === 'string') {
        this._bodyText = body
      } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
        this._bodyBlob = body
      } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
        this._bodyFormData = body
      } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
        this._bodyText = body.toString()
      } else if (support.arrayBuffer && support.blob && isDataView(body)) {
        this._bodyArrayBuffer = bufferClone(body.buffer)
        // IE 10-11 can't handle a DataView body.
        this._bodyInit = new Blob([this._bodyArrayBuffer])
      } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
        this._bodyArrayBuffer = bufferClone(body)
      } else {
        throw new Error('unsupported BodyInit type')
      }

      if (!this.headers.get('content-type')) {
        if (typeof body === 'string') {
          this.headers.set('content-type', 'text/plain;charset=UTF-8')
        } else if (this._bodyBlob && this._bodyBlob.type) {
          this.headers.set('content-type', this._bodyBlob.type)
        } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
          this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8')
        }
      }
    }

    if (support.blob) {
      this.blob = function() {
        var rejected = consumed(this)
        if (rejected) {
          return rejected
        }

        if (this._bodyBlob) {
          return Promise.resolve(this._bodyBlob)
        } else if (this._bodyArrayBuffer) {
          return Promise.resolve(new Blob([this._bodyArrayBuffer]))
        } else if (this._bodyFormData) {
          throw new Error('could not read FormData body as blob')
        } else {
          return Promise.resolve(new Blob([this._bodyText]))
        }
      }

      this.arrayBuffer = function() {
        if (this._bodyArrayBuffer) {
          return consumed(this) || Promise.resolve(this._bodyArrayBuffer)
        } else {
          return this.blob().then(readBlobAsArrayBuffer)
        }
      }
    }

    this.text = function() {
      var rejected = consumed(this)
      if (rejected) {
        return rejected
      }

      if (this._bodyBlob) {
        return readBlobAsText(this._bodyBlob)
      } else if (this._bodyArrayBuffer) {
        return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer))
      } else if (this._bodyFormData) {
        throw new Error('could not read FormData body as text')
      } else {
        return Promise.resolve(this._bodyText)
      }
    }

    if (support.formData) {
      this.formData = function() {
        return this.text().then(decode)
      }
    }

    this.json = function() {
      return this.text().then(JSON.parse)
    }

    return this
  }

  // HTTP methods whose capitalization should be normalized
  var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT']

  function normalizeMethod(method) {
    var upcased = method.toUpperCase()
    return (methods.indexOf(upcased) > -1) ? upcased : method
  }

  function Request(input, options) {
    options = options || {}
    var body = options.body

    if (input instanceof Request) {
      if (input.bodyUsed) {
        throw new TypeError('Already read')
      }
      this.url = input.url
      this.credentials = input.credentials
      if (!options.headers) {
        this.headers = new Headers(input.headers)
      }
      this.method = input.method
      this.mode = input.mode
      if (!body && input._bodyInit != null) {
        body = input._bodyInit
        input.bodyUsed = true
      }
    } else {
      this.url = String(input)
    }

    this.credentials = options.credentials || this.credentials || 'omit'
    if (options.headers || !this.headers) {
      this.headers = new Headers(options.headers)
    }
    this.method = normalizeMethod(options.method || this.method || 'GET')
    this.mode = options.mode || this.mode || null
    this.referrer = null

    if ((this.method === 'GET' || this.method === 'HEAD') && body) {
      throw new TypeError('Body not allowed for GET or HEAD requests')
    }
    this._initBody(body)
  }

  Request.prototype.clone = function() {
    return new Request(this, { body: this._bodyInit })
  }

  function decode(body) {
    var form = new FormData()
    body.trim().split('&').forEach(function(bytes) {
      if (bytes) {
        var split = bytes.split('=')
        var name = split.shift().replace(/\+/g, ' ')
        var value = split.join('=').replace(/\+/g, ' ')
        form.append(decodeURIComponent(name), decodeURIComponent(value))
      }
    })
    return form
  }

  function parseHeaders(rawHeaders) {
    var headers = new Headers()
    rawHeaders.split(/\r?\n/).forEach(function(line) {
      var parts = line.split(':')
      var key = parts.shift().trim()
      if (key) {
        var value = parts.join(':').trim()
        headers.append(key, value)
      }
    })
    return headers
  }

  Body.call(Request.prototype)

  function Response(bodyInit, options) {
    if (!options) {
      options = {}
    }

    this.type = 'default'
    this.status = 'status' in options ? options.status : 200
    this.ok = this.status >= 200 && this.status < 300
    this.statusText = 'statusText' in options ? options.statusText : 'OK'
    this.headers = new Headers(options.headers)
    this.url = options.url || ''
    this._initBody(bodyInit)
  }

  Body.call(Response.prototype)

  Response.prototype.clone = function() {
    return new Response(this._bodyInit, {
      status: this.status,
      statusText: this.statusText,
      headers: new Headers(this.headers),
      url: this.url
    })
  }

  Response.error = function() {
    var response = new Response(null, {status: 0, statusText: ''})
    response.type = 'error'
    return response
  }

  var redirectStatuses = [301, 302, 303, 307, 308]

  Response.redirect = function(url, status) {
    if (redirectStatuses.indexOf(status) === -1) {
      throw new RangeError('Invalid status code')
    }

    return new Response(null, {status: status, headers: {location: url}})
  }

  self.Headers = Headers
  self.Request = Request
  self.Response = Response

  self.fetch = function(input, init) {
    return new Promise(function(resolve, reject) {
      var request = new Request(input, init)
      var xhr = new XMLHttpRequest()

      xhr.onload = function() {
        var options = {
          status: xhr.status,
          statusText: xhr.statusText,
          headers: parseHeaders(xhr.getAllResponseHeaders() || '')
        }
        options.url = 'responseURL' in xhr ? xhr.responseURL : options.headers.get('X-Request-URL')
        var body = 'response' in xhr ? xhr.response : xhr.responseText
        resolve(new Response(body, options))
      }

      xhr.onerror = function() {
        reject(new TypeError('Network request failed'))
      }

      xhr.ontimeout = function() {
        reject(new TypeError('Network request failed'))
      }

      xhr.open(request.method, request.url, true)

      if (request.credentials === 'include') {
        xhr.withCredentials = true
      }

      if ('responseType' in xhr && support.blob) {
        xhr.responseType = 'blob'
      }

      request.headers.forEach(function(value, name) {
        xhr.setRequestHeader(name, value)
      })

      xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit)
    })
  }
  self.fetch.polyfill = true
})(typeof self !== 'undefined' ? self : this);


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1);
module.exports = __webpack_require__(0);


/***/ })
/******/ ]);