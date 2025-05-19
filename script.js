document.querySelectorAll('.toggle-btn').forEach(button =>{
    button.addEventListener('click', () => {
      const content = button.parentElement.nextElementSibling;
      if(content.style.display === 'none' || !content.style.display) {
        content.style.display = 'block';
        button.freqContent = '-';
      }
      else {
        content.style.display = 'none';
        button.freqContent = '+';
      }
    });
  });