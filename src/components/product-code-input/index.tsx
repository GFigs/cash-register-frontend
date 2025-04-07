import { useState } from "react";
import InputField from "./InputField";
import AddButton from "./AddButton";
import ProductCodeInputProps from "./types";

export default function ProductCodeInput({ onAdd }: ProductCodeInputProps) {
    const [code, setCode] = useState("");

    const handleAdd = () => {
        if (code) {
            onAdd(code.trim().toUpperCase());
            setCode("");
        }
    };

    return (
        <div className="flex items-center gap-2 mb-6 select-none w-full max-w-md">
            <InputField value={code} onChange={setCode} />
            <AddButton onClick={handleAdd} />
        </div>
    );
}