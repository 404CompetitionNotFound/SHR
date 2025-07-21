function showHearts() {
  const container = document.getElementById("heartContainer");

  for (let i = 0; i < 15; i++) {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.textContent = "💖";

    heart.style.left = Math.random() * 100 + "%";
    heart.style.top = "100%";
    heart.style.fontSize = Math.random() * 20 + 10 + "px";
    heart.style.position = "absolute";

    container.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 2000);
  }

  // Wait 2 seconds, then go to next page
  setTimeout(() => {
    goToNextPage();
  }, 2000);
}

function goToNextPage() {
  window.location.href = "New.html"; // Change to your target page
}
