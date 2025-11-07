export default function Projects() {
  const projects = [
    {
      title: 'Interactive 3D Landing',
      subtitle: 'React + Spline',
      description: 'A playful 3D hero with physics interactions and smooth scroll sections.',
      link: '#',
    },
    {
      title: 'Design System Toolkit',
      subtitle: 'React + Tailwind',
      description: 'Composable components with tokens, themes, and accessible primitives.',
      link: '#',
    },
    {
      title: 'Realtime Dashboard',
      subtitle: 'Next.js + WebSockets',
      description: 'Live metrics, charts, and alerts with responsive layouts.',
      link: '#',
    },
  ];

  return (
    <section id="projects" className="max-w-6xl mx-auto px-4 py-16">
      <div className="flex items-end justify-between">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900">Selected Projects</h2>
        <a href="#contact" className="hidden sm:inline-flex text-blue-600 font-medium hover:underline">Get in touch</a>
      </div>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <a key={p.title} href={p.link} className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-700">{p.title}</h3>
              <span className="text-xs font-medium text-blue-700 bg-blue-50 px-2 py-1 rounded-full">{p.subtitle}</span>
            </div>
            <p className="mt-3 text-gray-700">{p.description}</p>
            <div className="mt-4 text-blue-600 font-medium">View project →</div>
          </a>
        ))}
      </div>
    </section>
  );
}
