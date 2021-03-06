const FETCH_DRINKS = "FETCH_DRINKS";
//const REGISTER = "REGISTER"
//const SEARCH_NAME = "SEARCH_NAME";

export const fetchDrinks = (midUrl = 'popular.php', endUrl='') => dispatch => {
    if (midUrl === 'i') {
        midUrl = 'filter.php?i='
    } else if (midUrl === 'n'){
        midUrl = 'search.php?s='
    } else if (midUrl === 'g'){
        midUrl = 'filter.php?g='
    }
    fetch('https://www.thecocktaildb.com/api/json/v2/8673533/' + midUrl + endUrl) 
    .then(res => res.json())
    .then(data => data.drinks)
    .then(drinks =>{
        dispatch ({
        type: FETCH_DRINKS,
        payload: drinks
    })})
}

// export const registerUser = (username, password) => ({
//     type: REGISTER,
//     payload: {
//         username,
//         password
//     }
// })

// export const fetchDrinks = (midUrl = 'filter.php?a=', endUrl='Alcoholic') => dispatch => {
//     fetch('https://www.thecocktaildb.com/api/json/v1/1/' + midUrl + endUrl) 
//     .then(res => res.json())
//     .then(data => {
// 		if (midUrl = "filter.php?a=") {
// 			const randomNum = Math.floor(Math.random() * 231)
// 			data = data.drinks.slice(randomNum, randomNum + 20)
// 		} else {
// 			data = data.drinks
// 		}
		
//         dispatch({
//         	type: FETCH_DRINKS,
//        	 	payload: data
//     	})
// 	})
// }

export default FETCH_DRINKS;

//export default (FETCH_DRINKS, REGISTER);

// key
//https://www.thecocktaildb.com/api/json/v2/8673533/popular.php
//https://www.thecocktaildb.com/api/json/v2/8673533/recent.php
//https://www.thecocktaildb.com/api/json/v2/8673533/search.php?s=margarita

// do search
//https://www.thecocktaildb.com/api/json/v1/1/search.php?i=vodka
//https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Gin