'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  FiCheckCircle,
  FiSmartphone,
  FiInstagram,
  FiEdit3,
  FiGitBranch,
  FiSettings,
  FiArrowRight,
} from 'react-icons/fi';

export default function Posts() {
  const posts = [
    {
      id: 1,
      icon: FiCheckCircle,
      title: 'Idea Validation & Strategic Planning',
      excerpt:
        'Transform your startup idea from concept to market-ready strategy. We validate your vision and create a data-driven roadmap for success.',
      date: 'Mar 26, 2025',
      category: 'Strategy',
      fullContent:
        'LaunchNest helps validate your startup idea through comprehensive market research, business model development, and competition analysis. Our strategic planning ensures you have a clear path from concept to launch with risk mitigation and growth strategies.',
      highlights: [
        'Market Research & Validation',
        'Business Model Canvas',
        'Competitive Analysis',
        'Financial Projections',
        'Go-to-Market Strategy',
      ],
    },
    {
      id: 2,
      icon: FiSmartphone,
      title: 'Website & Web Development',
      excerpt:
        'Custom, responsive websites designed to establish your digital presence and engage your target audience effectively.',
      date: 'Mar 25, 2025',
      category: 'Development',
      fullContent:
        'LaunchNest builds performance-optimized, SEO-ready websites that convert visitors into customers. From modern design to scalable architecture, we ensure your startup stands out online.',
      highlights: [
        'Responsive Design',
        'Performance Optimization',
        'SEO Ready',
        'Modern Stack',
        'Analytics Integration',
      ],
    },
    {
      id: 3,
      icon: FiInstagram,
      title: 'Social Media Management',
      excerpt:
        'Build a strong, engaged community across Instagram and other platforms. We handle content strategy, posting, and community growth.',
      date: 'Mar 24, 2025',
      category: 'Marketing',
      fullContent:
        'LaunchNest develops your social media presence with consistent content strategy, daily engagement, and community building. We help your startup connect with target audience and build brand loyalty.',
      highlights: [
        'Content Strategy',
        'Daily Management',
        'Community Building',
        'Analytics & Reporting',
        'Influencer Partnerships',
      ],
    },
    {
      id: 4,
      icon: FiEdit3,
      title: 'Creative Content & Design',
      excerpt:
        'Professional content creation—posters, videos, graphics, and brand materials that tell your startup story.',
      date: 'Mar 23, 2025',
      category: 'Creative',
      fullContent:
        'LaunchNest produces high-quality visual content that captures your brand essence. From social media graphics to video editing, we ensure your startup looks professional and polished.',
      highlights: [
        'Graphic Design',
        'Video Editing',
        'Poster Design',
        'Brand Identity',
        'Content Strategy',
      ],
    },
    {
      id: 5,
      icon: FiGitBranch,
      title: 'Technical Development',
      excerpt:
        'Scalable, secure, and innovative technical solutions using modern technologies and best practices.',
      date: 'Mar 22, 2025',
      category: 'Tech',
      fullContent:
        'LaunchNest delivers production-grade technical solutions. From full-stack development to cloud deployment, we ensure your startup has the technical foundation to scale.',
      highlights: [
        'Full Stack Dev',
        'Mobile Apps',
        'API Integration',
        'Cloud Solutions',
        'DevOps & Deployment',
      ],
    },
    {
      id: 6,
      icon: FiSettings,
      title: 'Growth & Scaling',
      excerpt:
        'Data-driven strategies and tools to scale your startup, optimize operations, and maximize growth.',
      date: 'Mar 21, 2025',
      category: 'Growth',
      fullContent:
        'LaunchNest helps your startup scale efficiently with growth hacking, performance optimization, and strategic scaling assistance. We ensure sustainable, profitable growth.',
      highlights: [
        'Growth Strategy',
        'Performance Metrics',
        'Scaling Assistance',
        'Team Building',
        'Operations Optimization',
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <div className="min-h-screen bg-[#020b19] text-white">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b border-cyan-500/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <div className="text-xs font-bold tracking-[0.3em] text-cyan-400 mb-6">
              INSIGHTS & UPDATES
            </div>
            <h1 className="text-5xl sm:text-6xl font-black text-white mb-6 tracking-wider drop-shadow-lg">
              LaunchNest Blog
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Everything you need to know about transforming your startup idea into a thriving business.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {posts.map((post) => {
              const Icon = post.icon;
              return (
                <motion.div
                  key={post.id}
                  variants={itemVariants}
                  whileHover={{ y: -12, scale: 1.02 }}
                  className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-slate-800/60 to-slate-900/60 border border-cyan-500/40 p-8 backdrop-blur-sm hover:border-cyan-400/80 transition-all duration-300"
                >
                  {/* Animated background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Content */}
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-cyan-500/20 border border-cyan-400/60 rounded-lg flex items-center justify-center">
                        <Icon className="text-cyan-300 text-xl" />
                      </div>
                      <span className="text-xs font-bold tracking-widest text-cyan-400">
                        {post.category}
                      </span>
                    </div>

                    <h3 className="text-2xl font-black text-white mb-3 group-hover:text-cyan-300 transition-colors">
                      {post.title}
                    </h3>

                    <p className="text-slate-300 mb-6 line-clamp-2">{post.excerpt}</p>

                    <div className="space-y-2 mb-6">
                      {post.highlights.slice(0, 3).map((highlight, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-slate-200">
                          <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full" />
                          {highlight}
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-cyan-500/20">
                      <span className="text-xs text-slate-400">{post.date}</span>
                      <motion.div
                        whileHover={{ x: 4 }}
                        className="inline-flex items-center gap-2 text-cyan-400 font-bold"
                      >
                        Read More <FiArrowRight size={16} />
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/20 via-transparent to-cyan-900/20 border-y border-cyan-500/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-black text-white mb-6 tracking-wider">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              LaunchNest provides everything your startup needs—from validation to scaling. Let&apos;s transform your idea into reality.
            </p>
            <Link
              href="/contact"
              className="inline-block px-10 py-4 bg-cyan-500 text-slate-900 font-black text-lg tracking-wider hover:bg-cyan-400 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,212,255,0.6)] transform hover:scale-105 rounded-lg"
            >
              GET STARTED →
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
