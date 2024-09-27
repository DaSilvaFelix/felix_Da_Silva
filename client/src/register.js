// ! REALIZAR LA LÓGICA DE REGISTRO DE USUARIOS AQUÍ// completado

import "./style.css";

const $from = document.getElementById("register-form");
$from.addEventListener("submit", async (e) => {
  e.preventDefault();
  const $username = document.getElementById("username").value;
  const $email = document.getElementById("email").value;
  const $password = document.getElementById("password").value;
  console.log($username);
  console.log($email);
  console.log($password);
  const shipment = await fetch("http://localhost:4321/auth/sign-up", {
    method: "POST",
    body: JSON.stringify({
      username: $username,
      password: $password,
      email: $email,
    }),
    headers: { "Content-Type": "application/json" },
  });
  const receipt = await shipment.json();

  if (shipment.ok) {
    window.location.href = "../pages/login.html";
  } else {
  }
});
