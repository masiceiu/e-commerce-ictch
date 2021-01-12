
import { NgModule, ModuleWithProviders } from '@angular/core';
import { ProductService } from './stores/product/product.service';
import { CartService } from './stores/cart/cart.service';

@NgModule({
    imports: [],
    exports: [],
    declarations: [],
    providers: [],
})
export class CoreModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: CoreModule,
            providers: [
              ProductService,
              CartService,
            ],
        };
    }
}