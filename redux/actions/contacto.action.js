import {POST, GET} from './../../services/api';

export const RESULT_ADD = "RESULT_ADD";
export const RESULT_MOD = "RESULT_MOD";
export const ERROR = "ERROR";
export const CONTACTOS = "CONTACTOS";
export const LOADING = "LOADING";

export function result_add(mensaje){
    return {type: RESULT_ADD, mensaje};
}

export function result_mod(mensaje){
    return {type: RESULT_MOD, mensaje};
}

export function error(mensaje){
    return {type: ERROR, mensaje};
}

export function contactos(payload){
    return {type: CONTACTOS, payload};
}

export function loading(estado){
    return {type: LOADING, estado};
}


export const add_contact = (data) => dispatch => {
    dispatch(loading(true));
    return POST('/contactos', data).then(respuesta=>{
        if(respuesta.ok){
            dispatch(result_add(respuesta));
        }else{
            dispatch(error(respuesta));
        }
        dispatch(loading(false));
    }).catch(e => {
        dispatch(error(e));
        dispatch(loading(false));
    });
}

export const list_contact = () => dispatch => {
    dispatch(loading(true));
    return GET('/contactos').then(respuesta=>{
 
        if(respuesta.ok){
            dispatch(contactos(respuesta.data));
        }else{
            dispatch(error(respuesta));
        }
        dispatch(loading(false));
    }).catch(e => {
        dispatch(error(e));
        dispatch(loading(false));
    });
}
