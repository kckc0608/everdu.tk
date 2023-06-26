document.addEventListener("DOMContentLoaded", () => {
  const header_side_button = document.querySelector(".header_side_button");
  const side_menu = document.querySelector(".side_menu");
  side_menu.style.visibility = "hidden";

  header_side_button.addEventListener("click", function () {
    if (side_menu.style.visibility === "hidden") {
      side_menu.style.visibility = "visible";
    } else {
      console.log(side_menu.style.visibility);
      side_menu.style.visibility = "hidden";
      console.log("set hidden");
    }
    console.log("hello");
  });
});
