import { func } from 'prop-types';
import React from 'react';
import styled from 'styled-components';


const BotaoVerMais = styled.button`
    display: flex;
    align-items: center;
    border: 1px solid black;
    border-radius: 50px;
    width: 200px;
    padding: 15px 30px;
    margin: 10px auto;
    background-color: white;
`

const ImagemMais = styled.img`
        width: 30px;
        margin-right: 10px;
`

function ReadMore() {
    var mais = document.getElementById("MaisInfo");

    if (mais.style.display === "none"){
        mais.style.display = "inline"
    } else {
        mais.style.display = "none"
    }

        // if (dots.style.display === "none") {
        //   dots.style.display = "inline";
        //   btnText.innerHTML = "Read more";
        //   moreText.style.display = "none";
        // } else {
        //   dots.style.display = "none";
        //   btnText.innerHTML = "Read less";
        //   moreText.style.display = "inline";
        // }
}



function ImagemButton(props) {
    return (
        <BotaoVerMais onClick= {ReadMore} className="image-button-container">
            <ImagemMais src={props.imagem} alt="icon" />
            <p>{props.texto}</p>
        </BotaoVerMais>


    )
}

export default ImagemButton;