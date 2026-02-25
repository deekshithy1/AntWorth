

interface CardProps {
  title: string;
  image: string;
}

const CardSolution = ({ title, image }: CardProps) => {
  return (
    <div className="relative w-1/5 rounded-2xl overflow-hidden shadow-lg group">

      {/* Image Wrapper */}
      <div className="w-full h-[400px] md:h-[320px] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
      </div>

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent"></div>

      {/* Content */}
      <div className="absolute bottom-0 w-full px-6 pb-6">

        <h3 className="text-white text-lg md:text-xl font-semibold leading-snug tracking-wide">
          {title}
        </h3>

      </div>

    </div>
  );
};

export default CardSolution;



