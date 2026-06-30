const scriptURL = "https://script.google.com/macros/s/AKfycbypf-rUTZheSHcT_X89IpT2PTzqO6RH_lEd6iyzYYf8CccdmGTXEq30-G-IJ_gpatw9BA/exec";

const form = document.getElementById("contactForm");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    fetch(scriptURL, {
        method: "POST",
        body: new FormData(form)
    })
    .then(() => {
        alert("✅ Thank you! Your enquiry has been submitted successfully.");
        form.reset();
    })
    .catch((error) => {
        alert("❌ Something went wrong. Please try again.");
        console.error(error);
    });
});