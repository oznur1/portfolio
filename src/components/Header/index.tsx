import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#0b0d2b]/50 backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-5">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-white text-black font-bold flex items-center justify-center">
            {"</>"}
          </div>
          <span className="font-semibold text-lg">OZNUR</span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-10 text-lg font-medium absolute left-1/2 -translate-x-1/2">
          {["Home","Services","About","Skills","Work","Contact"].map(item => (
            <Link
              key={item}
              to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              className="hover:text-cyan-400 transition"
            >
              {item}
            </Link>
          ))}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-4">

          {/* CV Button (Desktop) */}
          <a
            href="/cv/oznur-oncel-cv.pdf"
            download
            className="
              hidden md:inline-block
              px-6 py-2.5
              rounded-full
              bg-cyan-500
              text-white
              font-medium
              hover:bg-cyan-600
              transition-colors
            "
          >
            Download CV
          </a>

          {/* Hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden flex flex-col gap-1"
          >
            <span className={`w-6 h-0.5 bg-white transition ${open && "rotate-45 translate-y-1.5"}`} />
            <span className={`w-6 h-0.5 bg-white transition ${open && "opacity-0"}`} />
            <span className={`w-6 h-0.5 bg-white transition ${open && "-rotate-45 -translate-y-1.5"}`} />
          </button>

        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <nav className="md:hidden bg-[#20267a] py-6 flex flex-col items-center gap-6">
          {["Home","Services","Resume","Works","Skills","Contact"].map(item => (
            <Link
              key={item}
              to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              onClick={() => setOpen(false)}
            >
              {item}
            </Link>
          ))}

          {/* CV Button (Mobile) */}
          <a
            href="/cv/oznur-cv.pdf"
            download
            className="
              mt-4
              px-8 py-3
              rounded-full
              bg-cyan-500
              text-white
              font-medium
            "
          >
            Download CV
          </a>
        </nav>
      )}
    </header>
  );
};

export default Header;
