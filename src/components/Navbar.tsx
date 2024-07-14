import IconTheme from "./IconTheme";

const Navbar = () => {
  return (
    <>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="btn btn-ghost text-2xl" href="">MdR</a>
          </div>
        <div className="flex-none gap-4">
          <a className="btn btn-ghost text-xl">Progetti</a>
          <a className="btn btn-ghost text-xl">Esperienza</a>
          <a className="btn btn-ghost text-xl">Skill</a>
          <a className="btn btn-ghost text-xl">Contattami</a>
          <button className="btn btn-outline btn-accent">Download CV</button>

          <IconTheme />
        </div>
      </div>
    </>
  );
};

export default Navbar;
