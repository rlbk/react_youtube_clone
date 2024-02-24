import { VideoItemI } from "../interfaces/common";

interface PropsI {
  video: VideoItemI;
}

const VideoDetail = ({ video }: PropsI) => {
  if (!video) {
    return <div>Loading..</div>;
  }

  const videosrc = `https://www.youtube.com/embed/${video.id.videoId}?autoplay=1`;

  return (
    <div className="w-ful ">
      <div className="md:h-[70vh] h-[40vh] w-full">
        <iframe
          title="video player"
          src={videosrc}
          className="h-full w-full rounded-md "
        ></iframe>
      </div>
      <div className="mt-2">
        <h4 className="md:text-xl text-base font-semibold capitalize mb-4">
          {video.snippet.title}
        </h4>
        <p className="hidden md:block">{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
