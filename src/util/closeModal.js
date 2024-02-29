export default function closeModal(clickBox) {
  document.querySelector(`.${clickBox}`).addEventListener('click', (event) => {
    if (event.target.classList.contains(clickBox)) {
      const modal = document.querySelector('.modal-body');
      modal.parentNode.removeChild(modal);
    }
  });
}