import React from "react";
import styled from "styled-components";
import SearchBar from "../includes/SearchBar";
import UserButton from "../includes/UserButton";
import Button from "../includes/Button";
import LogoImg from "../../images/logo.png";

function Header() {
    return (
        <Container>
            <div className="wrapper">
                <LeftContainer>
                    <LogoContainer>
                        <Logo src={LogoImg} alt="logo" />
                    </LogoContainer>
                </LeftContainer>

                <RightContainer>
                    <SearchBar />
                    <UserButton />
                    <Button title="Logout" />
                </RightContainer>
            </div>
        </Container>
    );
}
const Container = styled.div`
    width: 100%;
    padding: 20px 0;
    & .wrapper {
        display: grid;
        grid-template-columns: 1fr 1fr;
    }
`;
const LeftContainer = styled.div``;
const LogoContainer = styled.div`
    width: 60px;
`;
const Logo = styled.img``;
const RightContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
export default Header;
