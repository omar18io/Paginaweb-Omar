const respuestas = {
  hola: "¡Hola! ¿Cómo puedo ayudarte?",
  presentacion: "Soy un chat bot creado para ayudarte en tus dudas sobre programación y otros temas.",
  // Respuestas relacionadas con tu web y un colegio
  sitio_web: "Mi sitio web es un recurso dedicado a la programación, donde comparto miles de tutoriales, consejos y herramientas útiles.",
  colegio_programacion: "Si estás interesado en aprender programación en un entorno educativo, te recomendaría explorar programas en colegios o instituciones especializadas. Hay miles de oportunidades educativas esperándote.",
  herramientas_web: "En mi web, encontrarás miles de herramientas web útiles para programadores. ¡Échales un vistazo y descubre cómo pueden facilitar tu trabajo!",
  // Respuestas adicionales sobre programación, política, deportes, etc.
  programacion: "La programación es una habilidad fascinante que te permite crear software y solucionar problemas. Explora mi web para encontrar miles de recursos para mejorar tus habilidades de programación.",
  politica: "La política es un tema complejo y fascinante. Si tienes preguntas específicas, ¡estaré encantado de ayudarte a entender más sobre este tema!",
  deportes: "El mundo del deporte es emocionante y variado. Desde fútbol hasta esports, hay miles de eventos y noticias para mantenerte actualizado. ¿Tienes alguna pregunta en particular?",
  pat_colegios: "El Proyecto Educativo Institucional (PEI) es fundamental en los colegios. Descubre en mi web miles de ejemplos y guías sobre cómo desarrollar un Plan Anual de Trabajo (PAT) efectivo.",
  pei_colegios: "El Proyecto Educativo Institucional (PEI) define la visión y misión de un colegio. Explora miles de recursos en mi web para entender cómo elaborar un PEI que refleje los valores de tu institución.",
  docentes: "Los docentes juegan un papel crucial en la educación. Encuentra miles de consejos y recursos en mi web para apoyar a los docentes en su desarrollo profesional.",
  // Puedes agregar más respuestas según tus necesidades
  default: "Lo siento, no entendí tu pregunta. ¿Puedes ser más específico?"
};
function obtenerRespuesta(message) {
  const mensaje = message.trim().toLowerCase();
  // const mensaje = message.trim();
  // mensaje.toLowerCase();
  if (respuestas[mensaje]) {
    return respuestas[mensaje];
  }
  return respuestas.default;
}
function sendMessage() {
  const userInput = document.getElementById('message-input');
  const message = userInput.value;
  if (message.trim() !== '') {
    displayMessage(message, 'user');
    const respuestaBot = obtenerRespuesta(message);
    displayMessage(respuestaBot, 'bot');
    userInput.value = '';
  }
}
function displayMessage(message, sender) {
  const chatMessages = document.getElementById('chat-messages');
  const newMessage = document.createElement('div');
  newMessage.classList.add('message', sender);
  newMessage.textContent = message;
  chatMessages.appendChild(newMessage);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}