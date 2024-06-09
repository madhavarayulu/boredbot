function getActivityIdea() {
    fetch("https://apis.scrimba.com/bored/api/activity")
        .then(res => res.json())
        .then(data => {
            document.getElementById("idea").textContent = data.activity
            document.body.classList.add("fun")
            const emojiString = "🦾 HappyBot 🦿";
            document.getElementById("title").textContent = emojiString; 
        })
}

document.getElementById("bored-button").addEventListener("click", getActivityIdea)