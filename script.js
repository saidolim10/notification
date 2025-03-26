function showNotification(type) {
    const container = document.getElementById("notification-container");

    const notification = document.createElement("div");
    notification.classList.add("notification", type);

    let message = "";
    if (type === "success") message = "Well done!";
    else if (type === "fail") message = "Oh snap!";
    else if (type === "warning") message = "Warning!";

    notification.innerHTML = `
        ${message}
        <button class="close-btn" onclick="this.parentElement.remove()">✖</button>
    `;

    container.appendChild(notification);

    setTimeout(() => {
        notification.remove();
    }, 3000);
}
