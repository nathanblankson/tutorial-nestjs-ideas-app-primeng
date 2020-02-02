import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Store, Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { mergeMap, catchError, map, tap } from 'rxjs/operators';

import { AppState } from '.';
import { ApiService } from '@app/services/api.service';
import { LoadIdeas, IdeaActions, LoadIdeasSuccess } from './idea.action';
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
}
