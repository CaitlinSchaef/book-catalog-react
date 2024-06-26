
import axios from 'axios'


// const baseUrl = 'https://book-catalog-back-end.fly.dev'
const baseUrl = 'http://127.0.0.1:8000'

//make a call to git token
// auth is in the state, it's going to have access token and setAccesstoken as part of it
export const getToken = ({ auth, username, password }) => {
    axios.post(`${baseUrl}/token/`, {
        // then we're going to pass it the username and the password
        username, 
        password
    }).then(response => {
        console.log('GET TOKEN RESPONSE: ', response)
        auth.setAccessToken(response.data.access)
        let accessToken = response.data.access
        // set local storage here, then call it with a use effect
        //Store the access token
        localStorage.setItem("token", accessToken)
        console.log('ACCESS TOKEN: ', accessToken)
        //Load the access token, maybe move this around?
        localStorage.getItem("token")
    })
    .catch(error => console.log('ERROR: ', error))
}

//we're not just sending a url, we're attaching header info so that the backend knows we're valid, so we're gonna put it together differently
//the method is a longform way to make an axios call
//The /profile calls our getProfile function
//Then headers have different stuff, add Authorization
export const fetchUser = ({ auth }) => {
    axios({
        method: 'get',
        url: `${baseUrl}/profile`,
        headers: {
            Authorization: `Bearer ${auth.accessToken}`
        }
    }).then(response => {
        console.log('FETCH USER RESPONSE: ', response)
    }).catch(error => console.log('ERROR: ', error))
}

//in this one we had to be explicit in the firstName/lastName because python is expecting snake case
export const createUser = ({ username, password, firstName, lastName }) => {
    axios({
        method: 'post',
        url: `${baseUrl}/create_user/`,
        data: {
            username, 
            password,
            first_name: firstName,
            last_name: lastName,
        }
    })
        .then(response => {
        console.log('CREATE USER RESPONSE: ', response)
    })
        .catch(error => console.log('ERROR: ', error))
}

//fetch books 
export const fetchBooks = () => {
    axios({
        method: 'get',
        url: `${baseUrl}/books`,
    }).then(response => {
        console.log('FETCH BOOK RESPONSE: ', response)
    }).catch(error => console.log('ERROR: ', error))
}

