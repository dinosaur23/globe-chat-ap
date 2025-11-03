const form = document.getElementById("chat-form");
const messagesDiv = document.getElementById("messages");
const nameInput = document.getElementById("name");
const messageInput = document.getElementById("message");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = nameInput.value.trim();
  const message = messageInput.value.trim();

  if (!name || !message) return;

  const p = document.createElement("p");
  p.innerHTML = `<strong>${name} says:</strong><br>${message}`;
  messagesDiv.appendChild(p);

  messageInput.value = "";
  messagesDiv.scrollTop = messagesDiv.scrollHeight;
});
