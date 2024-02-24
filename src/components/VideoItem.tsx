import { VideoItemI } from "../interfaces/common";
import { changeSelectedVideo } from "../store";
import { useAppDispatch } from "../store/hooks";

interface VideoItemPropsI {
  video: VideoItemI;
  isSearch: boolean;
}

const VideoItem = ({ video, isSearch }: VideoItemPropsI) => {
  const dispatch = useAppDispatch();

  const videoSelectHandler = (video: VideoItemI) => {
    dispatch(changeSelectedVideo(video));
  };
  return (
    <div
      onClick={() => videoSelectHandler(video)}
      className={`flex ${
        isSearch ? "flex-row  gap-8" : "flex-col gap-2 max-w-[240px]"
      }  items-center cursor-pointer mb-2  `}
    >
      <img
        src={video.snippet.thumbnails.medium.url}
        alt={video.snippet.title}
        className="rounded-md w-full max-w-[240px]"
      />
      <div className="w-auto">
        <div className={`text-wrap ${isSearch ? "text-base" : " text-sm "}`}>
          {video.snippet.title}
        </div>
      </div>
    </div>
  );
};

export default VideoItem;
