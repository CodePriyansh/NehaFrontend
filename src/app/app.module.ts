import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainContentComponent } from './main-content/main-content.component';
import { FooterComponent } from './footer/footer.component';
import { CategorySectionComponent } from './category-section/category-section.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { EditcategoryComponent } from './editcategory/editcategory.component';
import { ViewcategoryComponent } from './viewcategory/viewcategory.component';
import { ViewproductComponent } from './viewproduct/viewproduct.component';
import { OrderComponent } from './order/order.component';
import { AdmincustomerComponent } from './admincustomer/admincustomer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainContentComponent,
    FooterComponent,
    CategorySectionComponent,
    AdmindashboardComponent,
    EditcategoryComponent,
    ViewcategoryComponent,
    ViewproductComponent,
    OrderComponent,
    AdmincustomerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
