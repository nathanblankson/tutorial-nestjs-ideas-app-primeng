import { Action } from '@ngrx/store';

import { Idea, IdeaDTO } from '@app/models/idea';

export enum IdeaActions {
  LOAD_IDEAS = '[Ideas] Load Ideas',
  LOAD_IDEAS_SUCCESS = '[Ideas] Load Ideas Success',

  LOAD_IDEA = '[Ideas] Load Idea',
  LOAD_IDEA_SUCCESS = '[Ideas] Load Idea Success',

  CREATE_IDEA = '[Ideas] Create Idea',
  CREATE_IDEA_SUCCESS = '[Ideas] Create Idea Success',

  UPDATE_IDEA = '[Ideas] Update Idea',
  UPDATE_IDEA_SUCCESS = '[Ideas] Update Idea Success',

  DELETE_IDEA = '[Ideas] Delete Idea',
  DELETE_IDEA_SUCCESS = '[Ideas] Delete Idea Success'
}

export class LoadIdeas implements Action {
  readonly type = IdeaActions.LOAD_IDEAS;
}

export class LoadIdeasSuccess implements Action {
  readonly type = IdeaActions.LOAD_IDEAS_SUCCESS;
  constructor(public payload: Idea[]) {}
}

export class LoadIdea implements Action {
  readonly type = IdeaActions.LOAD_IDEA;
  constructor(public payload: string) {}
}

export class LoadIdeaSuccess implements Action {
  readonly type = IdeaActions.LOAD_IDEA_SUCCESS;
  constructor(public payload?: Idea) {}
}

export class CreateIdea implements Action {
  readonly type = IdeaActions.CREATE_IDEA;
  constructor(public payload: IdeaDTO) {}
}

export class CreateIdeaSuccess implements Action {
  readonly type = IdeaActions.CREATE_IDEA_SUCCESS;
  constructor(public payload: Idea) {}
}

export class UpdateIdea implements Action {
  readonly type = IdeaActions.UPDATE_IDEA;
  constructor(public payload: Partial<IdeaDTO>) {}
}

export class UpdateIdeaSuccess implements Action {
  readonly type = IdeaActions.UPDATE_IDEA_SUCCESS;
  constructor(public payload: Idea) {}
}

export class DeleteIdea implements Action {
  readonly type = IdeaActions.DELETE_IDEA;
  constructor(public payload: string) {}
}

export class DeleteIdeaSuccess implements Action {
  readonly type = IdeaActions.DELETE_IDEA_SUCCESS;
  constructor(public payload: string) {}
}

export type Action =
  | LoadIdeas
  | LoadIdeasSuccess
  | LoadIdea
  | LoadIdeaSuccess
  | CreateIdea
  | CreateIdeaSuccess
  | UpdateIdea
  | UpdateIdeaSuccess
  | DeleteIdea
  | DeleteIdeaSuccess;
