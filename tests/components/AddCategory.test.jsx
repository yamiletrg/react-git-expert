import { fireEvent, render,screen } from "@testing-library/react"
import AddCategory from "../../src/components/AddCategory"

describe('Pruebas en <AddCategory />', () => {

    test('debe cambiar el valor de la caja de texto', () => {

      render(<AddCategory onNewCategory={() => {}} />);
      // extrae el input
      const input = screen.getByRole('textbox');

      // Disparar un evento 
      fireEvent.input(input, {target:{value:'Saitama'}});

      // lo que se espera que suceda luego del evento
      expect(input.value).toBe('Saitama')

      // screen.debug(); 
    });


    test('debe de llamar onNewCategory si el input tiene un valor', () => {
      const inputValue = 'Saitama';

      // valor a evaluar
      render(<AddCategory onNewCategory={() => {}}/>);

      // sujeto de prueba
      const input = screen.getByRole('textbox');
      const form = screen.getByRole('form');

      // prueba
      fireEvent.input(input, {target:{value:inputValue}});
      // evaluamos el comportamiento del submit
      fireEvent.submit(form);
      // screen.debug();
      expect(input.value).toBe('');


    })
    


    
  
})
