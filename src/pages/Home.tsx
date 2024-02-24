import { useEffect } from "react";
import VideoDetail from "../components/VideoDetail";
import VideoList from "../components/VideoList";
import { clearVideos } from "../store";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { getAllVideos } from "../store/reducers/getAllVideos";
import NavBar from "../components/NavBar";

const Home = () => {
  const searchTerm = useAppSelector((state) => state.youtubeApp.searchTerm);
  const video = useAppSelector((state) => state.youtubeApp.selectedVideo);

  const dispatch = useAppDispatch();
  useEffect(() => {
    return () => {
      dispatch(clearVideos());
    };
  }, [dispatch]);

  useEffect(() => {
    dispatch(getAllVideos({ searchTerm }));
  }, [dispatch, searchTerm]);
  return (
    <div className="h-full">
      <NavBar />
      <div className="flex mt-2 w-full">
        {video && (
          <div className="w-3/4">
            <VideoDetail video={video} />
          </div>
        )}

        <div className={`${video ? "w-1/4" : "w-full"}  `}>
          <VideoList />
        </div>
      </div>
    </div>
  );
};

export default Home;
