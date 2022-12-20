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
    // setTimeout(function toggleModalThanks(){ 
    //   refs.modalThanks.classList.toggle("is-hidden");
    //  }, 10000);

    function toggleModalThanks() {
      setTimeout(refs.modalThanks.classList.toggle("is-hidden"), 10000);
    }

    function toggleModalFixed() {
      refs.bodyFixed.classList.toggle("is-fixed");
    }
  })();

  // follow
  (() => {
    const refs = {
      openModalFollowBtn: document.querySelector("[data-modal-follow-open]"),
      closeModalFollowBtn: document.querySelector("[data-modal-follow-close]"),
      modalFollow: document.querySelector("[data-modal-follow]"),
    };
  
    refs.openModalFollowBtn.addEventListener("click", toggleModal);
    refs.closeModalFollowBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modalFollow.classList.toggle("is-hidden");
    }
  })();


  (() => {
    const refs = {
      openModalFollowTwoBtn: document.querySelector("[data-modal-follow-two-open]"),
      closeModalFollowTwoBtn: document.querySelector("[data-modal-follow-two-close]"),
      modalFollowTwo: document.querySelector("[data-modal-follow-two]"),
    };
  
    refs.openModalFollowTwoBtn.addEventListener("click", toggleModal);
    refs.closeModalFollowTwoBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modalFollowTwo.classList.toggle("is-hidden");
    }
  })();


  (() => {
    const refs = {
      openModalFollowBtn: document.querySelector("[data-modal-follow-open]"),
      closeModalFollowBtn: document.querySelector("[data-modal-follow-close]"),
      bodyFixed: document.querySelector("[data-body-fixed]"),
      openModalFollowTwoBtn: document.querySelector("[data-modal-follow-two-open]"),
      closeModalFollowTwoBtn: document.querySelector("[data-modal-follow-two-close]"),
      modalFollowTwo: document.querySelector("[data-modal-follow-two]"),
    };
  
    refs.openModalFollowBtn.addEventListener("click", toggleModal);
    refs.closeModalFollowBtn.addEventListener("click", toggleModal);
    refs.openModalFollowTwoBtn.addEventListener("click", toggleModal);
    refs.closeModalFollowTwoBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.bodyFixed.classList.toggle("is-fixed");
    }
  })();