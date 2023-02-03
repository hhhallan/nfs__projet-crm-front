import React from 'react';
import {productCards} from "../services/constants/products";
import {ProductCard} from "../comopnents";

const Product = () => {
    return (
        <div className="page page-product">
            <div>
                <h5>Liste des produits</h5>
                <section className="section">
                    {productCards.map((card, index) => (
                        <ProductCard key={index} cardData={card} />
                    ))}
                </section>
            </div>

        </div>
    );
};

export default Product;