// INTRO 커튼 효과
  setTimeout(function () {
    document.getElementById("cover").classList.add("cover-left");
  });



// GNB 메뉴 클릭 시 이동하는 효과 + 커튼 효과
  function pageClick() {
    document.querySelectorAll(".click").forEach((elem) => {
      elem.addEventListener("click", (e) => {
        e.preventDefault();
        const dataName = elem.getAttribute('data-name');
        console.log(dataName);
        document.getElementById("cover").classList.add("cover-right");
        setTimeout(() => {
          window.location.href =
            "" + dataName + ".html";
        }, 1200);
      });
    });
  }
  pageClick();



// GNB 메뉴 클릭 시 위로 올라가는 효과
  $('.gnb li').click(function(){
    $('.gnb').addClass('out');
  });



// 어바웃 SECTION.1 타이핑 효과 
  const $text = document.querySelector(".typing_txt");
  // 글자 모음 - 개행문자(\n)로 줄바꿈
  const letters = [
    "안녕하세요 \n 저는 프론트엔드 신입 개발자 \n 이훈재 입니다.",
    "제 포트폴리오에 \n 방문해주셔서 감사합니다.", 
  ];
  // 글자 입력 속도
  const speed = 70;
  let i = 0;
  // 줄바꿈을 위한 <br> 치환
  const changeLineBreak = (letter) => {
    return letter.map(text => text === "\n" ? "<br>" : text);
  }
  // 타이핑 효과
  const typing = async () => {  
    // 기존코드에서 개행치환코드 추가
    const letter = changeLineBreak(letters[i].split(""));
    
    while (letter.length) {
      await wait(speed);
      $text.innerHTML += letter.shift(); 
    }
    // 잠시 대기
    await wait(800);
    // 지우는 효과
    remove();
  }

  // 글자 지우는 효과
  const remove = async () => {
    // 기존코드에서 개행치환코드 추가
    const letter = changeLineBreak(letters[i].split(""));
    
    while (letter.length) {
      await wait(speed);
      
      letter.pop();
      $text.innerHTML = letter.join(""); 
    }
    
    // 다음 순서의 글자로 지정, 타이핑 함수 다시 실행
    i = !letters[i+1] ? 0 : i + 1;
    typing();
  }
  // 딜레이 기능 ( 마이크로초 )
  function wait(ms) {
    return new Promise(res => setTimeout(res, ms))
  }
  // 초기 실행
  setTimeout(typing, 1500);



// 스크롤 내리다 특정 영역 이벤트 발생
// function vh(v) {
//   var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
//   return (v * h) / 100;
// }
// $(function() {
//   $(window).on("scroll", function() {
//     if($(window).scrollTop() > vh(90)) {
//       $(".gnb").addClass('black');
//     } else {
//       $(".gnb").removeClass('black');
//     }
//   });
// });



// 어바웃 SECTION.2 가로 텍스트 움직이는 이벤트
let didScroll = false;
let paralaxTitles = document.querySelectorAll('.paralax_title');
let paralaxTitles2 = document.querySelectorAll('.paralax_title2');

const scrollInProgress = () => {
  didScroll = true
}

const raf = () => {
  if(didScroll) {
    paralaxTitles.forEach((element, index) => {
      element.style.transform = "translateX("+ window.scrollY / 10 + "%)"
    })
    paralaxTitles2.forEach((element, index) => {
      element.style.transform = "translateX("+"-"+ window.scrollY / 10 + "%)"
    })
    didScroll = false;
  }
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
window.addEventListener('scroll', scrollInProgress);



// 어바웃 마우스 애로우 클릭 시 이동
$(document).ready(function(){
  $(".mouse_arrow").click(function(){
    $("html ").animate({scrollTop:$("#about_section2").offset().top},1000);
  });
});



// 스크롤 값 계산해서 컬러 바꾸기 & SECTION 3 텍스트 계단 효과
$(function() {
  $(window).on("scroll", function() {
    if($('.top_nav_sub').offset().top > $('#about_section2').offset().top - 70 && $('.top_nav_sub').offset().top < $('#about_section3').offset().top - 30) {
      $('.top_nav_sub').addClass('black');
      $('.gnb').addClass('black');
      $('.info_box').removeClass('on');
      $('.words').removeClass('active');
      $('.words_txtWrap').removeClass('on');
      $('.arrow_lineWrap').removeClass('up');
      $('.outline_box').removeClass('line');
    } else {
      $('.top_nav_sub').removeClass('black');
      $('.gnb').removeClass('black');
      $('.info_box').addClass('on');
      $('.words').addClass('active');
      $('.words_txtWrap').addClass('on');
      $('.arrow_lineWrap').addClass('up');
      $('.outline_box').addClass('line');
    }
  });
});

// AOS (화면 나타나는 효과)
$(document).ready(function(){
  AOS.init();
  // $("body").attr("data-aos-duration","2000");
  // $("[data-aos='fade-up']").css("transform","translate3d(0,0px,0)");
  $("body[data-aos-duration='400'] [data-aos]").css("transition-duration","1s");
});

// 스크롤 내리면 fixed된 nav 사라지고, 올리면 다시 생기는 스크립트
// var lastScrollTop = 0, delta = 15;
// $(window).scroll(function(){
//     var scrollTop = $(this).scrollTop()
//     if(Math.abs(lastScrollTop - scrollTop) <= delta)
//     return;

//     if ((scrollTop > lastScrollTop) && (lastScrollTop>0)) {
//         $(".top_nav_sub").css("top","-100px");
//     } else {
//         $(".top_nav_sub").css("top","0px");
//     }

//     lastScrollTop = scrollTop;
// });

