export const userReducer = (user,action) =>{
    switch (action.type) {
        case "USER_EDITED":
            return [...user,action.value]
            break;
        default:
            return user
            break;
    }
}