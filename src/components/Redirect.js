import { useEffect } from "react";
import { useParams } from "react-router-dom";

export default function Redirect() {
  const { shortUrl } = useParams();

  useEffect(() => {
    window.location.href = `${process.env.REACT_APP_API_BASE_URL}/urls/open/${shortUrl}`;
  }, [shortUrl]);

  return <></>;
}
