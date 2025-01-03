// signup.js

function validateForm() {
    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirm-password").value;

    // ตรวจสอบว่ารหัสผ่านและยืนยันรหัสผ่านตรงกันหรือไม่
    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return false;
    }

    // ตรวจสอบว่าอีเมลมีรูปแบบที่ถูกต้อง
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    // ฟอร์มถูกต้อง สามารถส่งข้อมูลได้
    alert("Registration successful!");
    return true;
}
