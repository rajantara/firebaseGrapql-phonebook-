import ApolloClient from 'apollo-boost';
import gql from 'graphql-tag';
import Swal from "sweetalert2";


const API_URL = 'http://localhost:3000/graphql/'

const client = new ApolloClient({
    uri: API_URL
})


//========================= start load contact data

const loadContactSuccess = (users) => ({
    type: 'LOAD_CONTACT_SUCCESS',
    users
})


const loadContactFailure = () => ({
    type: 'LOAD_CONTACT_FAILURE'
})



export const loadContact = () => {
    const contactQuery = gql`
    query {
        users{
            Id
            Name
            Phone
    }
    }`;
    return async dispatch => {
        try {
            const response = await client.query({
                query: contactQuery,
            });
            console.log(response, 'ini data dude')
            dispatch(loadContactSuccess(response.data.users));
        }
        catch (error) {
            console.log(error);
            dispatch(loadContactFailure());
        }
    }
}

//============================== end load contact data




//============================== start post contact data

export const postUserSuccess = (users) => ({
    type: 'POST_USER_SUCCESS',
    users
})

export const postUserFailure = (Id) => ({
    type: 'POST_USER_FAILURE', Id
})

const postUserRedux = (Id, Name, Phone) => ({
    type: 'POST_USER', Id, Name, Phone
})


export const postUser = (Id, Name, Phone) => {
    const addQuery = gql`
    mutation addUser($Id: ID!, $Name: String!, $Phone: String!) {
      addUser(Id: $Id, Name: $Name, Phone: $Phone) {
        Id
        Name
        Phone
      }
    }`;
    return dispatch => {
        dispatch(postUserRedux(Id, Name, Phone))
        return client.mutate({
            mutation: addQuery,
            variables: {
                Id,
                Name,
                Phone
            }
        })
            .then(function (response) {
                dispatch(postUserSuccess(response.data))
            })
            .catch(function (error) {
                console.error(error);
                dispatch(postUserFailure(Id))
            });
    }
}

//============================== end post contact data






//============================== start update contact data

export const updateUserSuccess = (users) => ({
    type: 'UPDATE_USER_SUCCESS',
    users
})

export const updateUserFailure = (Id) => ({
    type: 'UPDATE_DATA_FAILURE',
    Id
})

const updateUserRedux = (Id, Name, Phone) => ({
    type: 'UPDATE_USER',
    Id,
    Name,
    Phone
})

export const updateON = (Id) => ({
    type: 'UPDATE_ON',
    Id
})

export const updateOFF = (Id) => ({
    type: 'UPDATE_OFF',
    Id
})

export const updateUser = (Id, Name, Phone) => {
    const addQuery = gql`
    mutation updateUser($Id: ID!, $Name: String!, $Phone: String!) {
        updateUser(Id: $Id, Name: $Name, Phone: $Phone) {
          Id
          Name
          Phone
        }
    }`;
    return dispatch => {
        dispatch(updateUserRedux(Id, Name, Phone))
        return client.mutate({
            mutation: addQuery,
            variables: {
                Id,
                Name,
                Phone
            }
        })

            .then(function (response) {
                console.log(response, 'data succes update')
                dispatch(updateUserSuccess(response.data))
            })
            .catch(function (error) {
                console.error(error);
                dispatch(updateUserFailure(Id))
            })
    }
}

//============================== end update contact data







//============================== start delete contact data

const deleteContactRedux = (Id) => ({
    type: 'DELETE_CONTACT', Id
})


export const deleteContactSuccess = (users) => ({
    type: 'DELETE_CONTACT_SUCCESS',
    users
})


export const deleteContactFailure = () => ({
    type: 'DELETE_CONTACT_FAILURE'
})


export const deleteContact = (Id) => {
    const deleteQuery = gql`
    mutation removeUser($Id: ID!) {
      removeUser(Id: $Id) {
        Id
      }
    }`;
    return dispatch => {
        Swal.fire({
            icon: 'warning',
            title: "Are you sure delete this contact?",
            text: "You can't revert this action",
            type: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes Delete it!",
            cancelButtonText: "No, Keep it!",
            showCloseButton: true,
            showLoaderOnConfirm: true
        }).then(result => {

            if (result.value) {
                dispatch(deleteContactRedux(Id))
                return client.mutate({
                    mutation: deleteQuery,
                    variables: {
                        Id
                    }
                })
                    .then(function (response) {

                        dispatch(deleteContactSuccess(response))
                    })
                    .catch(function (error) {
                        console.error(error);
                        dispatch(deleteContactFailure())
                    });
            }
        })

    }

}

//============================== end delete contact data




//============================== start resendcontact

// end delete user data

export const resendUser = (Id, Name, Phone) => {
    const addQuery = gql`
    mutation updateUser($Id: ID!, $Name: String!, $Phone: String!) {
      addUser(Id: $Id, Name: $Name, Phone: $Phone) {
        Id
        Name
        Phone
      }
    }`;
    return dispatch => {
        return client.mutate({
            mutation: addQuery,
            variables: {
                Id,
                Name,
                Phone
            }
        })
            .then(function (response) {
                dispatch(postUserSuccess(response))
            })
            .catch(function (error) {
                console.error(error);
                dispatch(postUserFailure(Id))
            });
    }
}


//============================== end start resendcontact









