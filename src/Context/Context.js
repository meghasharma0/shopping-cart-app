import { createContext, useState } from "react";

export const ItemContext = createContext(null);

export const ItemContextProvider = (props) => {

    const [items, setItems] = useState([]);
    const [totalAmt, setTotalAmt] = useState(0);

    return (
        <ItemContext.Provider value={{ items, setItems, totalAmt, setTotalAmt }}>
            { props.children }
        </ItemContext.Provider>
    )
}