const DisplayTotal = ({ total }: { total: number }) => {
    return (
        <div className="mt-6 border-t pt-4 text-right">
            <span className="text-xl font-bold">Total: {Number(total).toFixed(2)} €</span>
        </div>
    );
};

export default DisplayTotal;