const passwordInput = document.getElementById('password');
const message = document.getElementById('message');

passwordInput.addEventListener('input', () => {
    const val = passwordInput.value;
    const hasNumber = /\d/.test(val);
    const hasSpecial = /[!@#$%^&*]/.test(val);
    const isLongEnough = val.length >= 8;

    
    let score = 0;
    if (isLongEnough) score++;
    if (hasNumber) score++;
    if (hasSpecial) score++;

    
    const strength = score === 3 ? "Strong" : (score === 2 ? "Medium" : "Weak");
    const colorClass = score === 3 ? "strong" : (score === 2 ? "medium" : "weak");

   
    message.textContent = val.length === 0 ? "Enter a password" : `Strength: ${strength}`;
    message.className = val.length === 0 ? "" : colorClass;
});