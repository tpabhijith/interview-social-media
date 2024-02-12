import React from "react";
import styled from "styled-components";
import SearchImg from "../../images/search.png";

function SearchBar() {
    return (
        <Container>
            <Input type="text" placeholder="Search..." />
            <IconContainer>
                <Icon src={SearchImg} alt="search" />
            </IconContainer>
        </Container>
    );
}

const Container = styled.div`
    width: 200px;
    display: flex;
    align-items: center;
    gap: 10px;
    border-radius: 50px;
    height: 50px;
    background-color: #f3f3f3;
    padding: 20px;
`;
const Input = styled.input`
    color: #000;
    font-size: 16px;
    &::placeholder {
        color: #dddddd;
        font-weight: bold;
    }
    width: 90%;
    /* flex: 1; */
`;
const IconContainer = styled.div`
    width: 20px;
`;
const Icon = styled.img`
    object-fit: cover;
`;
export default SearchBar;
