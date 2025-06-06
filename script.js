      // Mobile menu toggle
      const mobileToggle = document.querySelector(".mobile-toggle");
      const navList = document.querySelector(".nav-list");

      mobileToggle.addEventListener("click", () => {
        navList.classList.toggle("active");
        mobileToggle.querySelector("i").classList.toggle("fa-bars");
        mobileToggle.querySelector("i").classList.toggle("fa-times");
      });

      // Close mobile menu when clicking on a link
      document.querySelectorAll(".nav-list a").forEach((link) => {
        link.addEventListener("click", () => {
          navList.classList.remove("active");
          mobileToggle.querySelector("i").classList.add("fa-bars");
          mobileToggle.querySelector("i").classList.remove("fa-times");
        });
      });

      // Project filter buttons
      const filterButtons = document.querySelectorAll(".filter-btn");

      filterButtons.forEach((button) => {
        button.addEventListener("click", () => {
          // Remove active class from all buttons
          filterButtons.forEach((btn) => btn.classList.remove("active"));
          // Add active class to clicked button
          button.classList.add("active");
          // In a real implementation, you would filter projects here
        });
      });

      // Smooth scrolling for anchor links
      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
          e.preventDefault();

          const targetId = this.getAttribute("href");
          if (targetId === "#") return;

          const targetElement = document.querySelector(targetId);
          if (targetElement) {
            window.scrollTo({
              top: targetElement.offsetTop - 80,
              behavior: "smooth",
            });
          }
        });
      });