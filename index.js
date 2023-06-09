const items = document.querySelectorAll('.item');
const resetBtn = document.getElementById('resetBtn');
const container1 = document.getElementById('container1');
const container2 = document.getElementById('container2');
const audioPlayer = document.getElementById('audioPlayer');

let draggedItem = null;

// this is the javascript function that triggers the functionality of audio playing in the browser
document.getElementById('item2').addEventListener('click', () => {
  if (audioPlayer.paused) {
    audioPlayer.play();
  } else {
    audioPlayer.pause();
  }
});

//below is triggered when the button reset is pressed. it resets the wesite state
resetBtn.addEventListener('click', () => {
  items.forEach(item => {
    container1.appendChild(item);
  });
});

// below two function are doing the drag and drop functionality using the html 5 drag and drop functionality that is 
// tapped using eventlistners dragstart, dragover and dragend. 
items.forEach(item => {
  item.addEventListener('dragstart', (event) => {
    draggedItem = event.target;
    event.target.classList.add('dragging');
  });

  item.addEventListener('dragend', (event) => {
    event.target.classList.remove('dragging');
  });
});

container1.addEventListener('dragover', (event) => {
  event.preventDefault();
});

container2.addEventListener('dragover', (event) => {
  event.preventDefault();
});

container2.addEventListener('drop', (event) => {
  event.preventDefault();
  if (draggedItem.parentNode === container1) {
    container2.appendChild(draggedItem);
    console.log('successfull');
  }
});




