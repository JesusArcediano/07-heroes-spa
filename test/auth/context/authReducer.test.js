import { authReducer, types } from "../../../src/auth";


describe('Pruebas en authReducer', () => {

   test('Debe devolver el estado por defecto', () => {
        
        const initialState = { logged: false };

        const action = {};

        const state = authReducer(initialState, action);

        expect(state).toEqual(initialState)
    })
    
    
    test('(login) debe llamar al login, autenticarlo y devolver el user', () => {
         
        const initialState = { logged: false };
 
        const user = {
            id: 'ABC',
            name: 'Juan'
        }

        const action = {
            type: types.login,
            payload: user
        }
 
        const state = authReducer(initialState, action)
        expect(state).toEqual({
            logged: true,
            user: action.payload
        })
    })
    
    
    test('(logout) debe borrar el name del usuario y logged en falase', () => {
        
        const initialState = {
            logged: true,
            user: {id: 'ABC', name: 'Juan'}
        };
        
        const action = {
            type: types.logout,
        }
        
        const state = authReducer(initialState, action);
        console.log(state)
        
        expect(state).toEqual({
            logged: false
        })
    })












})