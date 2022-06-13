import React, { useEffect, useMemo } from 'react';
import debounce from 'lodash.debounce';

function DebounceSearch({searchHandler}) {
    const debouncedChangeHandler = useMemo(() => debounce(searchHandler, 300), []);

        useEffect(() => {
            return () => {
              debouncedChangeHandler.cancel();
            }
          }, []);

    return (
        <>
            <div className="form-group has-search">
                <span className="fa fa-search form-control-feedback"></span>
                <input onChange={debouncedChangeHandler} type="text" className="form-control" placeholder="Search" />
            </div>
        </>
    )
}

export default DebounceSearch;
