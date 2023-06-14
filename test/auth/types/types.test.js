import { types } from "../../../src/auth";

describe('Pruebas en types.js', () => {


    test('Debe devolver estos types', () => {

        expect( types ).toEqual({
            login: '[Auth] Login',
            logout: '[Auth] Logout',
        });



    })


})