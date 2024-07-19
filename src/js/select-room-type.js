let selectContainerRoomType = document.querySelector(
  '.select-container-room-type'
);
let selectRoomType = document.querySelector('.select-room-type');
let inputRoomType = document.getElementById('input-room-type');
let optionsRoomType = document.querySelectorAll('.option-room-type');

if (selectRoomType) {
  selectRoomType.onclick = () => {
    selectContainerRoomType.classList.toggle('active');
  };
}

optionsRoomType.forEach(e => {
  e.addEventListener('click', () => {
    inputRoomType.value = e.innerText;
    selectContainerRoomType.classList.remove('active');
    optionsRoomType.forEach(e => {
      e.classList.remove('selected');
    });
    e.classList.add('selected');
  });
});
