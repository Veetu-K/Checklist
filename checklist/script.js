
const installBtn = document.querySelector('.btn-primary');
installBtn.addEventListener('click', () => {
 
  alert('Installing Chrome Extension...');
  
});



const checkboxes = document.querySelectorAll(".round input[type='checkbox']");
checkboxes.forEach(checkbox => {
  checkbox.addEventListener("click", () => {
    checkbox.parentNode.parentNode.classList.toggle("completed");
  });
});




