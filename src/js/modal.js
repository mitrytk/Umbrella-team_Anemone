const refs = {
  body: document.querySelector('[data-body]'),
  heroBtn: document.querySelector('.hero__button'),
  storeBtn: document.querySelector('.store__button'),
  blogBtn: document.querySelector('.blog__button'),
  modalContact: document.querySelector('[data-modal-contact]'),
  formContact: document.querySelector('.contact-form'),
  closeContactBtn: document.querySelector('[data-close-contact]'),
  modalThanks: document.querySelector('[data-modal-thanks]'),
  closeThanksBtn: document.querySelector('[data-thanks-close]'),
  modalFollow: document.querySelector('[data-modal-follow]'),
  formFollow: document.querySelector('.follow-form'),
  closeFollowBtn: document.querySelector('[data-follow-close]'),
};

const toggleClass = modal => {
  modal.classList.toggle('is-hidden');
  refs.body.classList.toggle('is-fixed');
};

const handleSubmitContact = e => {
  e.preventDefault();

  const name = e.currentTarget.elements.name.value;
  const email = e.currentTarget.elements.email.value;
  const user = JSON.stringify({
    name,
    email,
  });
  console.log(user);
  refs.modalThanks.classList.toggle('is-hidden');
};

const handleSubmitFollow = e => {
  e.preventDefault();

  const email = e.currentTarget.elements.email.value;
  const user = JSON.stringify({
    email,
  });
  console.log(user);
  toggleClass(refs.modalFollow);
};

//Close modal event listeners
refs.closeContactBtn.addEventListener('click', () =>
  toggleClass(refs.modalContact)
);
refs.closeThanksBtn.addEventListener('click', () =>
  toggleClass(refs.modalContact)
);
refs.closeFollowBtn.addEventListener('click', () =>
  toggleClass(refs.modalFollow)
);

//Open modal event listeners
refs.heroBtn.addEventListener('click', () => toggleClass(refs.modalContact));
refs.storeBtn.addEventListener('click', () => toggleClass(refs.modalContact));
refs.blogBtn.addEventListener('click', () => toggleClass(refs.modalFollow));

//Submit form event listners
refs.formContact.addEventListener('submit', e => handleSubmitContact(e));
refs.formFollow.addEventListener('submit', e => handleSubmitFollow(e));
