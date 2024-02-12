import React from "react";
import styled from "styled-components";
import UserImg from "../../images/profile.png";
import Post from "../../images/blog.png";
import AddIcon from "../../images/add.png";
import MoreAboutPost from "../includes/MoreAboutPost";
function MediaPost({ post }) {
    return (
        <Container className="wrapper">
            <UserDetails>
                <UserProfile>
                    <ProfileLeft>
                        <ProfileImg src={post.user_img} />
                    </ProfileLeft>
                    <ProfileRight>
                        <Name>{post.user_name}</Name>
                        <Date>{post.posted_time}</Date>
                    </ProfileRight>
                </UserProfile>
                <ReportBtn>Report</ReportBtn>
            </UserDetails>
            <PostDetails>
                <Top>
                    <Title>{post.post_description}</Title>
                    <Add>
                        <AddImg src={AddIcon} />
                    </Add>
                </Top>
                <Middle>
                    <PostImg src={post.post_image} />
                </Middle>
            </PostDetails>
            <MoreAboutPost post={post} />
        </Container>
    );
}
const Container = styled.div`
    border-radius: 12px;
    padding: 25px;
    border-radius: 10px;
    -webkit-box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.2);
    -moz-box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.2);
    box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.2);
    position: relative;
`;
const UserDetails = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 20px;
`;
const UserProfile = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
`;
const ProfileLeft = styled.div``;
const ProfileImg = styled.img`
    object-fit: cover;
`;
const ProfileRight = styled.div``;
const Name = styled.h4`
    font-size: 17px;
    font-weight: bold;
    /* margin-bottom: 5px; */
`;
const Date = styled.div`
    font-size: 12px;
    color: #afadad;
`;
const ReportBtn = styled.button`
    border: 1px solid #cf796c;
    border-radius: 5px;
    padding: 8px 12px;
    color: #cf796c;
    font-size: 12px;
    text-align: center;
`;
const PostDetails = styled.div`
    margin-bottom: 15px;
`;
const Top = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 5px;
`;
const Title = styled.p`
    font-size: 16px;
    color: grey;
`;
const Add = styled.div`
    width: 35px;
`;
const AddImg = styled.img`
    object-fit: cover;
`;
const Middle = styled.div`
    border-radius: 3px;
    overflow: hidden;
`;
const PostImg = styled.img`
    object-fit: cover;
`;
export default MediaPost;
