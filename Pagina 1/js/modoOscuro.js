


function cambiarTema() {
    var htmlTag = document.getElementsByTagName('html')[0];
    var themeAttribute = htmlTag.getAttribute('data-bs-theme');
    var tema = document.getElementById('tema');
    if (themeAttribute === 'dark') {
      htmlTag.setAttribute('data-bs-theme', 'light');
      tema.className = 'fa-solid fa-moon me-2';
    } else {
      htmlTag.setAttribute('data-bs-theme', 'dark');
      tema.className = 'fa-solid fa-sun me-2';
    }
  }
 
  
