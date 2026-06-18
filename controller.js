const model = Model();
const renderer = Renderer();
 const generateBtn = document.querySelector("#generate")
    generateBtn.addEventListener("click",() =>{
        init()
    })
const init = async function () {
    const userData = await model.getRandUsr();
    const quoteData = await model.getRandQuote();
    const pokemonData = await model.getRandPokemon();
    const meatData = await model.getRandMeatQuote();
    const sixFriendsData = await model.getSixFriends();
    renderer.renderUser(userData);
    renderer.renderQuote(quoteData);
    renderer.renderPokemon(pokemonData);
    renderer.renderMeatQuote(meatData);
    renderer.renderSixFriends(sixFriendsData)
}

init();