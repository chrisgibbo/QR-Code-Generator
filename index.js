const imageContainer = document.getElementById("imageContainer");
const qrimage = document.getElementById("qr-image");
const qrtext = document.getElementById("qr-text");

function generateQR() {
  if (qrtext.value.length > 0) {
    qrimage.src =
      "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
      qrtext.value;
    imageContainer.classList.add("show-img");
  } else {
    qrtext.classList.add("error");
    setTimeout(() => {
      qrtext.classList.remove("error");
    }, 1000);
  }
}

function copyButton() {
  const range = document.createRange();
  range.selectNode(imageContainer);

  const selection = window.getSelection();

  selection.removeAllRanges();
  selection.addRange(range);
  try {
    document.execCommand("copy");
  } catch (err) {
    console.error("Unable to copy image to clipboard", err);
  } finally {
    selection.removeAllRanges();
  }
}
