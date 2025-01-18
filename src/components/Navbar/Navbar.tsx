const Navbar = () => {
  return (
    <div className="flex gap-20 py-6">
      <a href="/">
      <h3 className="text-2xl font-bold"><span className="text-yellow-500">Task</span>Master</h3>
      </a>

      <ul className="flex gap-4 text-xl font-semibold">
        <li><a href="/">Home</a></li>
        <li><a href="/tasks">Tasks</a></li>
        <li><a href="/users">Users</a></li>
      </ul>
      
    </div>
  );
};

export default Navbar;