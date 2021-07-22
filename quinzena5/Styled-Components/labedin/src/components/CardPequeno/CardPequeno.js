import React from 'react';
import styled from 'styled-components'

const BoxCard = styled.div`
    background: white;
    border: solid 1px black;
    padding: 20px 10px;
    margin-bottom: 10px;

    .smallcard-container{
    display: flex;
    align-items: center;
    } 



    img{
        width: 70px;
        margin-right: 10px;
        border-radius: 50px;
    }
    `


function CardPequeno(props) {
    return (
        <BoxCard>
            <div className="smallcard-container">
                <img src={props.imagem} alt="icone" />
                <div>
                    <h4>{props.info}</h4>
                    <p>{props.descinfo}</p>
                </div>
            </div>
        </BoxCard>
    )
}

export default CardPequeno;