import { render, renderHook,waitFor } from "@testing-library/react"
import useFetchGifs from "../../src/hooks/useFetchGifs"



describe('Pruebas en el hook useFetchGifs', () => {
  
    test('debe de regresar el estado inicial', () => {

        // const {images, isLoading} = useFetchGifs();   //no se peude evaluar asi
        // Los hooks necesitan oarte del ciclo de vida de los componentes
        const {result} =renderHook(()=> useFetchGifs('One Puch'))
        // console.log(result)
        const {images, isLoading} = result.current;

        expect(images.length).toBe(0);
        expect(isLoading).toBeTruthy();

    });

    test('debe de retornar un arreglo de imagenes y isLoading en false', async() => {
        
        const {result} =renderHook(()=> useFetchGifs('One Puch'))

        await waitFor(
            // callback , expresion de jest apra que este pendiente cuando sucedera el cambio
            // espera que sea mayor que cero
            ()=> expect(result.current.images.length).toBeGreaterThan(0),
        )

        // desestructurael objeto
        const {images, isLoading} = result.current;
        
        expect(images.length).toBeGreaterThan(0);
        expect(isLoading).toBeFalsy();
    })
    
    
})
