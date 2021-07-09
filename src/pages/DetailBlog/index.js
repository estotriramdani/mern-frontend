import React from "react";
import { useHistory } from "react-router-dom";
import { RegisterBg } from "../../assets";
import { Gap, Link } from "../../components";
import "./detailBlog.scss";

const DetailBlog = () => {
  const history = useHistory();
  return (
    <div className="detail-blog-wrapper">
      <img className="image-cover" src={RegisterBg} />
      <p className="blog-title">Title Blog</p>
      <p className="blog-author">Author - Date Post</p>
      <p className="blog-body">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis ipsum
        pariatur, sequi odit illum quod eum fugit, officiis, recusandae tenetur
        excepturi ratione laudantium quasi dolorem voluptatibus accusantium
        similique accusamus maxime. Lorem ipsum dolor, sit amet consectetur
        adipisicing elit. Facilis ipsum pariatur, sequi odit illum quod eum
        fugit, officiis, recusandae tenetur excepturi ratione laudantium quasi
        dolorem voluptatibus accusantium similique accusamus maxime.
      </p>
      <Link title="Kembali ke Beranda" onClick={() => history.push("/")} />
      <Gap height={40} />
    </div>
  );
};

export default DetailBlog;
