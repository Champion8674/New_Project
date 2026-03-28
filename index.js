// Dark Mode Start code from here

const btn = document.getElementById("theme-toggle");

    btn.addEventListener("click", () => {
      document.body.classList.toggle("dark");

      if (document.body.classList.contains("dark")) {
        localStorage.setItem("theme", "dark");
      } else {
        localStorage.setItem("theme", "light");
      }
    });

    // Load saved theme
    if (localStorage.getItem("theme") === "dark") {
      document.body.classList.add("dark");
    }

// Dark Mode end code here


