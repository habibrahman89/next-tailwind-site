document.getElementById("heroBtn").addEventListener("click", () => {
  alert("🚀 JavaScript is working perfectly!");
});

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

const toggleBtn = document.getElementById("themeToggle");
const body = document.body;

if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark");
  toggleBtn.textContent = "☀️";
}

toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark");
  const isDark = body.classList.contains("dark");
  toggleBtn.textContent = isDark ? "☀️" : "🌙";
  localStorage.setItem("theme", isDark ? "dark" : "light");
});

const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

cards.forEach(card => observer.observe(card));

document.getElementById("contactForm").addEventListener("submit", e => {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const msg = document.getElementById("formMsg");

  if (!name || !email || !message) {
    msg.textContent = "❗ Please fill all fields.";
    msg.style.color = "red";
    return;
  }

  msg.textContent = "✔️ Message sent successfully!";
  msg.style.color = "green";
  e.target.reset();
});

gsap.from(".hero h1", { y: 50, opacity: 0, duration: 1 });
gsap.from(".hero p", { y: 30, opacity: 0, delay: 0.3 });
gsap.from(".hero button", { scale: 0, delay: 0.6 });
