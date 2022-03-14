(function(){
    const titlequestions = [...document.querySelectorAll('.questions__title')];
    console.log(titlequestions)

    titlequestions.forEach(question=>{
        question.addEventListener('click',()=>{
            let height = 0;
            let answer = question.nextElementSibling;
            let addpadding= question.parentElement.parentElement;

            addpadding.classList.toggle('questions__padding--add');

            question.children[0].classList.toggle('question__arrow--rotate');

            if(answer.clientHeight === 0){
                height = answer.scrollHeight;

            }
            answer.style.height = `${height}px`;
        })
    });


})();