const searchToggle = document.getElementById("search_toggle");
const searchForm = document.getElementsByTagName("form")[0];
const searchInput = document.querySelector("input[type='text']");

function toggleSearchForm() {
  if (searchForm.hidden) {
    searchForm.hidden = false;
    searchInput.focus();
    searchToggle.hidden = true;
    searchToggle.setAttribute("aria-pressed", true);
  } else {
    searchToggle.setAttribute("aria-pressed", false);
    setTimeout(function() {
      searchToggle.hidden = false;
      searchToggle.focus();      
      searchForm.hidden = true;
    }, 1000);
  }
}
function closeSearchForm(e) {
  if (e.keyCode === 27) toggleSearchForm();
}
function submitSearchForm(e) {
  e.preventDefault();
  if (searchInput.value === "") {
    searchInput.focus();
    return false;
  }
  searchInput.value = "";
  toggleSearchForm();
}
function resetSearchForm(e) {
  searchInput.focus();
}
searchToggle.addEventListener("click", toggleSearchForm);
searchForm.addEventListener("keydown", closeSearchForm);
searchForm.addEventListener("submit", submitSearchForm);
searchForm.addEventListener("reset", resetSearchForm);