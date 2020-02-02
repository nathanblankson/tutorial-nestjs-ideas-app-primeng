import { Idea } from '../../../models/idea';
import * as Store from '../../../store/app-store.module';

export interface IdeaState {
  ideas: Idea[];
  loading: boolean;
  loaded: boolean;
}

export interface AppState extends Store.AppState {
  ideas: IdeaState;
}
