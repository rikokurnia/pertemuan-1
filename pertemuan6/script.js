// Tangkap elemen DOM yang dibutuhkan
const directoryContainer = document.getElementById('user-directory');
const errorContainer = document.getElementById('error-container');

// Fungsi utama menggunakan async/await
async function fetchUsers() {
    try {
        // 1. Fetch API
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        
        // Cek jika response dari server tidak OK (misal 404 atau 500)
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const users = await response.json();

        // Ambil hanya 6 data pertama
        const firstSixUsers = users.slice(0, 6);

        // 2. Display Data
        renderUsers(firstSixUsers);

    } catch (error) {
        // 3. Error Handling
        // Tampilkan pesan error sesuai instruksi mutlak
        errorContainer.textContent = "Maaf, data gagal dimuat";
        errorContainer.style.display = "block"; // Tampilkan elemen error
        console.error("Fetch error:", error);
    }
}

// Fungsi terpisah untuk merender UI agar kode lebih bersih
function renderUsers(usersData) {
    let cardsHTML = '';

    usersData.forEach(user => {
        cardsHTML += `
            <div class="user-card">
                <h2>${user.name}</h2>
                <p>📧 ${user.email}</p>
                <p class="company">🏢 ${user.company.name}</p>
            </div>
        `;
    });

    // Injeksi ke dalam DOM
    directoryContainer.innerHTML = cardsHTML;
}

// Eksekusi fungsi saat script dimuat
fetchUsers();