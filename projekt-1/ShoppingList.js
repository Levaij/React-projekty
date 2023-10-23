import React, { useState } from 'react';
import './ShoppingList.css';


function ShoppingList() {
    
    const [items, setItems] = useState([]);
    const [itemName, setItemName] = useState('');

    const addItem = () => {
        setItems([...items, itemName]);
        setItemName('');
    };

    const removeItem = (index) => {
        const updatedItems = [...items];
        updatedItems.splice(index, 1);
        setItems(updatedItems);
    };

    return (
        <div className="shopping-list"> {/* Zastosuj klasę CSS do elementu głównego */}
        <input
            type="text"
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
            className="input" // Zastosuj klasę CSS do elementu input
        />
        <button onClick={addItem} className="button">Add to list</button> {/* Zastosuj klasę CSS do przycisku */}
        <ul className="list"> {/* Zastosuj klasę CSS do elementu listy */}
            {items.map((item, index) => (
            <li key={index} className="list-item"> {/* Zastosuj klasę CSS do elementów listy */}
                {item}
                <button onClick={() => removeItem(index)} className="remove-button">Remove</button> {/* Zastosuj klasę CSS do przycisku usuwania */}
            </li>
            ))}
        </ul>
        </div>
    );

}

export default ShoppingList;