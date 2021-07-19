import axios from "axios";

export const setForm = (formType, formValue) => {
  return { type: "SET_FORM_DATA", formType, formValue };
};

export const setImagePreview = (payload) => {
  return { type: "SET_IMAGE_PREVIEW", payload };
};

export const postToApi = (form) => {
  const data = new FormData();
  data.append("title", form.title);
  data.append("body", form.body);
  data.append("image", form.image);
  axios
    .post("http://localhost:4000/v1/blog/post", data, {
      headers: {
        "content-type": "multipart/form-data",
      },
    })
    .then((res) => null)
    .catch((err) => console.log(`error`, err));
};
