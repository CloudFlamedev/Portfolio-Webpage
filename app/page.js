"use client"
import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun, Github, Linkedin, Mail, ExternalLink, ChevronRight } from 'lucide-react';

// Main App Component
const DeveloperPortfolio = () => {
  const [isDark, setIsDark] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Dark mode persistence
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDark(savedTheme === 'dark');
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark', isDark);
  }, [isDark]);

  // Smooth scroll handler
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
      setActiveSection(id);
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDark ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      <Navbar 
        isDark={isDark} 
        setIsDark={setIsDark} 
        isMenuOpen={isMenuOpen} 
        setIsMenuOpen={setIsMenuOpen}
        scrollToSection={scrollToSection}
        activeSection={activeSection}
      />
      <main>
        <Hero isDark={isDark} scrollToSection={scrollToSection} />
        <About isDark={isDark} />
        <Skills isDark={isDark} />
        <Projects isDark={isDark} />
        <Features isDark={isDark} />
        <Blog isDark={isDark} />
        <Contact isDark={isDark} />
      </main>
      <Footer isDark={isDark} />
    </div>
  );
};

// Navbar Component
const Navbar = ({ isDark, setIsDark, isMenuOpen, setIsMenuOpen, scrollToSection, activeSection }) => {
  const navItems = ['home', 'about', 'skills', 'projects', 'blog', 'contact'];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isDark ? 'bg-gray-900/95 border-gray-800' : 'bg-white/95 border-gray-200'
    } backdrop-blur-sm border-b`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className={`text-xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
            {'<Dev />'}
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map(item => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`capitalize transition-colors ${
                  activeSection === item
                    ? 'text-blue-500'
                    : isDark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {item}
              </button>
            ))}
            <button
              onClick={() => setIsDark(!isDark)}
              className={`p-2 rounded-lg transition-colors ${
                isDark ? 'bg-gray-800 text-yellow-400' : 'bg-gray-200 text-gray-700'
              }`}
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={() => setIsDark(!isDark)}
              className={`p-2 rounded-lg ${isDark ? 'bg-gray-800' : 'bg-gray-200'}`}
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className={`md:hidden py-4 ${isDark ? 'bg-gray-800' : 'bg-white'} rounded-lg mt-2 mb-4`}>
            {navItems.map(item => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`block w-full text-left px-4 py-2 capitalize ${
                  isDark ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

// Hero Section
const Hero = ({ isDark, scrollToSection }) => {
  return (
    <section id="home" className={`pt-32 pb-20 px-4 sm:px-6 lg:px-8 ${isDark ? 'text-white' : 'text-gray-900'}`}>
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fadeIn">
            <div className={`text-sm font-semibold ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
              👋 Welcome to my portfolio
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Hi, I'm <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                John Developer
              </span>
            </h1>
            <p className={`text-xl ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              Full-Stack Developer specializing in React, Next.js, and modern web technologies. 
              Building scalable applications with clean code and exceptional user experiences.
            </p>
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={() => scrollToSection('projects')}
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-all transform hover:scale-105"
              >
                View Projects
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                  isDark 
                    ? 'bg-gray-800 hover:bg-gray-700 text-white' 
                    : 'bg-gray-200 hover:bg-gray-300 text-gray-900'
                }`}
              >
                Contact Me
              </button>
            </div>
          </div>
          <div className="relative">
            <div className={`w-full h-96 rounded-2xl overflow-hidden ${
              isDark ? 'bg-gradient-to-br from-blue-900 to-purple-900' : 'bg-gradient-to-br from-blue-100 to-purple-100'
            } flex items-center justify-center`}>
              <div className="text-9xl">💻</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// About Section
const About = ({ isDark }) => {
  return (
    <section id="about" className={`py-20 px-4 sm:px-6 lg:px-8 ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto">
        <h2 className={`text-3xl sm:text-4xl font-bold mb-12 text-center ${isDark ? 'text-white' : 'text-gray-900'}`}>
          About Me
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className={`space-y-4 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            <p className="text-lg">
              I'm a passionate full-stack developer with over 5 years of experience building modern web applications. 
              I specialize in creating performant, accessible, and user-friendly digital experiences.
            </p>
            <p className="text-lg">
              My expertise spans across frontend technologies like React, Next.js, and TypeScript, as well as 
              backend development with Node.js, Express, and various databases. I'm committed to writing clean, 
              maintainable code and following best practices.
            </p>
            <p className="text-lg">
              When I'm not coding, you'll find me contributing to open-source projects, writing technical articles, 
              or exploring new technologies to stay at the forefront of web development.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { label: 'Years Experience', value: '5+' },
              { label: 'Projects Completed', value: '50+' },
              { label: 'Happy Clients', value: '30+' },
              { label: 'Open Source', value: '20+' }
            ].map((stat, idx) => (
              <div 
                key={idx}
                className={`p-6 rounded-xl text-center ${
                  isDark ? 'bg-gray-900' : 'bg-gray-100'
                }`}
              >
                <div className="text-3xl font-bold text-blue-500 mb-2">{stat.value}</div>
                <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Skills Section
const Skills = ({ isDark }) => {
  const skills = [
    { name: 'React', icon: '⚛️', level: 95 },
    { name: 'Next.js', icon: '▲', level: 90 },
    { name: 'TypeScript', icon: '📘', level: 88 },
    { name: 'Node.js', icon: '🟢', level: 85 },
    { name: 'TailwindCSS', icon: '🎨', level: 92 },
    { name: 'GraphQL', icon: '◆', level: 80 },
    { name: 'MongoDB', icon: '🍃', level: 82 },
    { name: 'AWS', icon: '☁️', level: 75 }
  ];

  return (
    <section id="skills" className={`py-20 px-4 sm:px-6 lg:px-8 ${isDark ? 'text-white' : 'text-gray-900'}`}>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">Skills & Technologies</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, idx) => (
            <div 
              key={idx}
              className={`p-6 rounded-xl transition-all hover:scale-105 ${
                isDark ? 'bg-gray-800 hover:bg-gray-750' : 'bg-white hover:bg-gray-50 shadow-lg'
              }`}
            >
              <div className="text-4xl mb-4">{skill.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{skill.name}</h3>
              <div className={`w-full h-2 rounded-full ${isDark ? 'bg-gray-700' : 'bg-gray-200'}`}>
                <div 
                  className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transition-all duration-1000"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
              <div className={`text-sm mt-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                {skill.level}%
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Projects Section
const Projects = ({ isDark }) => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with payment integration, admin dashboard, and real-time inventory management.',
      tags: ['Next.js', 'Stripe', 'MongoDB'],
      image: '🛍️'
    },
    {
      title: 'Task Management App',
      description: 'Collaborative task manager with real-time updates, team features, and advanced filtering capabilities.',
      tags: ['React', 'Firebase', 'Material-UI'],
      image: '✅'
    },
    {
      title: 'Social Media Dashboard',
      description: 'Analytics dashboard for tracking social media metrics across multiple platforms with data visualization.',
      tags: ['TypeScript', 'Chart.js', 'REST API'],
      image: '📊'
    },
    {
      title: 'AI Content Generator',
      description: 'AI-powered content creation tool using OpenAI API with custom prompt engineering and export features.',
      tags: ['Next.js', 'OpenAI', 'TailwindCSS'],
      image: '🤖'
    }
  ];

  return (
    <section id="projects" className={`py-20 px-4 sm:px-6 lg:px-8 ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto">
        <h2 className={`text-3xl sm:text-4xl font-bold mb-12 text-center ${isDark ? 'text-white' : 'text-gray-900'}`}>
          Featured Projects
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div 
              key={idx}
              className={`rounded-xl overflow-hidden transition-all hover:scale-105 ${
                isDark ? 'bg-gray-900' : 'bg-gray-50 shadow-lg'
              }`}
            >
              <div className={`h-48 flex items-center justify-center text-7xl ${
                isDark ? 'bg-gradient-to-br from-blue-900 to-purple-900' : 'bg-gradient-to-br from-blue-100 to-purple-100'
              }`}>
                {project.image}
              </div>
              <div className="p-6">
                <h3 className={`text-xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {project.title}
                </h3>
                <p className={`mb-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span 
                      key={i}
                      className={`px-3 py-1 rounded-full text-sm ${
                        isDark ? 'bg-gray-800 text-blue-400' : 'bg-blue-100 text-blue-600'
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <button className="flex items-center text-blue-500 hover:text-blue-600 font-semibold">
                  View Project <ExternalLink size={16} className="ml-2" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Features Section
const Features = ({ isDark }) => {
  const features = [
    {
      icon: '🚀',
      title: 'Performance Optimization',
      description: 'Building lightning-fast applications with optimized code, lazy loading, and efficient state management.'
    },
    {
      icon: '📱',
      title: 'Responsive Design',
      description: 'Creating seamless experiences across all devices with mobile-first, adaptive layouts.'
    },
    {
      icon: '♿',
      title: 'Accessibility First',
      description: 'Ensuring applications are usable by everyone with WCAG compliance and semantic HTML.'
    },
    {
      icon: '🔍',
      title: 'SEO Optimization',
      description: 'Implementing best practices for search engine visibility and discoverability.'
    }
  ];

  return (
    <section id="features" className={`py-20 px-4 sm:px-6 lg:px-8 ${isDark ? 'text-white' : 'text-gray-900'}`}>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">What I Offer</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="text-center">
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Blog Section
const Blog = ({ isDark }) => {
  const posts = [
    {
      title: 'Building Scalable React Applications',
      excerpt: 'Best practices for structuring large-scale React projects with maintainable architecture.',
      date: 'Dec 28, 2024',
      readTime: '5 min read'
    },
    {
      title: 'Next.js 15: What\'s New',
      excerpt: 'Exploring the latest features in Next.js 15 and how they improve developer experience.',
      date: 'Dec 20, 2024',
      readTime: '7 min read'
    },
    {
      title: 'TypeScript Tips & Tricks',
      excerpt: 'Advanced TypeScript patterns that will make your code more type-safe and maintainable.',
      date: 'Dec 15, 2024',
      readTime: '6 min read'
    }
  ];

  return (
    <section id="blog" className={`py-20 px-4 sm:px-6 lg:px-8 ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto">
        <h2 className={`text-3xl sm:text-4xl font-bold mb-12 text-center ${isDark ? 'text-white' : 'text-gray-900'}`}>
          Latest Blog Posts
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, idx) => (
            <article 
              key={idx}
              className={`rounded-xl p-6 transition-all hover:scale-105 cursor-pointer ${
                isDark ? 'bg-gray-900 hover:bg-gray-850' : 'bg-gray-50 hover:bg-gray-100 shadow-lg'
              }`}
            >
              <div className={`text-sm mb-3 ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
                {post.date} · {post.readTime}
              </div>
              <h3 className={`text-xl font-bold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                {post.title}
              </h3>
              <p className={`mb-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                {post.excerpt}
              </p>
              <button className="flex items-center text-blue-500 hover:text-blue-600 font-semibold">
                Read More <ChevronRight size={16} className="ml-1" />
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

// Contact Section
const Contact = ({ isDark }) => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = () => {
    const newErrors = validateForm();
    if (Object.keys(newErrors).length === 0) {
      setSubmitted(true);
      setTimeout(() => {
        setFormData({ name: '', email: '', message: '' });
        setSubmitted(false);
      }, 3000);
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <section id="contact" className={`py-20 px-4 sm:px-6 lg:px-8 ${isDark ? 'text-white' : 'text-gray-900'}`}>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">Get In Touch</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <p className={`text-lg mb-6 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              Have a project in mind or want to collaborate? Feel free to reach out. I'm always open to 
              discussing new projects, creative ideas, or opportunities.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="text-blue-500" />
                <span>john@developer.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Github className="text-blue-500" />
                <span>github.com/johndeveloper</span>
              </div>
              <div className="flex items-center space-x-3">
                <Linkedin className="text-blue-500" />
                <span>linkedin.com/in/johndeveloper</span>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <div>
              <input
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className={`w-full px-4 py-3 rounded-lg transition-colors ${
                  isDark 
                    ? 'bg-gray-800 border-gray-700 text-white' 
                    : 'bg-white border-gray-300 text-gray-900'
                } border focus:border-blue-500 focus:outline-none`}
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
            </div>
            <div>
              <input
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className={`w-full px-4 py-3 rounded-lg transition-colors ${
                  isDark 
                    ? 'bg-gray-800 border-gray-700 text-white' 
                    : 'bg-white border-gray-300 text-gray-900'
                } border focus:border-blue-500 focus:outline-none`}
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>
            <div>
              <textarea
                placeholder="Your Message"
                rows="5"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className={`w-full px-4 py-3 rounded-lg transition-colors ${
                  isDark 
                    ? 'bg-gray-800 border-gray-700 text-white' 
                    : 'bg-white border-gray-300 text-gray-900'
                } border focus:border-blue-500 focus:outline-none`}
              />
              {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
            </div>
            <button 
              onClick={handleSubmit}
              className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-all transform hover:scale-105"
            >
              {submitted ? '✓ Message Sent!' : 'Send Message'}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

// Footer Component
const Footer = ({ isDark }) => {
  return (
    <footer className={`py-8 px-4 sm:px-6 lg:px-8 ${isDark ? 'bg-gray-900 text-gray-400' : 'bg-gray-100 text-gray-600'} border-t ${isDark ? 'border-gray-800' : 'border-gray-200'}`}>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div>© 2024 John Developer. All rights reserved.</div>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-blue-500 transition-colors"><Github size={20} /></a>
            <a href="#" className="hover:text-blue-500 transition-colors"><Linkedin size={20} /></a>
            <a href="#" className="hover:text-blue-500 transition-colors"><Mail size={20} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default DeveloperPortfolio;