import Axios from "axios";

export const setDataBlog = (page) => (dispatch) => {
  Axios.get(`http://localhost:4000/v1/blog/posts?currentPage=${page}&perPage=2`)
    .then((result) => {
      const responseAPI = result.data;
      dispatch({ type: "UPDATE_DATA_BLOG", payload: responseAPI.data });
      dispatch({
        type: "UPDATE_PAGE",
        payload: {
          currentPage: responseAPI.currentPage,
          totalPage: Math.ceil(responseAPI.total_data / responseAPI.per_page),
        },
      });
    })
    .catch((error) => {
      console.log(`error`, error);
    });
};
