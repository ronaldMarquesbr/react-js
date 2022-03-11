import styled from "styled-components";

export const Container = styled.div`
    margin-top: 4rem;

    table{
        width: 100%;
        border-spacing: 0 0.5rem;
        border-collapse: separate; 

        th{
            color: var(--text-body);
            font-weight: 400;
            padding: 1rem 2rem;
            text-align: center;
            line-height: 1.5rem;

            &:first-child{
                text-align: left;
                width: fit-content;
            }

            @media screen and (max-width: 800px) {
                display: none;
            }
        }
        
        tbody{
            tr{
                background: var(--shape);
                position: relative;
            }
        }
        

        td{
            padding: 1rem 2rem;
            border: 0;

            color: var(--text-body);
            text-align: center;
            font-size: min(1rem, 4.1vw);

            &:first-child { border-top-left-radius: .3rem; }
            &:last-child { border-top-right-radius: .3rem; }
            &:first-child { border-bottom-left-radius: .3rem; }
            &:last-child { border-bottom-right-radius: .3rem; }

            &:first-child{
                color: var(--text-title);
                text-align: left;
            }

            &.deposite{
                color: var(--green);
            }

            &.withdraw{
                color: var(--red);
            }

            @media screen and (max-width: 1120px) {
                padding: 1rem .5rem;
            }

            @media screen and (max-width: 576px) {
                padding: 1rem 0.2rem;
                &:nth-child(3n){
                    word-break: break-all;
                }
            }
        }
    }
`