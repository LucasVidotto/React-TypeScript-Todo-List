import Styled from 'styled-components';
type ContainerProps={
    done: boolean,
}
export const Container = Styled.div(({done}:ContainerProps)=>(
    `
        display:flex;
        background-color: #20212C;
        padding: 10px;
        border-radius: 10px; 
        margin-top:0.5rem;
        margin-bottom:1rem;
        align-items:center;
        box-shadow: 0 5px 5px rgba(255,255,255,0.4);
        &:hover{
            background-color: #363741;
        }
        input{
            width: 1.5rem;
            heigth: 1.5rem;
            margin-rigth:5px;
        }
        label{
            color: #CCC;
            text-decoration: ${done ? 'line-through' : 'initial'};
        }
    `
));
