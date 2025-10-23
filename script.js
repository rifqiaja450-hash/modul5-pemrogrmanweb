// Pesan selamat datang
window.onload = function() {
    alert("👋 Selamat datang di website saya!");
};

// Animasi muncul saat di-scroll
const sections = document.querySelectorAll("section");

function showSections() {
    const triggerBottom = window.innerHeight * 0.8;
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < triggerBottom) {
            section.classList.add("visible");
        }
    });
}

window.addEventListener("scroll", showSections);
showSections();

// Validasi form kontak
document.getElementById("contactForm").addEventListener("submit", function(e) {
    let nama = document.getElementById("nama").value.trim();
    let email = document.getElementById("email").value.trim();
    let pesan = document.getElementById("pesan").value.trim();

    if (nama === "" || email === "" || pesan === "") {
        alert("❗ Semua kolom harus diisi sebelum mengirim pesan.");
        e.preventDefault();
    } else {
        alert(`✅ Terima kasih ${nama}! Pesan kamu berhasil dikirim.`);
    }
});
