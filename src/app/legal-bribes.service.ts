import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { candidate } from './candidate';
@Injectable({
  providedIn: "root"
})
export class LegalBribesService {
  endpointURL = "https://www.opensecrets.org/api/?method=";
  key = "ad63c949e002cb6b726bc15659b47867";
  candidateContributionsMethod = "candContrib&cid=";
  getLegislatorsMethod = "getLegislators&id=";
  constructor(private http: HttpClient) {}

  getCandidateContributions(cid): any {
    return this.http.get(
      `${this.endpointURL}${this.candidateContributionsMethod}${cid}&apikey=${this.key}&output=json`
    )
  }
  getStateLegislator(stateCode) {
    return this.http.get(
      `${this.endpointURL}${this.getLegislatorsMethod}${stateCode}&apikey=${this.key}&output=json`
    );
  }
}
