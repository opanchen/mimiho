let selectContainerTableType = document.querySelector(
  '.select-container-table-type'
);
let selectTableType = document.querySelector('.select-table-type');
let inputTableType = document.getElementById('input-table-type');
let optionsTableType = document.querySelectorAll('.option-table-type');

if (selectTableType) {
  selectTableType.onclick = () => {
    selectContainerTableType.classList.toggle('active');
  };
}

optionsTableType.forEach(e => {
  e.addEventListener('click', () => {
    inputTableType.value = e.innerText;
    selectContainerTableType.classList.remove('active');
    optionsTableType.forEach(e => {
      e.classList.remove('selected');
    });
    e.classList.add('selected');
  });
});
