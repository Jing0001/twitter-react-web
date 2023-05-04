import React from 'react'
import {Link} from "react-router-dom";

const verifiedIcon = <span className="fa-stack fa-xs">
    <i className="bi bi-check-circle-fill text-primary me-1"></i>
</span>

const markTextAsLink = (title, markText) => {
    return (
        title.replace(new RegExp(markText), '<a href="#" class="text-primary text-decoration-none">' + markText + '</a>')
    )
}

const PostItem = ({ post }) => {
    return (
        <li className="list-group-item border-bottom">
            <div className="row">
                <div className="col-2">
                    <img className="rounded-circle" src={post.icon} width="80px" height="75px"/>
                </div>
                <div className="col-10">
                    <div className="d-flex justify-content-between">
                        <div className="fw-bold">{post.userName} {post.verified ? verifiedIcon : ``}<span
                            className="fw-normal text-secondary">@{post.handleName} • {post.time}</span>
                        </div>
                        <i className="bi bi-three-dots fw-bold wd-flex-noWrap"></i>
                    </div>
                    <div dangerouslySetInnerHTML={{__html: markTextAsLink(post.topTitle, post.markText)}}/>
                    <div className="card border-secondary mt-2">
                        <img src={post.image} className="card-img-top border-bottom border-secondary" alt="..."/>
                        {post.title && <div className="card-body"><div className="card-title ms-2 fw-bold">{post.title}</div>
                                <p className="card-text ms-2">{post.content}</p>
                                <i className="bi bi-link-45deg ms-1"></i><Link to={post.link} className="ms-1 text-decoration-none">{post.link}</Link>
                            </div>
                        }
                    </div>
                    <div className="row mt-2">
                        <div className="col-3 mx-auto text-secondary">
                            <a href="#" className="px-2"><i className="bi bi-chat text-secondary"></i></a> <span>{post.comment}</span>
                        </div>
                        <div className="col-3 mx-auto text-secondary">
                            <a href="#" className="px-2"><i className="bi bi-repeat text-secondary"></i></a> <span>{post.retuit}</span>
                        </div>
                        <div className="col-3 mx-auto text-secondary">
                            <a href="#" className="px-2"><i className="bi bi-heart text-secondary"></i></a> <span>{post.like}</span>
                        </div>
                        <div className="col-3 mx-auto text-secondary">
                            <a href="#" className="px-2"><i className="bi bi-box-arrow-up text-secondary"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    );
}
export default PostItem;
