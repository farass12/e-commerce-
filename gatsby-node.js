const path = require("path");

// Cari file products.json secara fleksibel
const productsPath = path.resolve(__dirname, "src/data/products.json"); // jika di src/data
// const productsPath = path.resolve(__dirname, "data/products.json"); // jika di root/data

const products = require(productsPath);

exports.createPages = async ({ actions }) => {
  const { createPage } = actions;

  products.forEach(({ slug }) => {
    createPage({
      path: `/products/${slug}`,
      component: path.resolve("src/templates/ProductTemplate.js"),
      context: { slug },
    });
  });
};
