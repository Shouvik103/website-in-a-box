
import { Heart, Github, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" },
  ];

  const footerLinks = [
    {
      title: "Services",
      links: ["Web Development", "UI/UX Design", "Mobile Apps", "SEO"]
    },
    {
      title: "Company",
      links: ["About Us", "Our Team", "Careers", "Blog"]
    },
    {
      title: "Support",
      links: ["Contact", "FAQ", "Help Center", "Terms"]
    }
  ];

  return (
    <footer className="bg-black/40 backdrop-blur-sm border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Studio
              </span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Creating exceptional digital experiences that drive results and inspire audiences. 
              Let's build something amazing together.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                >
                  <social.icon className="w-5 h-5 text-gray-300 hover:text-white" />
                </a>
              ))}
            </div>
          </div>

          {footerLinks.map((section, index) => (
            <div key={index}>
              <h3 className="text-white font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-white transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm">
            © 2024 Studio. All rights reserved.
          </p>
          <div className="flex items-center text-gray-300 text-sm mt-4 md:mt-0">
            Made with <Heart className="w-4 h-4 text-red-400 mx-1" /> by Studio Team
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
