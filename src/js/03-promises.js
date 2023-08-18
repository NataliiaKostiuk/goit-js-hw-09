import Notiflix, { Notify } from 'notiflix';
const form = document.querySelector('.form')
const amountInput = document.querySelector('input[name=amount');
const delayInput = document.querySelector('input[name=delay]');
const stepInput = document.querySelector('input[name=step]');
const greateBt = document.querySelector('button');
greateBt.addEventListener('click', createArrValue);

function createArrValue(evt){
  evt.preventDefault();
  if (
    amountInput.value !== '' &&
    delayInput.value !== '' &&
    stepInput.value !== ''
  ) {
    let amount = Number(amountInput.value);
    let delay = Number(delayInput.value);
    let step = Number(stepInput.value); 
    startGenerationPromise(amount, delay, step);
    form.reset();
  }else {
     Notiflix.Notify.warning('Please fill in all the fields!!!');
  }
}

function startGenerationPromise(amount, delay, step) {
  for (let i = 0; i < amount; i += 1) {
    setTimeout(createPromise, delay, i, delay );
    delay += step;
  }
}

function createPromise(position, delay) {
  const promise = new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    if (shouldResolve) {
      resolve({ position, delay });
    } else {
      reject({ position, delay });
    }
  })
    .then(({ position, delay }) => {
      Notiflix.Notify.success(
        `✅ Fulfilled promise ${position + 1} in ${delay}ms`
      );
    })
    .catch(({ position, delay }) => {
      Notiflix.Notify.warning(
        `❌ Rejected promise ${position + 1} in ${delay}ms`
      );
    })
}

