const settings = {
  "name": "my-first-frontity-project",
  "state": {
    "frontity": {
      "url": "https://test.frontity.org",
      "title": "Test Frontity Blog",
      "description": "WordPress installation for Frontity development"
    }
  },
  "packages": [
    {
      "name":"petsure-theme"
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          // "url": "https://wpdemo3.staysure.co.uk/wp-json",
          "api": "https://wpdemo3.staysure.co.uk/wp-json",
          "homepage": "home",
          // "params": {
          //   "per_page": 5,
          //   "type": ["page"],
          // },
          "wpSource":{
            "isWpCom":true
          }
        },
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
