function sendMessage() {
    let input = document.getElementById("chatbot-input");
    let messages = document.getElementById("chatbot-messages");

    if (input.value.trim() === "") return;

    messages.innerHTML += `<div class='user-msg'>${input.value}</div>`;

    let text = input.value.toLowerCase();
    let response = "I'm not sure about that, but I'm learning!";

    if (text.includes("skills")) response = "I specialize in IT troubleshooting, hardware setup, and support.";
    if (text.includes("projects")) response = "Check out my Projects page!";
    if (text.includes("resume")) response = "My full resume is available on the Resume page.";
    if (text.includes("experience")) response = "I have IT experience from Bowie, Rent-A-Center, and UPS.";
    if (text.includes("hello") || text.includes("hi")) response = "Hi! How can I help you today?";

    messages.innerHTML += `<div class='bot-msg'>${response}</div>`;
    messages.scrollTop = messages.scrollHeight;

    input.value = "";
}

document.getElementById("chatbot-button").onclick = function() {
    let box = document.getElementById("chatbot-window");
    box.style.display = box.style.display === "flex" ? "none" : "flex";
};

document.getElementById("chatbot-send").onclick = sendMessage;
