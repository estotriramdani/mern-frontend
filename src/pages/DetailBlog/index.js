import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory, withRouter } from "react-router-dom";
import { Gap, Link } from "../../components";
import "./detailBlog.scss";

const DetailBlog = (props) => {
  const [data, setData] = useState({});
  const [isPostExist, setIsPostExist] = useState(true);
  const history = useHistory();
  useEffect(() => {
    const id = props.match.params.id;

    axios
      .get(`http://localhost:4000/v1/blog/post/${id}`)
      .then((res) => {
        setIsPostExist(true);
        setData(res.data.data);
      })
      .catch((err) => {
        setIsPostExist(false);
      });
  }, [isPostExist, props]);

  if (isPostExist) {
    if (data.title) {
      return (
        <div className="detail-blog-wrapper">
          <img
            className="image-cover"
            src={`http://localhost:4000/${data.image}`}
            alt=""
          />
          <p className="blog-title">{data.title}</p>
          <p className="blog-author">
            {data.author.name} - {data.createdAt}
          </p>
          <p className="blog-body">{data.body}</p>
          <Link title="Kembali ke Beranda" onClick={() => history.push("/")} />
          <Gap height={40} />
        </div>
      );
    }
    return <p>Loading data...</p>;
  } else {
    return <p>Post tidak ditemukan</p>;
  }
};

export default withRouter(DetailBlog);
