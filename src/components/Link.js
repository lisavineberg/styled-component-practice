import styled from "styled-components";

const StyledLink = styled.a`
    color: #009fdf;
    font-weight: bold;
    margin: 0 0 28px;
    text-decoration: none;

    &:hover {
        color: #006f9c;
    }
`

class Link extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <StyledLink href={this.props.href}>
                {this.props.text}
            </StyledLink>
        )
    }
}

export default Link;