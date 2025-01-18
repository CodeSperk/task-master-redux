import { ModeToggle } from "../Dark-Light/mode-toggle";

const Navbar = () => {
  return (
    <div className="flex justify-between gap-20 py-6">
      <a href="/">
      <h3 className="text-2xl font-bold"><span className="text-yellow-500">Task</span>Master</h3>
      </a>

      <ul className="flex gap-4 text-xl font-semibold">
        <li><a href="/">Tasks</a></li>
        <li><a href="/users">Users</a></li>
      </ul>

      <ModeToggle/>
      
    </div>
  );
};

export default Navbar;