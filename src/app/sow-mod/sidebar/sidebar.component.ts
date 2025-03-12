import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { NbMenuItem } from '@nebular/theme';
import { MainCardService } from 'src/app/services/main-card.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  // sowClicked : boolean = true
  // idtClicked : boolean = true
  // boiClicked : boolean = true
  sowClick : boolean = false
  identifierClick=false ;
  boiclicked=false;

  menuLink:any=window.location.pathname

   constructor(private _service : MainCardService, private router: Router){}

   ngOnInit(): void {

    if(this.menuLink=='/sow/sow-test' || '/sow/sow-summary'){
      this.sowClick=true
      this.identifierClick=false
      this.boiclicked=false
    }
    if(this.menuLink=='/sow/identifiers'){
      this.sowClick=false
      this.identifierClick=true
      this.boiclicked=false
    }
    if(this.menuLink=='/sow/boi'){
      this.sowClick=false
      this.identifierClick=false
      this.boiclicked=true
    }

  }

  changeIcon() {
    this.sowClick=!this.sowClick
    console.log("this.menuLink",this.menuLink)
  }

  changeIcons(){
    this.identifierClick=!this.identifierClick
    console.log("this.menuLink",this.menuLink)

  }
  boiIcon(){
    this.boiclicked=!this.boiclicked
    console.log("this.menuLink",this.menuLink)
  }
  items: NbMenuItem[] = [
    {
     title: 'SOW',
     expanded: true,
     children: [
      {
       title: 'Summary',
       link:'/sow/sow-summary'
      },
      {
       title: 'SOW Test',
       link:'/sow/sow-test',
      },
     ],
    },
   ];
}
