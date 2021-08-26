import React from "react";
import styled from "styled-components";

export default class Slide extends React.Component {
    constructor(props) {
        super(props);
        this.state = { landing: this.props.playlist };
    }

    render() {
        return (
            <section>
                {this.state.landing.map((s, index) =>
                    <div className={
                        index === this.props.activeIndex ? 'active' : 'slide'}
                        key={index}>
                        <h1>{s.name}</h1>
                        <p>{s.description}</p>
                    </div>
                )}
            </section>
        )
    }
}

