import Sidebar from "../../components/sidebar";


const CashRegisterPage = () => {
    return (
        <div className="flex min-h-screen bg-gray-50">
            <Sidebar />
            <main>
                <div className="max-w-2xl mx-auto p-6">
                    <h1 className="text-2xl font-bold mb-4">Cash Register</h1>

                    {/* Placeholder input component */}
                    <div className="flex gap-2 mb-4">
                        {/* Placeholder Product input*/}
                        <input
                            type="text"
                            className="border rounded px-2 py-1 w-full"
                            placeholder="Código del producto (e.g. GR1)"
                        />
                        <button className="bg-blue-600 text-white px-4 py-1 rounded">
                            Agregar
                        </button>
                    </div>

                    {/* List of added products */}
                    <ul className="mb-4 border-t border-b divide-y">
                        {/* Placeholder CartItem */}
                        <li className="py-2">Producto 1 - 3.11 €</li>
                        <li className="py-2">Producto 2 - 5.00 €</li>
                    </ul>
                    <ul className="text-sm text-gray-700 mt-2">
                        <li>Promo Té Verde: -3.11 €</li>
                    </ul>

                    {/* Total and promotions*/}
                    <div className="mt-4">
                        {/* <PlaceHolder TotalSummary */}
                        <h2 className="text-xl font-semibold">Total: 8.11 €</h2>

                    </div>

                    {/* Placeholder Button */}
                    <div className="flex gap-2">
                        <button className="border border-gray-400 text-gray-700 px-4 py-1 rounded">
                            Limpiar carrito
                        </button>
                        <button className="bg-green-600 text-white px-4 py-1 rounded">
                            Finalizar compra
                        </button>

                    </div>

                </div>
            </main>
        </div>);
}

export default CashRegisterPage;