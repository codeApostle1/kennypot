const ServiceCard = ({ title, description }) => {
  return (
    <div className="bg-white rounded-2xl p-8 text-center shadow hover:shadow-lg transition">
      {/* Icon placeholder */}
      <div className="mx-auto mb-6 h-16 w-16 rounded-full bg-red-100 flex items-center justify-center text-red-600 text-2xl font-bold">
        🍽
      </div>

      <h3 className="text-xl font-semibold text-gray-900">
        {title}
      </h3>

      <p className="mt-3 text-gray-600 text-sm">
        {description}
      </p>
    </div>
  );
};

export default ServiceCard;
