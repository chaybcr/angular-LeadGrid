import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { IgxPreventDocumentScrollModule } from "./directives/prevent-scroll.directive";
import { IgxHierarchicalGridModule } from "igniteui-angular";
import { HGridColumnResizingSampleComponent } from "./hierarchical-grid/hierarchical-grid-column-resizing/hierarchical-grid-resizing.component";
import { 
	IgxSparklineCoreModule,
	IgxSparklineModule
 } from "igniteui-angular-charts";
 import { HttpClientModule } from '@angular/common/http';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
		HGridColumnResizingSampleComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
		IgxPreventDocumentScrollModule,
		IgxHierarchicalGridModule,
		IgxSparklineCoreModule,
		IgxSparklineModule,
    HttpClientModule
  ],
  providers: [],
  entryComponents: []
})
export class AppModule {}
