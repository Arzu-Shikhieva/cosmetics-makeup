import React from 'react';
import ProductCard from "../productCard/ProductCard";

const ProductList = ({filterDropdown, products}) => {

    return (
        <>
            {filterDropdown && (
                <div className="row">
                    {products.map((product) =>
                        <ProductCard
                            key={product.id}

                            id={product.id}
                            name={product.name}
                            price={product.price}
                            product_type={product.product_type}
                            category={product.category}
                            brand={product.brand}
                            image={product.api_featured_image}
                            tags={product.tag_list}
                        />
                    )}
                </div>
            )}
        </>
    );
};

export default ProductList;