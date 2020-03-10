import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FormsModule } from "@angular/forms";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { DropdownModule } from "primeng/dropdown";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { LegislatorsStateLookUpComponent } from "./legislators-state-look-up/legislators-state-look-up.component";
import {TableModule} from 'primeng/table';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import { HomeComponent } from './home/home.component';
import { CandidateContributionComponent } from './candidate-contribution/candidate-contribution.component';


@NgModule({
  declarations: [
    AppComponent, 
    LegislatorsStateLookUpComponent, HomeComponent, CandidateContributionComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    ProgressSpinnerModule,
    DropdownModule,
    TableModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
