import React, { useEffect, useMemo, useState } from 'react';
import debounce from 'lodash.debounce';

function DebounceSearch({searchHandler, category}) {
    const debouncedChangeHandler = useMemo(() => debounce(searchHandler, 500), []);
    const [value, setValue] = useState('');

    useEffect(() => {
            setValue('');
            return () => {
              debouncedChangeHandler.cancel();
            }
          }, [category]);

    return (
        <>
            <div className="form-group has-search">
                <span className="fa fa-search form-control-feedback"></span>
                <input onChange={e => { debouncedChangeHandler(e); setValue(e.target.value) } } value={value} type="text" className="form-control" placeholder="Search" />
            </div>
        </>
    )
}

export default DebounceSearch;
