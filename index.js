// Array for storing call logs
const callHistory = [];

// Function to numeric increase/decrease of innerText of DOM element
function updateCount (btnName, value) {
  const btn = document.getElementById(btnName);
  let presentCount = parseInt(btn.innerText);
  if(value < 0 && presentCount < Math.abs(value)){
    alert('Sorry...Insufficient coin to make call!');
    return false;
  } else{
      presentCount += value;
      btn.innerText = presentCount;
      return true;
  }
}

// Function to get formatted call time
function formatTime (date = new Date(), hour12 = true){
  return date.toLocaleTimeString([], {
    hour: 'numeric',
    minute: '2-digit',
    second: '2-digit',
    hour12
  })
}

// Function to create call log upon clicking call button
function createCallLog (individualOrganization){
  const callLog = {
    callName: individualOrganization.querySelector('.call-name').innerText,
    callNumber: individualOrganization.querySelector('.call-number').innerText,
    callTime: formatTime()
  }
  console.log(callLog);
  callHistory.push(callLog);

  const callHistoryDiv = document.getElementById('call-history-div');
  const logBox = document.createElement('div');
  logBox.innerHTML = `
  <div class="call-log flex justify-between items-center rounded-lg p-3 border bg-[#fafafa]">
    <div>
      <h1 lang="bn">${callLog.callName}</h1>
      <h1>${callLog.callNumber}</h1>
    </div>
    <p>${callLog.callTime}</p>
  </div>
  `;
  callHistoryDiv.appendChild(logBox);
}

// Update heart, copy, coin count upon being clicked
document.getElementById('number-collection-section').addEventListener('click', (e) => {
  individualOrganization = e.target.closest('.individual-organization');
  if(e.target.classList.contains('heart-btn')){
    updateCount('heart-count', 1);
  } else if(e.target.classList.contains('copy-btn')){
    updateCount('copy-count', 1);
  } else if(e.target.closest('button.call-btn')){
    const callPossible = updateCount('coin-count', -20);
    if(callPossible){
      createCallLog(individualOrganization);
    }
  }
})

// Clear call history
document.getElementById('clear-history-btn').addEventListener('click', (e) => {
  const callHistoryDiv = document.getElementById('call-history-div');
  callHistoryDiv.replaceChildren();
})