import React from 'react'
import "./Blog.css"
import { blogs } from "../../data"
import { BsCalendar2Date } from 'react-icons/bs'
import { MdOutlineThumbUpOffAlt } from 'react-icons/md'
import { FaRegCommentDots } from 'react-icons/fa6'

const Blog = () => {
  return (
    <section className='blog'>
      <div className="container">
        <h1 className="title">
          <span className="g-text">Recent Blog Posts</span>
        </h1>
        <h3 className="sub_title">Explore our article</h3>
        <div className="blogs_container">
          {
            blogs.map((blog, index) => (
              <div className="blog_card" key={index}>
                <p className="category">{blog.category}</p>
                <div className="picture">
                  <img src={blog.image} alt={blog.title} />
                </div>
                <div className="details">
                  <h3>{blog.title}</h3>
                  <div className="buttons_container">
                    <button className="btn">
                      <BsCalendar2Date/>
                      {blog.date.toLocaleDateString()}
                    </button>
                    <button className="btn">
                      <MdOutlineThumbUpOffAlt/>
                      {blog.likeCount}
                    </button>
                    <button className="btn">
                      <FaRegCommentDots/>
                      {blog.commentCount}
                    </button>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Blog