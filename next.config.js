const nextTranslate = require("next-translate");

module.exports = nextTranslate({
  async redirects() {
    return [
      {
        source: "/departments",
        destination: "/",
        permanent: true,
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/departments/0",
        destination: "/",
        permanent: true,
      },
    ];
  },


// 
// 
// 
//   
//

reactStrictMode: true,
  images: {
    domains: [
      "images.unsplash.com",
      "www.mall-alamer.com",
      "tofm.com.sa",
      "github.com",
      "raw.githubusercontent.com",
    ],
  },
});
