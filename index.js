document.addEventListener("DOMContentLoaded", function() {
    // Get reference to the certificates link
    let certificatesLink = document.getElementById("certi");
    
    // Get reference to the certificate section
    let certificateSection = document.getElementById("skil");

    // Get reference to the skills link
    let skillsLink = document.getElementById("skills");
    
    // Get reference to the skill section
    let skillSection = document.getElementById("skil-section");

    // Get reference to Home link
    let welCome=document.getElementById("bc_to_top");

    // Get reference to the skill section
    let welSection = document.getElementById("wel-section");

    // Add click event listener to the certificates link
    certificatesLink.addEventListener("click", function(event) {
        // Prevent default behavior of anchor tag
        event.preventDefault();

        // Scroll to the certificate section smoothly
        certificateSection.scrollIntoView({ behavior: "smooth" });
    });

    // Add click event listener to the skills link
    skillsLink.addEventListener("click", function(event) {
        // Prevent default behavior of anchor tag
        event.preventDefault();

        // Scroll to the skill section smoothly
        skillSection.scrollIntoView({ behavior: "smooth" });
    });

    // Add click event listener to the home link
    welCome.addEventListener("click", function(event) {
        // Prevent default behavior of anchor tag
        event.preventDefault();

        // Scroll to the top smoothly
        welSection.scrollIntoView({ behavior: "smooth" });

     });
});

// resume button

let resBtn=document.getElementById('home');

resBtn.addEventListener('click',() => {
    window.open('./aditya_verma_resume.pdf','_blank');
});

