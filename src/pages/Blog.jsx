import { useState } from 'react'
import { LuArrowRight } from 'react-icons/lu'
import BlogNav from '../components/BlogNav'
import SiteFooter from '../components/SiteFooter'
import { blogPosts, featuredPost } from '../data/blogPosts'

export default function Blog() {
  const [visibleCount, setVisibleCount] = useState(15)

  return (
    <main className="blog-page">
      <BlogNav />

      <section className="blog-banner" aria-labelledby="recent-articles">
        <header><p>BG Tatva Journal</p><h1 id="recent-articles">Recent Articles</h1><span>Discover our most recent insights and updates on elevator design, engineering and modern vertical mobility.</span></header>
        <article className="blog-banner-feature">
          <img src={featuredPost.image} alt={featuredPost.title} />
          <div><p>Featured &middot; {featuredPost.date}</p><h2>{featuredPost.title}</h2><span>{featuredPost.excerpt}</span><a href={featuredPost.href} aria-label={`Read ${featuredPost.title}`}><span aria-hidden="true"><LuArrowRight /></span></a></div>
        </article>
      </section>

      <section className="blog-library" aria-labelledby="latest-articles">
        <header><p>Explore the journal</p><h2 id="latest-articles">Latest Articles</h2></header>
        <div className="blog-grid">
          {blogPosts.slice(0, visibleCount).map((post) => (
            <article id={post.id} className="blog-card scroll-mt-[110px]" key={post.id}>
              <a className="blog-card-image" href={post.href} aria-label={`Open ${post.title}`}><img src={post.image} alt={post.title} loading="lazy" /></a>
              <div className="blog-card-meta"><span>{post.category}</span><time>{post.date}</time></div>
              <h3><a href={post.href}>{post.title}</a></h3>
              <p>{post.excerpt}</p>
            </article>
          ))}
        </div>
        {visibleCount < blogPosts.length && <button type="button" onClick={() => setVisibleCount(blogPosts.length)} className="mx-auto mt-20 flex items-center gap-3 rounded-full border border-[#172e3b] bg-transparent px-6 py-[14px] text-[13px] font-semibold text-[#172e3b] transition-colors hover:bg-[#172e3b] hover:text-white">Load more articles <span aria-hidden="true"><LuArrowRight /></span></button>}
      </section>

      <section className="blog-cta"><p>Planning your next project?</p><h2>Let&apos;s create an elevator<br />worth experiencing.</h2><a href="/contact">Start a conversation <span aria-hidden="true"><LuArrowRight /></span></a></section>
      <SiteFooter />
    </main>
  )
}
