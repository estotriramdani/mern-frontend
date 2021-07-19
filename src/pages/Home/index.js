import React, { useEffect, useState } from "react";
import { BlogItem, Button, Gap } from "../../components";
import "./home.scss";
import { useHistory } from "react-router";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setDataBlog } from "../../configs/redux/action";

const Home = () => {
  const [counter, setCounter] = useState(1);
  const [title, setTitle] = useState("My Blog");
  const { dataBlog, page } = useSelector((state) => state.homeReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setDataBlog(counter));
  }, [title, counter, dispatch]);

  const history = useHistory();

  const previous = () => {
    setCounter(counter <= 1 ? 1 : counter - 1);
    setTitle(page.currentPage);
    document.getElementsByTagName(
      "title"
    )[0].innerHTML = `Page ${page.currentPage}`;
  };

  const next = () => {
    document.getElementsByTagName(
      "title"
    )[0].innerHTML = `Page ${page.currentPage}`;
    setCounter(counter === page.totalPage ? page.totalPage : counter + 1);
  };

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
              _id={blog._id}
            />
          );
        })}
      </div>
      <div className="pagination">
        <Button title="Previous" onClick={previous} />
        <Gap width={20} />
        <p className="text-page">
          {page.currentPage} / {page.totalPage}
        </p>
        <Gap width={20} />
        <Button title="Next" onClick={next} />
      </div>
      <Gap height={20} />
    </div>
  );
};

export default Home;
