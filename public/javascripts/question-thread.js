window.addEventListener("DOMContentLoaded", async () => {
    const upvote = document.getElementById("upvote-button");
    const downvote = document.getElementById("downvote-button");
    
    const scoreDiv = document.getElementById("totalScore");
    let score = scoreDiv.innerText;
    const questionTitleDiv = document.querySelector('.questiontitle');
    const questionId = questionTitleDiv.id;
    const voteDiv = document.getElementById("voting-div");
    let counter = 1;
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
            const { totalScore } = await response.json();
            console.log(totalScore)
            scoreDiv.innerText = totalScore;
            counter++;
            if (counter % 2 !== 1) {
                upvote.innerText = "▲";
                downvote.setAttribute("class", "hidden");
                upvote.setAttribute("class", "voting-button");
            } else {
                upvote.innerText = "△";
                downvote.removeAttribute("class", "hidden");
                downvote.setAttribute("class", "voting-button");
            }
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
            counter++;
            if (counter % 2 !== 1) {
                downvote.innerText = "▼";
                upvote.setAttribute("class", "hidden");
                downvote.setAttribute("class", "voting-button");

            } else {
                downvote.innerText = "▽";
                upvote.removeAttribute("class", "hidden");
                upvote.setAttribute("class", "voting-button");
            }
        }
        
    });
});