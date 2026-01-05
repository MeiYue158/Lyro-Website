
export function ShowcaseSection() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extralight text-white mb-8 leading-tight tracking-[0.05em]">
            The Reality
          </h2>
          <div className="text-gray-300 text-lg leading-relaxed font-light max-w-4xl mx-auto space-y-6">
            <p>
              Medical transportation doesn't break down because drivers are unreliable. It breaks down because systems can't adapt to real-world uncertainty.
            </p>
            <p>
              Schedules are created days in advance. Passengers cancel late or don't show up. Drivers arrive with no confirmation. One change cascades through an entire route.
            </p>
            <p className="text-purple-300 font-medium">
              These are not human failures. They are coordination failures.
            </p>
            <p className="text-xl text-white">
              Lyro is built to absorb that uncertainty — before drivers pay the cost.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
