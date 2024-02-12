import React, { useState } from "react";
import styled from "styled-components";
import Button from "../includes/Button";
import LadyAnime from "../../images/female-anime.png";
import MediaIcon from "../../images/media-symbol.png";
import { data, userDetails } from "../data/commentdatas";

function UploadImage({ setData }) {
    const [isModal, setModal] = useState(false);
    const [postImage, setPostImage] = useState("");
    const [description, setDescription] = useState("");

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPostImage(reader.result);
            };

            reader.readAsDataURL(file);
        }
    };

    const addNewObject = (e, newObject) => {
        e.preventDefault();
        // Assuming each object has a unique ID, you can generate a new ID for the new object
        const newObjectId = data.length + 1;

        // Add the new object to the data array
        const updatedData = [
            ...data,
            {
                id: newObjectId,
                ...newObject,
            },
        ];

        // Optionally, you can set the updated data to the original variable if needed
        // data = updatedData;

        localStorage.setItem("data", JSON.stringify(updatedData));
        setData(updatedData);
        setModal(!isModal);
    };

    return (
        <>
            <Container className="wrapper">
                <Button
                    title="Upload Image"
                    upload={true}
                    onClick={() => setModal(!isModal)}
                />
                <Anime>
                    <AnimeImg src={LadyAnime} alt="lady-anime" />
                </Anime>
                <Media>
                    <MediaImg src={MediaIcon} alt="media" />
                </Media>
            </Container>
            <FormContainer>
                {isModal && (
                    <UploadForm
                        onSubmit={(e) =>
                            addNewObject(e, {
                                user_name: userDetails.user_name,
                                user_img: userDetails.user_image,
                                post_description: description,
                                post_image: postImage,
                                posted_time: "1 minute ago",
                                comments_count: 0,
                                likes: [],
                                comments: [],
                            })
                        }
                    >
                        <label>Choose your Photo</label>
                        <input type="file" onChange={handleFileChange} />
                        <label>Write a comment</label>
                        <textarea
                            placeholder="description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                        <button type="submit">submit</button>
                    </UploadForm>
                )}
            </FormContainer>
        </>
    );
}

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-radius: 12px;
    padding: 80px;
    border-radius: 10px;
    -webkit-box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.2);
    -moz-box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.2);
    box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.2);
    position: relative;
    height: 350px;
    margin-bottom: 20px;
`;
const Anime = styled.div`
    width: 30%;
    height: 100%;
    position: absolute;
    right: 50px;
    bottom: 0;
`;
const AnimeImg = styled.img`
    object-fit: contain;
    height: 100%;
`;
const Media = styled.div`
    width: 100px;
    position: absolute;
    left: 25px;
    bottom: 25px;
`;
const MediaImg = styled.img`
    object-fit: contain;
    height: 100%;
`;
const FormContainer = styled.div`
    background: #fff;
    width: 85%;
    margin: 0 auto;
`;
const UploadForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    background: #fff;
    border-radius: 12px;
    padding: 80px;
    border-radius: 10px;
    -webkit-box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.2);
    -moz-box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.2);
    box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.2);
    margin-bottom: 20px;
`;
export default UploadImage;
