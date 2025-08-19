'use client'
import { motion } from 'framer-motion'
import { Calendar, Clock, ArrowRight } from 'lucide-react'

const BLOG_POSTS = [
  {
    title: 'Building Scalable React Applications',
    excerpt: 'Learn the best practices for building large-scale React applications with proper state management and performance optimization.',
    date: '2024-01-15',
    readTime: '8 min read',
    tags: ['React', 'JavaScript', 'Performance'],
    slug: 'building-scalable-react-applications'
  },
  {
    title: 'Introduction to Serverless Architecture',
    excerpt: 'Explore the benefits and challenges of serverless computing and how to implement it in your next project.',
    date: '2024-01-10',
    readTime: '12 min read',
    tags: ['Serverless', 'AWS', 'Architecture'],
    slug: 'introduction-to-serverless-architecture'
  },
  {
    title: 'Modern CSS Techniques for Better UX',
    excerpt: 'Discover advanced CSS techniques including Grid, Flexbox, and custom properties to create better user experiences.',
    date: '2024-01-05',
    readTime: '6 min read',
    tags: ['CSS', 'UX', 'Design'],
    slug: 'modern-css-techniques-for-better-ux'
  },
  {
    title: 'Getting Started with TypeScript',
    excerpt: 'A comprehensive guide to TypeScript for JavaScript developers, covering types, interfaces, and advanced features.',
    date: '2023-12-28',
    readTime: '10 min read',
    tags: ['TypeScript', 'JavaScript', 'Tutorial'],
    slug: 'getting-started-with-typescript'
  }
]

export default function Blog() {
  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-semibold">Latest Blog Posts</h2>
        <p className="text-neutral-600 max-w-2xl mx-auto">
          Thoughts, tutorials, and insights about web development, technology, and my learning journey.
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8">
        {BLOG_POSTS.map((post, index) => (
          <motion.article
            key={post.slug}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="border rounded-xl p-6 hover:shadow-lg transition-shadow"
          >
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-sm text-neutral-600">
                <div className="flex items-center gap-1">
                  <Calendar size={14} />
                  <span>{new Date(post.date).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock size={14} />
                  <span>{post.readTime}</span>
                </div>
              </div>
              
              <h3 className="text-xl font-semibold hover:text-brand-600 transition-colors">
                <a href={`/blog/${post.slug}`}>{post.title}</a>
              </h3>
              
              <p className="text-neutral-600 text-sm leading-relaxed">
                {post.excerpt}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {post.tags.map(tag => (
                  <span key={tag} className="px-2 py-1 bg-neutral-100 text-xs rounded">
                    {tag}
                  </span>
                ))}
              </div>
              
              <a 
                href={`/blog/${post.slug}`}
                className="inline-flex items-center gap-2 text-sm font-medium text-brand-600 hover:text-brand-700 transition-colors"
              >
                Read more
                <ArrowRight size={14} />
              </a>
            </div>
          </motion.article>
        ))}
      </div>
      
      <div className="text-center">
        <a 
          href="/blog"
          className="inline-flex items-center gap-2 px-6 py-3 border rounded-xl hover:bg-neutral-50 transition-colors"
        >
          View all posts
          <ArrowRight size={16} />
        </a>
      </div>
    </div>
  )
}
