const slideWrapper = document.querySelector('.slidewrapper');
const slideContainer = slideWrapper.querySelector('ul');
const slideCount = slideContainer.querySelectorAll('li').length;
let currentIdx = 0;
const prevBtn = slideWrapper.querySelector('.prev');
const nextBtn = slideWrapper.querySelector('.next');
let slideWidth = slideWrapper.offsetWidth; // 1272


slideContainer.style.width = `${slideWidth * slideCount}px`;

window.addEventListener('resize',()=>{
  
  if(document.body.offsetWidth <= 1272){ // 윈도우의 너비가 1272이하가 되면 
    
      slideWidth = slideWrapper.offsetWidth -32;
      
    }else{
      slideWidth = slideWrapper.offsetWidth 
      
    }
    slideContainer.style.width = `${slideWidth * slideCount}px`;
  
  // 슬라이드 너비지정
  // sliderWrapper * slideCount
  // sliderWrapper.offsetWidth 



});

const btt = document.querySelector ('#btt');
/*
윈도우에 스크롤이 생기면 할일
그 스크롤양이 300이상이면 btt가 나타나고
아니면 사라진다.
*/
window.addEventListener('scroll',()=>{
  
  console.log(window.scrollY);

  if(window.screenY > 300){
    btt.classList.add('active');
  }
  else{
    btt.classList.remove('active');
  }
});
  btt.addEventListener('click',e=>{
    e.preventDefault(); // window.scrollTo(0.0);
    window.scrollTo({
      left:0,
      top:0,
      behavior : 'smooth'
    });
  })


/*
slideContainer 너비 지정하기
slideWrapper너비 * 슬라이드 개수
대상.offsetWidth  너비구하기
대상.style.css속성명 = '값';
*/


// 슬라이드 이동

/*
goToSlide 라는 함수는 숫자(num)가 매개변수로 들어오면 슬라이드를 이동한다.
num 0 -> slideContainer 의 transform:translateX(0);
num 1 -> slideContainer 의 transform:translateX(1272-0px);
num 2 -> slideContainer 의 transform:translateX(1272*-2)px;
num 3 -> slideContainer 의 transform:translateX(1272*-3)px;
*/

function gotoSlide(num){
  slideContainer.style.transform = `translateX(${slideWidth * -num}px)`;
  currentIdx = num;
};
gotoSlide(0);
// 다음버튼 클릭시 이동
/*
다음 버튼을 클릭하면 할일
슬라이를 이동한다 currentIdx + 1
마지막 슬라이드일때 다음버튼을 클릭하면 처음으로 이동한다.
*/
nextBtn.addEventListener('click',()=>{
  if(currentIdx === slideCount -1 ){
    gotoSlide(0)
  }else{
    gotoSlide(currentIdx +1);
  }
  
});

prevBtn.addEventListener('click',()=>{
  if(currentIdx === 0 ){
    gotoSlide(slideCount-1) // 2값이 나와야함
  }else{ // 첫슬라이드를 안보고 있을때
    gotoSlide(currentIdx -1);
  }
});  



  
