import React from "react";
import styled from "styled-components";
import axios from "axios"
import { baseUrl, axiosConfig } from "../../constants";

import PlaylistCard from "../PlaylistCard";
import LeftArrow from "../Carrosel"
import RightArrow from "../Carrosel/RightArrow";
import Slide from "../Carrosel/Slide";

const PlaylistsContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`

class Playlists extends React.Component {
    state = {
        playlists: [],
        activeIndex: 1,
        length: 5
    }

    componentDidMount = () => {
        this.fetchPlaylists()
    }

    fetchPlaylists = () => {
        axios.get(baseUrl, axiosConfig).then(response => {
            this.setState({ playlists: response.data.result.list })
        }).catch(err => {
            console.log(err)
        })
    };

    deletePlaylist = (playlistId) => {
        axios.delete(`${baseUrl}/${playlistId}`, axiosConfig).then(response => {
            this.fetchPlaylists()
        }).catch(err => {
            console.log(err)
        });
    };

    goToPrevSlide() {
        let index = this.state.activeIndex;
        let length = this.state.length;

        if (index < 1) {
            index = length - 1;
        }
        else {
            index--;
        } this.setState({
            activeIndex: index
        });
    }

    goToNextSlide() {
        let index = this.state.activeIndex;
        let length = this.state.length; 
        if (index === length - 1) {
            index = 0
        }
        else {
            index++;
        } this.setState({
            activeIndex: index
        });
    }



    render() {
        const playlists = this.state.playlists.map((playlist,index) => {
            return <PlaylistCard
                key={playlist.id}
                changePage={this.props.changePage}
                name={playlist.name}
                playlistId={playlist.id}
                deletePlaylist={this.deletePlaylist}
            />
        })

        return (
            <PlaylistsContainer>
                <LeftArrow  goToPrevSlide={() => this.goToPrevSlide()}/>
                {playlists}
                <RightArrow goToNextSlide={() => this.goToNextSlide()}/>
            </PlaylistsContainer>
        )
    };
};

export default Playlists