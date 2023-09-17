import { Outlet } from "react-router-dom";
import Footer from "@/components/Footer";
import { useDispatch } from "react-redux";
import { checkUserSession } from "@/features/auth/authSlice";
import { useEffect, useRef } from "react";
const Main = () => {
  const dispatch = useDispatch();
  const firstRender = useRef(true);
  checkUserSession(dispatch);
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      checkUserSession(dispatch);
    }
  }, []);
  return (
    <main className="row-start-2 row-end-3 col-start-2 col-end-3 bg-slate-100 max-h-none overflow-x-auto">
      <Outlet />
      <Footer />
    </main>
  );
};

export default Main;
