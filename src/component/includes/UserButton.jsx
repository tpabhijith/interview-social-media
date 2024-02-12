import React from "react";
import styled from "styled-components";
import { userDetails } from "../data/commentdatas";

function UserButton() {
    return (
        <Container>
            <ProfileContainer>
                <Profile src={userDetails.user_image} alt="profile" />
            </ProfileContainer>
            <Name>{userDetails.user_name}</Name>
        </Container>
    );
}

const Container = styled.div`
    width: 200px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    border-radius: 50px;
    background-color: #e7ad99;
    height: 50px;
`;
const ProfileContainer = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    overflow: hidden;
`;
const Profile = styled.img`
    object-fit: cover;
`;
const Name = styled.div`
    font-size: 16px;
    font-weight: bold;
    color: #fff;
    flex: 1;
    text-align: center;
`;
export default UserButton;
