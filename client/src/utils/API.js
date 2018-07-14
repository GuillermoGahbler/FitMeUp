import axios from "axios";

export default {
  // Gets all books
  getAccounts: function() {
    return axios.get("/accts");
  },
  getDays: function() {
      return axios.get("/days");
  },
  createDayData : function(params) {
    console.log("API.createDay")
    console.log(params);
    return axios.post("/createDay",params);
  },
  calculateCalories : function(params) {
    console.log("API.calculateCalories")
    console.log(params);
    return axios.post("/calculateCalories",params);
  },
  getNutritionInfo : function(){
    return axios.get("/getNutritionInfo")
  },
  calculateLastUpdate : function(params) {
    console.log("API.calculateLastUpdate");
    console.log(params);
    return axios.get("/calculateLastUpdate",params);
  },
  calculateAvgDailyCalories : function(params) {
    console.log("API.calculateAvgDailyCalories");
    console.log(params);
    return axios.get("/calculateAvgDailyCalories",params);
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
