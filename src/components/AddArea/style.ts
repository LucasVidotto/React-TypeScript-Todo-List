import Styled from 'styled-components'

export const Container = Styled.div`
    border: 1px solid #555;
    border-radius: 1rem;
    padding:10px;
    margin: 1.25rem 0;
    display:flex;
    align-items: center;

    .image{
        margin-rigth: 5px;
    }

    input{
        border: 0px;
        background:transparent;
        outline: 0;
        color:#fff;
        font-size: 1.15rem;
        flex:1;
        margin-left:0.5rem;
    }
`;