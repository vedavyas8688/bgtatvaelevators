import BlogNav from '../components/BlogNav'
import SiteFooter from '../components/SiteFooter'
import { ArticleContentSection, ArticleCoverSection, ArticleHeroSection } from '../components/sections/blog-detail'

export default function BlogDetail() {
  return (
    <main className="article-page">
      <BlogNav />
      <ArticleHeroSection />
      <ArticleCoverSection />
      <ArticleContentSection />
      <SiteFooter />
    </main>
  )
}
