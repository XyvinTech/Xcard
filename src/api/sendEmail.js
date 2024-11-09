import axios from "axios";

export const sendEmail = async (data) => {
  try {
    const response = await axios.post("https://App.visitingcard.store/api/v1/user/send-mail", data);

    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
