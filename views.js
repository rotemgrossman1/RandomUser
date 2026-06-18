
const Renderer = function () {
    // 2. Main rendering function
    const renderUser = function (userData) {
        console.log("This is the data arriving at the renderer:", userData);
        // $("#userContainer").empty()
        const userImg = document.querySelector("#userImg")
        const userName = document.querySelector("#userName")
        const userAdress = document.querySelector("#userAdress")
        
        userImg.src = userData.pictureUrl
        userName.textContent = userData.userName
        userAdress.textContent = userData.userAdress

    }

    // Return the public method
    return {
        renderUser: renderUser
    }
}