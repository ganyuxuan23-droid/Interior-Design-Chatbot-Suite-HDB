// Section switching
const buttons = document.querySelectorAll('.nav-btn');
const sections = document.querySelectorAll('.section');

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    const target = btn.dataset.section;
    sections.forEach(sec => sec.classList.remove('active'));
    document.getElementById(target).classList.add('active');
  });
});

// Chatbot dummy interaction
const sendBtn = document.getElementById('sendBtn');
const userInput = document.getElementById('userInput');
const messages = document.getElementById('chatbot-messages');

sendBtn.addEventListener('click', () => {
  const text = userInput.value.trim();
  if (text === '') return;
  
  // Add user message
  const userMsg = document.createElement('div');
  userMsg.classList.add('user-message');
  userMsg.textContent = text;
  messages.appendChild(userMsg);

  // Scroll down
  messages.scrollTop = messages.scrollHeight;

  // Dummy bot response
  setTimeout(() => {
    const botMsg = document.createElement('div');
    botMsg.classList.add('bot-message');
    botMsg.textContent = "AI: Let me provide you with HDB renovation guidance on that.";
    messages.appendChild(botMsg);
    messages.scrollTop = messages.scrollHeight;
  }, 800);

  userInput.value = '';
});
