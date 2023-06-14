import { render, screen } from "@testing-library/react";
import { AuthContext } from "../../src/auth";
import { PrivateRoute } from "../../src/router/PrivateRoute";
import { MemoryRouter } from "react-router-dom";

describe('Pruebas en <PrivateRoute>', () => {
    
    Storage.prototype.setItem = jest.fn();

    test('Debe mostrar children si está autenticado', () => {
        const contextValue = {
            logged: true,
            user: {
                name: 'Juanito',
                id: 'ABC111'
            }
        }

        render(
            <AuthContext.Provider value={ contextValue }>
                <MemoryRouter>
                    <PrivateRoute>
                        <h1>Ruta privada</h1>
                    </PrivateRoute>
                </MemoryRouter>
            </AuthContext.Provider>
        );

        expect( screen.getByText('Ruta privada') ).toBeTruthy();
        expect( localStorage.setItem ).toHaveBeenCalled();
    })




})