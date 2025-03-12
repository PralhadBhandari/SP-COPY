import { Component,ChangeDetectionStrategy, ViewChild,  QueryList, ViewChildren  } from '@angular/core';
import mock from '../../../_files/mock.json';
import {  NbAccordionComponent, NbAccordionItemComponent,  } from '@nebular/theme';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,

  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {
  @ViewChildren(NbAccordionItemComponent) accordionItems!: QueryList<NbAccordionItemComponent>;
  @ViewChild('item', { static: false }) accordion: NbAccordionComponent | undefined;

  filter_List:any=[];
  globalSearchInput: string = ''
  tooglefilterSearch:boolean=false;
  mockFlag:boolean=false;
  filter_Display_Name:any=[];
  togglefindSearch:boolean=false;
  programmingLanguages=[];
  flagdropdownanme: any;
  flagdropdown: any;
  data: any;
  flag: boolean = false;
  favArray:any = []
  filterName:any
  favorite:any
  // filteredFilterList: any[] = [];
  isFavorite:boolean=false;
  isOpen:boolean=false
  // filterData: FilterData[] = []; // Original data goes here
  filteredAccordionItems: NbAccordionItemComponent[] = [];
  elementRef: any;
  filterData: any;
  filterList: any[] = [];
  filteredFilterList: any[] = [];
  // searchInput: string = '';
  globalSearchFlag:boolean=false
  pppp : any
  showPassword = true;

  getInputType() {
    if (this.showPassword) {
      return 'text';
    }
    return 'password';
  }

  toggleShowPassword() {
    this.showPassword = !this.showPassword;
  }

  clearAll(){
    this.globalSearchInput=''
    this.filter_List.forEach((item : any) => {
      item.findInput = '';
      item.togglefindSearch = false;
      this.accordionItems.forEach(item => item.close());
     })
  }

  clearSearch(){
    this.filter_List.forEach((item : any) => {
      item.findInput = ''

     });
  }

  toggleSearch(filterData: any): void {
    console.log('Toggle Search called for:', filterData);
    filterData.togglefindSearch = !filterData.togglefindSearch;
    this.filterData.togglefindSearch=''
    if (!filterData.togglefindSearch) {
      // If filter is not in search mode, reset filteredFilterList
      filterData.filteredFilterList = filterData.filter_List;
    } else {
      // If filter is in search mode, apply global search filter
      filterData.filteredFilterList = filterData.filter_List.filter((item: { value: string; }) =>
        item.value.toLowerCase().includes(this.globalSearchInput.toLowerCase())
      );
    }
  }

  // For Tooltip
  getTooltip(filterData: any): string {
    return filterData.favorite ? 'Click to remove from favorites' : 'Click to add to favorites';
  }

  markFavourite(_filterData: any){
    this.mockFlag=!this.mockFlag
  }

  ngOnInit(): void {
    this.filter_List = mock.root
    // this.filteredAccordionItems=this.accordionItems.toArray()
    // console.log('this.filter_List',this.filter_List)
  }
  globalSearch(): void {
    const searchTerm = this.globalSearchInput.toLowerCase().trim();
    if (searchTerm === '') {
      // If search input is empty, show all items including favorites
      this.filter_List.forEach((filterData: { filteredFilterList: any; filter_List: any[]; }) => {
        filterData.filteredFilterList = filterData.filter_List.filter((item: { favorite: boolean; }) => item.favorite);
      });
    } else {
      // Filter items based on search input and favorite status
      this.filter_List.forEach((filterData: { filteredFilterList: any; filter_List: any[]; }) => {
        filterData.filteredFilterList = filterData.filter_List.filter((item: { value: string; favorite: boolean; }) =>
          item.value.toLowerCase().includes(searchTerm) && item.favorite
        );
      });
    }
  }

  closeAll() {
    this.accordionItems.forEach(item => item.close());
    this.filter_List.forEach((item : any) => {
      item.togglefindSearch = false;
      // item.findInput = this.globalSearchInput;
     });
  }
collapseUnmatched(){
  if(this.accordionItems.length==null){
    this.accordionItems.forEach(item => item.close());
  }
}
  openGlobalSearch($event:any){

    if(this.globalSearchInput!=''){
      this.globalSearchFlag!=this.globalSearchFlag
      // this.accordionItems.forEach(item => item.open());
      console.log(this.filter_List);

      this.filter_List.forEach((item : any) => {
      let matchedRecord = item.filter_List.find((element:any) => element.value?.toLowerCase()?.includes(this.globalSearchInput.toLowerCase()?.trim()));
        console.log("matchedRecord", matchedRecord)

      if (matchedRecord != undefined) {
        item.togglefindSearch = true;
        if(item.togglefindSearch){
          console.log('this.accordionItems',this.accordionItems)
          this.accordionItems.forEach(item => item.open());
          // this.accordion?.openAll
        }
        // item.findInput = this.globalSearchInput;
    }
    item.findInput = this.globalSearchInput;

   });
        // item.filter_List;
    }

  }

  openAll() {
    this.accordionItems.forEach(item => item.open());
    // console.log('globalSearchInput',this.globalSearchInput);

  }

  toggleFavoriteIcon(item: any): void {
    item.favorite = !item.favorite;
    this.globalSearch(); // Trigger global search after toggling favorite status
  }


  unfav(item:any){
    item.favorite=!item.favorite  // Toggles the "favorite" status of the item
    if(item.favorite){
      this.favArray.push(item)  // Adds the item to the favorite array if it's now marked as favorite
    }
    else{
      let index=this.favArray.indexOf(item) // Finds the index of the item in the favorite array
      if(index!=-1){
        this.favArray.splice(index,1)  // Removes the item from the favorite array
      }
    }
    // console.log(this.favArray)
  }

}
