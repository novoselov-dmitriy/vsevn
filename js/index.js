function isLogin() {
  const headerControl = document.querySelector('.header__control');
  const headerLogout = document.querySelector('.header__logout a');
  const headerLogin = document.querySelector('.header__login > a');
  const headerRegister = document.querySelector('.header__register a');

  headerLogin.addEventListener( 'click', (e) => {
    e.preventDefault();
    headerControl.classList.add('_login');
  } );

  headerRegister.addEventListener( 'click', (e) => {
    e.preventDefault();
    headerControl.classList.add('_login');
  } );

  headerLogout.addEventListener( 'click', (e) => {
    e.preventDefault();
    headerControl.classList.remove('_login');
  } );
}

function personDropdown() {
  const person = document.querySelector('.person');
  const personToggle = document.querySelector('.person > a');
  const personWrapper = document.querySelector('.person__wrapper');

  personToggle.addEventListener( 'click', (e) => {
    e.preventDefault();
    personWrapper.classList.toggle('_open');
  } );

  document.addEventListener( 'click', (e) => {
    const withinBoundaries = e.composedPath().includes(person);
   
    if ( ! withinBoundaries ) {
      personWrapper.classList.remove('_open');
    }
  } );
}

isLogin();
personDropdown();