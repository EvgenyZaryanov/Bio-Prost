const timerDisplays = document.querySelectorAll('.timer-new');

function createTimer(timerDisplay) {
  const hoursElement = timerDisplay.querySelector('.hours');
  const minutesElement = timerDisplay.querySelector('.minutes');
  const secondsElement = timerDisplay.querySelector('.seconds');

  let timeRemaining = 30 * 60;

  function updateTimer() {
    const hours = Math.floor(timeRemaining / 3600);
    const minutes = Math.floor((timeRemaining % 3600) / 60);
    const seconds = timeRemaining % 60;

    hoursElement.textContent = hours.toString().padStart(2, '0');
    minutesElement.textContent = minutes.toString().padStart(2, '0');
    secondsElement.textContent = seconds.toString().padStart(2, '0');

    timeRemaining--;

    if (timeRemaining < 0) {
      clearInterval(timerInterval);
      alert('Время истекло!');
    }
  }

  const timerInterval = setInterval(updateTimer, 1000);

  updateTimer();
}

timerDisplays.forEach(createTimer);

$(document).ready(function () {
  $('.owl-carousel').owlCarousel({
    items: 1,
    loop: true,
    nav: true,
    dots: true
  });

  $('.owl-dot').click(function () {
    $('.owl-dot').removeClass('active');
    $(this).addClass('active');

    var dot = $(this);
    var index = dot.index();
    $('.owl-carousel').trigger('to.owl.carousel', [index, 300]);
  });
});

document.querySelector('.header__call').addEventListener('click', function () {
  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: 'smooth'
  });
});

window.addEventListener('scroll', function () {
  var scrollTop = window.scrollY || document.documentElement.scrollTop;
  var button = document.querySelector('.scroll-to-top');
  if (scrollTop > 200) {
    button.style.display = 'block';
  } else {
    button.style.display = 'none';
  }
});

document.querySelector('.scroll-to-top').addEventListener('click', function () {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

const feedback = document.querySelector('.feedback');
const popupWindow = document.querySelector('.popup-window');

feedback.addEventListener('click', function () {
  popupWindow.classList.remove('hidden');
});

document.querySelector('.close-popup').addEventListener('click', function () {
  popupWindow.classList.add('hidden');
});

document.addEventListener('click', function (event) {
  if (!popupWindow.contains(event.target) && !feedback.contains(event.target)) {
    popupWindow.classList.add('hidden');
  }
});
