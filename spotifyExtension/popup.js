document.getElementById("playPause").addEventListener("click", () => {
  // Handle Play/Pause logic
  console.log("Play/Pause clicked");
});

document.getElementById("prev").addEventListener("click", () => {
  // Handle Previous Track logic
  console.log("Previous Track clicked");
});

document.getElementById("next").addEventListener("click", () => {
  // Handle Next Track logic
  console.log("Next Track clicked");
});

document.getElementById("volume").addEventListener("input", (e) => {
  const volume = e.target.value;
  // Handle volume change logic
  console.log(`Volume set to ${volume}`);
});
