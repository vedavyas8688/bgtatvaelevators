import { LuArrowRight } from 'react-icons/lu'

export default function BlogBannerSection({ post }) {
  return <section className="blog-banner" aria-labelledby="recent-articles"><header><p>BG Tatva Journal</p><h1 id="recent-articles">Recent Articles</h1><span>Discover our most recent insights and updates on elevator design, engineering and modern vertical mobility.</span></header><a className="blog-banner-feature" href={post.href} aria-label={`Read ${post.title}`}><img src={post.image} alt={post.title} /><div><p>Featured &middot; {post.date}</p><h2>{post.title}</h2><span>{post.excerpt}</span><span className="blog-banner-arrow" aria-hidden="true"><LuArrowRight /></span></div></a></section>
}
