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
    })
    
  
})
