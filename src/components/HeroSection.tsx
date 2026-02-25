
import heroImg from "../assets/HeroImage.jpeg";

const HeroSection = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      
      {/* Background Image */}
      <img
        src={heroImg}
        alt="Indian Smart Transport"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/40"></div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-4xl px-6 md:px-16 text-white space-y-8">

          {/* Subtitle */}
          <h4 className="text-orange-400 uppercase tracking-widest text-sm md:text-base font-medium">
            Powering the Digital Backbone of Transportation
          </h4>

          {/* Main Heading */}
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
            Integrated Intelligent Mobility Infrastructure
            <span className="text-orange-500 block mt-2">
              Driving Road Safety & Real-Time Transport Governance
            </span>
          </h2>

          {/* Button */}
          <div>
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-md font-semibold transition duration-300 shadow-lg">
              Explore More
            </button>
          </div>

        </div>
      </div>

    </section>
  );
};

export default HeroSection;
