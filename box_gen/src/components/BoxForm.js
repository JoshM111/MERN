import React, { useState } from 'react';

const BoxForm = ({ setBox, box }) => {
    const [newColor, setNewColor] = useState("");

    const onChange = (e) => {
        setNewColor(e.target.value);
    };

    const grabColor = () => {
        setBox({
        ...box,
        colors: [...box.colors, newColor],
        });
        setNewColor("");
    };
    return (
        <div class="input-group mb-3">
        <input
            onChange={onChange}
            type="text"
            class="form-control"
            name="newColor"
            value={newColor}
        />
        <div class="input-group-append">
            <button onClick={grabColor} class="btn btn-primary">
            Add Box
            </button>
        </div>
    </div>
    );
};

export default BoxForm;