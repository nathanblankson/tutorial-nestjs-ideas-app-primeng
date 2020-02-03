import { Idea } from '@app/models/idea';
import { Entity } from '@app/models/entity';
import * as Store from '@app/store/app-store.module';

export interface IdeaState {
  ideas: Entity<Idea>;
  selectedIdea?: string;
  loading: boolean;
  loaded: boolean;
}

export interface AppState extends Store.AppState {
  ideas: IdeaState;
}
