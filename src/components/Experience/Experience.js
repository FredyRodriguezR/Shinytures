import React from 'react';
import './Experience.css';

function Experience(props) {
    return (
        <div className="Experience-details">
            <div className="container">
                <h2>BLOGS</h2>
            </div>
            <div className="Experience">
                <div className="container">
                    {
                        props.data.data.map((blog, index) => {
                            return <Blog key={index} blog={blog} />
                        })}
                </div>
            </div>
        </div>
    );
}

function Blog(props) {
    return (
        <article className="blog">
            <figure className="blog-imageContainer">
                <img className="blog-image" src={require(`../../images/${props.blog.imgUrl}`)} width="500" alt={props.blog.title} />
            </figure>
            <div className="blog-details">
                <h3 className="blog-title">{props.blog.title}</h3>
                <p className="blog-description">{props.blog.description}</p>
                <a className="blog-url" href={props.blog.url} rel="noopener noreferrer" target="_blank">Details</a>
            </div>
        </article>
    );
}

export default Experience;