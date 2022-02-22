import React, {useState} from 'react';

const useSelect = (stateInicial, opciones) => { //state inicial es "general"
    //esta es un custom hook

    // state del custom hook
    const [state, actualizarState] = useState(stateInicial); //se actualiza el estado de la variable, el estado inicial es stateInicial

    const SelectNoticias =  () => (
        <select
            className="browser-default"
            value={state}
            onChange={e => actualizarState(e.target.value)} //si se selecciona en el combobox otro, se actuasliza el state
        >
            {opciones.map(opcion => (
                <option key={opcion.value} value={opcion.value}>{opcion.label}</option>
            ))}
        </select>
    );

    return [state, SelectNoticias]; //devuelve el estado y el componente SelectNoiticas
}
 
export default useSelect;