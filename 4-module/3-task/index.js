function highlight(table) {
const rows = table.querySelectorAll('tbody tr')
  for (tr of rows){
    const age = tr.children[1];
    const gendertd = tr.children[2];
    const status = tr.children[3];
    available = status.dataset.available;
    gender = gendertd.textContent;
    ageNum = Number(age.textContent);

    if (available === 'true'){
      tr.classList.add('available');
    }
    else if (available === 'false'){
      tr.classList.add('unavailable');
    }
    else {
      tr.hidden = true;
    }
    if (gender === 'm'){
        tr.classList.add('male');
      }
    if (gender === 'f'){
        tr.classList.add('female');
      }
    if (ageNum < 18){
        tr.style.textDecoration = "line-through"
      }
  }
return table
}
