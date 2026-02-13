
const toggleButton = document.getElementById("darkToggle");

toggleButton.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        toggleButton.textContent = "☀️ Light Mode";
    } else {
        toggleButton.textContent = "🌙 Dark Mode";
    }
});



const form = document.querySelector("#contact form");

form.addEventListener("submit", function (event) {
    event.preventDefault(); 

    const nama = form.nama.value;

    const oldMessage = document.querySelector(".success-message");
    if (oldMessage) {
        oldMessage.remove();
    }

    const message = document.createElement("p");
    message.classList.add("success-message");
    message.textContent = `Halo ${nama}, pesan Anda berhasil terkirim!`;

    message.style.marginTop = "15px";
    message.style.color = "green";
    message.style.fontWeight = "600";

    form.appendChild(message);

    form.reset();
});


const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();

        const targetId = this.getAttribute("href");
        const targetSection = document.querySelector(targetId);

        targetSection.scrollIntoView({
            behavior: "smooth"
        });
    });
});
