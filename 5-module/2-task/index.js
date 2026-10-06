function toggleText() {
    let button = document.querySelector('.toggle-text-button');
    let text = document.querySelector('#text')
  function toggleStyle(el, prop, style1, style2) {
    el[prop] = el[prop] === style1 ? style2 : style1;
  }
  button.addEventListener('click', () => {
    toggleStyle(text, 'hidden', true, false);
  });
}
