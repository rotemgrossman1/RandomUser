
const Renderer = function () {
    // 2. Main rendering function
    const renderUser = function (userData) {
        const userImg = document.querySelector("#userImg")
        const userName = document.querySelector("#userName")
        const userAdress = document.querySelector("#userAdress")
        
        userImg.src = userData.pictureUrl
        userName.textContent = userData.userName
        userAdress.textContent = userData.userAdress

    }
    const renderQuote = function (quoteData) {
        const quote = document.querySelector("#quote")
        quote.textContent = quoteData.quote
    }
    const renderPokemon = function (pokemonData) {
        const pokemonName = document.querySelector("#pokemone-name")
        const pokemonImg = document.querySelector("#pokemonImg")
        pokemonImg.src = pokemonData.pokemonImgUrl
        pokemonName.textContent = pokemonData.pokemonName
    }

    // Return the public method
    return {
        renderUser: renderUser,
        renderQuote: renderQuote,
        renderPokemon: renderPokemon
    }
}