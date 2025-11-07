export default function About() {
  return (
    <section id="about" className="max-w-6xl mx-auto px-4 py-16">
      <div className="grid md:grid-cols-2 gap-10 items-start">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900">About Me</h2>
          <p className="mt-4 text-gray-700 leading-relaxed">
            I’m a developer focused on building delightful, high-performance interfaces. I combine design thinking with robust engineering to craft modern digital products.
          </p>
          <p className="mt-4 text-gray-700 leading-relaxed">
            My toolbox includes React, TypeScript, Tailwind, and modern backend APIs. I love motion, 3D interactions, and creating experiences that feel playful yet purposeful.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {['React', 'TypeScript', 'Tailwind', 'Framer Motion', 'Node.js'].map((tag) => (
              <span key={tag} className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-800">
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 border border-gray-200 rounded-2xl p-6">
          <h3 className="text-lg font-semibold text-gray-900">Highlights</h3>
          <ul className="mt-4 space-y-3 text-gray-700">
            <li>• 5+ years building interactive web apps</li>
            <li>• Strong UI/UX sensibilities and accessibility-first</li>
            <li>• Experience with 3D, data viz, and design systems</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
