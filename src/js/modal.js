(() => {
    const refs = {
      openModalBtn: document.querySelector("[data-modal-open]"),
      closeModalBtn: document.querySelector("[data-modal-close]"),
      modal: document.querySelector("[data-modal]"),

      openModalThanksBtn: document.querySelector("[data-modal-thanks-open]"),
      closeModalThanksBtn: document.querySelector("[data-modal-thanks-close]"),
      modalThanks: document.querySelector("[data-modal-thanks]"),
      bodyFixed: document.querySelector("[data-body-fixed]"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
    refs.closeModalThanksBtn.addEventListener("click", toggleModal);
    
    refs.openModalThanksBtn.addEventListener("click", toggleModalThanks);
    refs.closeModalThanksBtn.addEventListener("click", toggleModalThanks);

    refs.openModalBtn.addEventListener("click", toggleModalFixed);
    refs.closeModalBtn.addEventListener("click", toggleModalFixed);
    refs.closeModalThanksBtn.addEventListener("click", toggleModalFixed);
    
    function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
    }
    function toggleModalThanks() {
      refs.modalThanks.classList.toggle("is-hidden");
    }
    function toggleModalFixed() {
      refs.bodyFixed.classList.toggle("is-fixed");
    }
  })();