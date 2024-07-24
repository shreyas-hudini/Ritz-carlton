
const initialState = {
    FormData:{
        firstname: "",
        lastname: "",
        gender: "",
        number: "",
        dob: null,
        arrival: null,
        nationality: "",
    }
}

const formReducer = (state = initialState,action)=>{
    switch(action.type){
        case SETFIELD:
            return{
            ...state,
            FormData:action.payload
            }
        default:
            return state
    }
}

export default formReducer