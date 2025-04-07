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
                <li
                    key={`${product.code}- ${index}`}
                    className="flex justify-between items-center"
                >
                    <span>{product.code} - {product.name}</span>
                    <span className="font-medium">{Number(product.price).toFixed(2)} €</span>
                </li>
            ))
            }
        </ul >
    );
};

export default ProductList;