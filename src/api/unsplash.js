import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: `Client-ID liqOj1Mcps8oEmlLoIValUF5IBF8Yi5gbbcexsxtWQM`,
  },
});
