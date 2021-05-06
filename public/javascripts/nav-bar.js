document.addEventListener("DOMContentLoaded", () => {
    const searchIcon = document.querySelector("#search-icon");
    const searchBar = document.querySelector(".search-bar");
    let clicked = false;


    searchIcon.addEventListener("click", (event) => {
        if (clicked) {
            searchBar.style.visibility = "hidden";
            clicked = false;
        } else {
            searchBar.style.visibility = "visible";
            clicked = true;
        }
    })

    const demoUserButton = document.querySelector("#demo-user-button");
    if (demoUserButton) {
        demoUserButton.addEventListener("click", async (event) => {
            const res = await fetch('/users/loginDemo', { method: 'POST', })
            console.log(res.status);
            if (res.status === 200) {
                window.location.reload();
            }
            // location.reload();
        })
    }
});
