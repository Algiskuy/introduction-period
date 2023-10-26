document.querySelector("#pesanEmail").addEventListener("submit", (e) => {
  e.preventDefault();

  const nama = document.getElementById("nama").value;
  const email = document.getElementById("email").value;
  const pesan = document.getElementById("textPesan").value;
  alert(
    "Pesan mu sudah di kirim ke Verbose, silahkan inspect halaman ini dan aktifkan Verbose!"
  );
  console.debug(nama, email, pesan);
  console.debug(
    'Maaf pesan anda belum bisa kami terima, bisa searching di google "algis alkausar" nanti muncul paling atas '
  );
  document.getElementById("nama").value = "";
  document.getElementById("email").value = "";
  document.getElementById("textPesan").value = "";
});

document.addEventListener("DOMContentLoaded", function (e) {
  const menuList = document.querySelector(".menu-list");
  e.preventDefault();
  const burger = document.querySelector(".burger");

  burger.addEventListener("click", function () {
    menuList.classList.toggle("menu-lists");
  });
});
