import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';

import { Idea } from '@app/models/idea';
import { selectCurrentIdea } from '../../state/idea.selector';
import { AppState } from '../../state';

@Component({
  selector: 'app-selected-idea',
  templateUrl: './selected-idea.component.html',
  styleUrls: ['./selected-idea.component.scss']
})
export class SelectedIdeaComponent implements OnInit, OnDestroy {
  private currentIdeaSub$: Subscription;

  @Input()
  idea: Idea;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.currentIdeaSub$ = this.store
      .select(selectCurrentIdea)
      .subscribe(val => (this.idea = val));
  }

  ngOnDestroy() {
    this.currentIdeaSub$.unsubscribe();
  }
}
