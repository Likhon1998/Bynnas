import { blogPosts } from '../data/blog.js';
import BlogCard from './BlogCard.jsx';

const PREVIEW_COUNT = 3;

export default function Blog() {
    const preview = blogPosts.slice(0, PREVIEW_COUNT);

    return (
        <section id="blog" className="blog">
            <div className="section-wrap">
                <div className="blog__head">
                    <span className="section-kicker">Insights</span>
                    <h2 className="blog__title">From the Bynnas desk</h2>
                    <p className="blog__sub">
                        Short, practical notes on software, cloud, integration, and delivery.
                    </p>
                </div>

                <div className="bcards bcards--preview">
                    {preview.map((post) => (
                        <BlogCard key={post.id} post={post} />
                    ))}
                </div>

                <div className="blog__foot">
                    <a className="blog__all" href="#/blog">
                        View all articles
                        <svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true">
                            <path d="M3 8h10M9 4l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
}
