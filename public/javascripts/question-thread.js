window.addEventListener("DOMContentLoaded", async () => {
    const scoreDiv = document.getElementById("totalScore");
    let score = scoreDiv.innerText;
    const questionTitleDiv = document.querySelector('.questiontitle');
    const questionId = questionTitleDiv.id;
    const voteDiv = document.getElementById("voting-div");
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
            const {totalScore} = await response.json();
            console.log(totalScore)
            scoreDiv.innerText = totalScore;
            return totalScore;
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
            const { totalScore } = await response.json();
            console.log(totalScore)
            scoreDiv.innerText = totalScore;
            return totalScore;
        }
        
    });
});