import axios from "axios";

export const UploadData = (url, dataUpload) => {
  axios({
    method: "post",
    url: url,
    data: dataUpload,
  });
};
