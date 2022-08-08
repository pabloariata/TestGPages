import { useState } from "react"

export const AddCategory = ({onNewCategory}: any) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = (event: any) => {
        setInputValue(event.target.value);
    }

    const onSubmit = (event: any) => {
        event.preventDefault();
        // console.log(inputValue);
        if(inputValue.trim().length<1) return;
        onNewCategory(inputValue);
        setInputValue('');

    }

   


    return (
        <>
        <form onSubmit={(event) => onSubmit(event)}  action="">
            <input
                type="text"
                placeholder="Buscar"
                value={inputValue}
                onChange={ (event) =>  onInputChange(event)}
                >
            </input>
        </form>
        </>
    )    

}