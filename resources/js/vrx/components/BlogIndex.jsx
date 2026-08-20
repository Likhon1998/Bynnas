import { useEffect, useRef, useMemo, useState } from 'react';
import gsap from 'gsap';
import { blogPosts } from '../data/blog.js';
import BlogCard from './BlogCard.jsx';

const PER_PAGE = 9;

export default function BlogIndex() {
    const ref = useRef(null);
    const [page, setPage] = useState(1);
    const categories = useMemo(
        () => ['All', ...Array.from(new Set(blogPosts.map((p) => p.category)))],
        [],
    );
    const [filter, setFilter] = useState('All');

    const filtered = useMemo(
        () => (filter === 'All' ? blogPosts : blogPosts.filter((p) => p.category === filter)),
        [filter],
    );

    const totalPages = Math.max(1, Math.ceil(filtered.length / PER_PAGE));
    const safePage = Math.min(page, totalPages);
    const visible = filtered.slice((safePage - 1) * PER_PAGE, safePage * PER_PAGE);

    useEffect(() => {
        window.scrollTo(0, 0);
        const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (reduced || !ref.current) return undefined;
        const ctx = gsap.context(() => {
            gsap.from('.blog-index__intro, .blog-index__filters, .bcards .bcard, .blog-index__pager', {
                y: 14,
                opacity: 0,
                duration: 0.45,
                stagger: 0.04,
                ease: 'power2.out',
            });
        }, ref);
        return () => ctx.revert();
    }, [filter, safePage]);

    return (
        <section className="blog-index" ref={ref}>
            <div className="section-wrap">
                <div className="blog-index__intro">
                    <a className="blog-post__back" href="#/">
                        <svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true">
                            <path d="M13 8H3M7 4L3 8l4 4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        Home
                    </a>
                    <span className="section-kicker">Blog</span>
                    <h1>All articles</h1>
                    <p>
                        Practical writing on custom software, integration, cloud, security, and delivery —
                        built for teams that rely on their systems every day.
                    </p>
                    <p className="blog-index__count">{filtered.length} articles</p>
                </div>

                <div className="blog-index__filters" role="tablist" aria-label="Filter by category">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            type="button"
                            role="tab"
                            aria-selected={filter === cat}
                            className={`blog-index__chip${filter === cat ? ' is-active' : ''}`}
                            onClick={() => {
                                setFilter(cat);
                                setPage(1);
                            }}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                <div className="bcards bcards--archive">
                    {visible.map((post) => (
                        <BlogCard key={post.id} post={post} />
                    ))}
                </div>

                {totalPages > 1 && (
                    <div className="blog-index__pager">
                        <button
                            type="button"
                            className="blog-index__page-btn"
                            disabled={safePage <= 1}
                            onClick={() => setPage((p) => Math.max(1, p - 1))}
                        >
                            Previous
                        </button>
                        <span className="blog-index__page-label">
                            Page {safePage} of {totalPages}
                        </span>
                        <button
                            type="button"
                            className="blog-index__page-btn"
                            disabled={safePage >= totalPages}
                            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                        >
                            Next
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
}
