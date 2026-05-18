import { useRef, useState } from "react";
import style from "./aboutvideo.module.scss";

const AboutVideo = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleVideoPlay = () => {
    if (videoRef.current) {
      setIsPlaying(true);
      videoRef.current.play();
    }
  };

  const handleVideoEnd = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
      setIsPlaying(false);
    }
  };

  return (
    <div className={style.videoblock}>
      <video
        src="./image/about/video-file.mp4"
        ref={videoRef}
        className={style.video}
        onEnded={handleVideoEnd}
        controls
      ></video>
      <div
        style={{
          opacity: isPlaying ? 0 : 1,
          pointerEvents: isPlaying ? "none" : "auto", 
          transition: "opacity 0.5s ease",
        }}
      >
        <img
          src="./image/about/video.png"
          alt="постер"
          className={style.poster}
        />
        <img
          src="./image/about/video-play.svg"
          className={style.play}
          onClick={handleVideoPlay}
          alt="play button"
        />
      </div>
    </div>
  );
};

export default AboutVideo;