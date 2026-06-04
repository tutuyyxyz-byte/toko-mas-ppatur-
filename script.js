document.getElementById("topupForm").addEventListener("submit", function(e){

    e.preventDefault();

    const gameId = document.getElementById("gameId").value;
    const nickname = document.getElementById("nickname").value;
    const nominal = document.getElementById("nominal").value;
    const payment = document.getElementById("payment").value;

    const adminNumber = "6281234567890"; // Ganti dengan nomor WhatsApp Anda

    const message =
`Halo Admin, saya ingin melakukan Top Up.

📌 ID Game : ${gameId}
👤 Nickname : ${nickname}
💎 Nominal : ${nominal}
💳 Pembayaran : ${payment}

Mohon diproses. Terima kasih.`;

    const whatsappURL =
`https://wa.me/${adminNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappURL, "_blank");
});
