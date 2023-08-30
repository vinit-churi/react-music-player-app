import { Outlet } from "react-router-dom";
const Main = () => {
  return (
    <main className="row-start-2 row-end-3 col-start-2 col-end-3 bg-slate-100 max-h-none overflow-x-auto">
      <Outlet />
      <footer>footer</footer>
    </main>
  );
};

export default Main;
