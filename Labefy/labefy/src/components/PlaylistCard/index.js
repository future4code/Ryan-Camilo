import React from "react";
import styled from "styled-components";

const PlaylistCardContainer = styled.div`
    margin: 20px;
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px;
    flex-direction: row;
    gap: 10px;
    background-color: cyan;
    border-radius: 30%;
    font-size: 1.5em;

&:hover{
    opacity: 0.5;
    font-size: 1.6em;
}    
`

const DeleteButton = styled.button`
    color: red;
`

const PlaylistCard = (props) => {
    return (
        <PlaylistCardContainer onClick={() => props.changePage("playlistDetail", props.playlistId)}>
            <p>{props.name}</p>          
            <DeleteButton alt="Delete playlist" onClick={() => props.deletePlaylist(props.playlistId)} >X</DeleteButton>
        </PlaylistCardContainer>
    )
}

export default PlaylistCard

//<button onClick={() => props.changePage("playlistDetail", props.playlistId)}>{props.name}</button>