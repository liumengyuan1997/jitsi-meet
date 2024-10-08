/**
 * Fixed name of the video player fake participant.
 *
 * @type {string}
 */
export const VIDEO_PLAYER_PARTICIPANT_NAME = 'Video';

/**
 * Fixed name of the youtube player fake participant.
 *
 * @type {string}
 */
export const YOUTUBE_PLAYER_PARTICIPANT_NAME = 'YouTube';


/**
 * Shared video command.
 *
 * @type {string}
 */
export const SHARED_VIDEO = 'shared-video';

/**
 * Available playback statuses.
 */
export const PLAYBACK_STATUSES = {
    PLAYING: 'playing',
    PAUSED: 'pause',
    STOPPED: 'stop'
};

/**
 * The domain for youtube URLs.
 */
export const YOUTUBE_URL_DOMAIN = 'youtube.com';

/**
 * The white listed domains for shared video.
 */
export const URL_WHITELIST = [ YOUTUBE_URL_DOMAIN ];
