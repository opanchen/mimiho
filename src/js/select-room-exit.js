let selectContainerRoomExit = document.querySelector(
  '.select-container-room-exit'
);
let selectRoomExit = document.querySelector('.select-room-exit');
let inputRoomExit = document.getElementById('input-room-exit');
let optionsRoomExit = document.querySelectorAll('.option-room-exit');

if (selectRoomExit) {
  selectRoomExit.onclick = () => {
    selectContainerRoomExit.classList.toggle('active');
  };
}

optionsRoomExit.forEach(e => {
  e.addEventListener('click', () => {
    inputRoomExit.value = e.innerText;
    selectContainerRoomExit.classList.remove('active');
    optionsRoomExit.forEach(e => {
      e.classList.remove('selected');
    });
    e.classList.add('selected');
  });
});
