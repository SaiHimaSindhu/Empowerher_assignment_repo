import { useRef, useState } from "react";

const videosList = [
  "https://www.w3schools.com/html/mov_bbb.mp4",
  "https://www.w3schools.com/html/movie.mp4",
  "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
];

export default function VideoPlayer() {
  const videoRef = useRef(null);

  // OPTIONAL PART
  const [videos] = useState(videosList);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const playVideo = () => {
    videoRef.current.play();
  };

  const pauseVideo = () => {
    videoRef.current.pause();
  };

  const forwardVideo = () => {
    videoRef.current.currentTime += 5;
  };

  const rewindVideo = () => {
    videoRef.current.currentTime -= 5;
  };

  const nextVideo = () => {
    setCurrentVideoIndex((prev) =>
      prev === videos.length - 1 ? 0 : prev + 1
    );
  };

  const previousVideo = () => {
    setCurrentVideoIndex((prev) =>
      prev === 0 ? videos.length - 1 : prev - 1
    );
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Video Player using useRef</h2>

      {/* Video Element */}
      <video
        ref={videoRef}
        width="600"
        src={videos[currentVideoIndex]}
      />

      <div style={{ marginTop: "10px" }}>
        <button onClick={playVideo}>▶ Play</button>
        <button onClick={pauseVideo}>⏸ Pause</button>
        <button onClick={rewindVideo}>⏪ Rewind</button>
        <button onClick={forwardVideo}>⏩ Forward</button>
      </div>

      {/* OPTIONAL PART */}
      <div style={{ marginTop: "10px" }}>
        <button onClick={previousVideo}>⏮ Previous</button>
        <button onClick={nextVideo}>⏭ Next</button>
      </div>
    </div>
  );
}
