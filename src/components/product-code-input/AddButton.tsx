type AddButtonProps = {
    onClick: () => void;
};


const AddButton = ({ onClick }: AddButtonProps) => {
    return (
        <button
            onClick={onClick}
            className="bg-blue-600 text-white rounded-xl px-4 py-2 hover:bg-blue-700 transition"
        >
            Add
        </button>
    );

}

export default AddButton;