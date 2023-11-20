import { getVideo } from "../getVideo";

export default function VideoView({ url }) {
  let vidId = getVideo(url);
  return (
    <iframe
      src={`https://www.youtube.com/embed/${vidId}`}
      allowFullScreen
      title="YouTube video player"
      className="max-w-[80%] max-h-[90%]"></iframe>
  );
}
