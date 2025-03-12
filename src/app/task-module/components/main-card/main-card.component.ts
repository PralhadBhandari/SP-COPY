import { Component, OnInit } from '@angular/core';
import { MainCardService } from '../../../services/main-card.service';
import favOpportunities from '../../../_files/favOpportunities.json';
import history from '../../../_files/history.json';

@Component({
  selector: 'app-main-card',
  templateUrl: './main-card.component.html',
  styleUrls: ['./main-card.component.scss'],
})
export class MainCardComponent implements OnInit {
  favouriteList: any = [];
  historyList: any = [];

  searchInput: string = '';
  historysearchInput: string = '';

  historyToggleFilterSearch: boolean = false;
  favouritetoggleFilterSearch: boolean = false;

  constructor(private _service: MainCardService) {}

  ngOnInit(): void {
    this._service.changelocationObv(window.location.pathname)

    this.dataInitilization();

    // getting data from service
    this._service.FavouriteDataObv.subscribe((data: any) => {
      this.favouriteList = data;
    });

    this._service.HistoryDataObv.subscribe((data: any) => {
      this.historyList = data;
    });
  }

  dataInitilization() {
    this._service.changeFavouriteData(favOpportunities.root);
    this._service.changeHistoryData(history.root);
  }

  favouriteFilterSearch() {
    this.searchInput = '';
    this.favouritetoggleFilterSearch = !this.favouritetoggleFilterSearch;
  }

  historyFilterSearch() {
    this.historysearchInput = '';
    this.historyToggleFilterSearch = !this.historyToggleFilterSearch;
  }

  change(event: any) {
    this.searchInput = event.target.value;
  }

  historyChange(event: any) {
    this.historysearchInput = event.target.value;
  }

  unfavopp(opportunity: any) {
    // we are making copy instead of reference ... and by this we make copy and make changes in that and this will update in behaviorSubject
    let copyFavouriteList = JSON.parse(JSON.stringify(this.favouriteList));
    //You have to change fav behaviour subject
    let favIndex = copyFavouriteList.findIndex(
      (x: any) => x.id_Opp == opportunity.id_Opp
    );

    if (favIndex > -1) {
      copyFavouriteList[favIndex].isfavorite =
        !copyFavouriteList[favIndex].isfavorite;
      // sending data to service
      this._service.changeFavouriteData(copyFavouriteList); //??
    }

    let copyhistoryList = JSON.parse(JSON.stringify(this.historyList));

    //You have to change hist behvaiour subject
    let histIndex = copyhistoryList.findIndex(
      (x: any) => x.id_Opp == opportunity.id_Opp
    );

    if (histIndex > -1) {
      copyhistoryList[histIndex].isfavorite =
        !copyhistoryList[histIndex].isfavorite;
      this._service.changeHistoryData(copyhistoryList);
    }
  }

  unfavHistory(opportunity: any) {
    let copyhistoryList1 = JSON.parse(JSON.stringify(this.historyList));
    //You have to change hist behvaiour subject
    let histIndex = copyhistoryList1.findIndex(
      (x: any) => x.id_Opp == opportunity.id_Opp
    );

    if (histIndex > -1) {
      copyhistoryList1[histIndex].isfavorite =
        !copyhistoryList1[histIndex].isfavorite;
      this._service.changeHistoryData(copyhistoryList1);
    }

    let copyFavouriteList1 = JSON.parse(JSON.stringify(this.favouriteList));

    //You have to change fav behaviour subject
    let favIndex = copyFavouriteList1.findIndex(
      (x: any) => x.id_Opp == opportunity.id_Opp
    );

    if (favIndex > -1) {
      copyFavouriteList1[favIndex].isfavorite =
        !copyFavouriteList1[favIndex].isfavorite;
      this._service.changeFavouriteData(copyFavouriteList1);
    } else {
      opportunity.isfavorite = !opportunity.isfavorite;
      copyFavouriteList1.push(opportunity);
      this._service.changeFavouriteData(copyFavouriteList1);
    }
  }

  selectopp(opportunity: any) {
    // making copy of  lists
    let copyhistoryList2 = JSON.parse(JSON.stringify(this.historyList));

    //You have to change hist behvaiour subject
    let histIndex = copyhistoryList2.findIndex(
      (x: any) => x.id_Opp == opportunity.id_Opp
    );

    // work for copyFavList
    if (histIndex == -1) {
      this.historyList.unshift(opportunity);
      // this._service.changeHistoryData(copyhistoryList2);
    }
    else {
      // ..... if opportinity already present in copyHistoryList
      if (histIndex != -1) {
        this.historyList.splice(histIndex, 1);
        this.historyList.unshift(opportunity);
        // we use splice to remove listitem at specific index and also take second parameter that specify how many listitem to remove from that index
        // unshift method use to add list item at the start of the list
      }
    }
  }
}
