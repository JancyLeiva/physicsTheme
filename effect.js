const showStatDialog = document.querySelector('#button_Stat');
const showDynamDialog = document.querySelector('#button_Dynam');
const dialog = document.querySelector('dialog');

showStatDialog.addEventListener('click', () => {dialog.showModal()});
showDynamDialog.addEventListener('click', () => {dialog.showModal()});