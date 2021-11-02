import { useState, ChangeEvent, FormEvent, Dispatch, SetStateAction } from 'react';
import PropTypes from 'prop-types';

interface IPropsAddCategory {
    setCategories: Dispatch<SetStateAction<string[]>>
};

export const AddCategory = ({setCategories}: IPropsAddCategory) => {

    const [inputValue, setIinputValue] = useState<string>('');

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
        setIinputValue(e.target.value);
    };

    const handleSubmit = (event: FormEvent): void => {
        event.preventDefault();
        if(inputValue.trim().length > 2){
            setCategories((categories: string[]) => [ inputValue, ...categories ]);
            setIinputValue('');
        }
    };

    return (
        <form autoComplete="off" onSubmit={handleSubmit}>
            <input 
                type="text"
                value={inputValue}
                onChange={handleInputChange}
            />
        </form>
    );
};

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
};

