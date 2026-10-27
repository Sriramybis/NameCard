document.getElementById("save").addEventListener("click", () => {
  const vcard = [
    "BEGIN:VCARD",
    "VERSION:3.0",
    "FN:Sriram Mythili Sekar",
    "N:Mythili Sekar;Sriram;;;",
    "ORG:IBM",
    "TEL;TYPE=CELL:+6584547212",
    "EMAIL;TYPE=WORK:sriram.mythili.sekar@ibm.com",
    "URL:https://www.linkedin.com/in/mythili-sekar-sriram/",
    "END:VCARD",
  ].join("\r\n");

  const url = URL.createObjectURL(new Blob([vcard], { type: "text/vcard" }));
  const a = document.createElement("a");
  a.href = url;
  a.download = "sriram-mythili-sekar.vcf";
  a.click();
  URL.revokeObjectURL(url);
});

document.getElementById("show-qr").addEventListener("click", (e) => {
  const qr = document.getElementById("qr");
  qr.hidden = !qr.hidden;
  e.target.textContent = qr.hidden ? "Show QR Code" : "Hide QR Code";
  e.target.setAttribute("aria-expanded", String(!qr.hidden));
});

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("sw.js").catch(() => {});
}
