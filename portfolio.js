let toggle = document.querySelector('.menu-toggle');
let menu = document.querySelector('.menu');
let x = document.querySelector('.menu-x');

menu.style.display = 'none';
x.style.display = 'none';

toggle.onclick = function() {
  if (menu.style.display == 'none'){
    menu.style.display = 'flex';
    toggle.style.display = 'none';
    x.style.display = 'block';
  }
  else{
    menu.style.display = 'none';
  }
}

x.onclick = function() {
  if (menu.style.display == 'flex'){
    menu.style.display = 'none';
    toggle.style.display = 'block';
    x.style.display = 'none';
  }
  else{
    menu.style.display = 'flex';
  }
}
