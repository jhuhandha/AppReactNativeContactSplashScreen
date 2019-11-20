import {
  RESULT_ADD,
  RESULT_MOD,
  ERROR,
  LOADING,
  CONTACTOS,
} from './../actions/contacto.action';

export default function (state = {payload : [], estado : true}, action) {
  switch (action.type) {
    case RESULT_ADD:
      return {...state, mensaje_add: action.mensaje};
    case RESULT_MOD:
      return {...state, mensaje_mod: action.mensaje};
    case ERROR:
      return {...state, error: action.mensaje};
    case CONTACTOS:
      return {...state, payload: action.payload};
    case LOADING:
      return {...state, estado: action.estado};
    default:
      return state;
  }
}
