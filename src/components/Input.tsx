import React, { ChangeEvent } from 'react';

interface InputProps {
    value: string;
    onChange: (value: string) => void;
}

const Input = ({ value, onChange }: InputProps) => {
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        onChange(event.target.value);
    };

    return <input type="text" value={value} onChange={handleChange} />;
};

export { Input };
