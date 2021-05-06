window.addEventListener("DOMContentLoaded", async () => {
    const scoreDiv = document.getElementById("totalScore");
    let score = scoreDiv.innerText;
    console.log(score);
    const questionTitleDiv = document.querySelector('.questiontitle');
    const questionId = questionTitleDiv.id;
    const voteDiv = document.getElementById("voting-div");
    console.log(voteDiv)
    voteDiv.addEventListener('click', async (event) => {
        if (event.target.id === "upvote-button"){
            const body = { score: 1 };
            const response = await fetch(`${questionId}/vote`, {
                method: 'POST',
                headers: {
                    "Content-Type": 'application/json',
                },
                body: JSON.stringify(body)
            });            
        }
        if (event.target.id === "downvote-button") {
            const body = { score: -1 };
            const response = await fetch(`${questionId}/vote`, {
                method: 'POST',
                headers: {
                    "Content-Type": 'application/json',
                },
                body: JSON.stringify(body)
            });
        }
    });
});