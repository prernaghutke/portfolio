// small utilities for the static portfolio
document.getElementById('year').textContent = new Date().getFullYear();

function contactSubmit(e){
  e.preventDefault();
  // simple in-browser mock: show success, then reset
  alert("Thanks — your message was sent (demo). For live contact use Formspree, Netlify Forms or an email link.");
  e.target.reset();
  return false;
}
