const body = document.body;
const btn = document.querySelector("#toggleTHeme");
const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");

function applySystemTheme() {
    const theme = darkQuery.matches ? "dark" : "light";
    body.classList.remove("dark", "light");
    body.classList.add(theme);
}

// Initial Load
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
    body.classList.add(savedTheme);
} else {
    applySystemTheme();
}

// Listen for System Changes
darkQuery.addEventListener("change", () => {
    if (!localStorage.getItem("theme")) {
        applySystemTheme();
    }
});

// Toggle Interaction
btn.addEventListener("click", () => {
    const isDark = body.classList.contains("dark");
    const newTheme = isDark ? "light" : "dark";
    
    body.classList.replace(isDark ? "dark" : "light", newTheme);
    localStorage.setItem("theme", newTheme);
});