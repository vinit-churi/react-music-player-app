import image1 from "@/assets/images/feature-yet-to-be.gif";
const YetToBe = () => {
  return (
    <div>
      <h1 className="m-3 font-bold text-center text-4xl">Working on it. 🥹</h1>
      <img
        className="w-8/10 block my-10 mx-auto rounded-md"
        src={image1}
        alt=""
      />
      {/* <img src={image2} alt="" /> */}
    </div>
  );
};

export default YetToBe;
