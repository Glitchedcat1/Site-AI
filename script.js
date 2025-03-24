function openChatbot() {
    const chatbotBox = document.getElementById('chatbot-box');
    chatbotBox.classList.toggle('hidden');
    playWelcomeAudio(); // Play welcome audio when chatbot opens
}

function sendMessage() {
    const input = document.getElementById('chat-input');
    const message = input.value;
    if (message) {
        const messagesDiv = document.getElementById('chatbot-messages');
        messagesDiv.innerHTML += `<div>${message}</div>`;
        input.value = ''; // Clear input
        playMessageSentAudio(); // Play audio whenever a message is sent
    }
}

function playWelcomeAudio() {
    const audio = new Audio('audio/welcome.mp3');
    audio.play();
}

function playMessageSentAudio() {
    const audio = new Audio('audio/message-sent.mp3');
    audio.play();
}
