function Process() {
  const steps = [
    {
      number: "01",
      title: "Contact Us",
      description: "Reach out to us via WhatsApp or Instagram."
    },
    {
      number: "02",
      title: "Share Your Details",
      description: "Send names, photos, wedding details and preferences."
    },
    {
      number: "03",
      title: "Design & Review",
      description: "We create your invitation and share it for approval."
    },
    {
      number: "04",
      title: "Final Delivery",
      description: "Receive your premium invitation ready to share."
    }
  ];

  return (
    <section className="py-24 bg-[#FDF8F2]">
      <div className="max-w-7xl mx-auto px-8">

        <h2 className="text-5xl font-bold text-center">
          Our Process
        </h2>

        <p className="text-center text-gray-500 mt-4 mb-14">
          A simple and smooth journey from idea to invitation.
        </p>

        <div className="grid md:grid-cols-4 gap-8">

          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 shadow-lg text-center"
            >
              <h1 className="text-5xl font-bold text-[#C8A96A]">
                {step.number}
              </h1>

              <h3 className="mt-6 text-2xl font-bold">
                {step.title}
              </h3>

              <p className="mt-4 text-gray-600">
                {step.description}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Process;