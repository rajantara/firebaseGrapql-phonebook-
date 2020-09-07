const phones = (state = [], action) => {
    switch (action.type) {
        case 'LOAD_CONTACT_SUCCESS':
            return action.users.map((item) => {
                item.sent = true;
                return item
            })
        case 'POST_CONTACT':
            return [
                ...state,
                {
                    Id: action.Id,
                    Name: action.Name,
                    Phone: action.Phone,
                    sent: true
                }
            ]

        case 'DELETE_CONTACT':
            return state.filter((item) => item.Id !== action.Id)

        case 'DELETE_CONTACT_SUCCESS':
            return state

        case 'LOAD_CONTACT_FAILURE':
        case 'DELETE_CONTACT_FAILURE':
        default:
            return state
    }
}


export default phones