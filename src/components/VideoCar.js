import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

import { useEffect, useRef, useState } from "react";

import { hightlightsSlides } from "../components/index_c.js";
import { pauseImg, playImg } from "../helpers/index.js";
import "../styles/Videocar.css";

gsap.registerPlugin(ScrollTrigger);

const VideoCarousel = () => {
  const videoRef = useRef([]);
  const videoSpanRef = useRef([]);
  const videoDivRef = useRef([]);

  const [video, setVideo] = useState({
    startPlay: false,
    videoId: 0,
    isPlaying: false,
  });

  const [loadedData, setLoadedData] = useState([]);
  const { startPlay, videoId, isPlaying } = video;

  useGSAP(() => {
    gsap.to("#slider", {
      transform: `translateX(${-100 * videoId}%)`,
      duration: 2,
      ease: "power2.inOut",
    });

    gsap.to("#video", {
      scrollTrigger: {
        trigger: "#video",
        toggleActions: "restart none none none",
      },
      onComplete: () => {
        setVideo((pre) => ({
          ...pre,
          startPlay: true,
          isPlaying: true,
        }));
      },
    });
  }, [videoId]);

  // Progress bar
  useEffect(() => {
    let currentProgress = 0;
    let span = videoSpanRef.current;

    if (span[videoId]) {
      let anim = gsap.to(span[videoId], {
        onUpdate: () => {
          const progress = Math.ceil(anim.progress() * 100);
          if (progress !== currentProgress) {
            currentProgress = progress;
            gsap.to(videoDivRef.current[videoId], {
              width:
                window.innerWidth < 760
                  ? "10vw"
                  : window.innerWidth < 1200
                  ? "10vw"
                  : "4vw",
            });
            gsap.to(span[videoId], {
              width: `${currentProgress}%`,
              backgroundColor: "white",
            });
          }
        },
        onComplete: () => {
          if (isPlaying) {
            gsap.to(videoDivRef.current[videoId], { width: "12px" });
            gsap.to(span[videoId], { backgroundColor: "#ffffffff" });
          }
        },
      });

      if (videoId === 0) anim.restart();

      const animUpdate = () => {
        anim.progress(
          videoRef.current[videoId].currentTime /
            hightlightsSlides[videoId].videoDuration
        );
      };

      if (isPlaying) {
        gsap.ticker.add(animUpdate);
      } else {
        gsap.ticker.remove(animUpdate);
      }
    }
  }, [videoId, startPlay]);

  useEffect(() => {
    if (loadedData.length > 3) {
      if (!isPlaying) videoRef.current[videoId].pause();
      else startPlay && videoRef.current[videoId].play();
    }
  }, [startPlay, videoId, isPlaying, loadedData]);

  const handleProcess = (type, i) => {
    switch (type) {
      case "video-end":
        setVideo((pre) => ({
          ...pre,
          videoId: i + 1 < hightlightsSlides.length ? i + 1 : 0, // loop infinit
        }));
        break;
      case "pause":
      case "play":
        setVideo((pre) => ({ ...pre, isPlaying: !pre.isPlaying }));
        break;
      default:
        return video;
    }
  };

  const handleLoadedMetaData = (i, e) => setLoadedData((pre) => [...pre, e]);

  return (
    <>
      <div className="carousel-wrapper">
        {hightlightsSlides.map((list, i) => (
          <div key={list.id} id="slider" className="carousel-slide">
            <div className="video-carousel_container">
              <div className="video-box">
                <video
                  id="video"
                  playsInline
                  className={list.id === 2 ? "offset-video" : ""}
                  preload="auto"
                  muted
                  ref={(el) => (videoRef.current[i] = el)}
                  onEnded={() => handleProcess("video-end", i)}
                  onPlay={() => setVideo((pre) => ({ ...pre, isPlaying: true }))}
                  onLoadedMetadata={(e) => handleLoadedMetaData(i, e)}
                >
                  <source src={list.video} type="video/mp4" />
                </video>
              </div>

              <div className="video-text">
                {list.textLists.map((text, idx) => (
                  <p key={idx} className="video-caption">
                    {text}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="carousel-controls">
        <div className="progress-container">
          {videoRef.current.map((_, i) => (
            <span
              key={i}
              className="progress-dot"
              ref={(el) => (videoDivRef.current[i] = el)}
            >
              <span
                className="progress-bar"
                ref={(el) => (videoSpanRef.current[i] = el)}
              />
            </span>
          ))}
        </div>

        <button className="control-btn">
          <img
            src={!isPlaying ? playImg : pauseImg}
            alt={!isPlaying ? "play" : "pause"}
            onClick={() => handleProcess(isPlaying ? "pause" : "play")}
          />
        </button>
      </div>
    </>
  );
};

export default VideoCarousel;
