"use client"

import { useState } from "react"
import "./BlogPage.css"

const BlogPage = () => {
  const [selectedBlog, setSelectedBlog] = useState(null)

  const blogs = [
    {
      id: 1,
      title: "Educational Tour - Day 1",
      date: "March 15, 2023",
      excerpt: "The first day of our educational tour was filled with excitement and new discoveries...",
      content: `
        <p>The first day of our educational tour was filled with excitement and new discoveries. We started early in the morning, gathering at the campus before boarding the bus that would take us to our first destination.</p>
        
        <p>Our first stop was the Science Museum, where we explored interactive exhibits on technology and innovation. The highlight was definitely the VR experience that simulated space travel!</p>
        
        <p>After lunch, we visited the Botanical Gardens to learn about biodiversity and conservation efforts. The tropical greenhouse was particularly impressive with its collection of rare plants.</p>
        
        <p>We ended the day with a group dinner where we shared our experiences and prepared for day two of our adventure.</p>
      `,
      images: [
        "/placeholder.svg?height=300&width=500",
        "/placeholder.svg?height=300&width=500",
        "/placeholder.svg?height=300&width=500",
      ],
    },
    {
      id: 2,
      title: "Educational Tour - Day 2",
      date: "March 16, 2023",
      excerpt: "On our second day, we visited the historical museum and learned about local heritage...",
      content: `
        <p>Day two of our educational tour focused on history and cultural heritage. We began with a visit to the National History Museum, where we explored artifacts dating back hundreds of years.</p>
        
        <p>The guided tour provided fascinating insights into how our society evolved over time. The ancient technology section was particularly interesting, showing the ingenuity of our ancestors.</p>
        
        <p>In the afternoon, we participated in a traditional craft workshop, learning techniques that have been passed down through generations. Everyone got to create their own souvenir to take home!</p>
        
        <p>The day concluded with a cultural performance that showcased traditional music and dance.</p>
      `,
      images: [
        "/placeholder.svg?height=300&width=500",
        "/placeholder.svg?height=300&width=500",
        "/placeholder.svg?height=300&width=500",
      ],
    },
    {
      id: 3,
      title: "Educational Tour - Day 3",
      date: "March 17, 2023",
      excerpt: "The final day of our tour was dedicated to technology and innovation centers...",
      content: `
        <p>Our final day was focused on technology and future careers. We visited a leading tech company where we got a behind-the-scenes tour of their development facilities.</p>
        
        <p>The engineers shared insights about their daily work and the skills needed to succeed in the tech industry. Many students were inspired by the creative work environment and innovative projects.</p>
        
        <p>After lunch, we participated in a coding workshop where we worked in teams to solve real-world problems using technology. It was challenging but incredibly rewarding!</p>
        
        <p>Before heading back to campus, we had a reflection session where everyone shared their biggest takeaways from the three-day educational tour. It was amazing to see how much we had learned and experienced in such a short time.</p>
      `,
      images: [
        "/placeholder.svg?height=300&width=500",
        "/placeholder.svg?height=300&width=500",
        "/placeholder.svg?height=300&width=500",
      ],
    },
  ]

  const handleBlogClick = (blog) => {
    setSelectedBlog(blog)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const handleBack = () => {
    setSelectedBlog(null)
  }

  return (
    <div className="blog-page-container">
      <div className="blog-page-content">
        {selectedBlog ? (
          <div className="blog-detail content-container">
            <button className="back-button" onClick={handleBack}>
              &larr; Back to All Posts
            </button>

            <h1 className="blog-detail-title text-outline">{selectedBlog.title}</h1>
            <p className="blog-date">{selectedBlog.date}</p>

            <div className="blog-gallery">
              {selectedBlog.images.map((image, index) => (
                <div key={index} className="blog-image">
                  <img src={image || "/placeholder.svg"} alt={`${selectedBlog.title} - image ${index + 1}`} />
                </div>
              ))}
            </div>

            <div className="blog-content" dangerouslySetInnerHTML={{ __html: selectedBlog.content }} />
          </div>
        ) : (
          <>
            <h1 className="blog-page-title text-outline">Blog Posts</h1>
            <p className="blog-intro">Follow my educational journey through these blog posts</p>

            <div className="blog-grid">
              {blogs.map((blog) => (
                <div key={blog.id} className="blog-card" onClick={() => handleBlogClick(blog)}>
                  <div className="blog-card-image">
                    <img src={blog.images[0] || "/placeholder.svg"} alt={blog.title} />
                  </div>
                  <div className="blog-card-content">
                    <h3 className="text-outline">{blog.title}</h3>
                    <p className="blog-date">{blog.date}</p>
                    <p className="blog-excerpt">{blog.excerpt}</p>
                    <button className="read-more">Read More</button>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default BlogPage
