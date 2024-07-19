let selectContainerRoomEnter = document.querySelector(
  '.select-container-room-enter'
);
let selectRoomEnter = document.querySelector('.select-room-enter');
let inputRoomEnter = document.getElementById('input-room-enter');
let optionsRoomEnter = document.querySelectorAll('.option-room-enter');

if (selectRoomEnter) {
  selectRoomEnter.onclick = () => {
    selectContainerRoomEnter.classList.toggle('active');
  };
}

optionsRoomEnter.forEach(e => {
  e.addEventListener('click', () => {
    inputRoomEnter.value = e.innerText;
    selectContainerRoomEnter.classList.remove('active');
    optionsRoomEnter.forEach(e => {
      e.classList.remove('selected');
    });
    e.classList.add('selected');
  });
});
