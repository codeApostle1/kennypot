import ServiceCard from "./ServiceCard";

const Services = () => {
  return (
    <section className="py-24 bg-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            What We Offer
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-gray-600">
            Enjoy our variety of services designed to give you the best dining
            experience.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          <ServiceCard
            title="Dine-In"
            description="Relax and enjoy freshly prepared meals in a warm and welcoming environment."
          />
          <ServiceCard
            title="Takeaway"
            description="Order your favorite dishes and enjoy them wherever you are."
          />
          <ServiceCard
            title="Catering"
            description="Let us handle your events with delicious meals prepared to impress."
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
