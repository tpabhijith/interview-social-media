import React, { useEffect, useState } from "react";
import styled from "styled-components";
import MediaPost from "./MediaPost";
import UploadImage from "./UploadImage";
// import { data } from "../data/commentdatas";

function Posts() {
    const [data, setData] = useState([]);

    useEffect(() => {
        setData(JSON.parse(localStorage.getItem("data")));
    }, [data]);

    return (
        <>
            <UploadImage setData={setData} />
            <Container>
                {data?.map((item) => (
                    <MediaPost post={item} />
                ))}
            </Container>
        </>
    );
}
const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;
export default Posts;
