
import { Users, Award, Clock, Heart } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Users, number: "150+", label: "Happy Clients" },
    { icon: Award, number: "50+", label: "Projects Completed" },
    { icon: Clock, number: "3+", label: "Years Experience" },
    { icon: Heart, number: "100%", label: "Satisfaction Rate" },
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About Our Studio
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We're a passionate team of designers and developers dedicated to creating 
            exceptional digital experiences that make a lasting impact.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105"
            >
              <stat.icon className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-gray-300">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-bold text-white mb-6">
              Crafting Digital Excellence
            </h3>
            <p className="text-gray-300 mb-6 text-lg leading-relaxed">
              Our journey began with a simple mission: to bridge the gap between 
              creative vision and technical execution. We believe that great design 
              should not only look beautiful but also function flawlessly.
            </p>
            <p className="text-gray-300 mb-8 text-lg leading-relaxed">
              From concept to launch, we work closely with our clients to ensure 
              every project exceeds expectations and delivers measurable results.
            </p>
            <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300">
              Learn More
            </button>
          </div>
          
          <div className="relative">
            <div className="w-full h-96 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-3xl backdrop-blur-sm border border-white/10 flex items-center justify-center">
              <div className="text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Heart className="w-12 h-12 text-white" />
                </div>
                <h4 className="text-2xl font-bold text-white mb-2">Passion Driven</h4>
                <p className="text-gray-300">Every project is a labor of love</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
