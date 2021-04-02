import {NOTE_CONSTANT} from '../constants/nodeConstant'


export const handleRemove = note => {
    return{
        type: NOTE_CONSTANT.REMOVE,
        payload: note
    }
}

export const handleEdit = note => {
    return{
        type: NOTE_CONSTANT.EDIT,
        payload: note
    }
}

export const handleConfirm = noteData =>{
    return {
        type: NOTE_CONSTANT.CONFIRM,
        payload: noteData
    }
}

export const changeContent = value =>{
    return {
        type: NOTE_CONSTANT.CHANGE_CONTENT,
        payload: value
    }
}

export const changeLevel = value =>{
    return {
        type: NOTE_CONSTANT.CHANGE_LEVEL,
        payload: value
    }
}

export const toggleOpenForm = () =>{
    return {
        type: NOTE_CONSTANT.TOGGLE_FORM,
        payload: false
    }
}

export const changeQueryContent = e =>{
    return {
        type: NOTE_CONSTANT.CHANGE_QUERY_CONTENT,
        payload: e.target.value
    }
}

export const changeQueryDate = e =>{
    return {
        type: NOTE_CONSTANT.CHANGE_QUERY_DATE,
        payload: new Date(e.target.value).getTime(),
    }
}

export const changeQueryLevel = e =>{
    return {
        type: NOTE_CONSTANT.CHANGE_QUERY_LEVEL,
        payload: e.target.value
    }
}

export const changeStatus = (e, id) => {
    return {
        type: NOTE_CONSTANT.CHANGE_STATUS,
        payload: {
            value: e.target.value,
            id: id
        }
    }
}

export const changeQueryStatus = value => {
    return {
        type: NOTE_CONSTANT.CHANGE_QUERY_STATUS,
        payload: value
    }
}