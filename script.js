// Example: Add a small greeting based on time of day
document.addEventListener("DOMContentLoaded", () => {
  const hero = document.querySelector(".hero p");
  if (hero) {
    const hour = new Date().getHours();
    let greeting = "Welcome!";
    if (hour < 12) greeting = "Good morning!";
    else if (hour < 18) greeting = "Good afternoon!";
    else greeting = "Good evening!";
    hero.textContent = greeting + " I’m [Your Name].";
  }
});
