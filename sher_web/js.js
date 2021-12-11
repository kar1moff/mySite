const btn = document.getElementById('btn');
const fio = document.getElementById('fio');
let date = new Date().getDay();
let log = false;
btn.addEventListener('click', () => {
  if (fio.value != '') alert(fio.value + ' отправил данные на сервер ' + (+date+5) +'го' + ' декабря');
else alert('Заполните пожалуйста данные')
  

})

