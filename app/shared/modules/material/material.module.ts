import { NgModule } from '@angular/core';
import {
  MatInputModule,
  MatFormFieldModule,
  MatCardModule,
  MatButtonModule,
} from '@angular/material';

const MODULES = [
  MatInputModule,
  MatFormFieldModule,
  MatCardModule,
  MatButtonModule,
]

@NgModule({
  imports: [MODULES],
  exports: [MODULES],
})
export class AppMaterialModule {
}