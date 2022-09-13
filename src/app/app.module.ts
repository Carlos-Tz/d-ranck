import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms'; 
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { Select2Module } from 'ng-select2-component';
import { DataTablesModule } from "angular-datatables";


/* Material */
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatExpansionModule } from '@angular/material/expansion'
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
//import { MatMomentDateModule } from "@angular/ material-moment-adapter";

import { AuthService } from './services/auth.service';
import { LoginComponent } from './components/login/login.component';
import { ToastrModule } from 'ngx-toastr';
import { CurrencyPipe } from '@angular/common';
import { environment } from 'src/environments/environment';
import { MainComponent } from './components/main/main.component';
import { ProductsComponent } from './components/products/products.component';
import { ProvidersComponent } from './components/providers/providers.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { NewCategoryComponent } from './components/new-category/new-category.component';
import { NewProviderComponent } from './components/new-provider/new-provider.component';
import { NewProductComponent } from './components/new-product/new-product.component';
import { EditProductComponent } from './components/edit-product/edit-product.component';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import { RequisitionsComponent } from './components/requisitions/requisitions.component';
import { CiclesComponent } from './components/cicles/cicles.component';
import { NewCicleComponent } from './components/new-cicle/new-cicle.component';
import { EditCicleComponent } from './components/edit-cicle/edit-cicle.component';
import { EditCategoryComponent } from './components/edit-category/edit-category.component';
import { EditProviderComponent } from './components/edit-provider/edit-provider.component';
import { CompanyComponent } from './components/company/company.component';
import { RanchesComponent } from './components/ranches/ranches.component';
import { NewRanchComponent } from './components/new-ranch/new-ranch.component';
import { EditRanchComponent } from './components/edit-ranch/edit-ranch.component';
import { NewRequisitionComponent } from './components/new-requisition/new-requisition.component';
import { MatTableExporterModule } from 'mat-table-exporter';
import { AuthorizeRequisitionComponent } from './components/authorize-requisition/authorize-requisition.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    ProductsComponent,
    ProvidersComponent,
    CategoriesComponent,
    NewCategoryComponent,
    NewProviderComponent,
    NewProductComponent,
    EditProductComponent,
    ConfirmDialogComponent,
    RequisitionsComponent,
    CiclesComponent,
    NewCicleComponent,
    EditCicleComponent,
    EditCategoryComponent,
    EditProviderComponent,
    CompanyComponent,
    RanchesComponent,
    NewRanchComponent,
    EditRanchComponent,
    NewRequisitionComponent,
    AuthorizeRequisitionComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule .forRoot(),
    AngularFireModule .initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    Select2Module,
    DataTablesModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatCheckboxModule,
    MatExpansionModule,
    MatDialogModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatSortModule,
    MatTableModule,
    MatPaginatorModule,
    MatCardModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableExporterModule
  ],
  providers: [AuthService, CurrencyPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
