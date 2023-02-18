import { useLanyard } from 'use-lanyard';
import { Tooltip } from 'react-tippy/';

const DISCORD_ID = '747086592820117504';

// interface Tooltip {
//   children?: Element;
//   title?: string;
//   position?: 'bottom';
//   duration?: number;
// }

export default function Spotify() {
  const { data: user } = useLanyard(DISCORD_ID);

  if (!user || !user.spotify) {
    return null;
  }

  return (
    <>
      <button>
        <Tooltip title="Playing!" position="bottom" duration={200}>
          <a
            href={`https://open.spotify.com/track/${user.spotify.track_id}`}
            target="_blank"
            rel="noreferrer"
          >
            <img src={user.spotify.album_art_url} alt={user.spotify.album} />
            {user.spotify.song}
            <p>{user.spotify.artist}</p>
          </a>
        </Tooltip>
      </button>
    </>
  );
}
