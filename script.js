//your code here
function rotateClockHands() {
  const now = new Date();
  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours();

  const secondHand = document.querySelector('.second-hand');
  const minuteHand = document.querySelector('.min-hand');
  const hourHand = document.querySelector('.hour-hand');

  const secondRotation = (seconds / 60) * 360;
  const minuteRotation = ((minutes + seconds / 60) / 60) * 360;
  const hourRotation = ((hours + minutes / 60) / 12) * 360;

  secondHand.style.transform = `rotate(${secondRotation}deg)`;
  minuteHand.style.transform = `rotate(${minuteRotation}deg)`;
  hourHand.style.transform = `rotate(${hourRotation}deg)`;
}

setInterval(rotateClockHands, 1000);
