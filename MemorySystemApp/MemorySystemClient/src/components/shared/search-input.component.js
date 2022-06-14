import React, { useState, useEffect, useCallback } from 'react';

function SearchInput({ onChange, clearInput }) {
    const [value, setValue] = useState('');

    useEffect(() => {
        setValue('');
    }, [clearInput]);

    const onChangeHandler = useCallback((event) => {
        setValue(event.target.value);

        onChange(event.target.value);
    }, [onChange, setValue]);

    return (
        <>
            <div className="form-group has-search">
                <span className="fa fa-search form-control-feedback"></span>
                <input onChange={onChangeHandler} value={value} type="text" className="form-control" placeholder="Search" />
            </div>
        </>
    )
}

export default SearchInput;
