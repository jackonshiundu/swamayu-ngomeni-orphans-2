const rightpart = document.querySelector('.right_part');
const openMenu = document.querySelector('.fa-bars');
const closeMenu = document.querySelector('.fa-times');

openMenu.addEventListener('click', () => {
  rightpart.style.display = 'block';
  closeMenu.style.display = 'inline-block';
  openMenu.style.display = 'none';
});
closeMenu.addEventListener('click', () => {
  rightpart.style.display = 'none';
  closeMenu.style.display = 'none';
  openMenu.style.display = 'inline-block';
});
//code to toggle the menu
/* const home=document.getElementById('home');
const names=document.querySelector('.name');

home.addEventListener('click',()=>{
    names.classList.toggle('active');
})
 */
const btn = document.getElementById('btn');

document.getElementById('form').addEventListener('submit', function (event) {
  event.preventDefault();

  btn.value = 'Sending...';
  const serviceID = 'service_wfsp1il';
  const templateID = 'template_0e4kph3';

  emailjs.sendForm(serviceID, templateID, this).then(
    () => {
      btn.value = 'Send Email';
      alert('Sent!');
    },
    (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    }
  );
});
