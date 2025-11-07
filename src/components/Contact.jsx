export default function Contact() {
  return (
    <section id="contact" className="max-w-6xl mx-auto px-4 py-16">
      <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900">Let’s work together</h2>
        <p className="mt-3 text-gray-700 max-w-2xl">Have a project in mind or just want to say hi? Drop a message below and I’ll get back to you.</p>
        <form className="mt-8 grid gap-4 sm:grid-cols-2">
          <input type="text" name="name" placeholder="Your name" className="w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <input type="email" name="email" placeholder="Email address" className="w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <textarea name="message" placeholder="Message" rows={5} className="sm:col-span-2 w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <div className="sm:col-span-2 flex items-center justify-between">
            <p className="text-sm text-gray-500">I’ll reply within 1–2 business days.</p>
            <button type="submit" className="inline-flex items-center rounded-lg bg-blue-600 text-white px-5 py-2.5 font-medium shadow-sm hover:bg-blue-700 transition-colors">Send Message</button>
          </div>
        </form>
      </div>
      <footer className="mt-10 text-center text-sm text-gray-500">© {new Date().getFullYear()} Your Name — All rights reserved.</footer>
    </section>
  );
}
