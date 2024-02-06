const qnaList = document.querySelectorAll('.qna_list li');

/*
qnaList를 클릭하면 할일
qnaList에 모든 원소에서 active를 제거한다.
클릭된 그요소에 active를 추가한다.
*/

for(let ql of qnaList){
  ql.addEventListener('click',(e)=>{ // =>타겟은 this로 못가져옴
    for(let li of qnaList){
      li.classList.remove('active'); // qnaList에 모든 원소에서 active를 제거한다.
    }
    console.log(e.target);
    console.log(e.cuttentTarget);
    e.currentTarget.classList.add('active');
  });
}