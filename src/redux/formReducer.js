import {ACTION_TYPES} from './formActionTypes';

export const INITIAL_STATE = {
    fullname: "",
    email: "",
    phone: "",
    age: 0,
    profile: "",
    skills: [],
    experiences: []
}

export const formReducer = (state, action) => {
    switch(action.type){
        case ACTION_TYPES.ADD_SKILL:
            return {
                ...state,
                skills: [...state.skills, action.payload],
            };
        
        case ACTION_TYPES.ADD_EXPERIENCE:
            return {
                ...state,
                experiences: [...state.experiences, action.payload],
            };
        
        case ACTION_TYPES.CHANGE_INPUT:
            return {
                ...state,
                [action.payload.name] : action.payload.value,
            };

        case ACTION_TYPES.REMOVE_SKILL :
            return {
                ...state,
                skills: state.skills.filter((skill) => skill !== action.payload),
            };

        case ACTION_TYPES.REMOVE_EXPERIENCE :
            return {
                ...state,
                experiences: state.experiences.filter((experience) => experience !== action.payload),
            };

        default:
            return state;

          
    }
}