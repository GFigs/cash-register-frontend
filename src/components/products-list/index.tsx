import Product from "./types";

interface ProductListProps {
    products: Product[];
}

const ProductList = ({ products }: ProductListProps) => {
    if (products.length === 0) {
        return <p className="text-gray-500 italic">The cart is empty</p>;
    }

    return (
        <ul className="space-y-2">
            {products.map((product, index) => (
                <li key={`${product.code}-${index}`}>
                    <span>{product.name} ({product.code})</span>
                    <span>{Number(product.price).toFixed(2)} €</span>
                </li>
            ))}
        </ul>
    );
};

export default ProductList;