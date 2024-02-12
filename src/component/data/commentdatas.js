import Img1 from "../../images/img1.png";
import Img2 from "../../images/img2.png";
import Img3 from "../../images/img3.png";
import UserImg from "../../images/profile.png";
import Post from "../../images/blog.png";
import Post2 from "../../images/Post2.png";

export const userDetails = {
    id: 125,
    user_name: 'Asha Sunny',
    user_image: UserImg
}

export const data = [
    {
        id: 1,
        user_name: "Anitta KC",
        user_img: UserImg,
        post_description: "Lorem ipsum is simply dummy text of the printing and type testing industry.",
        post_image: Post,
        posted_time: '2 days ago',
        comments_count: 3,
        isLiked: true,
        likes: [{ id: 123, name: 'srutheesh', user_img: Img1 }, { id: 124, name: 'Asha sunny', user_img: Img2 }, { id: 125, name: 'Asha sunny', user_img: Img2 }],
        comments: [{
            id: 1,
            user_name: "pratheesh c",
            user_img: Img1,
            comment: "Nice image.. keep going",
            time: "1 week ago",
            replyDetails: [
                {
                    id: 10,
                    user_name: "Alice",
                    user_img: Img3,
                    comment: "Thankyou",
                    time: "1 week ago",
                },
            ],
        },
        {
            id: 2,
            user_name: "Varghese",
            user_img: Img2,
            comment: "Good work.",
            time: "1 week ago",
        },]
    },
    {
        id: 2,
        user_name: 'Paul KP',
        user_img: Img3,
        post_description: "Lorem ipsum is simply dummy text of the printing and type testing industry.",
        post_image: Post2,
        posted_time: '3 days ago',
        comments_count: 0,
        isLiked: false,
        likes: [{ id: 123, name: 'srutheesh', user_img: Img1 }],
        comments: []
    }
]
