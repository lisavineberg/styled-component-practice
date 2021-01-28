import styled from "styled-components";

const StyledH2 = styled.h2`
    font-size: 2.25rem;
    font-weight: 400;
    line-height: 1.125;
    margin: 0 0 1.25rem;
    text-align: ${props => props.textAlign === "center" ? "center" : "left"};
`

class H2 extends React.Component {
    render() {
        return (
            <StyledH2 textAlign={this.props.textAlign}>{this.props.text}</StyledH2>
        )
    }
}

export default H2;

export const H3 = styled.h3`
    font-size: 1.5rem;
    font-weight: 400;
    line-height: 1.125;
    margin: 0 0 1.25rem;
`;

export const H4 = styled.h4`
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.125;
    margin: 0 0 .325rem;
    text-transform: uppercase;
`;

export const P = styled.p`
    font-size: 17px;
    line-height: 23px;
    margin: 0;
`;

export const CapitalP = styled(P)`
    color: #9b9b9b;
    font-size: 0.75rem;
    font-weight: bold;
    text-transform: uppercase;
`