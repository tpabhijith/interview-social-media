import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Button from "./Button";
import Comments from "./Comments";
import { userDetails } from "../data/commentdatas";

function MoreAboutPost({ post }) {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        setPosts(JSON.parse(localStorage.getItem("data")));
    }, [posts]);

    function handleLike(postId) {
        console.log(post);
        const postIndex = posts.findIndex((post) => post.id === postId);

        console.log(postIndex, "postIndex");

        if (postIndex !== -1) {
            const post = posts[postIndex];

            post.isLiked = !post.isLiked;

            if (post.isLiked) {
                const newLike = {
                    id: userDetails.id,
                    name: userDetails.user_name,
                    user_img: userDetails.user_image,
                };
                post.likes.push(newLike);
            } else {
                const userId = userDetails.id;
                const likeIndex = post.likes.findIndex(
                    (like) => like.id === userId
                );
                if (likeIndex !== -1) {
                    post.likes.splice(likeIndex, 1);
                }
            }

            post.likesCount = post.likes.length;

            localStorage.setItem("data", JSON.stringify(posts));
        }
        return null;
    }
    return (
        <Container>
            <Top>
                <LikeCommentBox>
                    {post.likes?.length > 0 && (
                        <Like>
                            {post.likes?.length >= 2 &&
                                (post.isLiked ? (
                                    <LikedText>
                                        Liked by you and{" "}
                                        {post.likes?.length - 1} others
                                    </LikedText>
                                ) : (
                                    <LikedText>
                                        Liked by {post.likes[0]?.name} and{" "}
                                        {post.likes.length - 1} others
                                    </LikedText>
                                ))}
                            {post.likes?.length === 1 && (
                                <LikedText>
                                    Liked by {post.likes[0]?.name}
                                </LikedText>
                            )}
                        </Like>
                    )}
                    {post?.comments_count > 0 && (
                        <Comment>{post?.comments_count} Comments</Comment>
                    )}
                </LikeCommentBox>
                <Buttons>
                    {post.isLiked ? (
                        <Button
                            title="Liked"
                            LikeOrComment="true"
                            onClick={() => handleLike(post.id)}
                        />
                    ) : (
                        <Button
                            title="Like"
                            LikeOrComment="true"
                            onClick={() => handleLike(post.id)}
                        />
                    )}
                    <Button title="comment" LikeOrComment="true" />
                </Buttons>
            </Top>
            <Bottom>
                <Comments comments={post?.comments} />
            </Bottom>
        </Container>
    );
}
const Container = styled.div``;
const Top = styled.div`
    margin-bottom: 10px;
`;
const LikeCommentBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
`;
const Like = styled.div``;
const LikedText = styled.p`
    font-size: 14px;
    color: #afadad;
`;
const Comment = styled.p`
    font-size: 14px;
    color: #afadad;
`;
const Buttons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const Bottom = styled.div``;

export default MoreAboutPost;
