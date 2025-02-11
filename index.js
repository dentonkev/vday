document.addEventListener("DOMContentLoaded", () => {
  const yes_btn = document.getElementById("yes-btn");
  const no_btn = document.getElementById("no-btn");

  no_btn.addEventListener("mouseover", () => {
			no_btn.style.position = "absolute";
      const x = Math.random() * (window.innerWidth - no_btn.clientWidth);
      const y = Math.random() * (window.innerHeight - no_btn.clientHeight);
      no_btn.style.left = `${x}px`;
      no_btn.style.top = `${y}px`;
  });

  yes_btn.addEventListener("click", () => {
      window.location.href = "./yay.html";
  });
});
