const scriptURL = "https://https://script.google.com/macros/s/AKfycbypf-rUTZheSHcT_X89IpT2PTzqO6RH_lEd6iyzYYf8CccdmGTXEq30-G-IJ_gpatw9BA/exec";

console.log("script.js loaded");

const form = document.getElementById("contactForm");

console.log(form);

form.addEventListener("submit", function(e) {

    console.log("Form submitted");

    e.preventDefault();

    fetch(scriptURL, {
        method: "POST",
        body: new FormData(form)
    })
    .then(res => res.text())
    .then(data => {
        console.log(data);
        alert("Success");
    })
    .catch(err => {
        console.error(err);
        alert("Failed");
    });

});