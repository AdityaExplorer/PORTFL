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

    certificatesLink.addEventListener("click", function(event) {
        event.preventDefault();

        certificateSection.scrollIntoView({ behavior: "smooth" });
    });

    skillsLink.addEventListener("click", function(event) {
        event.preventDefault();

        skillSection.scrollIntoView({ behavior: "smooth" });
    });

    welCome.addEventListener("click", function(event) {
        event.preventDefault();

        welSection.scrollIntoView({ behavior: "smooth" });

     });
});
