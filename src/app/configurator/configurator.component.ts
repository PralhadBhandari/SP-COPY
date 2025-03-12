import { Component } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';
import { MainCardService } from '../services/main-card.service';

@Component({
  selector: 'app-configurator',
  templateUrl: './configurator.component.html',
  styleUrls: ['./configurator.component.scss']
})
export class ConfiguratorComponent {
  constructor(private _service : MainCardService){}
  status:string=''
  loading = false;
  officeValue:any=[];
  selectedValues : any = [];

  ngOnInit(): void {
    this._service.changelocationObv(window.location.pathname)
    let savedValues = JSON.parse(localStorage.getItem('selectedValues') || '[]');
    let savedofficeValue = JSON.parse(localStorage.getItem('selectedOfficeValue') || '[]');

    this.identifiers.forEach((element1: any) => {
      savedValues.forEach((element2: any) => {
      if(element1.list_Name == element2.list_Name) {
        element1.list_ID = element2.list_ID;
      }
     });
    });
  }

  onReload(){
      this.loading = true;
      setTimeout(() => this.loading = false, 1000);

  }
  onChange(index: number, selectedValue: any) {
    this.identifiers[index].list_ID = selectedValue;
    this.selectedValues[this.identifiers[index].list_ID] = selectedValue; //updates selected value
    localStorage.setItem('selectedValues', JSON.stringify(this.selectedValues));
  }

  onPublish(status: string) {
    console.log(this.identifiers);

    this.identifiers.forEach((element: any) => {
      this.selectedValues.push({
        list_Name: element.list_Name,
        list_ID: element.list_ID
      });
    });

  localStorage.setItem('selectedValues', JSON.stringify(this.selectedValues)); //saves in localstorage
  localStorage.setItem('selectedOfficeValue', JSON.stringify(this.officeValue)); //saves in localstorage

    this.status = status;
  }

  office=[
    {
      list_Name:'Opp_Office',
      list_ID:null,
      list_Options:[]
    },
  ]

  identifiers = [
    {
      list_Name: 'Opp_Office',
      list_ID: 1,
      list_Options: [
        { id: 184, value: 'ALPHARETTA' },
        { id: 185, value: 'ANDOVER' },
        { id: 186, value: 'ASHBURN' },
        { id: 187, value: 'ATLANTA' },
        { id: 188, value: 'BATON ROUGE' },
        { id: 189, value: 'BEAUMONT' },
        { id: 190, value: 'BROOKFIELD' },
        { id: 191, value: 'CALIFORNIA' },
        { id: 192, value: 'CARROLLTON' },
        { id: 193, value: 'CLEVELAND' },
        { id: 226, value: 'FOXBORO' },
        { id: 195, value: 'FOXBORO_MECHANICST' },
        { id: 194, value: 'FOXBORO_NEPONSETAVE' },
        { id: 196, value: 'HORSHAM' },
        { id: 227, value: 'HOUSTON' },
        { id: 197, value: 'HOUSTON_EQUITY' },
        { id: 198, value: 'HOUSTON_JERSEY' },
        { id: 199, value: 'KNIGHTDALE' },
        { id: 200, value: 'LAKE FOREST' },
        { id: 201, value: 'LONG ISLAND' },
        { id: 202, value: 'LOUISVILLE' },
        { id: 203, value: 'NEW YORK' },
        { id: 204, value: 'RICHFIELD' },
        { id: 205, value: 'SAN RAMON' },
        { id: 206, value: 'SEATTLE' },
        { id: 207, value: 'WEBSTER' },
        { id: 208, value: 'WOODBRIDGE' },
      ],
    },

    {
      list_Name: 'Opp_Staging',
      list_ID: 10,
      list_Options: [
        { id: 0, value: 'SE Site' },
        { id: 1, value: 'Customer Site' },
      ],
    },
    {
      list_Name: 'Opp_Facility Location',
      list_ID: 70,
      list_Options: [
        { id: 0, value: 'Atlanta' },
        { id: 1, value: 'Baton Rouge' },
        { id: 2, value: 'Calgary' },
        { id: 3, value: 'Cleveland' },
        { id: 4, value: 'Foxboro Cocasset 1' },
        { id: 5, value: 'Foxboro Cocasset 2' },
        { id: 6, value: 'Foxboro Neponset 1' },
        { id: 7, value: 'Foxboro Neponset 2' },
        { id: 8, value: 'Houston Equity' },
        { id: 9, value: 'Lake Forest' },
        { id: 10, value: 'Montreal' },
        { id: 11, value: 'Webster' },
        { id: 12, value: 'Singapore' },
        { id: 13, value: 'China' },
        { id: 14, value: 'Other' },
      ],
    },
    {
      list_Name: 'Opp_ExtRep Commission',
      list_ID: 16,
      list_Options: [
        { id: 0, value: 'No Rep Commissions' },
        { id: 1, value: 'Rep Comm All Orders < $50K' },
        { id: 2, value: 'Rep Comm HW Only < $250K' },
        { id: 3, value: 'Rep Comm HW SW Eng Resale' },
      ],
    },
    {
      list_Name: 'Opp_MI Commission',
      list_ID: 17,
      list_Options: [
        { id: 0, value: 'No' },
        { id: 1, value: 'Yes' },
      ],
    },
    {
      list_Name: 'Opp_Quote Validity',
      list_ID: 18,
      list_Options: [
        { id: 0, value: '30' },
        { id: 1, value: '60' },
        { id: 2, value: '90' },
        { id: 3, value: '120' },
        { id: 4, value: '150' },
        { id: 5, value: '180' },
        { id: 6, value: '210' },
        { id: 7, value: '240' },
        { id: 8, value: '270' },
        { id: 9, value: '300' },
        { id: 10, value: '330' },
        { id: 11, value: '365' },
      ],
    },
    {
      list_Name: 'Opp_Proposal Type',
      list_ID: 19,
      list_Options: [
        { id: 0, value: 'Non-Binding' },
        { id: 1, value: 'Binding' },
      ],
    },
    {
      list_Name: 'Opp_INCO Terms',
      list_ID: 20,
      list_Options: [
        { id: 0, value: 'CFR' },
        { id: 1, value: 'CIF' },
        { id: 2, value: 'CIP' },
        { id: 3, value: 'CPT' },
        { id: 4, value: 'DAF' },
        { id: 5, value: 'DDP' },
        { id: 6, value: 'DDU' },
        { id: 7, value: 'DEQ' },
        { id: 8, value: 'DES' },
        { id: 9, value: 'EXW' },
        { id: 10, value: 'FAS' },
        { id: 11, value: 'FCA' },
        { id: 12, value: 'FOB' },
      ],
    },
  ];
}
