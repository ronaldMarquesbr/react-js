import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    margin-top: -10rem;

    div{
        background: var(--shape);
        padding: 1.5rem 2rem;
        border-radius: .5rem;
        box-shadow: 0 .2rem .8rem .5rem rgba(0,0,0,.05);

        color: var(--text-title);

        header{
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        strong{
            display: block;
            margin-top: 1rem;
            font-size: 2rem;
            font-weight: 500;
        }

        &.highlight-background{
            background: linear-gradient(to right bottom, #33CC95, #2DB381);
            color: #FFF;
        }
    }
`;