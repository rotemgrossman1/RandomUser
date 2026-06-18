const model = Model();
const renderer = Renderer();
const init = async function () {
    const userData = await model.getRandUsr();
    const quoteData = await model.getRandQuote();
    const pokemonData = await model.getRandPokemon();
    renderer.renderUser(userData);
    renderer.renderQuote(quoteData);
    renderer.renderPokemon(pokemonData);
}

init();