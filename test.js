import QrScanner from "https://unpkg.com";

const video = document.getElementById("qr-video");
const resultLabel = document.getElementById("qr_results");

function setResult(result) {
  resultLabel.textContent = result.data;
  resultLabel.style.color = "#10b981"; // Green text on success
}

// Initialize the QR Scanner
const scanner = new QrScanner(video, (result) => setResult(result), {
  highlightScanRegion: true, // Draws a yellow box around the QR code
  highlightCodeOutline: true, // Outlines the detected code
});

// Start the camera feed automatically
scanner.start().catch((err) => {
  resultLabel.textContent = "Camera access denied or missing.";
  resultLabel.style.color = "#ef4444";
  console.error(err);
});
