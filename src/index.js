import './sass/styles.scss';

document.getElementById('menuItems').style.display = 'none';

document.getElementById("hamburger").onclick = function() {
  if (document.getElementById('menuItems').style.display === 'grid') {
  document.getElementById('menuItems').style.display = 'none';
  } else {
  document.getElementById('menuItems').style.display = 'grid';
  }  
}
