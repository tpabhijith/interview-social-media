import React from "react";
import styled from "styled-components";
import TextTopDesign from "../../images/text-top-design.png";

function Button({ title, upload, LikeOrComment, onClick }) {
    return (
        <Container
            upload={upload}
            LikeOrComment={LikeOrComment}
            title={title}
            onClick={onClick}
        >
            <Name title={title} upload={upload}>
                {title}
            </Name>
            <TopDesign upload={upload}>
                <TopDesignImg src={TextTopDesign} alt="test-top-design" />
            </TopDesign>
        </Container>
    );
}
const Container = styled.div`
    width: ${(props) =>
        props.upload ? "40%" : props.LikeOrComment ? "45%" : "200px"};
    display: flex;
    height: 50px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 50px;
    background-color: ${(props) =>
        props.upload ? "#C08C5D" : props.title === "Like" ? "#fff" : "#e7ad99"};
    position: relative;
    cursor: pointer;
    border: ${(props) => (props.title === "Like" ? "1px solid #C08C5D" : "")};
`;
const Name = styled.div`
    font-size: 16px;
    font-weight: ${(props) => (props.upload ? "bold" : "")};
    color: ${(props) => (props.title === "Like" ? "#C08C5D" : "#fff")};
    text-align: center;
`;
const TopDesign = styled.div`
    width: 40px;
    position: absolute;
    top: -18px;
    right: -18px;
    display: ${(props) => (props.upload ? "block" : "none")};
`;
const TopDesignImg = styled.img`
    object-fit: cover;
`;
export default Button;
