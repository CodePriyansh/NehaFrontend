import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmincustomerComponent } from './admincustomer/admincustomer.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { EditcategoryComponent } from './editcategory/editcategory.component';
import { OrderComponent } from './order/order.component';
import { ViewcategoryComponent } from './viewcategory/viewcategory.component';
import { ViewproductComponent } from './viewproduct/viewproduct.component';

const routes: Routes = [
  {path:'',component:AdmindashboardComponent},
  {path:'editcategory',component:EditcategoryComponent},
  {path:'viewcategory',component:ViewcategoryComponent},
  {path:'viewproduct',component:ViewproductComponent},
  {path:'order',component:OrderComponent},
  {path:'customer',component:AdmincustomerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
