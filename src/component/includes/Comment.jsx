import React from "react";
import styled from "styled-components";
import ViewMoreIcon from "../../images/view-more.png";

function Comment({ item }) {
    return (
        <>
            <Container>
                <UserDetails>
                    <Top>
                        <Left>
                            {" "}
                            <User>
                                <UserImg src={item.user_img} />
                            </User>
                            <Name>{item.user_name}</Name>
                            <Date>1{item.time}</Date>
                        </Left>

                        <ViewMore>
                            <ViewMoreImg src={ViewMoreIcon} />
                        </ViewMore>
                    </Top>
                    <Bottom>
                        {" "}
                        <CommentText>{item.comment}</CommentText>
                    </Bottom>
                </UserDetails>
            </Container>
            {item.replyDetails && item.replyDetails.length > 0 && (
                <Replies>
                    {item.replyDetails.map((reply) => (
                        <Comment key={reply.id} item={reply} />
                    ))}
                </Replies>
            )}
        </>
    );
}
const Container = styled.div`
    margin-bottom: 10px;
`;
const UserDetails = styled.div``;

const Top = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const Left = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`;
const User = styled.div`
    width: 50px;
`;
const UserImg = styled.img`
    object-fit: cover;
`;
const Name = styled.h5`
    font-size: 14px;
`;
const Date = styled.p`
    font-size: 14px;
    color: grey;
`;
const Bottom = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    padding-left: 70px;
    background-color: #ecc8ae;
    padding: 20px;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
    margin-left: 60px;
    width: 95%;
`;
const CommentText = styled.p`
    font-size: 14px;
`;
const ViewMore = styled.div`
    width: 10px;
`;
const ViewMoreImg = styled.img`
    object-fit: cover;
`;
const Replies = styled.div`
    margin-left: 60px;
`;
export default Comment;
