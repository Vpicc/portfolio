import Swal from 'sweetalert2';

function firstPopUp() {
  const innerHTML = '<p>Hello World!</p>';
  Swal.fire({
    html: innerHTML,
    showConfirmButton: false,
    showCloseButton: true,
    imageUrl: '/src/static/me.png',
  });
}

export { firstPopUp };
