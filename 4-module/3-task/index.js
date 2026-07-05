function highlight(table) {
let td = table.querySelectorAll('td')
let tr = table.querySelectorAll('tr')
  for (let i = 7, j = 1; i < 14, j < 6; i+=4, j++){
    if (td[i].dataset.available === 'true'){
      tr[j].className = 'available';
      if (td[i-1].innerHTML === 'm'){
        tr[j].classList.add('male');
      }
      if (td[i-1].innerHTML === 'f'){
        tr[j].classList.add('female');
      }
      if (td[i-2].innerHTML < 18){
        tr[j].style = "text-decoration: line-through"
      }
    }
    else if (td[i].dataset.available === 'false'){
      tr[j].className = 'unavailable';
      if (td[i-1].innerHTML === 'm'){
        tr[j].classList.add('male');
      }
      if (td[i-1].innerHTML === 'f'){
        tr[j].classList.add('female');
      }
      if (td[i-2].innerHTML < 18){
        tr[j].style = textDecoration = line-through
      }
    }
    else if (td[i].dataset.available == null){
      tr[j].hidden = true;
            if (td[i-1].innerHTML === 'm'){
        tr[j].classList.add('male');
      }
      if (td[i-1].innerHTML === 'f'){
        tr[j].classList.add('female');
      }
    }
  }
return table
}
