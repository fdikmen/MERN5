export const UPDATE_USER = 'UPDATE_USER';
export const ADD_USER = 'ADD_USER'
//CRUD--Create-Read-Update-Delete
export function updateUser(newUser){
    return{
        type:UPDATE_USER,
        payload:{
            user:newUser
        }
    }
}

export function addUser(newUser){
    return{
        type:ADD_USER,
        payload:{
            user:newUser
        }
    }
}

