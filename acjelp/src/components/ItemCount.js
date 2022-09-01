import React from "react";
import { useState } from "react";
const ItemCount = ({stock.cuentainicial = 1 .onAdd}) => {
    const[contador, setContador] = useState(cuentainicial);
    return(
        <div>
            Contador: {contador}
            <button OnClick={() => setContador(cuentainicial)}> Reset</button>
            <button OnClick={()=> setContador( contador - 1)}> - </button>
            <button OnClick={()=> setContador( contador + 1)}> + </button>
        </div>
    )
}

export default ItemCount;