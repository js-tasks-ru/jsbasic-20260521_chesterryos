function hideSelf() {
  let button = document.querySelector('.hide-self-button');
  button.onclick = btnHider;
  function btnHider() {
    button.hidden = true
  }
}
