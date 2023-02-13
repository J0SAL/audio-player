import React, { useState, useRef, useEffect } from "react";
import "./Audio.css";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

function Audio() {
  const handleVideoStart = (e) => {
    console.log("Video Started");
  };
  const handleVideoComplete = (e) => {
    console.log("Video Complete");
  };
  return (
    <div>
      <AudioPlayer
        src={"/assets/day-1.mp3"}
        onPlay={() => {
          handleVideoStart();
        }}
        onPause={() => {}}
        customAdditionalControls={[]}
        customVolumeControls={[]}
        showJumpControls={true}
        layout="stacked-reverse"
        progressJumpSteps={{
          forward: 0,
          backward: 10000
        }}
        hasDefaultKeyBindings={false}
        onEnded={() => {
          handleVideoComplete();
        }}
	preload="none"
      />
    </div>
  );
}

export default Audio;
