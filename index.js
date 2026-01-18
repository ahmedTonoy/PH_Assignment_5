function updateCount (btnName, value) {
  const btn = document.getElementById(btnName);
  let presentCount = parseInt(btn.innerText);
  if(value < 0 && presentCount < Math.abs(value)){
    alert('Sorry...Insufficient coin to make call!');
    return;
  } else{
      presentCount += value;
      btn.innerText = presentCount;
  }
}

document.getElementById('number-collection-section').addEventListener('click', (e) => {
  individualNumber = e.target.closest('.individual-number');
  if(e.target.classList.contains('heart-btn')){
    updateCount('heart-count', 1);
  } else if(e.target.classList.contains('copy-btn')){
    updateCount('copy-count', 1);
  } else if(e.target.classList.contains('call-btn')){
    updateCount('coin-count', -20);
  }
})