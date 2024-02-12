import React from "react";
import styled from "styled-components";
import Comment from "./Comment";
import { commentDetails } from "../data/commentdatas";
function Comments({ comments }) {
    return (
        <Container>
            {comments.map((item) => (
                <Comment item={item} />
            ))}
        </Container>
    );
}
const Container = styled.div`
    padding: 20px 40px;
`;
export default Comments;
