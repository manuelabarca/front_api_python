import React from "react";
import { useParams } from "react-router-dom";

const Post = () => {
	let { id } = useParams();
	return <h1>Post: {id}</h1>;
};

export default Post;
