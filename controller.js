const model = Model();
const renderer = Renderer();
const init = async function () {
    const userData = await model.getRandUsr();
    renderer.renderUser(userData);
}

init();