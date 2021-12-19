import React, {useRef} from 'react';
import './searchProducts.css';

const SearchProducts = ({term, searchKeyword}) => {
    const inputEl = useRef('');

    const getSearchTerm = () => {
        searchKeyword(inputEl.current.value);
    }

    return (
        <>
            <label htmlFor="html" className="filter__title">looking for</label>
            <input className="shadow-none searchInput"
                       type="text"
                       placeholder="search"
                       ref={inputEl}
                       value={term}
                       onChange={getSearchTerm}
                />
        </>
    );
};

export default SearchProducts;