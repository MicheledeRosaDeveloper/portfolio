import IconTheme from "./IconTheme";

const Navbar = () => {

  return (
    <>
      <div className="navbar sticky top-0 z-50 bg-base-100  w-full">
        <div className="flex-1">
          <a className="btn btn-ghost text-2xl" href="">
            MdR
          </a>
        </div>
        <div className="flex-none gap-4">
          <a href="#project" className="btn btn-ghost text-xl">Progetti</a>
          <a href="#work" className="btn btn-ghost text-xl">Esperienza</a>
          <a href="#contact" className="btn btn-ghost text-xl">Contattami</a>
          <a className="btn btn-outline text-lg btn-accent" href="files/Michele_de_Rosa_CV.pdf" download="Michele_de_Rosa_CV.pdf">
            Download CV
          </a>
          <IconTheme />
        </div>
      </div>
    </>
  );
};

export default Navbar;
