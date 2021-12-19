import React, {useEffect, useState} from 'react';
import axios from "axios";
import Loading from "../Loading/Loading";
import Container from "../Container";
import FilterBar from "../filter/FilterBar";
import ProductList from "./ProductList";

const Products = ({successToast}) => {
    // http://makeup-api.herokuapp.com/api/v1/products.json
    const url = "http://localhost:5000/products/";
    const [brands, setBrands] = useState([]);
    const [categories, setCategories] = useState([]);
    const [types, setTypes] = useState([]);

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const [selectInput, setSelectInput] = useState("");

    useEffect(() => {
        setLoading(true);
        axios.get(url)
            .then(response => {
                setProducts(response.data);
                setBrands(response.data);
                setCategories(response.data);
                setTypes(response.data);
                setLoading(false);
            }).catch(err => {
            setError(true);
            setLoading(false);
        })
    }, []);

    //Filtering of brands
    const filterBrands = () => {
        return [...new Set(brands.filter((item) => item.brand !== null).map((item) => item.brand))];
    }
    const allBrands = filterBrands();


    //Filtering of categories
    const filterCategories = () => {
        return [...new Set(categories.filter((item) => item.category !== null && item.category.length !== 0).map((item) => item.category))];
    }
    const allCategories = filterCategories();


    //Filtering of types
    const filterTypes = () => {
        return [...new Set(types.map((item) => item.product_type))];
    }
    const allTypes = filterTypes();

    //Searching of products
    const searchHandler = (searchTerm) => {
        setSearchTerm(searchTerm);
        if (searchTerm !== '') {
            const newProductsList = products.filter(item => {
                return (Object.values(item)).join(" ").toLowerCase().includes(searchTerm.toLowerCase())
            })
            setSearchResults(newProductsList)
        }else {
            setSearchResults(products)
        }
    }

    const filterDropdown = products.filter(function(result) {
        return (
            (result.brand === selectInput) || (result.category === selectInput) ||  (result.product_type === selectInput) || (result.price === selectInput)
        );
    });


    return (
        <Container>
            <FilterBar
                allBrands={allBrands}
                allCategories={allCategories}
                allTypes={allTypes}
                term={searchTerm}
                searchKeyword={searchHandler}
                selectInput={selectInput}
                setSelectInput={setSelectInput}

            />
            {filterDropdown && <ProductList successToast={successToast} filterDropdown={filterDropdown}
                                            products={searchTerm.length < 1 ? filterDropdown : searchResults}
            />}
            {loading && (
                <Loading/>
            )}
            {error && (
                <p>Something went wrong!</p>
            )}
        </Container>
    );
};

export default Products;