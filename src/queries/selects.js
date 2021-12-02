import Axios from "axios";

const fetchData = async (api_call) => {
  const port = process.env.PORT || 8080;
  const dataE = await Axios.get(`http://20.118.65.75:${port}${api_call}`);
  return dataE.data;
};

export { fetchData };
