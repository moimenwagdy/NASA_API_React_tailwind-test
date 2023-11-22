export default function ImageView({ openImg, url }) {
  return (
    <img
      onClick={openImg}
      src={url}
      alt="NasaImg"
      className="rounded-3xl  py-6 px-4 max-w-[75%] max-h-[100%] cursor-zoom-in"></img>
  );
}
