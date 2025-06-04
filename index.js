function showabout() {
  $("#about_container").css("display", "inherit");
  $("#about_container").addClass("animated slideInLeft");
  setTimeout(function () {
    $("#about_container").removeClass("animated slideInLeft");
  }, 800);
}
function closeabout() {
  $("#about_container").addClass("animated slideOutLeft");
  setTimeout(function () {
    $("#about_container").removeClass("animated slideOutLeft");
    $("#about_container").css("display", "none");
  }, 800);
}
function showwork() {
  $("#work_container").css("display", "inherit");
  $("#work_container").addClass("animated slideInRight");
  setTimeout(function () {
    $("#work_container").removeClass("animated slideInRight");
  }, 800);
}
function closework() {
  $("#work_container").addClass("animated slideOutRight");
  setTimeout(function () {
    $("#work_container").removeClass("animated slideOutRight");
    $("#work_container").css("display", "none");
  }, 800);
}

function toggleProjectImages(button) {
  const projectDropdown = button.nextElementSibling;

  projectDropdown.classList.toggle("show");

  if (projectDropdown.classList.contains("show")) {
    button.innerHTML = 'Hide Project <i class="fas fa-chevron-up fa-xs"></i>';
  } else {
    button.innerHTML = 'View Project <i class="fas fa-chevron-down fa-xs"></i>';
  }
}
