import styled from "styled-components";

const TwoCol = styled.div`
    display: flex;
    flex-direction: column;

    @media (min-width: 900px) {
        flex-direction: row;

        div {
            width: 50%;
        }
    }
`

export default TwoCol;