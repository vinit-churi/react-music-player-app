const NavUserProfile = () => {
  let user = null;
  return (
    <div>
      {user ? (
        <div aria-label="user profile dropdown"></div>
      ) : (
        <button>login / Sign-up</button>
      )}
    </div>
  );
};

export default NavUserProfile;
