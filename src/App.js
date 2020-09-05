//const config
const milissecondsPerAction = 100;
let throttleCooldown = false;

//main function
function setRocketPosition(e) {
  const rocket = document.querySelector('.rocket');

  rocket.style.left = e.offsetX + 'px';
  rocket.style.top = e.offsetY + 'px';
}

//helper functions and handlers
const throttleFunction = (callback, time) => {
  let storedEvent = null;

  const throttleEventHandler = e => {
    storedEvent = e;

    if(!throttleCooldown){
      callback(storedEvent);
      
      storedEvent = null;
      throttleCooldown = true;
  
      setTimeout(() => {
        throttleCooldown = false;
      }, time);
    }
  };

  console.log('return');
  return throttleEventHandler;
};

const handleMouseMove = e => {
  console.log('handleMouseMove:', e);
  throttleFunction(setRocketPosition, milissecondsPerAction);
};

function addEventListeners() {
  const sceneContainer = document.querySelector('.scene-container');
  sceneContainer.addEventListener('mousemove', throttleFunction(setRocketPosition, milissecondsPerAction));

}

//init
addEventListeners();