const form = document.getElementById("generate-qr-form");
const qrcodeOutput = document.getElementById("qr-code");
const loader = document.getElementById("spinner");
const downloadLink = document.getElementById("save-btn");

const onGenerateSubmit = (e) => {
  e.preventDefault();
  const url = document.getElementById("url-input");
  const qrSize = document.getElementById("qr-size");

  //   hide
  downloadLink.classList.add("hidden");
  // clear Previous QR codes
  clearUI();
  showLoader(true);
  setTimeout(() => {
    showLoader(false);
    createQRCode(url.value, qrSize.value);
    setTimeout(() => {
      const saveUrl = qrcodeOutput.querySelector("img").src;
      saveQRCode(saveUrl);
    }, 50);
  }, 1500);
};

const showLoader = (isShow = "false") => {
  loader.style.display = isShow ? "block" : "none";
};

const clearUI = () => (qrcodeOutput.innerHTML = "");

const saveQRCode = (saveUrl) => {
  downloadLink.href = saveUrl;
  downloadLink.classList.remove("hidden");
};
const createQRCode = (url, size) => {
  const qrcode = new QRCode("qr-code", {
    text: url,
    width: size,
    height: size,
  });
};

form.addEventListener("submit", onGenerateSubmit);
