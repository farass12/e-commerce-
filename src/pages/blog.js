import * as React from "react"
import { Link } from "gatsby"

const articles = [
  {
    title: "Tips Sederhana Bikin Lingkungan Kamar Lebih Nyaman",
    slug: "/artikel",
    image: "https://source.unsplash.com/400x300/?bedroom,interior"
  },
  {
    title: "Kenapa Kualitas Kasur Penting untuk Kesehatan?",
    slug: "/blog/kualitas-kasur",
    image: "https://source.unsplash.com/400x300/?mattress,comfort"
  },
  {
    title: "Inspirasi Desain Kamar dengan Dipan Modern",
    slug: "/blog/desain-kamar-modern",
    image: "https://source.unsplash.com/400x300/?modern,bedroom"
  }
]

const BlogPage = () => {
  return (
    <main style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1 style={{ textAlign: "center", marginBottom: "2rem" }}>Blog</h1>
      
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: "2rem"
      }}>
        {articles.map(article => (
          <div key={article.slug} style={{ textAlign: "center" }}>
            <Link to={article.slug} style={{ textDecoration: "none", color: "inherit" }}>
              <img 
                src={article.image} 
                alt={article.title} 
                style={{ width: "100%", borderRadius: "10px" }} 
              />
              <h3 style={{ marginTop: "1rem" }}>{article.title}</h3>
            </Link>
          </div>
        ))}
      </div>
    </main>
  )
}

export default BlogPage
