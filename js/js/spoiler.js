document.addEventListener("DOMContentLoaded", function () {
    const serviceTitles = document.querySelectorAll(".service-title");

    serviceTitles.forEach((title) => {
        title.addEventListener("click", function () {
            const details = this.nextElementSibling;
            const icon = this.querySelector(".toggle-icon");

            if (details && details.classList.contains("service-details")) {
                const isOpen = details.classList.toggle("open");
                icon.textContent = isOpen ? "−" : "+";
            }
        });
    });
});

// document.addEventListener("DOMContentLoaded", function () {
//     const serviceTitles = document.querySelectorAll(".service-title");

//     serviceTitles.forEach((title) => {
//         title.addEventListener("click", function () {
//             const details = this.nextElementSibling;

//             if (details && details.classList.contains("service-details")) {
//                 details.classList.toggle("open");
//             }
//         });
//     });
// });
