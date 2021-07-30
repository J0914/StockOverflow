window.addEventListener("DOMContentLoaded", async () => {
    
    //Question voting
    const upvote = document.getElementById("upvote-button");
    const downvote = document.getElementById("downvote-button");
    const scoreDiv = document.getElementById("totalScore");

    
    const questionTitleDiv = document.querySelector('.questiontitle');
    const questionId = questionTitleDiv.id;
    const voteDiv = document.getElementById("voting-div");
    

    let voted = false;

    if (upvote.innerHTML === "▲" || downvote.innerHTML === "▼") {
        voted = true
    }

    // console.log("has user initially voted?", voted)

    voteDiv.addEventListener('click', async (event) => {

        if (event.target.id === "upvote-button") {
            const body = { score: 1 };

            const response = await fetch(`${questionId}/vote`, {
                method: 'POST',
                headers: {
                    "Content-Type": 'application/json',
                },
                body: JSON.stringify(body)
            });
            const { totalScore } = await response.json();
            //console.log(totalScore)
            scoreDiv.innerText = totalScore;

            voted = !voted;
            // console.log("did I vote now?", voted)

            if(voted === true) {
                upvote.innerHTML = "▲";
                downvote.classList.add("hidden");
                
            } else {
                upvote.innerHTML = "△";
                downvote.classList.remove("hidden")
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
            //console.log(totalScore)
            scoreDiv.innerText = totalScore;

            voted = !voted;
            // console.log("did I vote now?", voted)

            if(voted === true) {
                downvote.innerHTML = "▼";
                upvote.classList.add("hidden");
                
            } else {
                downvote.innerHTML = "▽";
                upvote.classList.remove("hidden")
            }
        }

    })


    //Response Vote Logic Below


    let responseVoteObject = {}

    const userResVoteDivs = document.querySelectorAll('.hidden-vote')

    userResVoteDivs.forEach(div => {
        let responseId = div.id.split("Q")[1]

        // console.log("responseId", responseId)

        responseVoteObject[responseId] = {usersVoteScore: Number(div.innerHTML), userHasVotedForThis: false};
    })

    // console.log(responseVoteObject, "<=====#########################")

    let votedRes = false;

    const upvoteResButtons = document.querySelectorAll(".upvote-resbutton");
    const downvoteResButtons = document.querySelectorAll(".downvote-resbutton");

    function setButtonStates(responseId) {

        let resUpvoteButton = document.querySelector(`#upvote-response-buttonW${responseId}`);

        let resDownvoteButton = document.querySelector(`#downvote-response-buttonW${responseId}`);

        if (responseVoteObject[responseId].usersVoteScore === 1) {
            resUpvoteButton.innerText = "▲";
            responseVoteObject[responseId].userHasVotedForThis = true;
        }

        if (resUpvoteButton && resDownvoteButton && responseVoteObject[responseId].usersVoteScore === 0) {
            resUpvoteButton.innerText = "△";
            resUpvoteButton.classList.remove("hidden");
            resDownvoteButton.innerText = "▽";
            resDownvoteButton.classList.remove("hidden");
            responseVoteObject[responseId].userHasVotedForThis = false;
        }

        if (resUpvoteButton && resDownvoteButton && responseVoteObject[responseId].usersVoteScore === -1) {
            resUpvoteButton.classList.add("hidden")
            responseVoteObject[responseId].userHasVotedForThis = true;
        }

        if (resUpvoteButton && resDownvoteButton && responseVoteObject[responseId].usersVoteScore === -1) {
            resDownvoteButton.innerText = "▼"
        }

        if (resUpvoteButton && resDownvoteButton && responseVoteObject[responseId].usersVoteScore === 1) {
            resDownvoteButton.classList.add("hidden")
        }

        // console.log(responseVoteObject, "<=====#########################")
    }



    upvoteResButtons.forEach(button => {
        let responseId = button.id.split("W")[1];

        setButtonStates(responseId);

        button.addEventListener('click', async (event) => {

            let alreadyVoted = responseVoteObject[responseId].userHasVotedForThis;
            
            const body = {scoreRes: 1, userVoted: alreadyVoted};

            const result = await fetch(`${questionId}/responses/${responseId}/vote`, {
                method: 'POST',
                headers: {
                    "Content-Type": 'application/json',
                },
                body: JSON.stringify(body)
            });

            const { totalResScore } = await result.json();

            // console.log(totalResScore, "<~~~~~~~~~~~Response's Total Score")

            const resScoreDisplay = document.getElementById(`totalRespScore${responseId}`);

            resScoreDisplay.innerHTML = totalResScore;

            if (alreadyVoted === true) {
                responseVoteObject[responseId].usersVoteScore -= 1;
            } else {
                responseVoteObject[responseId].usersVoteScore += 1;
            }

            responseVoteObject[responseId].userHasVotedForThis = !responseVoteObject[responseId].userHasVotedForThis;

            setButtonStates(responseId);
        })
    })



    

    downvoteResButtons.forEach(button => {
        let responseId = button.id.split("W")[1];

        setButtonStates(responseId);

        button.addEventListener('click', async (event) => {

            let alreadyVoted = responseVoteObject[responseId].userHasVotedForThis;
            
            const body = {scoreRes: -1, userVoted: alreadyVoted};

            const result = await fetch(`${questionId}/responses/${responseId}/vote`, {
                method: 'POST',
                headers: {
                    "Content-Type": 'application/json',
                },
                body: JSON.stringify(body)
            });

            const { totalResScore } = await result.json();

            // console.log(totalResScore, "<~~~~~~~~~~~Response's Total Score")

            const resScoreDisplay = document.getElementById(`totalRespScore${responseId}`);

            resScoreDisplay.innerHTML = totalResScore;

            if (alreadyVoted === true) {
                responseVoteObject[responseId].usersVoteScore += 1;
            } else {
                responseVoteObject[responseId].usersVoteScore -= 1;
            }

            responseVoteObject[responseId].userHasVotedForThis = !responseVoteObject[responseId].userHasVotedForThis;

            setButtonStates(responseId);
        })
    })

    //Not logged in -- Question votes
    let hiddenMessage = document.querySelector(".no-vote-message");

    let noUserVotingDiv = document.querySelector(".no-user")
;
    
    noUserVotingDiv && noUserVotingDiv.addEventListener('mouseenter', e => {
        hiddenMessage.classList.remove('hidden')
    })

    noUserVotingDiv && noUserVotingDiv.addEventListener('mouseleave', e => {
        hiddenMessage.classList.add("hidden")
    })
    

    //Not logged in -- Response votes
    let noUserResVotingDivs = document.querySelectorAll(".no-user-res")

    noUserResVotingDivs.forEach(div => {
        div.addEventListener('mouseenter', e => {
            let responseId = div.id.split("Q")[1];

            let resHiddenMessage = document.querySelector(`#hidden-message-${responseId}`);
            resHiddenMessage.classList.remove('hidden');
        })

        div.addEventListener('mouseleave', e => {
            let responseId = div.id.split("Q")[1];

            let resHiddenMessage = document.querySelector(`#hidden-message-${responseId}`);
            resHiddenMessage.classList.add('hidden');
        })

    })

});