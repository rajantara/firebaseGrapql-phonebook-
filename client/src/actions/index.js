import ApolloClient from 'apollo-boost';
import gql from 'graphql-tag';

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












//============================== start delete contact data


const deleteContactRedux = (Id) => ({
    type: 'DELETE_CONTACT', Id
})



export const deleteContactSuccess = (Contact) => ({
    type: 'DELETE_CONTACT_SUCCESS',
    Contact
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
        dispatch(deleteContactRedux(Id))
        return client.mutate({
            mutation: deleteQuery,
            variables: {
                Id
            }
        }).then(function (response) {
            dispatch(deleteContactSuccess(response))
        })

            .catch(function (error) {
                console.error(error);
                dispatch(deleteContactFailure())
            });
    }

}


//============================== end delete contact data









