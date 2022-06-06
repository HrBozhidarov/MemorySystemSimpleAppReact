import React from 'react';

function Input({ type, value, disabled, placeholder, onChange }) {
    return <input
        type={type}
        placeholder={placeholder}
        value={value}
        disabled={disabled}
        onChange={onChange} />
}

export default Input;
