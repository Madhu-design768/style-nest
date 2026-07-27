const BrandCard = ({ name }) => {
  return (
    <div className="flex items-center justify-center rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
      <h3 className="text-lg font-semibold tracking-wide text-gray-800">
        {name}
      </h3>
    </div>
  );
};

export default BrandCard;