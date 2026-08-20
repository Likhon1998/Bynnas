import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { blogPosts, formatBlogDate } from '../data/blog.js';

export default function BlogPost({ post }) {
    const ref = useRef(null);
    const others = blogPosts.filter((p) => p.id !== post.id).slice(0, 3);

    useEffect(() => {
        window.scrollTo(0, 0);
        const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (reduced || !ref.current) return undefined;
        const ctx = gsap.context(() => {
            gsap.from('.blog-post .blog-post__shell > *', {
                y: 16,
                opacity: 0,
                duration: 0.5,
                stagger: 0.06,
                ease: 'power2.out',
            });
        }, ref);
        return () => ctx.revert();
    }, [post.id]);

    return (
        <section className="blog-post" ref={ref} style={{ '--bc': post.accent }}>
            <div className="blog-post__hero" style={{ backgroundImage: `url(${post.image})` }}>
                <div className="blog-post__hero-shade" />
                <div className="blog-post__hero-inner">
                    <a className="blog-post__back blog-post__back--light" href="#/blog">
                        <svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true">
                            <path d="M13 8H3M7 4L3 8l4 4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        All articles
                    </a>
                    <span className="blog-post__cat blog-post__cat--on-dark">{post.category}</span>
                    <h1>{post.title}</h1>
                    <div className="blog-post__meta blog-post__meta--light">
                        <time dateTime={post.date}>{formatBlogDate(post.date)}</time>
                        <span className="bcard__dot" aria-hidden="true" />
                        <span>{post.readTime} read</span>
                    </div>
                </div>
            </div>

            <div className="blog-post__shell">
                <p className="blog-post__lead">{post.excerpt}</p>

                <article className="blog-post__body">
                    {post.body.map((paragraph) => (
                        <p key={paragraph.slice(0, 32)}>{paragraph}</p>
                    ))}
                </article>

                <div className="blog-post__cta">
                    <div>
                        <h2>Want software that fits how you work?</h2>
                        <p>Tell us about your floor, counter, or fleet — we will show what fits.</p>
                    </div>
                    <a className="cta cta--primary" href="#contact">Get in touch</a>
                </div>

                {others.length > 0 && (
                    <div className="blog-post__more">
                        <div className="blog-post__more-head">
                            <h3>More to read</h3>
                            <a href="#/blog">View all</a>
                        </div>
                        <div className="blog-post__more-list">
                            {others.map((item) => (
                                <a key={item.id} href={`#/blog/${item.id}`} style={{ '--bc': item.accent }}>
                                    <img className="blog-post__more-thumb" src={item.image} alt="" />
                                    <span className="blog-post__more-copy">
                                        <span className="blog-post__more-cat">{item.category}</span>
                                        <strong>{item.title}</strong>
                                    </span>
                                </a>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}
