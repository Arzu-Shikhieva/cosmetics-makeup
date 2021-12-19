import React from 'react';
import './FilterBar.css';
import SearchProducts from "../searchProducts/SearchProducts";

const FilterBar = ({setSelectInput, allBrands, allCategories, allTypes, term, searchKeyword}) => {

    const handleInput = (e) => {
        setSelectInput(e.target.value);
    }

    return (
        <>
        <div className="row mt-5 mb-5">
            <div className="col-lg-3">
                <label htmlFor="html" className="filter__title">by brands</label>
                <select className="form-select shadow-none" onChange={handleInput}>
                    {allBrands.map((brand, id) => {
                        return(
                            <option key={id} value={brand}>{brand}</option>
                        )
                    })}
                </select>
            </div>
            <div className="col-lg-3">
                <label htmlFor="html" className="filter__title">by categories</label>
                <select className="form-select shadow-none" onChange={handleInput}>
                    {allCategories.map((category, id) => {
                        return(
                            <option key={id} value={category}>{category}</option>
                        )
                    })}
                </select>
            </div>
            <div className="col-lg-3">
                <label htmlFor="html" className="filter__title">by types</label>
                <select className="form-select shadow-none" onChange={handleInput}>
                    {allTypes.map((type, id) => {
                        return(
                            <option key={id} value={type}>{type}</option>
                        )
                    })}
                </select>
            </div>
            <div className="col-lg-3 search">
                <SearchProducts term={term} searchKeyword={searchKeyword}/>
            </div>
        </div>
        </>
    );
};

export default FilterBar;