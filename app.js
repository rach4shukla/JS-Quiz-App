const correctAnswers = ['B', 'B', 'B', 'B', 'B'];
// array to store incorrect answers for the user.

const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');
form.addEventListener('submit', e =>{
    e.preventDefault();

    let score = 0;
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value, form.q5.value];
    // loop through each question and compare the users answer with the correct one.
    userAnswers.forEach((answer, index) =>{
        if(answer === correctAnswers[index]){
            score += 25;
        }
    });

    //show results on page
   scrollTo(0,0);
    result.querySelector('span').textContent = `${score}%`;
    result.classList.remove('d-none');

    let output = 0;
    const timer = setInterval(() =>{
        result.querySelector('span').textContent = `${output}%`;
        if(output === score){
            clearInterval(timer);
        } else {
            output++;
        }
    }, 10);

});

//window object - global object so we do not have to write down window.object

// console.log('hello');
// setTimeout(() =>{

// }, 3000);

// setInterval(()=> {

// }, 1000);

// //clearInterval