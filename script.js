document.getElementById("year").textContent = new Date().getFullYear();

const downloadLinks = [...document.querySelectorAll('a[href="GTA_SA_MODS.apk"]')];
fetch("GTA_SA_MODS.apk", { method: "HEAD" })
  .then(response => {
    if (!response.ok) throw new Error("APK not published");
  })
  .catch(() => {
    downloadLinks.forEach(link => {
      link.addEventListener("click", event => {
        event.preventDefault();
        alert("The APK has not been uploaded yet. Please check back soon.");
      });
    });
  });
