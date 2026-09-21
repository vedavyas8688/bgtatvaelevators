import { useState } from 'react'
import BlogNav from '../components/BlogNav'
import SiteFooter from '../components/SiteFooter'
import { blogPosts, featuredPost } from '../data/blogPosts'
import { BlogBannerSection, BlogCtaSection, BlogLibrarySection } from '../components/sections/blog'

export default function Blog() {
  const [visibleCount, setVisibleCount] = useState(15)

  return (
    <main className="blog-page">
      <BlogNav />

      <BlogBannerSection post={featuredPost} />
      <BlogLibrarySection posts={blogPosts} visibleCount={visibleCount} onLoadMore={() => setVisibleCount(blogPosts.length)} />
      <BlogCtaSection />
      <SiteFooter />
    </main>
  )
}
