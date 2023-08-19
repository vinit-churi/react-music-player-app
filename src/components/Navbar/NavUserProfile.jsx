const NavUserProfile = () => {
  let user = null;
  return (
    <div className="flex items-center">
      {user ? (
        <div aria-label="user profile dropdown"></div>
      ) : (
        <button className="h-10 rounded-full border-2 border-slate-700 px-5 bg-yellow-200 mx-5">
          login / Sign-up
        </button>
      )}
    </div>
  );
};

export default NavUserProfile;
