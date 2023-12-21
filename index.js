$(window).on('scroll',function(){
  if($(window).scrollTop()){
      $('nav').addClass('black');
  }
  else{
      $('nav').removeClass('black');
  }
})
/*menu button onclick function*/         $(document).ready(function(){
      $('.menu h4').click(function(){
          $("nav ul").toggleClass("active")
  })
  })

  window.addEventListener("scroll", function() {
    const nav = document.querySelector("nav");
    const hero = document.querySelector(".hero");
    const heroBottom = hero.offsetTop + hero.offsetHeight;

    if (window.pageYOffset > heroBottom) {
        nav.classList.add("black");
    } else {
        nav.classList.remove("black");
    }
}); 

//parallax
document.getElementById('next').onclick = function(){
  let lists = document.querySelectorAll('.item');
  document.getElementById('slide').appendChild(lists[0]);
}
document.getElementById('prev').onclick = function(){
  let lists = document.querySelectorAll('.item');
  document.getElementById('slide').prepend(lists[lists.length - 1]);
}
// Parallax Effect for DIV 1
window.addEventListener("scroll", function () {
  let offset = window.pageYOffset;
  parallax.style.backgroundPositionY = offset * 0.9 + "px";
  // DIV 1 background will move slower than other elements on scroll.
});

document.addEventListener('DOMContentLoaded', function() {
  const videos = document.querySelectorAll('video');

  videos.forEach(video => {
    video.addEventListener('ended', function() {
      this.currentTime = 0; // Set video time to start
      this.play(); // Play video again
    });
  });
});
