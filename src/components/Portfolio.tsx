
import { ExternalLink, Github } from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Modern online store with advanced filtering and payment integration",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600",
      tags: ["React", "Node.js", "Stripe"],
      gradient: "from-blue-500 to-purple-600"
    },
    {
      title: "Healthcare Dashboard",
      description: "Analytics dashboard for healthcare professionals with real-time data",
      image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=600",
      tags: ["Vue.js", "D3.js", "Python"],
      gradient: "from-green-500 to-teal-600"
    },
    {
      title: "Mobile Banking App",
      description: "Secure mobile banking application with biometric authentication",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600",
      tags: ["React Native", "Node.js", "MongoDB"],
      gradient: "from-purple-500 to-pink-600"
    },
    {
      title: "Real Estate Platform",
      description: "Property listing platform with virtual tours and mortgage calculator",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600",
      tags: ["Next.js", "PostgreSQL", "AWS"],
      gradient: "from-orange-500 to-red-600"
    },
    {
      title: "Social Media App",
      description: "Community-driven social platform with advanced privacy controls",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600",
      tags: ["React", "GraphQL", "Redis"],
      gradient: "from-indigo-500 to-blue-600"
    },
    {
      title: "Learning Management System",
      description: "Educational platform with interactive courses and progress tracking",
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=600",
      tags: ["Angular", "Django", "PostgreSQL"],
      gradient: "from-yellow-500 to-orange-600"
    }
  ];

  return (
    <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Portfolio
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our latest projects and see how we've helped businesses 
            transform their digital presence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:scale-105 transition-all duration-500"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-60 group-hover:opacity-40 transition-opacity duration-300`} />
                
                <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors">
                    <ExternalLink className="w-4 h-4 text-white" />
                  </button>
                  <button className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors">
                    <Github className="w-4 h-4 text-white" />
                  </button>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 text-xs font-medium bg-white/10 text-gray-300 rounded-full border border-white/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
