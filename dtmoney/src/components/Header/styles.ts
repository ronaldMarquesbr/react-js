import styled from "styled-components";

export const Container = styled.header`
    background: var(--blue)
`;

export const Content = styled.div`
    max-width: 1120px;
    margin: 0 auto;

    padding: 2rem 1rem 12rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 360px) { 
        img{
            height: 2.3rem;
        }
    }

    button{
        font-size: 1rem;
        color: #FFF;
        background: var(--blue-light);
        border: 0;
        padding: 0 2rem;
        border-radius: 0.25rem;
        height: 3rem;

        transition: filter .2s;

        @media (max-width: 768px) { 
            padding: 0 1rem;
        }

        @media (max-width: 360px) { 
            padding: 0 .5rem;
            font-size: .8rem;
        }
        
        &:hover{
            filter: brightness(.9)
        }
    }
`