import { NgModule } from '@angular/core';
import { AppMaterialModule } from './modules/material/material.module';

const MODULES = [
  AppMaterialModule
]

@NgModule({
  imports: [MODULES],
  exports: [MODULES],
})
export class SharedModule {
}