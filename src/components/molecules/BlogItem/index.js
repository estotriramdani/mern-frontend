import React from "react";
import { useHistory } from "react-router-dom";
import { RegisterBg } from "../../../assets";
import { Button, Gap } from "../../atoms";
import "./blogItem.scss";

const BlogItem = () => {
  const history = useHistory();
  return (
    <div className="blog-item">
      <img className="image-thumb" src={RegisterBg} alt="post" />
      <div className="content-detail">
        <p className="title">Title Blog</p>
        <p className="author">Author - datepost</p>
        <p className="body">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum quaerat
          aliquam magnam voluptate beatae laboriosam nesciunt libero
          necessitatibus sapiente inventore.
        </p>
        <Gap height={15} />
        <Button
          title="View Detail"
          onClick={() => history.push("/detail-blog")}
        />
      </div>
    </div>
  );
};

export default BlogItem;
