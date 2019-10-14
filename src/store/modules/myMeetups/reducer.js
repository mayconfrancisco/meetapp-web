import produce from 'immer';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt-BR';

const INITIAL_STATE = {
  data: [],
  loading: false,
  current: null,
};

// TODO MAYCON - nao precisava ter utilizado redux para este crud
// refatorar mais tarde

export default function myMeetups(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@myMeetups/MY_MEETUPS_REQUEST': {
        draft.loading = true;
        break;
      }

      case '@myMeetups/MY_MEETUPS_SUCCESS': {
        draft.data = action.payload.data.map(meetup => {
          return {
            ...meetup,
            dateFormatted: format(
              parseISO(meetup.date),
              "dd 'de' MMMM ', às ' hh'h'",
              {
                locale: pt,
              },
            ),
          };
        });
        draft.loading = false;
        break;
      }

      case '@myMeetups/MY_MEETUPS_FAILURE': {
        draft.loading = false;
        break;
      }

      case '@myMeetups/SET_CURRENT': {
        draft.current = action.payload.meetup;
        break;
      }

      default:
    }
  });
}
