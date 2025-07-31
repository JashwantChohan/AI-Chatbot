const messageInput = document.querySelector(".message-input")

const createMessageElement = (content, classes) => {
    const div = document.createElement("div")
}

const handleOutgoingMessage = (userMessage) => {
    const messageContent = `<div class="message-text">${userMessage}</div>`
    createMessageElement(messageContent, "user-message")

}

// handle Enter key press for message
messageInput.addEventListener("keydown", (e) => {
    const userMessage = e.target.value.trim()
    if (e.key === "Enter" && userMessage) {
        handleOutgoingMessage(userMessage)
    }
})