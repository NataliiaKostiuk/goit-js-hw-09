import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

const input = document.querySelector('#datetime-picker');
const startBt = document.querySelector('[data-start]')
const daysField = document.querySelector('[data-days]');
const hoursField = document.querySelector('[data-hours]');
const minutesField = document.querySelector('[data-minutes]');
const secondsField = document.querySelector('[data-seconds]');

startBt.disabled = true;
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
    onClose(selectedDates) {
    if (selectedDates[0].getTime() - new Date().getTime() > 1000) {
      startBt.disabled = false;
    } else {
      startBt.disabled = true;
       Notiflix.Notify.warning('Please choose a date in the future');
    }
  },
};
const fp = flatpickr(input, options);

startBt.addEventListener('click', countTime);
function countTime() {
    const idInterval = setInterval(() => {
        const deadline = fp.selectedDates[0].getTime();
        const currentTime = new Date().getTime();
        let differenceTime = deadline - currentTime;
        if (differenceTime < 1000) {
            clearInterval(idInterval);
            Notiflix.Notify.success('time end : 00:00:00:00');
        }
        const objTime = convertMs(differenceTime);
        showTimer(objTime)  
    },1000)
}    

function addZero(num) {
  return num.toString().padStart(2, '0');
}


function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  return { days, hours, minutes, seconds };
}

function showTimer({ days, hours, minutes, seconds }) {
     daysField.textContent = addZero(days);
     hoursField.textContent = addZero(hours);
     minutesField.textContent = addZero(minutes);
    secondsField.textContent = addZero(seconds); 
}
