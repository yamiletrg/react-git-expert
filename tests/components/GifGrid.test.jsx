import { render,screen } from "@testing-library/react";
import GifGrid from "../../src/components/GifGrid";

describe('Pruebas en <GifGrid />', () => {

    const category = 'One Punch';

    test('debe de mostrar el loading inicialmente', () => {
        // solo evalua lo inicial del componente
        render(<GifGrid category={category}/>);
        expect(screen.getByText('Cargando...'));
        expect(screen.getByText(category));

    });
  
});
