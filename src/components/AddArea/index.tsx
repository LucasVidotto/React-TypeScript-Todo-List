import *as C from './style'
import { IoIosAddCircleOutline } from "react-icons/io";
import { useState, KeyboardEvent } from 'react';

type Props ={
    onEnter: (taskName: string)=> void
}
export const AddArea = ({onEnter}:Props) => {
    const [inputText, setInputText] = useState('');
    const handlerKeyUp = (e : KeyboardEvent) =>{
        if(e.code === 'Enter' || e.code === 'NumpadEnter' && inputText !== ''){
            onEnter(inputText);
            setInputText('')
        }
    }
    return(
        <C.Container>
            <div className="image">
               <IoIosAddCircleOutline size="20px"/>
            </div>
            <input 
            type="text" 
            placeholder='Adiciona uma Tarefa'
            value={inputText}
            onChange={e =>setInputText(e.target.value)}
            onKeyUp={handlerKeyUp}/>
        </C.Container>
    )
}