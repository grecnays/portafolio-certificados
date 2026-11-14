document.addEventListener('DOMContentLoaded', () => {
  const filters = document.querySelectorAll('.filter');
  const cards = document.querySelectorAll('.certificate-card');

  filters.forEach(button => {
    button.addEventListener('click', () => {
      const selected = button.dataset.filter;

      // Actualizar estado activo de los botones
      filters.forEach(item => {
        const isActive = item === button;
        item.classList.toggle('active', isActive);
        item.setAttribute('aria-pressed', String(isActive));
      });

      // Mostrar u ocultar tarjetas según la categoría seleccionada
      cards.forEach(card => {
        const matches = selected === 'todos' || card.dataset.category === selected;
        card.hidden = !matches;
      });
    });
  });
});
