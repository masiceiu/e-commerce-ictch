import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { SearchComponent } from './header/search/search.component';
import { appRoutes } from './app.routes';
import { DetailComponent } from './detail/detail.component';
import { ProductComponent } from './product/product.component';
import { HeaderComponent } from './header/header.component';
import { CartIconComponent } from './header/cart-icon/cart-icon.component';
import { InMemoryProductService } from './_db/in-memory-product.service';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HttpClientModule } from '@angular/common/http';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CartItemComponent } from './shopping-cart/cart-item/cart-item.component';
import { ItemsComponent } from './list/items/items.component';


@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    CoreModule.forRoot(),
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryProductService, {
      dataEncapsulation: false
    }),
    RouterModule.forRoot(appRoutes),
    SharedModule,
  ],
  declarations: [
    AppComponent,
    ListComponent,
    SearchComponent,
    DetailComponent,
    ProductComponent,
    HeaderComponent,
    CartIconComponent,
    ShoppingCartComponent,
    CartItemComponent,
    ItemsComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
