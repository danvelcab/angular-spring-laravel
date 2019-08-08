import { Component, OnInit } from '@angular/core';
import { environment } from '../environments/environment';
import { Company } from '../models/company';
import { CompanyService } from '../services/company.service';
import { ListRequestData } from '../../projects/api-rest-core/src/lib/helpers/list-request-data';
import { CompanyListItem } from '../models/lists/company_list_item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public companies: CompanyListItem[]; // Listado de companies a mostrar

  title = 'front-angular';

  constructor(
    private companyService: CompanyService) {
  }
  ngOnInit(): void {
    this.list();
  }

  getFramework(): string {
    return environment.framework;
  }


  list(): void {
    const listRequestData = new ListRequestData(null, {}, {});
    this.companyService.list(listRequestData).subscribe(
      res => {
        this.companies = res as CompanyListItem[];
      },
      error => {
        console.log('error company list');
      }
    );
  }
}
