const createSnowflake = () => {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    snowflake.textContent = '❄';
    snowflake.style.left = Math.random() * window.innerWidth + 'px';
    snowflake.style.fontSize = Math.random() * 10 + 10 + 'px';
    snowflake.style.animationDuration = Math.random() * 3 + 2 + 's';

    document.body.appendChild(snowflake);

    setTimeout(() => {
        snowflake.remove();
    }, 5000);
};

setInterval(createSnowflake, 100);

// Set the target date for New Year
const newYearDate = new Date('January 1, 2025 00:00:00').getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const timeLeft = newYearDate - now;

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  document.getElementById('days').innerText = days;
  document.getElementById('hours').innerText = hours;
  document.getElementById('minutes').innerText = minutes;
  document.getElementById('seconds').innerText = seconds;

  if (timeLeft < 0) {
    clearInterval(countdown);
    document.getElementById('countdown').innerHTML = '<h2>🎆 Happy New Year! 🎆</h2>';
  }
}

// Update countdown every second
const countdown = setInterval(updateCountdown, 1000);

document.addEventListener('DOMContentLoaded',()=>{

  let btn = document.getElementById('btn')
  window.addEventListener("scroll",()=>{
    if(window.scrollY>500){
      btn.style.opacity = "1"
    }else{
      btn.style.opacity = "0"
    }
  })
  })