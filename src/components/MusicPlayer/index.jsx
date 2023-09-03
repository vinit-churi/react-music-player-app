const MusicPlayer = () => {
  return (
    <div className="row-start-3 row-end-4 col-start-2 col-end-4 relative bg-slate-100">
      <input
        type="range"
        name="music time seekBar"
        id="playerTime"
        disabled={true}
        className="absolute top-0 left-0 right-0 mx-0 translate-y-[-50%] player-custom-range"
      />
    </div>
  );
};

export default MusicPlayer;
