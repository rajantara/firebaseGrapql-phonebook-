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

export const postContactSuccess = (users) => ({
    type: 'POST_CONTACT_SUCCESS',
    users
})

export const postContactFailure = (Id) => ({
    type: 'POST_CONTACT_FAILURE',
    Id
})

const postContactRedux = (Id, Name, Phone) => ({
    type: 'POST_CONTACT',
    Id,
    Name,
    Phone
})

export const postContact = (Id, Name, Phone) => {
    const addQuery = gql`
    mutation addContact($Id: String!, $Name: String!, $Phone: String!) {
        addContact(Id: $Id, Name: $Name, Phone: $Phone) {
            Id
            Name
            Phone
        }
    }`;
    return dispatch => {
        dispatch(postContactRedux(Id, Name, Phone))
        return client.mutate({
            mutation: addQuery,
            variables: {
                Id,
                Name,
                Phone
            }
        })

            .then(function (response) {
                console.log(response.data, 'this data dude')
                dispatch(postContactSuccess(response.data))

            })
            .catch(function (error) {
                console.log(error);
                dispatch(postContactFailure(Id))
            });
    }
}
//============================== end post contact data








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
    mutation removeContact($Id: String!) {
    removeContact(Id: $Id) {
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









