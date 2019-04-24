const withTypescript = require("@zeit/next-typescript")

module.exports = withTypescript({
  exportPathMap: function() {
    return {
      "/": { page: "/" },
      "/privacy_policy": { page: "/privacy_policy" }
    }
  }
})
