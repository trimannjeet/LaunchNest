'use client';

import { motion } from 'framer-motion';
import { FiHeart, FiTarget, FiTrendingUp, FiUsers } from 'react-icons/fi';

export default function About() {
  const values = [
    {
      icon: FiHeart,
      title: 'Innovation First',
      description: 'We believe in pushing boundaries and embracing new ideas to drive startup success.',
    },
    {
      icon: FiTarget,
      title: 'Goal-Oriented',
      description: 'Each strategy is tailored to achieve your specific business objectives.',
    },
    {
      icon: FiTrendingUp,
      title: 'Growth Focused',
      description: 'We measure success by the real growth and impact of our startup partners.',
    },
    {
      icon: FiUsers,
      title: 'Collaborative',
      description: 'Your success is our success. We work as an extension of your team.',
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="min-h-screen bg-[#020b19] text-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900/90 via-[#0c1f40]/80 to-slate-900/90 py-20 border-b border-cyan-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6">About LaunchNest</h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              We&apos;re a team of passionate entrepreneurs, developers, and strategists dedicated to transforming startup ideas into thriving businesses.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-slate-950/90">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-4xl font-bold text-white">Our Story</h2>
              <p className="text-slate-300 text-lg leading-8">
                LaunchNest was founded with a simple mission: to democratize startup success. We recognized that many brilliant ideas never see the light of day because their creators lack guidance, resources, or the right support system.
              </p>
              <p className="text-slate-300 text-lg leading-8">
                Over the years, we&apos;ve built a comprehensive ecosystem that guides startups from the spark of an idea through scaling and success. Our team brings together decades of experience in entrepreneurship, technology, marketing, and business development.
              </p>
              <p className="text-slate-300 text-lg leading-8">
                Today, we&apos;re proud to have helped over 500 startups launch and scale, raising millions in funding and creating thousands of jobs along the way.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-cyan-900/50 to-blue-900/80 rounded-2xl p-12 text-white border border-cyan-400/30 shadow-lg"
            >
              <div className="space-y-8">
                <div>
                  <div className="text-4xl font-bold mb-2">500+</div>
                  <p className="text-blue-100">Startups Successfully Launched</p>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">$2M+</div>
                  <p className="text-blue-100">Funding Raised by Portfolio Companies</p>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">85%</div>
                  <p className="text-blue-100">Success &amp; Growth Rate</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-slate-900/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl font-bold text-center text-white mb-16"
          >
            Our Core Values
          </motion.h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-slate-900/70 p-8 rounded-xl border border-cyan-500/20 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="text-white text-2xl" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-slate-950/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl font-bold text-center text-white mb-4"
          >
            Our Team
          </motion.h2>
          <p className="text-center text-slate-300 text-lg max-w-2xl mx-auto mb-16">
            A diverse group of experts united by a passion for helping startups succeed
          </p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-blue-50 to-gray-50 p-12 rounded-2xl border border-blue-200"
          >
            <div className="text-center">
              <p className="text-gray-600 text-lg mb-4">
                Our team of 150+ professionals includes:
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-blue-600">30+</div>
                  <p className="text-gray-600">Experienced Mentors</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-600">40+</div>
                  <p className="text-gray-600">Developers &amp; Engineers</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-600">35+</div>
                  <p className="text-gray-600">Marketing Specialists</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-600">45+</div>
                  <p className="text-gray-600">Business Strategists</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
