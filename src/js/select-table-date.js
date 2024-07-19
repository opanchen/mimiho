let selectContainerTableDate = document.querySelector(
  '.select-container-table-date'
);
let selectTableDate = document.querySelector('.select-table-date');
let inputTableDate = document.getElementById('input-table-date');
let optionsTableDate = document.querySelectorAll('.option-table-date');

if (selectTableDate) {
  selectTableDate.onclick = () => {
    selectContainerTableDate.classList.toggle('active');
  };
}

optionsTableDate.forEach(e => {
  e.addEventListener('click', () => {
    inputTableDate.value = e.innerText;
    selectContainerTableDate.classList.remove('active');
    optionsTableDate.forEach(e => {
      e.classList.remove('selected');
    });
    e.classList.add('selected');
  });
});
