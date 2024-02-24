export interface StoreAuthI {
  email: string;
  password: string;
  authenticated: boolean;
}

export interface VideoItemI {
  id: {
    videoId: string;
  };
  snippet: {
    title: string;
    description: string;
    thumbnails: { medium: { url: string } };
    publishedAt: Date;
    channelTitle: string;
    channelId: string;
  };
  contentDetails: { upload: { videoId: string } };
}

export interface InitialStateI {
  videos: VideoItemI[];
  selectedVideo: VideoItemI | null;
  searchTerm: string;
  error: string | null;
}
