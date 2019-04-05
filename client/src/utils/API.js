import axios from "axios";
const BASEURL = "https://www.googleapis.com/books/v1/volumes?q="
const APIKEY = "&key=AIzaSyBwOemITo_zIAv350jNoazbI_BISg2-nb8";
export default {
  search: function(query) {
    return axios.get(BASEURL + query + APIKEY);
  },
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  }
};
