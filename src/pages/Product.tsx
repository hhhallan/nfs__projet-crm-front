import React, { useContext, useEffect, useState } from 'react';
import {ProductCard} from "../comopnents";
import { AuthContext } from '../auth/AuthContext';
import { ServiceContext } from '../services/context/ServiceContext';
import Product from '../models/Product';
import { AxiosError } from 'axios';
import { useNavigate } from 'react-router-dom';

const ProductPage = () => {
    const navigate = useNavigate();
    const {user, updateToken} = useContext(AuthContext);
    const { productService } = useContext(ServiceContext);

    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        productService.getAll().then(data => {
            setProducts(data);
        }).catch((err:AxiosError) => {
            if(err.status === 401) {
                updateToken(null);
                navigate('/login')
            }else{
                console.error(err);
            }
        })
    }, []);

    

    return (
        <div className="page page-product">
            <div>
                <h5>Liste des produits</h5>
                <section className="section">
                    {products.map((prod, index) => (
                        <ProductCard key={index} product={prod} />
                    ))}
                </section>
            </div>

        </div>
    );
};

export default ProductPage;