// Mengatur event listener untuk tautan login
document.addEventListener('DOMContentLoaded', function () {
    const loginLink = document.querySelector('a[href="#"]'); // Sesuaikan dengan tautan login Anda
    loginLink.addEventListener('click', function (event) {
        event.preventDefault(); // Mencegah tautan default
        showLoginForm(); // Panggil fungsi untuk menampilkan formulir login
    });
});

// Fungsi untuk menampilkan formulir login
function showLoginForm() {
    // Membuat elemen formulir login
    const loginForm = document.createElement('div');
    loginForm.id = 'loginForm';
    loginForm.innerHTML = `
        <h2>Login</h2>
        <form id="formLogin">
            <label for="username">Username:</label>
            <input type="text" id="username" required>
            <label for="password">Password:</label>
            <input type="password" id="password" required>
            <button type="submit">Log In</button>
        </form>
        <button id="closeForm">Close</button>
    `;
    document.body.appendChild(loginForm);

    // Menambahkan event listener untuk menutup formulir
    document.getElementById('closeForm').addEventListener('click', function () {
        document.body.removeChild(loginForm);
    });

    // Menambahkan event listener untuk pengiriman formulir
    document.getElementById('formLogin').addEventListener('submit', function (e) {
        e.preventDefault(); // Mencegah pengiriman formulir
        validateLogin(); // Validasi login
    });
}

// Fungsi untuk validasi login
function validateLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Contoh validasi sederhana
    if (username === 'admin' && password === 'password') {
        alert('Login berhasil!'); // Tampilkan pesan berhasil
        // Lakukan navigasi atau logika lainnya setelah login berhasil
    } else {
        alert('Username atau password salah. Silakan coba lagi.'); // Tampilkan pesan kesalahan
    }
}
