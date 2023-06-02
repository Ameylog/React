import React, { useState } from 'react';

function AddDeleteExample() {

    const [items, setItems] = useState([]);
    const [newItem, setNewItem] = useState('');

    const addItem = () => {
        if (newItem) {
            setItems([...items, newItem]);
            setNewItem('');
        }
    };

    const deleteItem = (index) => {
        const updatedItems = [...items];
        updatedItems.splice(index, 1);
        setItems(updatedItems);
    };


    const renderItems = () => {
        return items.map((item, index) => (
            <li key={index}>
                {item}
                <button onClick={() => deleteItem(index)}>Delete</button>
            </li>
        ));
    };

    return (
        <div>
            <h1>Add and Delete Example</h1>

            <input
                type="text"
                value={newItem}
                onChange={(e) => setNewItem(e.target.value)}
            />
            <button onClick={addItem}>Add Item</button>

            <ul>{renderItems()}</ul>
        </div>
    );
};

export default AddDeleteExample;
