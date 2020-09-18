const phones = (state = [], action) => {
    switch (action.type) {
        case 'LOAD_CONTACT_SUCCESS':
            return action.users.map((item) => {
                item.sent = true;
                item.search = true;
                item.onEdit = false;
                return item
            })


        case 'POST_USER':
            return [
                ...state,
                {
                    Id: action.Id,
                    Name: action.Name,
                    Phone: action.Phone,
                    sent: true
                }
            ]

        case 'POST_USER_SUCCESS':
            return state.map((item) => {
                item.sent = true;
                return item
            })

        case 'POST_USER_FAILURE':
            return state.map((item) => {
                if (item.Id === action.Id) {
                    item.sent = false;
                }
                return item
            })







        case 'UPDATE_ON':
            return state.map(item => ({
                ...item,
                ...(item.Id === action.Id && { onEdit: true })
            }))


        case 'UPDATE_OFF':
            return state.map(item => ({
                ...item,
                ...(item.Id === action.Id && { onEdit: false })
            }))


        case 'UPDATE_USER':
            return state.map(item => ({
                ...item,
                ...(item.Id === action.Id && {
                    onEdit: false,
                    Name: action.Name,
                    Phone: action.Number,
                    sent: true
                })
            }))


        case 'UPDATE_USER_SUCCESS':
            return state.map(item => ({
                ...item,
                ...(item.Id === action.Id && {
                    onEdit: false,
                    Name: action.Name,
                    Phone: action.Phone,
                    sent: true
                })
            }))

        case 'UPDATE_DATA_FAILURE':
            return state.map(item => ({
                ...item,
                ...(item.Id === action.Id && {
                    onEdit: false,
                    sent: false
                })
            }))









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