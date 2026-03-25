 
const ProductCard = () => {
  return (
    <div className="w-[320px] h-[420px] rounded-2xl overflow-hidden shadow-lg relative group">
      
      {/* Background Image */}
      <img
        src="/images/moto-pad.webp" // 👉 replace with your image path
        alt="Moto Pad"
        className="w-full h-full object-cover"
      />

      {/* Overlay (dark gradient for readability) */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

      {/* Content */}
      <div className="absolute bottom-0 p-5 text-white">
        <h2 className="text-xl font-semibold">
          Moto Pad 60 Pro
        </h2>
        <p className="text-lg mt-1">
          From ₹22,999*
        </p>
      </div>

    </div>
  );
};

export default ProductCard;