import { useEffect, useState } from "react";
import FullScreen from "./fullScreen";
import ContentContainer from "./ContentContainer";
import ImageView from "./imageView";
import VideoView from "./ViedoView";
import { apiFetch } from "../fethData";
import { useFetch } from "../hooks/useFetch";
let content;
export default function Container() {
  let [fullScreen, setFullScreen] = useState(false);
  //custom hook
  let { api, isError, isLoading } = useFetch(apiFetch);
  //
  function openImg() {
    setFullScreen(true);
  }
  function exitFullScreen() {
    setFullScreen(false);
  }

  if (api && api.media_type === "image") {
    content = (
      <ContentContainer>
        <ImageView openImg={openImg} url={api.url} />
      </ContentContainer>
    );
  }

  if (api && api.media_type === "video") {
    content = (
      <ContentContainer>
        <VideoView url={api.url} />
      </ContentContainer>
    );
  }

  return fullScreen ? (
    <FullScreen imgSrc={api.hdurl} exitFullScreen={exitFullScreen} />
  ) : (
    <section className="w-full mt-6 ">
      {!isError ? (
        content
      ) : (
        <p className="text-white text-center text-xl">{isError}</p>
      )}
      {isLoading ? (
        <p className="text-4xl text-center mt-12 text-white">LOADING...</p>
      ) : (
        ""
      )}
      <p className="text-center text-white/70 my-2">{api && api.title}</p>
      <p className="text-center text-white/70 mt-[-14px] mb-2">
        {api && api.date}
      </p>
      {api && api.explanation && (
        <div className="bg-slate-100/90 rounded-xl w-3/4 m-auto">
          <p className="p-2 space-x-2">
            {api && api.explanation}
            <span className="text-sm text-black/50">
              ...NASA API -- copyRights for {api && api.copyright}
            </span>
          </p>
        </div>
      )}
    </section>
  );
}
