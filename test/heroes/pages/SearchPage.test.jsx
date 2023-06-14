import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter, useNavigate } from "react-router-dom";
import { SearchPage } from "../../../src/heroes/pages/SearchPage";


const mockUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockUseNavigate,
}));



describe('Pruebas en <SearchPage />', () => {


    beforeEach(()=>{ jest.clearAllMocks() });


    test('Debe mostrarse correctamente con los valores por defecto', () => {

        const { container } = render(
            <MemoryRouter>
                <SearchPage/>
            </MemoryRouter>
        );

        expect(container).toMatchSnapshot();

    });
    

    test('Debe mostrar a Batman y el input con el valor del queryString', () => {

        const { container } = render(
            <MemoryRouter initialEntries={['/search?q=batman']}>
                <SearchPage/>
            </MemoryRouter>
        );

        expect(container).toMatchSnapshot();
        const searchInput = screen.getByRole('textbox');
        expect( searchInput.value ).toBe('batman');

        const image = screen.getByRole('img');
        expect(image.src).toContain('/public/heroes/dc-batman.jpg');

    });






    test('Debe mostrar un error si no se encuentra el hero (batman123) ', () => {

        const { container } = render(
            <MemoryRouter initialEntries={['/search?q=batman123']}>
                <SearchPage/>
            </MemoryRouter>
        );

        const searchInput = screen.getByRole('textbox');
        expect( searchInput.value ).toBe('batman123');
        screen.debug();
        expect( screen.getByText('No hero with')).toBeTruthy();
        expect( screen.getByText('batman123')).toBeTruthy();
    });






    test('Debe llamar el navigate a la pantalla nueva', () => {

        const inputValue = 'superman';

        render(
            <MemoryRouter initialEntries={['/search']}>
                <SearchPage/>
            </MemoryRouter>
        );

        const input = screen.getByRole('textbox');
        fireEvent.change(
            input,
            {
                target: {
                    name: 'searchText', 
                    value: inputValue
                }
            }
        )
            
        screen.debug();
        const form = screen.getByRole('form');
        fireEvent.submit(form);

        expect( mockUseNavigate ).toHaveBeenCalledWith(`?q=${inputValue}`);

    })


})