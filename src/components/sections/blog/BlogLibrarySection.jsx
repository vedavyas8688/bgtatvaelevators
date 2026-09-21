import { LuArrowRight } from 'react-icons/lu'

export default function BlogLibrarySection({ posts, visibleCount, onLoadMore }) {
  return <section className="blog-library" aria-labelledby="latest-articles"><header><p>Explore the journal</p><h2 id="latest-articles">Latest Articles</h2></header><div className="blog-grid">{posts.slice(0, visibleCount).map((post) => <a id={post.id} className="blog-card scroll-mt-[110px]" href={post.href} aria-label={`Open ${post.title}`} key={post.id}><div className="blog-card-image"><img src={post.image} alt={post.title} loading="lazy" /></div><div className="blog-card-meta"><span>{post.category}</span><time>{post.date}</time></div><h3>{post.title}</h3><p>{post.excerpt}</p></a>)}</div>{visibleCount < posts.length && <div className="blog-load-more"><button type="button" onClick={onLoadMore} className="editorial-cta">Load more articles <span aria-hidden="true"><LuArrowRight /></span></button></div>}</section>
}
