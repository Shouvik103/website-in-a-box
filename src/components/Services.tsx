
import { Code, Palette, Smartphone, Search, Zap, Shield } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Web Development",
      description: "Custom websites built with modern technologies and best practices for optimal performance.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Beautiful, intuitive designs that provide exceptional user experiences across all devices.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Smartphone,
      title: "Mobile Apps",
      description: "Native and cross-platform mobile applications that engage users on the go.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Search,
      title: "SEO Optimization",
      description: "Improve your search rankings and drive organic traffic with our SEO strategies.",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Lightning-fast websites optimized for speed and user satisfaction.",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: Shield,
      title: "Security",
      description: "Robust security measures to protect your digital assets and user data.",
      color: "from-indigo-500 to-purple-500"
    }
  ];

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Services
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We offer a comprehensive range of digital solutions to help your business 
            thrive in the modern digital landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:shadow-2xl"
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
                {service.title}
              </h3>
              
              <p className="text-gray-300 leading-relaxed">
                {service.description}
              </p>
              
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-blue-500/10 group-hover:via-purple-500/10 group-hover:to-pink-500/10 transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
