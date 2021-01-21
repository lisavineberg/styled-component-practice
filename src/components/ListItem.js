import React, { Component } from 'react';
import styled from "styled-components";
import Link from './Link.js';
import {H4, CapitalP} from './Typography.js';

const StyledListItem = styled.li`
    margin: 0 0 28px;
`

class ListItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <StyledListItem>
                {this.props.value.url ? <Link href={this.props.value.url} text={this.props.value.title}></Link> : <H4>{this.props.value.title}</H4>}
                {this.props.value.subtitle ? <CapitalP>{this.props.value.subtitle}</CapitalP> : ""}
            </StyledListItem>
        )
    }
}

export default ListItem;