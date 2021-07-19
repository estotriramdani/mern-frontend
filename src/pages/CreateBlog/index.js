import React from "react";
import { Button, Input, Upload, TextArea, Gap, Link } from "../../components";
import "./createBlog.scss";
import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import {
  postToApi,
  setForm,
  setImagePreview,
} from "../../configs/redux/action";

const CreateBlog = () => {
  const { form, imgPreview } = useSelector((state) => state.createBlogReducer);
  const { title, body, image } = form;
  const dispatch = useDispatch();
  const history = useHistory();
  const onImageUpload = (e) => {
    const file = e.target.files[0];
    dispatch(setForm("image", file));
    dispatch(setImagePreview(URL.createObjectURL(file)));
  };
  const onSubmit = () => {
    postToApi(form);
  };
  return (
    <div className="blog-post">
      <Link title="Kembali" onClick={() => history.push("/")} />
      <p className="title">Create New Blog Post</p>
      <Input
        label="Post Title"
        value={title}
        onChange={(e) => dispatch(setForm("title", e.target.value))}
      />
      <Upload onChange={onImageUpload} img={imgPreview} />
      <TextArea
        value={body}
        onChange={(e) => dispatch(setForm("body", e.target.value))}
      />
      <Gap height={20} />
      <div className="button-action">
        <Button title="Save" onClick={onSubmit} />
      </div>
    </div>
  );
};

export default CreateBlog;
