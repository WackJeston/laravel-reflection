const loginPage = document.querySelector('.login-container');
const dashboard = document.querySelector('.dashboard-container');
const header = document.querySelector('header');
const dashboardButton = document.querySelector('#dashboard-button');

if (loginPage){
  header.style.display = 'none';
}

if (dashboard){
  dashboardButton.style.display = 'none';
}
