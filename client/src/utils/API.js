import axios from "axios";

export default {
  // Gets all books
  getAccounts: function() {
    return axios.get("/accts");
  },
  getDays: function() {
      return axios.get("/days");
  }
  // Gets the book with the given id
  /*getBook: function(id) {
    return axios.get("/api/books/" + id);
  },

  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  }*/
};
