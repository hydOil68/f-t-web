const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-secondary/30">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="heading-secondary">About F&T Construction & Supply</h2>
            <p className="text-large">
              With over two decades of experience in the construction industry, F&T Construction & Supply 
              has built a reputation for excellence, reliability, and innovation. We are a full-service 
              construction company dedicated to bringing your vision to life.
            </p>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Our team of skilled professionals combines traditional craftsmanship with modern technology 
              to deliver projects that exceed expectations. From residential renovations to commercial 
              developments, we handle every project with the same level of commitment and attention to detail.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="text-center p-6 bg-card rounded-lg border border-border">
                <div className="text-3xl font-bold text-accent mb-2">20+</div>
                <div className="text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center p-6 bg-card rounded-lg border border-border">
                <div className="text-3xl font-bold text-accent mb-2">500+</div>
                <div className="text-muted-foreground">Projects Completed</div>
              </div>
              <div className="text-center p-6 bg-card rounded-lg border border-border">
                <div className="text-3xl font-bold text-accent mb-2">24/7</div>
                <div className="text-muted-foreground">Customer Support</div>
              </div>
              <div className="text-center p-6 bg-card rounded-lg border border-border">
                <div className="text-3xl font-bold text-accent mb-2">100%</div>
                <div className="text-muted-foreground">Satisfaction Rate</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-accent/10 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-primary mb-6">Why Choose Us?</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-accent-foreground" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-muted-foreground">Licensed and insured professionals</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-accent-foreground" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-muted-foreground">High-quality materials and equipment</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-accent-foreground" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-muted-foreground">Competitive pricing and transparent quotes</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-accent-foreground" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-muted-foreground">On-time project completion guarantee</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;