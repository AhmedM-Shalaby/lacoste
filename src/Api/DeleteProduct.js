import axios from "axios";

export const DeleteProduct = (url) => {
  axios({
    url: url,
    method: "DELETE",
  })
    .then((response) => {
      console.log(response);
      console.log(`Deleted post with ID `);
    })
    .catch((error) => {
      console.error(error);
    });
};
