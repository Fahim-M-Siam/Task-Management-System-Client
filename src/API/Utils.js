import axios from "axios";

export const imageUpload = async (imageFile) => {
  const formData = new FormData();
  formData.append("image", imageFile);
  const { data } = await axios.post(
    "https://api.imgbb.com/1/upload?key=1ec94427bf484a04200ef7340198dea2",
    formData
  );
  return data;
};
