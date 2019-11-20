import { combineReducers } from 'redux';

import ContactoReducer from './contacto.reducer';

export default combineReducers({
    contacto: ContactoReducer
});