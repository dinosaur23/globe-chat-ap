// script.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getDatabase, ref, push, onChildAdded, set, remove, get, query, orderByChild, endAt } 
  from "https://www.gstatic.com/firebasejs/11.0.1/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyCj7Pip-5dq_FAnr35T5vKCzJdGTqCVeL8",
  authDomain: "heloo-9aa25.firebaseapp.com",
  databaseURL: "https://heloo-9aa25-default-rtdb.firebaseio.com",
  projectId: "heloo-9aa25",
  storageBucket: "heloo-9aa25.firebasestorage.app",
  messagingSenderId: "227396815819",
  appId: "1:227396815819:web:011a261a53cfb16242044e",
  measurementId: "G-6JEWD369MS"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const messagesRef = ref(db, "messages");

const form = document.getElementById("chat-form");
const messagesDiv = document.getElementById("messages");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !message) return;

  push(messagesRef, {
    name,
    message,
    timestamp: Date.now()
  });

  document.getElementById("message").value = "";
});

// Display messages in real-time
onChildAdded(messagesRef, (snapshot) => {
  const data = snapshot.val();
  const p = document.createElement("p");
  p.innerHTML = `<strong>${data.name} says:</strong><br>${data.message}`;
  messagesDiv.appendChild(p);
  messagesDiv.scrollTop = messagesDiv.scrollHeight;
});
