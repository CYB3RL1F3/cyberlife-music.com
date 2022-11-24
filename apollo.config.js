const apiUrl = process.env.API_URL;
module.exports = {
  client: {
    tagName: "gql",
    includes: ["./**/*.gql"],
    service: {
      name: "profilart",
      url: apiUrl
    }
  }
};
