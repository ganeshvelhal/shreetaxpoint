const scriptURL = "https://script.google.com/macros/s/AKfycbxNV4E5KPX8nLMoltM2uzyY4fB3ShdHVGQfF1EXOikfNmjJ07Zx3H7dmLBA0vHDXUReVQ/exec";

const forms = document.querySelectorAll(".contactForm");

forms.forEach(form => {

    form.addEventListener("submit", function(e) {

        e.preventDefault();

    fetch(scriptURL, {
        method: "POST",
        body: new FormData(form),
        mode: "cors"
})
        .then(response => response.text())
        .then(data => {
            alert("✅ Thank you! Your enquiry has been submitted successfully.");
            form.reset();
            console.log(data);
        })
        .catch(error => {
            console.error(error);
            alert("❌ Something went wrong. Please try again.");
        });

    });

});