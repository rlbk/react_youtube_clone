import { useAppSelector } from "../store/hooks";
import VideoItem from "./VideoItem";

const VideoList = () => {
  const videos = useAppSelector((state) => state.youtubeApp.videos);
  const isSearch = !!useAppSelector((state) => state.youtubeApp.searchTerm);
  const isSelectedVideo = !!useAppSelector(
    (state) => state.youtubeApp.selectedVideo
  );

  const renderList = videos.map((video) => (
    <VideoItem
      video={video}
      key={video.id.videoId}
      isSearch={isSearch && !isSelectedVideo}
    />
  ));
  return (
    <div
      className={`flex ${
        isSearch || isSelectedVideo ? "flex-col" : "flex-row gap-4  flex-wrap"
      } mx-8 h-screen overflow-y-auto overflow-x-hidden
      `}
    >
      {videos.length ? (
        renderList
      ) : (
        <div className="flex items-center justify-center w-full">
          <h1 className="font-bold text-xl">Loading...</h1>
        </div>
      )}
    </div>
  );
};

export default VideoList;
