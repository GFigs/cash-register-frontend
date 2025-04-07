interface CartActionsProps {
    onCheckout: () => void;
    onClear: () => void;
}

const CartActions = ({ onCheckout, onClear }: CartActionsProps) => {
    return (
        <div className="mt-6 flex justify-end gap-6">
            <button
                onClick={onClear}
                className="px-5 py-2 bg-gray-200 hover:bg-gray-300 rounded"
            >
                Empty cart
            </button>
            <button
                onClick={onCheckout}
                className="px-5 py-2 bg-blue-600 text-white hover:bg-blue-700 rounded"
            >
                Process order
            </button>
        </div>
    );
};

export default CartActions;