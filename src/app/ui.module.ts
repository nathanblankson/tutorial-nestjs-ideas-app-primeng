import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    CardModule,
    InputTextModule,
    ButtonModule,
    MenubarModule,
    ToastModule
  ],
  exports: [
    CommonModule,
    BrowserAnimationsModule,
    CardModule,
    InputTextModule,
    ButtonModule,
    MenubarModule,
    ToastModule
  ],
  providers: [MessageService]
})
export class UIModule {}
