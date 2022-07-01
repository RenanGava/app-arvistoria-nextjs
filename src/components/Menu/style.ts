import styled from "styled-components";

export const MenuContainer = styled.div`
position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20rem;
    margin-right: 3rem;
    ul{
        width: 100%;
        list-style: none;
        display: flex;
        justify-content: space-between;
        font-weight: 600;

        li{
            padding: 0.5rem;
            border-radius: 400px;
            color: var(--gray-900);
        }

        li:hover{
            cursor: pointer;
            background-color: var(--blue-300);
            color: var(--gray-100);
        }
    }
    div{
        display: none;
    }

    @media screen and (max-width: 720px) {
        ul{
            display: none;
        }

        div{
            font-size: 2rem;
            position: relative;
            right: -8rem;
            display: block;

            &:hover{
                color: var(--gray-100);
                cursor: pointer;
            }
        }
    }
    
`