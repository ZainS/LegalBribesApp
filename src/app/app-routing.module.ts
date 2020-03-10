import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from './home/home.component';
import { LegislatorsStateLookUpComponent } from "./legislators-state-look-up/legislators-state-look-up.component";
import { CandidateContributionComponent } from './candidate-contribution/candidate-contribution.component';


const routes: Routes = [
  {path: "home", component: HomeComponent},
  { path: "stateLookUp", component: LegislatorsStateLookUpComponent },
  {path: "CandContrib/:id", component: CandidateContributionComponent},
  { path: "", redirectTo: "home", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule {}
