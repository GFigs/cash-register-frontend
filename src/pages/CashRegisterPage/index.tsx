import Sidebar from "../../components/sidebar";
import useCartManager from "../../hooks/useCartManager";
import ProductList from "../../components/products-list";
import ProductCodeInput from "../../components/product-code-input";
import PromotionList from "../../components/promotions-list";
import DisplayTotal from "../../components/display-total";
import CartActions from "../../components/cart-actions";


const CashRegisterPage = () => {
    const { products, promotions, total, error, handleSearchByCode, clearCart } = useCartManager();
    return (

        <div className="flex min-h-screen bg-gray-50">
            <Sidebar />
            <main className="flex flex-col justify-between flex-1 p-6">
                <div>
                    <ProductCodeInput onAdd={handleSearchByCode} />

                    {error && (
                        <div className="text-red-600 font-medium mb-4">
                            {error}
                        </div>
                    )}

                    <ProductList products={products} />
                    <PromotionList promotions={promotions} />
                </div>
                <div className="mt-6 border-t pt-4 flex flex-col items-end gap-4">
                    <DisplayTotal total={total} />
                    <CartActions onCheckout={clearCart} onClear={clearCart} />
                </div>
            </main>
        </div>
    );
}

export default CashRegisterPage;