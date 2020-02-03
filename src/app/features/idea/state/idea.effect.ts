import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Store, Action } from '@ngrx/store';
import { Observable, of, merge } from 'rxjs';
import { mergeMap, catchError, map, tap, withLatestFrom } from 'rxjs/operators';

import { AppState } from '.';
import { ApiService } from '@app/services/api.service';
import {
  LoadIdeas,
  IdeaActions,
  LoadIdeasSuccess,
  CreateIdea,
  CreateIdeaSuccess,
  UpdateIdea,
  UpdateIdeaSuccess,
  DeleteIdea,
  DeleteIdeaSuccess,
  LoadIdea,
  LoadIdeaSuccess
} from './idea.action';
import { AddError, RemoveError } from '@app/store/actions/errors.action';

@Injectable()
export class IdeaEffects {
  constructor(
    private action$: Actions,
    private store: Store<AppState>,
    private api: ApiService
  ) {}

  @Effect()
  loadIdeas$: Observable<Action> = this.action$.pipe(
    ofType<LoadIdeas>(IdeaActions.LOAD_IDEAS),
    tap(() => this.store.dispatch(new RemoveError())),
    mergeMap(action =>
      this.api.getIdeas().pipe(
        map(ideas => new LoadIdeasSuccess(ideas)),
        catchError(err => of(new AddError(err.error)))
      )
    )
  );

  @Effect()
  loadIdea$: Observable<Action> = this.action$.pipe(
    ofType<LoadIdea>(IdeaActions.LOAD_IDEA),
    tap(() => this.store.dispatch(new RemoveError())),
    withLatestFrom(this.store),
    mergeMap(([action, state]: [LoadIdea, AppState]) => {
      const idea = state.ideas.ideas[action.payload];
      if (idea) {
        return of(new LoadIdeaSuccess());
      } else {
        return this.api.getIdea(action.payload).pipe(
          mergeMap(res => of(new LoadIdeaSuccess(res))),
          catchError(err => of(new AddError(err.error)))
        );
      }
    })
  );

  @Effect()
  createIdea$: Observable<Action> = this.action$.pipe(
    ofType<CreateIdea>(IdeaActions.CREATE_IDEA),
    tap(() => this.store.dispatch(new RemoveError())),
    mergeMap(action =>
      this.api.createIdea(action.payload).pipe(
        map(idea => new CreateIdeaSuccess(idea)),
        catchError(err => of(new AddError(err.error)))
      )
    )
  );

  @Effect()
  updateIdea$: Observable<Action> = this.action$.pipe(
    ofType<UpdateIdea>(IdeaActions.UPDATE_IDEA),
    tap(() => this.store.dispatch(new RemoveError())),
    mergeMap(action =>
      this.api.updateIdea(action.payload.id, action.payload).pipe(
        map(idea => new UpdateIdeaSuccess(idea)),
        catchError(err => of(new AddError(err.error)))
      )
    )
  );

  @Effect()
  deleteIdea$: Observable<Action> = this.action$.pipe(
    ofType<DeleteIdea>(IdeaActions.DELETE_IDEA),
    tap(() => this.store.dispatch(new RemoveError())),
    mergeMap(action =>
      this.api.deleteIdea(action.payload).pipe(
        map(idea => new DeleteIdeaSuccess(idea.id)),
        catchError(err => of(new AddError(err.error)))
      )
    )
  );
}
