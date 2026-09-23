/* =========================================================
   PAGE NAVIGATION
========================================================= */

function showPage(pageName) {

    // Hide all pages
    const pages = document.querySelectorAll(".page");

    pages.forEach(page => {
        page.classList.remove("active-page");
    });


    // Show selected page
    const selectedPage = document.getElementById(pageName);

    if (selectedPage) {
        selectedPage.classList.add("active-page");
    }


    // Update navigation
    const navLinks = document.querySelectorAll(".nav-link");

    navLinks.forEach(link => {
        link.classList.remove("active");

        if (link.dataset.page === pageName) {
            link.classList.add("active");
        }
    });


    // Close mobile menu
    document.getElementById("mobileNav").classList.remove("open");


    // Scroll to top
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* =========================================================
   NAVIGATION CLICK EVENTS
========================================================= */

document.querySelectorAll(".nav-link").forEach(link => {

    link.addEventListener("click", function(event) {

        event.preventDefault();

        const page = this.dataset.page;

        showPage(page);

    });

});


/* Mobile Navigation */

document.querySelectorAll(".mobile-nav a").forEach(link => {

    link.addEventListener("click", function(event) {

        event.preventDefault();

        const page = this.dataset.page;

        showPage(page);

    });

});


/* =========================================================
   MOBILE MENU
========================================================= */

function toggleMenu() {

    const mobileNav = document.getElementById("mobileNav");

    mobileNav.classList.toggle("open");

}


/* =========================================================
   DASHBOARD
========================================================= */

function openDashboard() {

    showPage("dashboard");

}


/* =========================================================
   DASHBOARD TABS
========================================================= */

function showDashboardTab(tabName) {

    // Hide tabs
    const tabs = document.querySelectorAll(".dashboard-tab");

    tabs.forEach(tab => {
        tab.classList.remove("active-tab");
    });


    // Show selected tab
    const selectedTab = document.getElementById(tabName);

    if (selectedTab) {
        selectedTab.classList.add("active-tab");
    }


    // Update sidebar
    const sideItems = document.querySelectorAll(".side-item");

    sideItems.forEach(item => {
        item.classList.remove("active");
    });


    // Find clicked item
    event.currentTarget.classList.add("active");

}


/* =========================================================
   APPLICATION SEARCH
========================================================= */

function filterApplications() {

    const searchInput =
        document.getElementById("applicationSearch");

    const searchTerm =
        searchInput.value.toLowerCase();


    const cards =
        document.querySelectorAll(".application-card");


    cards.forEach(card => {

        const title =
            card.querySelector("h3").textContent.toLowerCase();

        const description =
            card.querySelector("p").textContent.toLowerCase();


        if (
            title.includes(searchTerm) ||
            description.includes(searchTerm)
        ) {

            card.style.display = "block";

        } else {

            card.style.display = "none";

        }

    });

}


/* =========================================================
   APPLY NOW
========================================================= */

function applyNow(applicationName) {

    showMessage(
        applicationName + " selected successfully!"
    );

}


/* =========================================================
   MESSAGE POPUP
========================================================= */

function showMessage(message) {

    const messageBox =
        document.getElementById("messageBox");

    const messageText =
        document.getElementById("messageText");


    messageText.textContent = message;

    messageBox.classList.add("show");


    setTimeout(() => {

        messageBox.classList.remove("show");

    }, 3000);

}


/* =========================================================
   CONTACT FORM
========================================================= */

function sendMessage(event) {

    event.preventDefault();


    const name =
        document.getElementById("name").value;


    showMessage(
        "Thank you, " + name + "! Your message has been sent."
    );


    // Clear form
    event.target.reset();

}


/* =========================================================
   LOGIN
========================================================= */

function loginUser(event) {

    event.preventDefault();


    const email =
        document.getElementById("loginEmail").value;


    showMessage(
        "Welcome! Login successful for " + email
    );


    // Go to dashboard
    setTimeout(() => {

        showPage("dashboard");

    }, 1000);

}


/* =========================================================
   PASSWORD VISIBILITY
========================================================= */

function togglePassword() {

    const password =
        document.getElementById("loginPassword");

    const eye =
        document.getElementById("eyeIcon");


    if (password.type === "password") {

        password.type = "text";

        eye.classList.remove("fa-eye");

        eye.classList.add("fa-eye-slash");

    } else {

        password.type = "password";

        eye.classList.remove("fa-eye-slash");

        eye.classList.add("fa-eye");

    }

}


/* =========================================================
   START DASHBOARD
========================================================= */

document.addEventListener("DOMContentLoaded", function() {

    console.log(
        "FLIX UNFORGETABLE frontend loaded successfully."
    );

});