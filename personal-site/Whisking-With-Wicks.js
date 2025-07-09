// accordion -------------------------

const accordions = document.querySelectorAll('.accordion-header');

accordions.forEach(accordion => {
  accordion.addEventListener('click', () => {
    accordion.classList.toggle('active');

    const content = accordion.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null; // collapse
    } else {
      content.style.maxHeight = content.scrollHeight + 'px'; // expand
    }
  });
});