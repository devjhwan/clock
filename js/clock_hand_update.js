function updateClock() {
  const now = new Date();
  const localHours = now.getHours();
  const localMinutes = now.getMinutes();
  const localSeconds = now.getSeconds();

  const hourDeg = ((localHours % 12) + localMinutes / 60) * 30;
  const minuteDeg = (localMinutes + localSeconds / 60) * 6;
  const secondDeg = localSeconds * 6;

  document.getElementById('hourHand').style.transform = `translate(-50%, 0) rotate(${hourDeg}deg)`;
  document.getElementById('minuteHand').style.transform = `translate(-50%, 0) rotate(${minuteDeg}deg)`;
  document.getElementById('secondHand').style.transform = `translate(-50%, 0) rotate(${secondDeg}deg)`;
}
updateClock();
setInterval(updateClock, 1000);