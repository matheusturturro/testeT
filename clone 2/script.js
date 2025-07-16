document.querySelectorAll('.read-more').forEach(btn => {
  btn.addEventListener('click', e => {
    e.preventDefault();
    alert('Conteúdo completo em breve!');
  });
});
