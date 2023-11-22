export default function FullScreen({ imgSrc, exitFullScreen }) {
  return (
    <div
      onClick={exitFullScreen}
      className="m-auto mt-2 w-[100%] flex justify-center content-center">
      <img
        src={imgSrc}
        className="xs:w-[80%] sm:w-[80%] lg:w-[55%] cursor-zoom-out"
        alt="NoHdImage"
        onClick={exitFullScreen}
      />
    </div>
  );
}
