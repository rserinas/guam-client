import axios  from 'axios';

export const onChangeUsername = data => dispatch => {
    dispatch({
        type: 'SET_USERNAME',
        payload: data
    })
}

export const onChangePassword = data => dispatch => {
    dispatch({
        type: 'SET_PASSWORD',
        payload: data
    })
}

export const submitForm = data => dispatch => {

    let postData = {
        username: data.username,
        password: data.password
    };

    if(postData.username === "" || postData.password === "") {
        dispatch({
            type: 'CALL_SNACKBAR',
            payload: true
        })
    } else {
        axios.post('https://jsonplaceholder.typicode.com/post', postData)
        .then(function(response){
            
        });  
    }    
}
