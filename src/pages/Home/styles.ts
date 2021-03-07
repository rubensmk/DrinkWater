import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
    height:100vh;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;

    img{
        width:6rem;
        height:6rem;
    }
`;

export const Info = styled.div`
    display:flex;
    margin: 1rem 0 0 1rem;

    .tooltip{
        position:relative;
        display:inline-block;
        text-align:center;
        background: #dddddd;
        border-radius:50%;
        height: 2rem;
        width: 2rem;
        font-weight: bold;
        font-size: 1.5rem;
        color:#435560;
        transition: transform 0.2s;

        :hover{
        transform:translate(3px);
        }
    }

    .tooltip .tooltiptext{
        visibility:hidden;
        display:flex;
        width: 20rem;
        height: 8rem;
        background-color: #f9f3f3;
        text-align: center;
        border-radius: 6px;
        font-size:1rem;
        padding: 0.5rem;

        position:absolute;
    }
    .tooltip:hover .tooltiptext {
        visibility: visible;
}
`;

export const Button = styled.div`
    display:flex;

    button{
        border: 0;
        border-radius: 1.5rem;
        width: 6rem;
        height: 6rem;
        font-size: 3.5rem;
        font-weight: 300;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
    }

    div{
        width:9rem;
        height:6rem;
        font-size: 4rem;
        text-align:center;
        background: rgba(110, 124, 124, 0.3);
        border-radius: 1rem;
        margin: 0 2rem 0 2rem;
    }
    button:first-child{
        background-color: #c15050;
        transition: transform 0.2s;

        :hover{
            transform: translate(5px);
            background-color: ${shade(0.2, '#c15050')} 
        }
    }

    button:last-child{
        background-color:#9ecca4;
        transition: transform 0.2s;

        :hover{
            transform: translate(5px);
            background-color: ${shade(0.2, '#9ecca4')} 
        }
    }
`;

export const Card = styled.div`
    display:flex;

`;

export const CardImg = styled.div`
    display:flex;
    flex-direction:column;
    margin-bottom: 1.5rem;

    img{
        margin-top:1rem;
        transition: transform 0.2s;

        :hover{
            transform: translateY(10px);
        }
    }
    strong{
        text-align:center;
        font-size: 1.5rem;
        font-weight:400;
    }
`;