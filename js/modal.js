(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);
  window.addEventListener('keydown', onEscModalClose);
  refs.modal.addEventListener('click', onBackdropClick);

  function onBackdropClick() {
    console.log(event.target);
    console.log(event.currentTarget);

    if (event.target === event.currentTarget) {
      refs.modal.classList.toggle("is-hidden");
    }
    
  }

  function onEscModalClose(event) {
    console.log(event.code);

    if (event.code === 'Escape') {
      refs.modal.classList.toggle("is-hidden");
      window.removeEventListener('keydown', onEscModalClose);
    }
  }

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
    document.body.classList.toggle("no-scroll");
  }
})();


// const getForm = document.querySelector(".modal-form");
// const backdrop = document.querySelector(".backdrop");
// const getInpFooter = document.querySelector(".mailing__form__input");
// const getSpanFooter = document.querySelector(".mailing-span");


// getForm.addEventListener("submit", onFormSubmit)
// getInpFooter.addEventListener("input", onInpChange)



// function onFormSubmit(event) {
//   event.preventDefault()


//   const formData = new FormData(event.currentTarget)
//   console.log(formData);
//   formData.forEach((name, value) => {
//     console.log(`${name}:${value}`);
//   })

//   backdrop.classList.toggle(".is-hidden");
// }


// function onInpChange(event) {
//   console.log(event.target.value);

//   getSpanFooter.textContent = event.target.value;
  
// }





