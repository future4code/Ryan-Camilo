import React from 'react';
import styled from 'styled-components';

const BackArrow = styled.div`

img{
    width: 100px;
}
`

export default class RightArrow extends React.Component {



    render() {
        return (
            <BackArrow onClick={this.props.goToNextSlide}>
                <i className='fa fa-angle-left fa-3x' aria-hidden='true'></i>
                <img src='https://www.svgrepo.com/show/181003/next-arrows.svg'/>
            </BackArrow>
        )
}
}
