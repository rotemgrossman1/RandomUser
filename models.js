// $.ajax({
//   url: 'https://randomuser.me/api/',
//   dataType: 'json',
//   success: function(data) {
//     console.log(data);
//   }
// });
const Model = function(){
    async function getRandUsr() {
        const response = await axios.get("https://randomuser.me/api/");
        const user = response.data
        const userFirstName = user.results[0].name.first
        const userLastName = user.results[0].name.last
        const userCity =  user.results[0].location.city
        const userState =  user.results[0].location.state
        const userPictureUrl = user.results[0].picture.medium
        const userData = {
            userName: `${userFirstName} ${userLastName}`,
            userAdress: `${userCity}, ${userState}`,
            pictureUrl: userPictureUrl
        }
        return userData
    }

    async function getRandQuote() {
        const response = await axios.get("https://api.kanye.rest");
        const quote = response.data
        return quote
    }

    async function getRandPokemon() {
        let random = Math.floor(Math.random()*1025)
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${random}/`);
        const pokemon = response.data
        const pokemonName = pokemon.name
        const pokemonImgUrl = pokemon.sprites.front_default 
        const pokemonDetails = {
            pokemonName: pokemonName,
            pokemonImgUrl: pokemonImgUrl
        }
        return pokemonDetails
    }
    return {
        getRandUsr, getRandQuote, getRandPokemon
    }
}  




// let random = Math.floor(Math.random()*1025)
// $.ajax({
//   url: `https://pokeapi.co/api/v2/pokemon/${random}/`,
//   dataType: 'json',
//   success: function(data) {
//     console.log(data);
//   }
// });

// $.ajax({
//   url: `https://baconipsum.com/api/?type=meat-and-filler`,
//   dataType: 'json',
//   success: function(data) {
//     console.log(data);
//   }
// });