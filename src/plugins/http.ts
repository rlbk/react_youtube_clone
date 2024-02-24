import requestHandler from "./axios";

export const GetRequest = (
  url = "",
  maxResults: number = 5,
  search: string = ""
) => {
  return requestHandler.get(`${url}?maxResults=${maxResults}`, {
    params: { q: search },
  });
};
