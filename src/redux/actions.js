const FETCH_DRINKS = "FETCH_DRINKS";

export const fetchDrinks = () => dispatch => {
    const randomNum = Math.floor(Math.random() * 231)
    fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic') 
    .then(res => res.json())
    .then(data => data.drinks.slice(randomNum, randomNum + 20))
    .then(drinks => dispatch({
        type: FETCH_DRINKS,
        payload: drinks
    }))
}

export default FETCH_DRINKS;


// const ADD_ARTICLE = "ADD_ARTICLE";
// const ADD_USER = "ADD_USER";

// const addUser = (userId) => ({ type: ADD_USER, payload: userId });
// const addArticle = ({ title, userId }) => ({ type: ADD_ARTICLE, payload: { title, userId }});

// export { ADD_ARTICLE, ADD_USER, addArticle, addUser };

// export const fetchPosts = () => dispatch => {
//     fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(res => res.json())
//     .then(posts => dispatch({
//         type: FETCH_POSTS,
//         payload: posts
//     })
// );
// };

// const randomNum = Math.floor(Math.random() * 231)
// fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic') //+ this.state.midUrl + this.state.endUrl)
// .then(res => res.json())
// .then(data => this.setState({ cocktails: data.drinks.slice(randomNum, randomNum + 20) }));