import { render,screen } from '@testing-library/react';
import GifItem from "../../src/components/GifItem"

describe('Pruebas en <GifItem />', () => {

    const title = "Saitama";
    const url = "https://one-puch.com/saitama.jpg"
  
    test('debe de hacer match con el snapshot ', () => {
      const {container} = render(
        <GifItem title={title} url={url}/>
      );

      expect(container).toMatchSnapshot();
    });

    test('debede mostrar la imagen con el URL y el ALT indicado', () => {
      render(<GifItem title={title} url={url}/>);
      // screen.debug();

      // expect(screen.getByRole('img').src).toBe(url);
      // expect(screen.getByRole('img').alt).toBe(title);

      const {src,alt} = screen.getAllByRole('img');
      expect(src).toBe(url);
      expect(alt).toBe(alt);

    });

    test('debe ede mpstrar el titulo en el componente', () => {
      render(<GifItem title={title} url={url}/>);

      expect(screen.getByText(title)).toBeTruthy();
    })
    
    
    
})
