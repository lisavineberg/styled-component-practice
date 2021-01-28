import styled from "styled-components";
import Link from './Link.js';
import {H4, CapitalP} from './Typography.js';

const StyledListItem = styled.li`
    margin: 0 0 28px;
    text-transform: ${props => props.textTransform ? props.textTransform : "none"}
`

class ListItem extends React.Component {
    render() {
        return (
            <StyledListItem textTransform={this.props.textTransform}>
                {this.props.value.url ? <Link href={this.props.value.url} text={this.props.value.title}></Link> : <H4>{this.props.value.title}</H4>}
                {this.props.value.subtitle ? <CapitalP>{this.props.value.subtitle}</CapitalP> : ""}
            </StyledListItem>
        )
    }
}

export default ListItem;