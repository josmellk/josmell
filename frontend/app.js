
async function fetchStatus() {
  try {
    const response = await fetch("/api/status");
    const data = await response.json();
    document.getElementById("status").innerText =
      "Respuesta del servidor: " + data.instance;
  } catch (error) {
    document.getElementById("status").innerText =
      "Error al conectar con el backend.";
  }
}
setInterval(fetchStatus, 2000);
fetchStatus();
