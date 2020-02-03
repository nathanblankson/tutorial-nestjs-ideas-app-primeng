import { IdeaState } from '.';
import { Action, IdeaActions } from './idea.action';

const initialState: IdeaState = {
  loaded: false,
  loading: false,
  ideas: {},
  selectedIdea: null
};

export const ideaReducer: (state: IdeaState, action: Action) => IdeaState = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case IdeaActions.LOAD_IDEAS:
      return { ...state, loaded: false, loading: true };
    case IdeaActions.LOAD_IDEA:
      return {
        ...state,
        selectedIdea: action.payload,
        loaded: false,
        loading: true
      };
    case IdeaActions.CREATE_IDEA:
      return { ...state, loaded: false, loading: true };
    case IdeaActions.UPDATE_IDEA:
      return { ...state, loaded: false, loading: true };
    case IdeaActions.DELETE_IDEA:
      return { ...state, loaded: false, loading: true };
    case IdeaActions.LOAD_IDEAS_SUCCESS:
      return {
        ...state,
        ideas: action.payload.reduce(
          (acc, idea) => ({
            ...acc,
            [idea.id]: idea
          }),
          state.ideas
        ),
        loaded: true,
        loading: false
      };
    case IdeaActions.LOAD_IDEA_SUCCESS:
      return {
        ...state,
        ideas: action.payload
          ? { ...state.ideas, [action.payload.id]: action.payload }
          : state.ideas,
        loaded: true,
        loading: false
      };
    case IdeaActions.CREATE_IDEA_SUCCESS:
      return {
        ...state,
        ideas: {
          ...state.ideas,
          [action.payload.id]: action.payload
        },
        loaded: true,
        loading: false
      };
    case IdeaActions.UPDATE_IDEA_SUCCESS:
      return {
        ...state,
        ideas: {
          ...state.ideas,
          [action.payload.id]: action.payload
        },
        loaded: true,
        loading: false
      };
    case IdeaActions.DELETE_IDEA_SUCCESS:
      return {
        ...state,
        ideas: Object.keys(state.ideas)
          .filter(key => key !== action.payload)
          .reduce((acc, key) => ({ ...acc, key: state[key] }), {}),
        loaded: true,
        loading: false
      };
    default:
      return state;
  }
};
