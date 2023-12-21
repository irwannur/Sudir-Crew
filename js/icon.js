const sliderContainer = document.querySelector('.slider-container')
const slideRight = document.querySelector('.right-slide')
const slideLeft = document.querySelector('.left-slide')
const upButton = document.querySelector('.up-button')
const downButton = document.querySelector('.down-button')
const slidesLength = slideRight.querySelectorAll('div').length

let activeSlideIndex = 0

slideLeft.style.top = `-${(slidesLength - 1) * 100}vh`

upButton.addEventListener('click', () => changeSlide('up'))
downButton.addEventListener('click', () => changeSlide('down'))

const changeSlide = (direction) => {
    const sliderHeight = sliderContainer.clientHeight
    if(direction === 'up') {
        activeSlideIndex++
        if(activeSlideIndex > slidesLength - 1) {
            activeSlideIndex = 0
        }
    } else if(direction === 'down') {
        activeSlideIndex--
        if(activeSlideIndex < 0) {
            activeSlideIndex = slidesLength - 1
        }
    }

    slideRight.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`
    slideLeft.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`
}
    const nav = document.querySelector(".nav");
window.addEventListener("scroll", fixNav);

function fixNav() {
  if (window.scrollY > nav.offsetHeight + 150) {
    nav.classList.add("active");
  } else {
    nav.classList.remove("active");
  }
}

$(document).ready(function() {
  
    var $sections = $(".section"),
        winW = $(window).width(),
        winH = $(window).height();
    
    function setAttrs() {
      $sections.each(function() {
        var $this = $(this),
            hasSvg = $this.children(".section__svg").length,
            $bgCont = hasSvg ? $this.find(".section__svg") : $this,
            offsetTop = $bgCont.offset().top,
            height = $bgCont.outerHeight();
        
        $(this).data({"offset": offsetTop, "height": height});
      });
    }
    
    setAttrs();
    
    // debounce function from David Walsh blog
    function debounce(func, wait, immediate) {
      var timeout;
      return function() {
        var context = this, args = arguments;
        var later = function() {
          timeout = null;
          if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
      };
    };
    
    var resizeFn = debounce(function() {
      setAttrs();
      winW = $(window).width();
      winH = $(window).height();
    }, 50);
    
    $(window).on("resize", resizeFn);
    
    $(window).on("scroll", function() {
      var st = $(window).scrollTop();
      $sections.each(function() {
        var $this = $(this),
            $bg = $(this).find(".section__bg"),
            $svgImg = $(this).find(".section__svg image"),
            offsetTop = $this.data("offset"),
            height = $this.data("height"),
            ofTop = offsetTop - height,
            percent = 0;
        
        percent = (st - offsetTop + winH) / height * 100;
        if (st < offsetTop - winH) percent = 0;
        if (st > offsetTop + height) percent = 200;
        $bg.css("transform", "translate3d(0,"+(percent/-6)+"%,0)");
        $svgImg.attr("y", (-35 - percent/7) + "%");
      });
    });
    
    $(window).trigger("scroll");
    
  });
  
