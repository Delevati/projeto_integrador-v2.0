/* API imagens aleatórias */
document.addEventListener("DOMContentLoaded", function () {
  var cards = document.querySelectorAll(".evento-card");
  var keywords = ["event", "concert", "conference", "festival", "seminar"];

  cards.forEach(function (card, index) {
    var keyword = keywords[index % keywords.length];
    var imageUrl = "https://source.unsplash.com/300x200/?" + keyword;
    card.style.backgroundImage = "url(" + imageUrl + ")";
  });
});

function validarLogin() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  if (username.trim() === "") {
    alert("informe seu nome de usuário.");
    return false;
  }

  if (password.trim() === "") {
    alert("informe sua senha.");
    return false;
  }

  return true;
}
