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
    // async function getFriend(){
    //     const response = await axios.get("https://randomuser.me/api/");
    //     const user = response.data
    //     const userFirstName = user.results[0].name.first
    //     const userLastName = user.results[0].name.last
    //     const friend = `${userFirstName} ${userLastName}`
    //     return friend
    // }
        async function getSixFriends(){
            const response = await axios.get("https://randomuser.me/api/?results=6");
            const fullFriends = response.data.results
            let friendsNames =[]
            for(let i = 0; i<6; i++){
                const firstName = fullFriends[i].name.first
                const lastName = fullFriends[i].name.last
                friendsNames.push(`${firstName}, ${lastName}`)
            }
            return friendsNames
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

    async function getRandMeatQuote() {
        const response = await axios.get(`https://baconipsum.com/api/?type=meat-and-filler`);
        const meatQuote = response.data
        return meatQuote
    }

    return {
        getRandUsr, getRandQuote, getRandPokemon, getRandMeatQuote, getSixFriends
    }
}  




