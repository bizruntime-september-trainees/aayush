import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { sampleData } from "./datasource";
import {FilterSettingsModel, PageSettingsModel , SortSettingsModel} from "@syncfusion/ej2-angular-treegrid"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ngOnInit(): void{
    this.data = sampleData;
    this.pageSettings = { pageSize: 6 };
    this.SortSettings = {
      columns: [
        {field:"taskName", direction:"Ascending"},
        {field:"taskID", direction: "Descending"}
      ]
    }
  }

  public data: Object[];
  title = 'Angulartree';
  public pageSettings: PageSettingsModel;
  public SortSettings: SortSettingsModel;
  public filtersettings: FilterSettingsModel
}
