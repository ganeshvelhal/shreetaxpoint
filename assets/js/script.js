const scriptURL = "https://script.google.com/macros/s/AKfycbxNV4E5KPX8nLMoltM2uzyY4fB3ShdHVGQfF1EXOikfNmjJ07Zx3H7dmLBA0vHDXUReVQ/exec";

const form = document.getElementById("contactForm");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    fetch(scriptURL, {
        method: "POST",
        body: new FormData(form)
    })
    .then(response => response.text())
    .then(data => {
        alert("✅ Enquiry submitted successfully!");
        form.reset();
        console.log(data);
    })
    .catch(error => {
        alert("❌ Error submitting form.");
        console.error(error);
    });
});