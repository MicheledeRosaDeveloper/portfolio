import IconTheme from "./IconTheme";

const Navbar = () => {
  return (
    <>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="btn btn-ghost text-2xl" href="">MdR</a>
          </div>
        <div className="flex-none gap-4">
          <a className="btn btn-ghost text-xl">Prova 1</a>
          <a className="btn btn-ghost text-xl">Prova 1</a>
          <a className="btn btn-ghost text-xl">Prova 1</a>
          <a className="btn btn-ghost text-xl">Prova 1</a>
          <IconTheme />
        </div>
      </div>
    </>
  );
};

export default Navbar;
