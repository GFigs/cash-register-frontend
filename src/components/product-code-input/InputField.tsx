type InputFieldProps = {
    value: string;
    onChange: (value: string) => void;
};

const InputField = ({ value, onChange }: InputFieldProps) => {
    return (
        <input
            type="text"
            placeholder="Product code (example: GR1)"
            className="border border-gray-300 rounded-xl px-3 py-2 flex-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={value}
            onChange={(e) => onChange(e.target.value)}
        />
    );
}

export default InputField;