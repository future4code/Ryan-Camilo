import React from 'react';
import styled from 'styled-components'

const BigCard = styled.div`
    .bigcard-container{
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 200px;
    background-color:white}

    img{
    width: 70px;
    margin-right: 10px;
    border-radius: 50%;
    }

    h4{
        margin-bottom: 15px;
    }

    .bigcard-container div{
    display: flex;
    flex-direction: column;
    justify-items: flex-start;
    }
`

function CardGrande(props) {
    return (
        <BigCard>
            <div className="bigcard-container">
                <img src={props.imagem} alt="icon" />
                <div>
                    <h4>{props.nome}</h4>
                    <p>{props.descricao}</p>
                </div>
            </div>
        </BigCard>
    )
}

export default CardGrande;