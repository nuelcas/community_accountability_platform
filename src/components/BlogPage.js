import React, { useState } from "react";
import "./BlogPage.css";
import Contact from "./Contact";

const BlogPage = () => {
  const [expandedPost, setExpandedPost] = useState(null);

  const blogPosts = [
    {
      title: "Empowering Communities Through Accountability",
      summary:
        "In an era where transparency is essential, our platform aims to bridge the gap between the community and governance.",
      content:
        "Empowering communities is at the heart of what we do at the Community Accountability Platform (CAP). Our mission is to foster a sense of responsibility and accountability within our societies. By providing tools for anonymous reporting and real-time tracking of issues, we enable citizens to voice their concerns without fear of retribution. Through civic education, we aim to inform citizens of their rights and how to engage effectively with local governance. Together, we can build stronger communities based on trust, transparency, and mutual respect.",
    },
    {
      title: "The Importance of Civic Engagement",
      summary:
        "Civic engagement is vital for a healthy democracy and an informed citizenry.",
      content:
        "Civic engagement is essential for the health of our democracy. It allows citizens to participate actively in the decision-making processes that affect their lives. At CAP, we believe that informed citizens are empowered citizens. We provide educational resources on voting processes, citizens' rights, and how to engage with local leaders effectively. Our goal is to inspire youth-led initiatives that can address pressing social and political issues. Through collaboration and active participation, we can ensure that our voices are heard and our concerns are addressed.",
    },
  ];

  const togglePost = (index) => {
    setExpandedPost(expandedPost === index ? null : index);
  };

  return (
    <div className="main-container">
      <div className="blog-container">
        <h2>Our Blog</h2>
        {blogPosts.map((post, index) => (
          <div key={index} className="blog-post">
            <h3>{post.title}</h3>
            <p>{post.summary}</p>
            <button onClick={() => togglePost(index)}>
              {expandedPost === index ? "Read Less" : "Read More"}
            </button>
            {expandedPost === index && <p>{post.content}</p>}
          </div>
        ))}
      </div>
      <Contact />
    </div>
  );
};

export default BlogPage;
