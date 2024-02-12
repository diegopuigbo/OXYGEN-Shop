document.addEventListener("DOMContentLoaded", function () {
    const icon1 = document.getElementById("icon-1");
    const icon2 = document.getElementById("icon-2");
    const navbarMenu = document.querySelector(".navbar ul");

    icon1.addEventListener("click", toggleDropdown);
    icon2.addEventListener("click", closeDropdown);
    window.addEventListener("resize", adjustDropdown);



    function toggleDropdown() {
        icon1.style.display = "none";
        icon2.style.display = "inline";
        navbarMenu.style.display = "inline-block";
        document.querySelector(".navbar").classList.add("active");
    }

    function closeDropdown() {
        icon1.style.display = "inline";
        icon2.style.display = "none";
        navbarMenu.style.display = "none";
        document.querySelector(".navbar").classList.remove("active");
    }


    function adjustDropdown() {
        if (window.innerWidth >= 1000) {
            icon1.style.display = "inline";
            icon2.style.display = "none";
            navbarMenu.style.display = "inline-block";
            navbar.style.height = "auto";
            navbar.style.boxShadow = "none";
        } else {
            closeDropdown();
        }
    }
});
