import helmetIcon from '@/assets/helmet-icon.jpg';
import toolsIcon from '@/assets/tools-icon.jpg';
import blueprintIcon from '@/assets/blueprint-icon.jpg';

const ServicesSection = () => {
  const services = [
    {
      icon: helmetIcon,
      title: "General Construction",
      description: "Complete construction services for residential and commercial projects. From foundation to finishing, we handle every aspect of your build with precision and care."
    },
    {
      icon: toolsIcon,
      title: "Construction Supply",
      description: "Premium quality construction materials and supplies for contractors and DIY enthusiasts. We stock everything you need for your construction projects."
    },
    {
      icon: blueprintIcon,
      title: "Project Planning",
      description: "Comprehensive project planning and management services. Our experienced team ensures your project stays on schedule and within budget from start to finish."
    }
  ];

  return (
    <section id="services" className="section-padding">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="heading-secondary">Our Services</h2>
          <p className="text-large max-w-3xl mx-auto">
            We offer comprehensive construction and supply solutions tailored to meet your specific needs. 
            Our expert team delivers quality results across all aspects of construction.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="service-card text-center">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full overflow-hidden bg-accent/10 flex items-center justify-center">
                <img 
                  src={service.icon} 
                  alt={service.title}
                  className="w-12 h-12 object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-primary mb-4">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              
              <button className="mt-6 text-accent hover:text-highlight font-semibold transition-colors duration-200">
                Learn More →
              </button>
            </div>
          ))}
        </div>

        {/* Additional Services Grid */}
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center p-6 bg-accent/5 rounded-lg border border-accent/20">
            <h4 className="font-semibold text-primary mb-2">Excavation</h4>
            <p className="text-sm text-muted-foreground">Site preparation and earthwork</p>
          </div>
          <div className="text-center p-6 bg-accent/5 rounded-lg border border-accent/20">
            <h4 className="font-semibold text-primary mb-2">Concrete Work</h4>
            <p className="text-sm text-muted-foreground">Foundations, driveways, and more</p>
          </div>
          <div className="text-center p-6 bg-accent/5 rounded-lg border border-accent/20">
            <h4 className="font-semibold text-primary mb-2">Roofing</h4>
            <p className="text-sm text-muted-foreground">Installation and repairs</p>
          </div>
          <div className="text-center p-6 bg-accent/5 rounded-lg border border-accent/20">
            <h4 className="font-semibold text-primary mb-2">Remodeling</h4>
            <p className="text-sm text-muted-foreground">Home and office renovations</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;