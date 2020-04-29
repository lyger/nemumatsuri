import React, { useState, useContext } from 'react';
import { LabeledRow } from './ui';
import YouTube from 'react-youtube';
import { SceneContext } from '../scene';

function getYouTubeVideoId(url) {
  try {
    const { host, pathname, search } = new URL(url);
    if (/youtube.com/.test(host)) {
      if (search.length === 0) return null;
      // Remove leading "?"
      return search.substring(1).split('&').reduce((acc, q) => {
        const [key, value] = q.split('=');
        if (key === 'v') return value;
        return acc;
      }, null);
    }
    else if (/youtu\.be/.test(host)) {
      if (pathname.length === 0) return null;
      // Remove leading "/"
      return pathname.substring(1);
    }
  } catch (error) {
    return null;
  }

  return null;
}

export default function BGMFooter({ collapsed, children }) {
  const [ { bgmURL }, dispatch ] = useContext(SceneContext);
  const [player, setPlayer] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoId = getYouTubeVideoId(bgmURL);
  function updatePlayer({ target }) { target.setVolume(30); setPlayer(target); }
  function updatePlaying() { setIsPlaying(player !== null && player.getPlayerState() === 1); }
  function togglePlay() {
    if (player === null) return;
    if (isPlaying) player.pauseVideo();
    else player.playVideo();
  }
  return (
    <React.Fragment>
      <div className="side-menu-footer">
        <LabeledRow>
          <i className="fas fa-music" />
          <div className="field has-addons">
            <div className="control">
              <input
                className="input"
                type="text"
                placeholder="YouTube URL"
                value={bgmURL}
                onChange={(e) => dispatch({type: 'SET_BGM', value: e.target.value})} />
            </div>
            <div className="control">
              <button
                className={`button is-light${(videoId !== null && player == null) ? ' is-loading' : ''}`}
                onClick={togglePlay}
                disabled={videoId === null || player === null}>
                <i className={`fas fa-${(isPlaying) ? 'pause' : 'play'}`} />
              </button>
            </div>
          </div>
        </LabeledRow>
        {children}
      </div>
      {(videoId !== null) &&
        <YouTube
          containerClassName={`side-menu-youtube${(collapsed) ? ' side-menu-youtube-hide' : ''}`}
          videoId={videoId}
          opts={{height: '200', width: '352', playerVars: {autoplay: 1, loop: 1, fs: 0, disablekb: 1, modestbranding: 1}}}
          onReady={updatePlayer}
          onStateChange={updatePlaying}
          onEnd={(e) => e.target.playVideo()} />
      }
    </React.Fragment>
  );
}