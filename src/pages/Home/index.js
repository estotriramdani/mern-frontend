import React, { useEffect } from "react";
import { BlogItem, Button, Gap } from "../../components";
import "./home.scss";
import { useHistory } from "react-router";
import Axios from "axios";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const Home = () => {
  const { dataBlog } = useSelector((state) => state.homeReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    Axios.get("http://localhost:4000/v1/blog/posts?currentPage=3&perPage=4")
      .then((result) => {
        const responseAPI = result.data;
        dispatch({ type: "UPDATE_DATA_BLOG", payload: responseAPI.data });
      })
      .catch((error) => {
        console.log(`error`, error);
      });
  });
  const history = useHistory();

  return (
    <div className="home-page-wrapper">
      <div className="create-wrapper">
        <Button
          title="Create Blog"
          onClick={() => history.push("/create-blog")}
        />
      </div>
      <Gap height={20} />
      <div className="content-wrapper">
        {dataBlog.map((blog) => {
          return (
            <BlogItem
              key={blog._id}
              title={blog.title}
              body={blog.body}
              author={blog.author.name}
              image={"http://localhost:4000/" + blog.image}
              datepost={blog.created_at}
            />
          );
        })}
      </div>
      <div className="pagination">
        <Button title="Previous" />
        <Gap width={20} />
        <Button title="Next" />
      </div>
      <Gap height={20} />
    </div>
  );
};

export default Home;
