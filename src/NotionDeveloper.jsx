
"use client"

import { useState } from "react"
import {
  ChevronRight,
  Mail,
  Phone,
  MapPin,
  Calendar,
  ExternalLink,
  Github,
  Linkedin,
  Twitter,
  Code,
  Globe,
  Clock,
  CheckCircle,
  Circle,
  Star,
  Award,
  BookOpen,
  Users,
  Zap,
  Menu,
  X,
} from "lucide-react"

export default function NotionDeveloper() {
  const [activeSection, setActiveSection] = useState("overview")
  const [expandedProjects, setExpandedProjects] = useState([])
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleProject = (projectId) => {
    setExpandedProjects((prev) =>
      prev.includes(projectId) ? prev.filter((id) => id !== projectId) : [...prev, projectId],
    )
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const handleSectionChange = (sectionId) => {
    setActiveSection(sectionId)
    setIsMobileMenuOpen(false) // Close mobile menu when section is selected
  }

  const sidebarItems = [
    { id: "overview", label: "Overview", icon: <Globe className="w-4 h-4" /> },
    { id: "about", label: "About Me", icon: <Users className="w-4 h-4" /> },
    { id: "projects", label: "Projects", icon: <Code className="w-4 h-4" /> },
    { id: "skills", label: "Skills & Tools", icon: <Zap className="w-4 h-4" /> },
    { id: "experience", label: "Certificate", icon: <Award className="w-4 h-4" /> },
    { id: "contact", label: "Contact", icon: <Mail className="w-4 h-4" /> },
  ]

  const projects = [
    {
      id: "ecommerce",
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with payment integration",
      status: "Completed",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      features: ["User authentication", "Payment processing", "Admin dashboard", "Inventory management"],
      link: "https://github.com/dev/ecommerce",
      demo: "https://ecommerce-demo.com",
    },
    {
      id: "taskmanager",
      title: "Task Management App",
      description: "Collaborative task management with real-time updates",
      status: "In Progress",
      tech: ["Next.js", "TypeScript", "Prisma", "Socket.io"],
      features: ["Real-time collaboration", "Task assignments", "Progress tracking", "Team chat"],
      link: "https://github.com/dev/taskmanager",
      demo: "https://taskmanager-demo.com",
    },
    {
      id: "portfolio",
      title: "Portfolio Website",
      description: "Personal portfolio showcasing projects and skills",
      status: "Completed",
      tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
      features: ["Responsive design", "Dark mode", "Contact form", "Blog integration"],
      link: "https://github.com/dev/portfolio",
      demo: "https://portfolio-demo.com",
    },
  ]

  const skills = {
    Frontend: ["React", "Next.js", "JavaScript", "Tailwind CSS", "Vite"],
    Backend: ["Node.js", "Express", "MongoDB", " REST APIs", "MySQL"],
    Tools: ["Git", "Docker", "AWS", "Azure", "VS Code"],
    "Currently Learning": ["Terraform", "React Native", "Kubernetes"],
  }

  return (
    <div className="min-h-screen bg-black text-gray-100 flex flex-col lg:flex-row">
      {/* Mobile Header */}
      <div className="lg:hidden bg-gray-900 border-b border-gray-800 p-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-linear-to-br from-orange-600 to-red-600 rounded-lg flex items-center justify-center">
            <Code className="w-4 h-4 text-white" />
          </div>
          <div>
            <h1 className="font-semibold text-gray-100 text-sm">raj goud</h1>
            <p className="text-xs text-gray-400">Full Stack Developer</p>
          </div>
        </div>
        <button
          onClick={toggleMobileMenu}
          className="p-2 rounded-lg text-gray-400 hover:text-gray-200 hover:bg-gray-800/50 transition-colors"
        >
          {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && <div className="lg:hidden fixed inset-0 bg-black/50 z-40" onClick={toggleMobileMenu}></div>}

      {/* Sidebar */}
      <div
        className={
          isMobileMenuOpen
            ? "fixed inset-y-0 left-0 z-50 w-64 bg-gray-900 border-r border-gray-800 shrink-0 transform translate-x-0 transition-transform duration-300 lg:relative lg:translate-x-0"
            : "fixed inset-y-0 left-0 z-50 w-64 bg-gray-900 border-r border-gray-800 shrink-0 transform -translate-x-full transition-transform duration-300 lg:relative lg:translate-x-0"
        }
      >
        {/* Desktop Header */}
        <div className="hidden lg:block p-6 border-b border-gray-800">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-linear-to-br from-orange-600 to-red-600 rounded-lg flex items-center justify-center">
              <Code className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="font-semibold text-gray-100">Raj Goud</h1>
              <p className="text-sm text-gray-400">Full Stack Developer</p>
            </div>
          </div>
        </div>

        <nav className="p-4 flex-1">
          {sidebarItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleSectionChange(item.id)}
              className={
                activeSection === item.id
                  ? "w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors bg-linear-to-r from-orange-900/50 to-red-900/50 text-orange-200 border border-orange-800/50 mb-1"
                  : "w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors text-gray-400 hover:text-gray-200 hover:bg-gray-800/50 mb-1"
              }
            >
              {item.icon}
              <span className="text-sm">{item.label}</span>
            </button>
          ))}
        </nav>

        <div className="p-4 border-t border-gray-800">
          <div className="flex items-center space-x-2 text-sm">
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
            <span className="text-gray-400">Available for work</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <div className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8">
          {/* Overview Section */}
          {activeSection === "overview" && (
            <div className="space-y-6 sm:space-y-8">
              <div>
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-linear-to-r from-orange-400 to-red-400 bg-clip-text text-transparent mb-2">
                 Raj Goud
                </h1>
                <p className="text-lg sm:text-xl text-gray-400 mb-4 sm:mb-6">Full Stack Developer & DevOps Engineer</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
                  <div className="bg-gray-900 border border-gray-800 rounded-lg p-4 sm:p-6 hover:border-orange-800/50 transition-colors">
                    <div className="flex items-center space-x-3 mb-3">
                      <MapPin className="w-5 h-5 text-orange-400" />
                      <span className="text-gray-300">Location</span>
                    </div>
                    <p className="text-gray-100">Indore, MP</p>
                  </div>

                  <div className="bg-gray-900 border border-gray-800 rounded-lg p-4 sm:p-6 hover:border-orange-800/50 transition-colors">
                    <div className="flex items-center space-x-3 mb-3">
                      <Clock className="w-5 h-5 text-orange-400" />
                      <span className="text-gray-300">Experience</span>
                    </div>
                    <p className="text-gray-100">0+ Years</p>
                  </div>

                  <div className="bg-gray-900 border border-gray-800 rounded-lg p-4 sm:p-6 hover:border-emerald-800/50 transition-colors sm:col-span-2 lg:col-span-1">
                    <div className="flex items-center space-x-3 mb-3">
                      <CheckCircle className="w-5 h-5 text-emerald-500" />
                      <span className="text-gray-300">Status</span>
                    </div>
                    <p className="text-emerald-400">Available</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-900 border border-gray-800 rounded-lg p-4 sm:p-6 hover:border-orange-800/30 transition-colors">
                <h2 className="text-lg sm:text-xl font-semibold text-gray-100 mb-4 flex items-center">
                  <Zap className="w-5 h-5 text-orange-400 mr-2" />
                  Quick Stats
                </h2>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                  <div className="text-center p-3 sm:p-4 bg-gray-800/50 rounded-lg">
                    <div className="text-xl sm:text-2xl font-bold text-orange-400">15+</div>
                    <div className="text-xs sm:text-sm text-gray-400">Projects</div>
                  </div>
                  <div className="text-center p-3 sm:p-4 bg-gray-800/50 rounded-lg">
                    <div className="text-xl sm:text-2xl font-bold text-red-400">0+</div>
                    <div className="text-xs sm:text-sm text-gray-400">Years Exp</div>
                  </div>
                  <div className="text-center p-3 sm:p-4 bg-gray-800/50 rounded-lg">
                    <div className="text-xl sm:text-2xl font-bold text-orange-400">30+</div>
                    <div className="text-xs sm:text-sm text-gray-400">Commits/Month</div>
                  </div>
                  <div className="text-center p-3 sm:p-4 bg-gray-800/50 rounded-lg">
                    <div className="text-xl sm:text-2xl font-bold text-emerald-400">98%</div>
                    <div className="text-xs sm:text-sm text-gray-400">Client Satisfaction</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* About Section */}
          {activeSection === "about" && (
            <div className="space-y-6 sm:space-y-8">
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold bg-linear-to-r from-orange-400 to-red-400 bg-clip-text text-transparent mb-4 sm:mb-6">
                  About Me
                </h1>

                <div className="bg-gray-900 border border-gray-800 rounded-lg p-4 sm:p-6 mb-4 sm:mb-6 hover:border-orange-800/30 transition-colors">
                  <p className="text-gray-300 leading-relaxed mb-4">
                    {
                      "I'm a passionate full-stack developer with experience of building web applications. I love creating clean, efficient code and beautiful user interfaces that solve real-world problems."
                    }
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    {
                      "When I'm not coding, you can find me exploring new technologies. My journey in technology started with web development, and my curiosity led me to explore cloud computing. Now, I combine both skills to create efficient, scalable, and secure solutions.."
                    }
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
                  <div className="bg-gray-900 border border-gray-800 rounded-lg p-4 sm:p-6 hover:border-orange-800/30 transition-colors">
                    <h3 className="text-lg font-semibold text-gray-100 mb-4 flex items-center">
                      <BookOpen className="w-5 h-5 mr-2 text-orange-400" />
                      Education
                    </h3>
                    <div className="space-y-3">
                      <div className="p-3 bg-gray-800/50 rounded-lg">
                        <p className="font-medium text-gray-200">B.Tech Computer Science</p>
                        <p className="text-sm text-orange-300">Jawaharlal institute of technology, Borawan</p>
                        <p className="text-sm text-gray-500">2022 - 2026</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-900 border border-gray-800 rounded-lg p-4 sm:p-6 hover:border-orange-800/30 transition-colors">
                    <h3 className="text-lg font-semibold text-gray-100 mb-4 flex items-center">
                      <Award className="w-5 h-5 mr-2 text-amber-400" />
                      Achievements
                    </h3>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2 p-2 bg-gray-800/30 rounded">
                        <Star className="w-4 h-4 text-amber-400" />
                        <span className="text-sm text-gray-300">Top 1% on Stack Overflow</span>
                      </div>
                      <div className="flex items-center space-x-2 p-2 bg-gray-800/30 rounded">
                        <Star className="w-4 h-4 text-amber-400" />
                        <span className="text-sm text-gray-300">Open Source Contributor</span>
                      </div>
                      <div className="flex items-center space-x-2 p-2 bg-gray-800/30 rounded">
                        <Star className="w-4 h-4 text-amber-400" />
                        <span className="text-sm text-gray-300">Hackathon Winner 2023</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Projects Section */}
          {activeSection === "projects" && (
            <div className="space-y-4 sm:space-y-6">
              <h1 className="text-2xl sm:text-3xl font-bold bg-linear-to-r from-orange-400 to-red-400 bg-clip-text text-transparent mb-4 sm:mb-6">
                Projects
              </h1>

              {projects.map((project) => (
                <div
                  key={project.id}
                  className="bg-gray-900 border border-gray-800 rounded-lg hover:border-orange-800/30 transition-colors"
                >
                  <div className="p-4 sm:p-6 cursor-pointer" onClick={() => toggleProject(project.id)}>
                    <div className="flex items-start justify-between">
                      <div className="flex items-start space-x-3 sm:space-x-4 flex-1">
                        <ChevronRight
                          className={
                            expandedProjects.includes(project.id)
                              ? "w-5 h-5 text-orange-400 transition-transform rotate-90 mt-0.5 shrink-0"
                              : "w-5 h-5 text-orange-400 transition-transform mt-0.5 shrink-0"
                          }
                        />
                        <div className="flex-1 min-w-0">
                          <h3 className="text-lg font-semibold text-gray-100 mb-1">{project.title}</h3>
                          <p className="text-gray-400 text-sm sm:text-base">{project.description}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3 ml-3">
                        <span
                          className={
                            project.status === "Completed"
                              ? "px-2 sm:px-3 py-1 rounded-full text-xs font-medium bg-emerald-900/50 text-emerald-300 border border-emerald-800/50 whitespace-nowrap"
                              : "px-2 sm:px-3 py-1 rounded-full text-xs font-medium bg-amber-900/50 text-amber-300 border border-amber-800/50 whitespace-nowrap"
                          }
                        >
                          {project.status}
                        </span>
                      </div>
                    </div>
                  </div>

                  {expandedProjects.includes(project.id) && (
                    <div className="px-4 sm:px-6 pb-4 sm:pb-6 border-t border-gray-800">
                      <div className="pt-4 space-y-4">
                        <div>
                          <h4 className="text-sm font-medium text-orange-300 mb-2">Tech Stack</h4>
                          <div className="flex flex-wrap gap-2">
                            {project.tech.map((tech) => (
                              <span
                                key={tech}
                                className="px-2 sm:px-3 py-1 bg-orange-900/30 text-orange-200 rounded-full text-xs border border-orange-800/50"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h4 className="text-sm font-medium text-orange-300 mb-2">Key Features</h4>
                          <ul className="space-y-1">
                            {project.features.map((feature, index) => (
                              <li key={index} className="flex items-start space-x-2 text-sm text-gray-400">
                                <Circle className="w-3 h-3 text-orange-400 mt-0.5 shrink-0" />
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 pt-2">
                          <a
                            href={project.link}
                            className="flex items-center justify-center space-x-2 text-sm text-orange-300 hover:text-orange-200 transition-colors px-3 py-2 bg-orange-900/20 rounded-lg border border-orange-800/30"
                          >
                            <Github className="w-4 h-4" />
                            <span>View Code</span>
                          </a>
                          <a
                            href={project.demo}
                            className="flex items-center justify-center space-x-2 text-sm text-red-300 hover:text-red-200 transition-colors px-3 py-2 bg-red-900/20 rounded-lg border border-red-800/30"
                          >
                            <ExternalLink className="w-4 h-4" />
                            <span>Live Demo</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Skills Section */}
          {activeSection === "skills" && (
            <div className="space-y-4 sm:space-y-6">
              <h1 className="text-2xl sm:text-3xl font-bold bg-linear-to-r from-orange-400 to-red-400 bg-clip-text text-transparent mb-4 sm:mb-6">
                Skills & Tools
              </h1>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
                {Object.entries(skills).map(([category, skillList]) => (
                  <div
                    key={category}
                    className="bg-gray-900 border border-gray-800 rounded-lg p-4 sm:p-6 hover:border-orange-800/30 transition-colors"
                  >
                    <h3 className="text-lg font-semibold text-gray-100 mb-4 flex items-center">
                      <Zap className="w-5 h-5 mr-2 text-orange-400" />
                      {category}
                    </h3>
                    <div className="space-y-3">
                      {skillList.map((skill) => (
                        <div key={skill} className="flex items-center justify-between p-2 bg-gray-800/30 rounded-lg">
                          <span className="text-gray-300 text-sm sm:text-base">{skill}</span>
                          <div className="flex space-x-1">
                            {[...Array(5)].map((_, i) => (
                              <div
                                key={i}
                                className={
                                  i < (category === "Currently Learning" ? 2 : 4)
                                    ? "w-2 h-2 rounded-full transition-colors bg-linear-to-r from-orange-500 to-red-500"
                                    : "w-2 h-2 rounded-full transition-colors bg-gray-700"
                                }
                              />
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Experience Section */}
          {activeSection === "experience" && (
            <div className="space-y-4 sm:space-y-6">
              <h1 className="text-2xl sm:text-3xl font-bold bg-linear-to-r from-orange-400 to-red-400 bg-clip-text text-transparent mb-4 sm:mb-6">
                Certification
              </h1>

              <div className="space-y-4 sm:space-y-6">
                <div className="bg-gray-900 border border-gray-800 rounded-lg p-4 sm:p-6 hover:border-orange-800/30 transition-colors">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                    <div className="mb-2 sm:mb-0">
                      <h3 className="text-lg font-semibold text-gray-100">Ultimate AWS certified cloud practitioner</h3>
                      <p className="text-orange-300">From Udemy</p>
                    </div>
                    <span className="text-sm text-gray-500 bg-gray-800/50 px-3 py-1 rounded-full self-start">
                      2025 - Present
                    </span>
                  </div>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start space-x-2 p-2 bg-gray-800/30 rounded">
                      <Circle className="w-3 h-3 mt-2 shrink-0 text-orange-400" />
                      <span className="text-sm sm:text-base">
                        Gained hands on understanding of AWS global infrastructure and core services (EC2, S3, RDS, Lambda, VPC).
                      </span>
                    </li>
                    <li className="flex items-start space-x-2 p-2 bg-gray-800/30 rounded">
                      <Circle className="w-3 h-3 mt-2 shrink-0 text-orange-400" />
                      <span className="text-sm sm:text-base">
                        earned about cloud deployment models, cost management, and AWS security best practices.
                      </span>
                    </li>
                    <li className="flex items-start space-x-2 p-2 bg-gray-800/30 rounded">
                      <Circle className="w-3 h-3 mt-2 shrink-0 text-orange-400" />
                      <span className="text-sm sm:text-base">
                      Practiced resource management via AWS Console and CLI.
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gray-900 border border-gray-800 rounded-lg p-4 sm:p-6 hover:border-orange-800/30 transition-colors">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                    <div className="mb-2 sm:mb-0">
                      <h3 className="text-lg font-semibold text-gray-100">Full Stack Developer</h3>
                      <p className="text-orange-300">From GeekForGeeks</p>
                    </div>
                    <span className="text-sm text-gray-500 bg-gray-800/50 px-3 py-1 rounded-full self-start">
                      2024 - 2025 
                    </span>
                  </div>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start space-x-2 p-2 bg-gray-800/30 rounded">
                      <Circle className="w-3 h-3 mt-2 shrink-0 text-red-400" />
                      <span className="text-sm sm:text-base">
                        Built and maintained full-stack web applications using React and Node.js
                      </span>
                    </li>
                    <li className="flex items-start space-x-2 p-2 bg-gray-800/30 rounded">
                      <Circle className="w-3 h-3 mt-2 shrink-0 text-red-400" />
                      <span className="text-sm sm:text-base">
                        Collaborated with design team to implement pixel-perfect UI components
                      </span>
                    </li>
                    <li className="flex items-start space-x-2 p-2 bg-gray-800/30 rounded">
                      <Circle className="w-3 h-3 mt-2 shrink-0 text-red-400" />
                      <span className="text-sm sm:text-base">
                        Integrated third-party APIs and payment processing systems
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* Contact Section */}
          {activeSection === "contact" && (
            <div className="space-y-4 sm:space-y-6">
              <h1 className="text-2xl sm:text-3xl font-bold bg-linear-to-r from-orange-400 to-red-400 bg-clip-text text-transparent mb-4 sm:mb-6">
                Get In Touch
              </h1>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
                <div className="bg-gray-900 border border-gray-800 rounded-lg p-4 sm:p-6 hover:border-orange-800/30 transition-colors">
                  <h3 className="text-lg font-semibold text-gray-100 mb-4 flex items-center">
                    <Mail className="w-5 h-5 mr-2 text-orange-400" />
                    Contact Information
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3 p-3 bg-gray-800/30 rounded-lg">
                      <Mail className="w-5 h-5 text-orange-400 shrink-0" />
                      <span className="text-gray-300 text-sm sm:text-base break-all">rajgoud242@gmail.com</span>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-gray-800/30 rounded-lg">
                      <Phone className="w-5 h-5 text-orange-400 shrink-0" />
                      <span className="text-gray-300 text-sm sm:text-base">+91 9109275566</span>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-gray-800/30 rounded-lg">
                      <MapPin className="w-5 h-5 text-orange-400 shrink-0" />
                      <span className="text-gray-300 text-sm sm:text-base">Indore, MP</span>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-gray-800/30 rounded-lg">
                      <Calendar className="w-5 h-5 text-emerald-400 shrink-0" />
                      <span className="text-gray-300 text-sm sm:text-base">Available for new projects</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-900 border border-gray-800 rounded-lg p-4 sm:p-6 hover:border-orange-800/30 transition-colors">
                  <h3 className="text-lg font-semibold text-gray-100 mb-4 flex items-center">
                    <Users className="w-5 h-5 mr-2 text-red-400" />
                    Social Links
                  </h3>
                  <div className="space-y-4">
                    <a
                      href="#"
                      className="flex items-center space-x-3 text-gray-300 hover:text-orange-300 transition-colors p-3 bg-gray-800/30 rounded-lg hover:bg-orange-900/20"
                    >
                      <Github className="w-5 h-5 shrink-0" />
                      <span className="text-sm sm:text-base break-all">github.com/hiteshchoudhary</span>
                    </a>
                    <a
                      href="#"
                      className="flex items-center space-x-3 text-gray-300 hover:text-orange-300 transition-colors p-3 bg-gray-800/30 rounded-lg hover:bg-orange-900/20"
                    >
                      <Linkedin className="w-5 h-5 shrink-0" />
                      <span className="text-sm sm:text-base break-all">linkedin.com/in/hiteshchoudhary</span>
                    </a>
                    <a
                      href="#"
                      className="flex items-center space-x-3 text-gray-300 hover:text-orange-300 transition-colors p-3 bg-gray-800/30 rounded-lg hover:bg-orange-900/20"
                    >
                      <Twitter className="w-5 h-5 shrink-0" />
                      <span className="text-sm sm:text-base break-all">twitter.com/hiteshdotcom</span>
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-gray-900 border border-gray-800 rounded-lg p-4 sm:p-6 hover:border-orange-800/30 transition-colors">
                <h3 className="text-lg font-semibold text-gray-100 mb-4 flex items-center">
                  <Clock className="w-5 h-5 mr-2 text-emerald-400" />
                  Availability
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-emerald-900/20 rounded-lg border border-emerald-800/30">
                    <div className="text-lg font-semibold text-emerald-400">Available</div>
                    <div className="text-sm text-gray-400">For new projects</div>
                  </div>
                  <div className="text-center p-4 bg-orange-900/20 rounded-lg border border-orange-800/30">
                    <div className="text-lg font-semibold text-orange-400">24 hours</div>
                    <div className="text-sm text-gray-400">Response time</div>
                  </div>
                  <div className="text-center p-4 bg-red-900/20 rounded-lg border border-red-800/30 sm:col-span-2 lg:col-span-1">
                    <div className="text-lg font-semibold text-red-400">Remote</div>
                    <div className="text-sm text-gray-400">Work preference</div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}