// Registrar Service Worker
if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
        navigator.serviceWorker.register("sw.js");
    });
}

// Instalar app
let deferredPrompt;
const installBtn = document.getElementById("installBtn");

window.addEventListener("beforeinstallprompt", (e) => {
    e.preventDefault();
    deferredPrompt = e;
    installBtn.style.display = "block";

    installBtn.addEventListener("click", () => {
        installBtn.style.display = "none";
        deferredPrompt.prompt();
        deferredPrompt = null;
    });
});