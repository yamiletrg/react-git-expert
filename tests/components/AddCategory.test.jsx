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
      // definimos la funcion
      const onNewCategory = jest.fn();

      // valor a evaluar
      // render(<AddCategory onNewCategory={() => {}}/>);
      render(<AddCategory onNewCategory={onNewCategory}/>);

      // sujeto de prueba
      const input = screen.getByRole('textbox');
      const form = screen.getByRole('form');

      // prueba
      fireEvent.input(input, {target:{value:inputValue}});
      // evaluamos el comportamiento del submit
      fireEvent.submit(form);
      // screen.debug();
      expect(input.value).toBe('');

      // Evalua si la funcion fue llamada
      expect(onNewCategory).toHaveBeenCalled();
      expect(onNewCategory).toHaveBeenCalledTimes(1);
      expect(onNewCategory).toHaveBeenCalledWith(inputValue);

    });

    test('no debe de llamar onNewCategory si el input esta vacio', () => {
      const inputValue = '';
      // definimos la funcion
      const onNewCategory = jest.fn();

      // valor a evaluar
      // render(<AddCategory onNewCategory={() => {}}/>);
      render(<AddCategory onNewCategory={onNewCategory}/>);

      // sujeto de prueba
      const form = screen.getByRole('form');
      // prueba
      fireEvent.submit(form);

      // Evalua si la funcion fue llamada
      expect(onNewCategory).not.toHaveBeenCalled();
      expect(onNewCategory).toHaveBeenCalledTimes(0);
    })
    


    
  
})
