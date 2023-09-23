const prints=document.getElementById("detailss");

document.addEventListener("DOMContentLoaded", function () {
    const logoutButton = document.getElementById("logout-button");

    logoutButton.addEventListener("click", function () {
        // Clear local storage and redirect to the signup page
        localStorage.removeItem("user");
        window.location.href = "index.html";
    });

    // Check if the user is logged in (access token is present)
    const userData = JSON.parse(localStorage.getItem("user"));
    if (!userData || !userData.accessToken) {
        // Redirect to the signup page if not logged in
        window.location.href = "index.html";
    }
    else{
        let arr=[];
        for(let i in userData){
            arr.push(userData[i]);
        }
        for(let i=0; i<arr.length; i++){
            const profileInfo = `
            <h2>Profile Details</h2>
            <p><strong>Name:</strong> ${arr[0]}</p>
            <p><strong>Email:</strong> ${arr[1]}</p>
            <p><strong>password:</strong> ${arr[2]}</p>
            <p><strong>Token:</strong> ${arr[3]}</p>
        `;
        prints.innerHTML = profileInfo;
        }
        
}
});
