function confirmarAsistencia() {
    const nombre = prompt("¿Cuál es tu nombre?");
    if(nombre){
      alert(`¡Gracias por confirmar, ${nombre}! 🎉`);
    }
  }
  
  const evento = new Date("April 13, 2025 21:00:00").getTime();
  const countdown = document.getElementById("countdown");
  
  setInterval(() => {
    const ahora = new Date().getTime();
    const distancia = evento - ahora;
  
    if (distancia < 0) {
      countdown.innerHTML = "¡Ya comenzó la fiesta! 🎉";
      return;
    }
  
    const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((distancia % (1000 * 60)) / 1000);
  
    countdown.innerHTML = `Faltan: ${dias}d ${horas}h ${minutos}m ${segundos}s`;
  }, 1000);
  