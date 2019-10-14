export function myMeetupsRequest() {
  return {
    type: '@myMeetups/MY_MEETUPS_REQUEST',
  };
}

export function myMeetupsSuccess(data) {
  return {
    type: '@myMeetups/MY_MEETUPS_SUCCESS',
    payload: { data },
  };
}

export function myMeetupsFailure() {
  return {
    type: '@myMeetups/MY_MEETUPS_FAILURE',
  };
}

export function setCurrent(meetup) {
  return {
    type: '@myMeetups/SET_CURRENT',
    payload: { meetup },
  };
}
