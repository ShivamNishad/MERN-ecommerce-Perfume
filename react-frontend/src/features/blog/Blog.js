import React from 'react';

const Blog = () => {
    const posts = [
        { date: "19 March 2018", user: "Super User", title: "GREAT PROJECTS", content: "Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.", imageUrl: "https://cdn.easyfrontend.com/pictures/testimonial/testimonial_15.png" },
        { date: "19 March 2018", user: "Super User", title: "GREAT PROJECTS", content: "Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.", imageUrl: "https://cdn.easyfrontend.com/pictures/testimonial/testimonial_square_1.jpeg" },
        { date: "19 March 2018", user: "Super User", title: "GREAT PROJECTS", content: "Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.", imageUrl: "https://cdn.easyfrontend.com/pictures/testimonial/testimonial_square_3.jpeg" }
    ];

    return (
        <div>
            <h2 className="blog-title">FRAGRANCE JOURNEYS</h2>
            <div className="blog-section">
                <div className="container">
                    <div className="posts">
                        {posts.map((post, index) => (
                            <div className="post" key={index}>
                                <img src={post.imageUrl} alt={post.title} className="post-image" />
                                <div className="post-content">
                                    <h3>{post.title}</h3>
                                    <p>{post.date} / {post.user}</p>
                                    <p>{post.content}</p>
                                    <a href="#" className="read-more">READ MORE</a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;
