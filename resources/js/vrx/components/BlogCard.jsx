import { formatBlogDate } from '../data/blog.js';

export default function BlogCard({ post }) {
    return (
        <a
            className="bcard"
            href={`#/blog/${post.id}`}
            style={{ '--bc': post.accent }}
        >
            <div className="bcard__visual">
                <img src={post.image} alt={post.imageAlt || ''} loading="lazy" />
            </div>
            <div className="bcard__body">
                <div className="bcard__meta">
                    <span className="bcard__cat">{post.category}</span>
                    <time dateTime={post.date}>{formatBlogDate(post.date)}</time>
                </div>
                <h3 className="bcard__title">{post.title}</h3>
                <p className="bcard__excerpt">{post.excerpt}</p>
                <span className="bcard__more">
                    Read article
                    <svg viewBox="0 0 16 16" width="12" height="12" aria-hidden="true">
                        <path d="M3 8h10M9 4l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </span>
            </div>
        </a>
    );
}
