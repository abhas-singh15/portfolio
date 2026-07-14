export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-primary/80 backdrop-blur border-b border-gray-800 z-50">
      <div className="max-w-7xl mx-auto w-full px-6 py-4 flex items-center justify-between">
        <a href="/" className="font-bold text-2xl">
          ABHAS KUMAR
        </a>

        <div className="flex gap-8 text-sm">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </nav>
  );
}