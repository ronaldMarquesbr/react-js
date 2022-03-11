import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: auto auto auto;
    width: 100%;

    @media (max-width: 768px) {
        overflow-x: scroll;
        width: 100vw;
        transform: translateX(-1rem);
        scroll-snap-type: x mandatory;
    }
    

    margin-top: -10rem;

    &::-webkit-scrollbar{
        display: none;
    }

    div.card-container{
        background: var(--shape);
        padding: 1.5rem 2rem;
        margin: 10px;
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

            @media (max-width: 992px) {
                font-size: 1.8rem;
            }
        }

        &.highlight-background{
            background: linear-gradient(to right bottom, #33CC95, #2DB381);
            color: #FFF;
        }

        @media (max-width: 768px) {
            width: 280px;
            box-shadow: none;
        }

        @media (max-width: 576px) {
            width: 280px !important;
            padding: 1rem 2rem;

            strong{
                font-size: 1.6rem;
            }
        }
    }
`;