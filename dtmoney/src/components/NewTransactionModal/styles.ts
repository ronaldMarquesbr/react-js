import styled from "styled-components";
import { darken, lighten, transparentize } from "polished";
 
export const Container = styled.form`
    h2{
        color: var(--text-title);
        font-size: min(1.5rem, 5vw);
        font-weight: 600;
        margin-bottom: 2rem;
    }

    input{
        width: 100%;
        padding: 0 1.5rem;
        height: 4rem;
        border-radius: .25rem;

        border: 1px solid #d7d7d7;
        outline: 0;
        background: #e7e9ee;

        font-weight: 400;
        font-size: 1rem;

        transition: all .2s;

        &::placeholder{
            color: var(--text-body);
        }

        ~ input {
            margin-top: 1rem
        }

        &:focus{
            border: 1px solid var(--blue);
            box-shadow: 0 0 0 0.188rem ${ lighten(.3, "#5429CC") };
        }
    }

    button[type="submit"]{
        width: 100%;
        height: 4rem;
        padding: 0 1.5rem;
        background: var(--green);
        color: #fff;
        font-weight: 600;
        border-radius: .25rem;
        border: 0;
        font-size: 1rem;
        margin-top: 1.5rem;
        transition: filter .3s;

        &:hover{
            filter: brightness(.9)
        }
    }
`;

export const TransactionTypeContainer = styled.div`
    margin: 1rem 0;
    display: grid;
    grid-template-columns: 1fr 1fr;

    gap: .5rem;
`;

interface RadioBoxProps {
    isActive: boolean;
    activeColor: "green" | "red";
}

const colors = {
    green: "#33cc95",
    red: "#e52e4d"
}

export const RadioBox = styled.button<RadioBoxProps>`
    height: 4rem;
    width: 100%;
    border: 1px solid #d7d7d7;
    border-radius: 0.3rem;
    
    background: ${ (props) => props.isActive 
    ? transparentize(.9 ,colors[props.activeColor])
    : "transparent"};

    display: flex;
    align-items: center;
    justify-content: center;

    transition: border-color .2s;

    &:hover{
        border-color: ${ darken(.1, "#d7d7d7") }
    }

    img{
        width: 20px;
        height: 20px;
    }

    span{
        display: inline-block;
        margin-left: 1rem;
        font-size: 1rem;
        color: var(--text-title);

        @media (max-width: 320px) {
            margin-left: .2rem;
        }
    }
`