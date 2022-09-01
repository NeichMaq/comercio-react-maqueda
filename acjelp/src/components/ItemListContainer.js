import { Alert } from "bootstrap"
import React from "react"
import ItemCount from "./ItemCount"
import "./Itemlist.css"
const ItemListContainer = () => {
    return(
        <div className="contenedor">
            <h1>{greeting}</h1>
            <div className="contador">
                <ItemCount stock="40" onAdd={(contador)=> Alert(messager , Contador)}></ItemCount>
            </div>
        </div>
    )
}