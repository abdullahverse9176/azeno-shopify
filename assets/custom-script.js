
  // let modalShown = false;

  // window.addEventListener('scroll', function () {
  //   if (!modalShown && window.scrollY > 300) {
  //     const myModal = new bootstrap.Modal(document.getElementById('exampleModal'));
  //     myModal.show();
  //     modalShown = true; // Ensure it shows only once per page load
  //   }
  // });

let modalShown = false;

  window.addEventListener('scroll', function () {
    if (!modalShown && window.scrollY > 300) {
      document.getElementById('customModal').style.display = 'flex';
      modalShown = true;
    }
  });

  document.getElementById('closeModal').addEventListener('click', function () {
    document.getElementById('customModal').style.display = 'none';
    modalShown = true;
  });
