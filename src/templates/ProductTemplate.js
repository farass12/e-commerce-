import React from "react"
import products from "../data/products.json"

const ProductTemplate = ({ pageContext }) => {
  const { slug } = pageContext
  const product = products.find(p => p.slug === slug)

  if (!product) return <p>Produk tidak ditemukan.</p>

  return (
    <div>
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} />
      <p>{product.description}</p>
      <p>Harga: ${product.price}</p>
      <p>Promo: ${product.promoprice}</p>
      <p>Kategori: {product.sex}</p>
    </div>
  )
}

export default ProductTemplate
