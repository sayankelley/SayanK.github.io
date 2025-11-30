function sendMessage() {
    let input = document.getElementById("chatbot-input");
    let msgBox = document.getElementById("chatbot-messages");

    let userText = input.value.trim();
    if (userText === "") return;

    // Show user message
    msgBox.innerHTML += `<div class='user-msg'>${userText}</div>`;

    let text = userText.toLowerCase();
    let reply = "";

    // ===========================================
    // WEBSITE NAVIGATION RESPONSES
    // ===========================================
    if (text.includes("home")) reply = "Here is the Home page: <a href='index.html'>Go Home</a>";
    else if (text.includes("about")) reply = "Learn more about me here: <a href='about.html'>About Me</a>";
    else if (text.includes("project")) reply = "You can view all my projects here: <a href='projects.html'>Projects Page</a>";
    else if (text.includes("resume")) reply = "You can view or download my resume here: <a href='resume.html'>Resume Page</a>";
    else if (text.includes("contact")) reply = "You can reach me here: <a href='contact.html'>Contact Page</a>";

    // ===========================================
    // GENERAL QUESTIONS
    // ===========================================
    else if (text.includes("hello") || text.includes("hi")) 
        reply = "Hi! I’m your assistant chatbot. Ask me about Sayan's skills, projects, resume, or navigate the site!";
    
    else if (text.includes("who are you"))
        reply = "I’m the AI assistant on Sayan Kelley Jr’s portfolio website. I can help you find information and navigate.";

    else if (text.includes("skills"))
        reply = "Sayan's skills include: IT troubleshooting, hardware setup, diagnostics, networking basics, system installation, documentation, cybersecurity fundamentals, and cloud computing.";

    else if (text.includes("experience"))
        reply = "Sayan has IT support experience from Rent-A-Center and UPS, plus hands-on IT projects from Bowie State University.";

    else if (text.includes("school") || text.includes("education"))
        reply = "Sayan is studying Computer Technology at Bowie State University and graduates December 2025.";

    // ===========================================
    // PROJECT QUESTIONS
    // ===========================================
    else if (text.includes("vpc") || text.includes("aws"))
        reply = "Sayan completed a Capstone where he configured AWS VPC Peering, routing tables, and solved IPv4 CIDR issues. You can read more here: <a href='projects.html'>Projects Page</a>";

    else if (text.includes("cyber") || text.includes("machine learning"))
        reply = "Sayan researched Machine Learning in Cybersecurity, focusing on threat detection and Zero Trust. Check the Projects page for details.";

    else if (text.includes("research"))
        reply = "Sayan completed a full data research study on U.S. student debt trends. Check the Projects page for more.";

    // ===========================================
    // HELP / GUIDANCE
    // ===========================================
    else if (text.includes("help") || text.includes("guide"))
        reply = "Sure! I can guide you. Try typing:\n- 'Go to projects'\n- 'Show skills'\n- 'Show resume'\n- 'What experience does Sayan have?'";

    // ===========================================
    // DEFAULT RESPONSE
    // ===========================================
    else 
        reply = "I'm not sure about that yet, but I can help you navigate the website! Try asking about skills, projects, or type 'help'.";

    // Show bot response
    msgBox.innerHTML += `<div class='bot-msg'>${reply}</div>`;
    msgBox.scrollTop = msgBox.scrollHeight;

    input.value = "";
}

document.getElementById("chatbot-button").onclick = function () {
    let box = document.getElementById("chatbot-window");
    box.style.display = box.style.display === "flex" ? "none" : "flex";
};

document.getElementById("chatbot-send").onclick = sendMessage;

