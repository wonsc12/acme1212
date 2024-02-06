const submitForm = document.querySelector('.form form');
const inputs = submitForm.querySelectorAll('.field input'); // 필드안에 input들
const feedback = submitForm.querySelector('.feedback');

submitForm.addEventListener('submit',(e)=>{  // submitForm에 이벤트가 일어나면 할일
  e.preventDefault(); // 전송되는 것을 막는다.
  // 입력 완성했는지 카운트할 변수
  let completed = 0;
  if(document.body.offsetWidth > 768){
    
  // 입력여부를 검사, 전송금지
    for(let input of inputs){
      /*
      input.value === '' 값이 없다면
      !input.value == 값이 없다면
      */
      if(!input.value){ // 값이 없다면
        // 입력값 반환 대상.value
        // 입력이 안된 input에 focus에 이동 , 그 항목의 대상 파악
        // 대상.focus()초점을건다, 대상.blur()초점을 푼다
        // 요소의 위치 top 대상.offsetTop
        let target = input.getAttribute('id'); // 아이디의 값을 가져온다
        let top = input.offsetTop;
        console.log(target,top);
        input.focus();
        openFeedback(target,top);
        return false;
      }else{ // 값이 있다면
        completed++;
        console.log(completed);
      }
    }
    function openFeedback(target,pos){ // target에 name인지 email인지 알수 있음
      // 태그를 생성해주는함수  대상.innerHTML = '태그'
      // <span>test</span>   test가 저장
      // 태그반환 let a = b.innerHTML b요소의 내부 태그를 a에 저장(할당)
      // <p>email은 필수 입니다.</p>
      // 대상.style.css 속성명 = '값'
      feedback.innerHTML = `<p>${target}은 필수 입니다</p>`;
      feedback.style.top = `${pos}px`;
      feedback.style.display = 'block';
      
    }
  }else {
    for(let input of inputs){
      /*
      input.value === '' 값이 없다면
      !input.value == 값이 없다면
      */
      if(!input.value){ // 값이 없다면
        // 입력값 반환 대상.value
        // 입력이 안된 input에 focus에 이동 , 그 항목의 대상 파악
        // 대상.focus()초점을건다, 대상.blur()초점을 푼다
        // 요소의 위치 top 대상.offsetTop
        let errorEl = input.parentElement;
        let target = input.getAttribute('id'); // 아이디의 값을 가져온다
        input.focus();
        openFeedback(errorEl,target);
        console.log(errorEl);
        return false; 
        
      }else{ // 값이 있다면
        ++completed;
      }
    }
    function openFeedback(errorEl, target){ // target에 name인지 email인지 알수 있음
      // 태그를 생성해주는함수  대상.innerHTML = '태그'
      // <span>test</span>   test가 저장
      // 태그반환 let a = b.innerHTML b요소의 내부 태그를 a에 저장(할당)
      // <p>email은 필수 입니다.</p>
      // 대상.style.css 속성명 = '값'
      feedback.innerHTML = `<p>${target}은 필수 입니다</p>`;
      errorEl.insertAdjacentElement('afterend', feedback);
      feedback.style.display = 'block';
    }  
  }
  
  // 입력완료, 전송실행
  if(inputs.length === completed){
    submitForm.submit();
  }
});

// const submitBtn = submitForm.querySelector('.form input[type="ssubmit"]');
/*

submitForm에 전송 이벤트가 일어나면 할일
전송 버튼을 클릭하면 할일
입력칸을 모두 완성 했는지 검사
완성해야할 입력칸 3개
사용자가 입력을 할때마다 검사(입력한 내용을 어떻게 확인할수 있을까?)
몃개를 입력완성했는지 카운트할 변수 1->2, 2->3, 3->4
카운트할 변슈 === 완성해야할 입력칸
전송실행하자
else전송하지말자.
*/