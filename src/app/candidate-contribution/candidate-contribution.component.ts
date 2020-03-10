import { Component, OnInit } from "@angular/core";
import { LegalBribesService } from "./../legal-bribes.service";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";
import { switchMap } from "rxjs/operators";
import { Observable } from "rxjs";
import { candidate } from "../candidate";
import { contributor } from "./../contributor";

@Component({
  selector: "app-candidate-contribution",
  templateUrl: "./candidate-contribution.component.html",
  styleUrls: ["./candidate-contribution.component.css"]
})
export class CandidateContributionComponent implements OnInit {
  CandidateInfo: Observable<candidate>;
  notice: any;
  selectedCID: number;
  name: any;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: LegalBribesService
  ) {}

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get("id");
    this.service.getCandidateContributions(id).subscribe(data => {
      this.name = data["response"]["contributors"]["@attributes"].cand_name;
      this.notice = data["response"]["contributors"]["@attributes"].notice;
      this.CandidateInfo = data["response"]["contributors"].contributor;
    });
  }
}
