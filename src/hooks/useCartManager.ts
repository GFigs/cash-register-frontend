import api from "../utils/axios";
import { useState, useEffect } from "react";

type Product = {
    id: number;
    name: string;
    code: string;
    price: number;
};

type Promotion = {
    description: string;
    discount: number;
};


const useCartManager = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [promotions, setPromotions] = useState<Promotion[]>([]);
    const [total, setTotal] = useState<number>(0);
    const [error, setError] = useState<string | null>(null);

    const handleSearchByCode = async (code: string) => {
        try {
            const response = await api.get(`/products?search=${code}`)
            const product = response.data[0];

            if (!product) {
                setError("Product not found");
                return;
            }
            console.log(product)
            const updatedProducts = [...products, product];
            setProducts(updatedProducts);
            setError(null);

        } catch (error) {
            console.error(error);
            setError("failed to get product")
        }
    }

    const computeTotal = async () => {
        try {
            const productCodes = products.map((p) => p.code)
            const response = await api.post("/checkout", {
                product_codes: productCodes
            })
            console.log(productCodes);
            setTotal(response.data.total);
            setPromotions(response.data.promotions);
        } catch (error) {
            console.error(error);
            setError("failed to compute total")
        }
    }
    useEffect(() => {
        if (products.length > 0) {
            computeTotal();
        } else {
            setTotal(0);
            setPromotions([]);
        }
    }, [products.length]);

    const clearCart = () => {
        setProducts([]);
        setTotal(0);
        setPromotions([]);
        setError(null);
    };

    return { products, promotions, total, error, handleSearchByCode, computeTotal, clearCart }
}

export default useCartManager