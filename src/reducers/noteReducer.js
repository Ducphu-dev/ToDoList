import {NOTE_CONSTANT} from '../constants/nodeConstant'

const DEFAULT_NOTE_DATA = {
  id: 0,
  content: "",
  level: "low",
  createAt: null,
  status: "doing",
};


const initState = {
  noteList: JSON.parse(localStorage.getItem("noteList")) || [],
  noteData: DEFAULT_NOTE_DATA,
  isOpenForm: false,
  query: {
    content: "",
    level: "all",
    date: null,
    status: "",
  },
}

function noteReducer(state = initState, action) {
  switch (action.type) {
    default:
      return state;
    case NOTE_CONSTANT.EDIT: {
      return {
        ...state,
        noteData: {
          ...action.payload
        },
        
      }
    }
    case NOTE_CONSTANT.REMOVE: {
      const newList = state.noteList.filter((note) => note.id !== action.payload.id);
      return {
        ...state,
        noteList: newList,
      }
    }
      
    case NOTE_CONSTANT.CONFIRM: {
      if (state.noteData.id === DEFAULT_NOTE_DATA.id) {
        // Tạo id mới
        const id = Math.round(Math.random() * 1000);
        // Thêm trường id và ngày tạo
        const _noteData = {...state.noteData, id, createAt: new Date().getTime()};
        // Bỏ data vào cuối list
        const newList = [...state.noteList, _noteData];
        return {
          ...state,
          noteList: newList,
          noteData: DEFAULT_NOTE_DATA,
        }
      }else{
        const newList = state.noteList.map((note) => 
        note.id === state.noteData.id ? state.noteData : note
        );
      
        return {
          ...state,
          noteList: newList,
          noteData: DEFAULT_NOTE_DATA
        }
      
      }
    }

    case NOTE_CONSTANT.CHANGE_CONTENT: {
      return {
        ...state,
        noteData: {
          ...state.noteData,
          content: action.payload
        }
      }
    }
    case NOTE_CONSTANT.CHANGE_LEVEL: {
      return {
        ...state,
        noteData: {
          ...state.noteData,
          level: action.payload
        }
      }
    }
    case NOTE_CONSTANT.TOGGLE_FORM: {
      return{
        ...state,
        isOpenForm: !state.isOpenForm
      }
    }
    case NOTE_CONSTANT.CHANGE_QUERY_CONTENT: {
      return{
        ...state,
        query :{
          ...state.query,
          date: action.payload
        }
      }
    }
    case NOTE_CONSTANT.CHANGE_QUERY_DATE: {
      return{
        ...state,
        query :{
          ...state.query,
          date: action.payload
        }
      }
    }
    case NOTE_CONSTANT.CHANGE_QUERY_LEVEL: {
      return{
        ...state,
        query :{
          ...state.query,
          level: action.payload
        }
      }
    }
    case NOTE_CONSTANT.CHANGE_STATUS: {
      let newList = [...state.noteList]
      let note = newList.find(note => note.id === action.payload.id)
      note.status = action.payload.value
      return{
        ...state,
        noteList: newList
      }
    }
    case NOTE_CONSTANT.CHANGE_QUERY_STATUS: {
      return{
        ...state,
        query: {
          ...state.query,
          status: action.payload
        }
      }
    }
  }
  
}

export default noteReducer