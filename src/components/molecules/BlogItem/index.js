import React from "react";
import { useHistory } from "react-router-dom";
import { Button, Gap } from "../../atoms";
import "./blogItem.scss";

const BlogItem = ({ title, body, author, image, datepost }) => {
  const history = useHistory();
  return (
    <div className="blog-item">
      <img className="image-thumb" src={image} alt="post" />
      <div className="content-detail">
        <p className="title">{title}</p>
        <p className="author">
          {author} - {datepost}
        </p>
        <p className="body">{body}</p>
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
