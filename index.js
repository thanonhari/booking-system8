import config from "./config.js";

const apiUrl = config.aprUrl;

const form = document.getElementById("booking-form");
const statusText = document.getElementById("status");

// บันทึกการ Booking
form.addEventListener("submit", async (e) => {
    e.preventDefault();
    statusText.textContent = "Booking...";

    // ดึงค่าจาก event target (แทนการเข้าถึง ID ตรงๆ)
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    try {
        const response = await fetch(apiUrl, {
            method: "POST",
            body: JSON.stringify(data),
        });

        if (response.ok) {
            statusText.textContent = "✅ Booking successful!";
            form.reset();
        } else {
            statusText.textContent = "❌ Booking failed. Try again.";
        }
    } catch (error) {
        statusText.textContent = "❌ Error: " + error.message;
    }
});


