document.addEventListener("mousemove", function (e) {
  const parallax = document.getElementById("parallax");
  const speed = 3.5; // Increased speed for more noticeable parallax effect
  const x = (window.innerWidth - e.pageX * speed) / 100;
  const y = (window.innerHeight - e.pageY * speed) / 100;
  parallax.style.transform = `translateX(${x}px) translateY(${y}px) scale(1.1)`; // Added scale for zoom effect
});

function showContent(id, toggleValue) {
  const content = document.getElementById(
    id === "1" ? "about__js" : "sns__js"
  );
  const icon = document.getElementById(
    id === "1" ? "icon__1" : "icon__2"
  );
  const toggle = document.getElementById(
    id === "1" ? "tog__value" : "tog__value1"
  );
  if (toggleValue === "0") {
    content.style.display = "flex";
    icon.classList.replace("fa-chevron-right", "fa-chevron-down");
    toggle.value = "1";
  } else {
    content.style.display = "none";
    icon.classList.replace("fa-chevron-down", "fa-chevron-right");
    toggle.value = "0";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  // Snow effect
  function createSnowflake() {
    const snowflake = document.createElement("div");
    snowflake.classList.add("snowflake");
    snowflake.style.left = Math.random() * window.innerWidth + "px";
    snowflake.style.animationDuration = Math.random() * 3 + 2 + "s"; // between 2 to 5 seconds
    snowflake.style.opacity = Math.random();
    snowflake.style.fontSize = Math.random() * 10 + 10 + "px"; // between 10px and 20px
    snowflake.textContent = "❄"; // Add snowflake character
    document.body.appendChild(snowflake);

    setTimeout(() => {
      snowflake.remove();
    }, 5000); // remove snowflake after 5 seconds
  }

  setInterval(createSnowflake, 100);

  // Snowflake styles
  const style = document.createElement("style");
  style.innerHTML = `
    .snowflake {
      position: fixed;
      top: 0;
      color: white;
      user-select: none;
      pointer-events: none;
      z-index: 9999;
      animation: fall linear infinite;
    }

    @keyframes fall {
      to {
        transform: translateY(100vh);
      }
    }
  `;
  document.head.appendChild(style);
});