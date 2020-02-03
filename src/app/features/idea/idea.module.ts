import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { UIModule } from '@app/ui.module';
import { ideaReducer } from './state/idea.reducer';
import { IdeaEffects } from './state/idea.effect';
import { IdeasComponent } from './ideas/ideas.component';
import { IdeaComponent } from './ideas/idea/idea.component';
import { SelectedIdeaComponent } from './ideas/selected-idea/selected-idea.component';
import { IdeaResolver } from './idea.resolver';
import { UUIDGuard } from '@app/services/uuid.guard';

const routes: Routes = [
  { path: '', component: IdeasComponent },
  {
    path: ':id',
    component: SelectedIdeaComponent,
    canActivate: [UUIDGuard],
    resolve: { data: IdeaResolver }
  }
];

@NgModule({
  declarations: [IdeasComponent, IdeaComponent, SelectedIdeaComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    UIModule,
    StoreModule.forFeature('ideas', ideaReducer),
    EffectsModule.forFeature([IdeaEffects])
  ],
  providers: [IdeaResolver]
})
export class IdeaModule {}
