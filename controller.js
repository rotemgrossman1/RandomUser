const model = Model();
const renderer = Renderer();
const init = async function () {
    const userData = await model.getRandUsr();
    const quoteData = await model.getRandQuote();
    renderer.renderUser(userData);
    renderer.renderQuote(quoteData);
}

init();