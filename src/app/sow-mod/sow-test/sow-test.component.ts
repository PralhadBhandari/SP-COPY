import { Component } from '@angular/core';
import { NbMenuItem, NbSidebarService } from '@nebular/theme';
import { MainCardService } from '../../services/main-card.service';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-sow-test',
  templateUrl: './sow-test.component.html',
  styleUrls: ['./sow-test.component.scss']
})

export class SowTestComponent {
  loading: boolean=false;
  activeSowLink: string='';

  constructor(private sidebarService: NbSidebarService , private _service : MainCardService,private router:Router) {}
  // checkBoxThirdParty = false;
  isClicked:boolean=false
  clicked=false
  sowLink:any=window.location.pathname
  selectedSowValues:any[]=[]

  ngOnInit(): void {
      this.router.events.subscribe((event) => {
        if (event instanceof NavigationEnd) {
          this.activeSowLink = event.url; // update activeSowLink based on the active route
        }
      });

      this._service.changelocationObv(window.location.pathname)
      console.log("sowLink", this.sowLink)
  console.log("isClicked:", this.isClicked)
  // let changedClickFlag = true
  this.isClicked =  true;

  console.log("isClicked:", this.isClicked )

    let savedValues = JSON.parse(localStorage.getItem('selectedSowValues') || '[]');
    this.selectedSowValues = savedValues;
  }
  changeIcon(){
    this.isClicked=  !this.isClicked
  }
  changeIcons(){
    this.clicked=!this.clicked
  }

  onReload(){
    this.loading = true;
    setTimeout(() => this.loading = false, 1000);
    console.log(this.loading);
}
  onChange(index: number, selectedValue: any) {

    this.selectedSowValues[index] = selectedValue; //change here
    localStorage.setItem('selectedSowValues', JSON.stringify(this.selectedSowValues)); //save in localStorage
  }

  toggle() {
    this.sidebarService.toggle(false, 'left');
  }


  status:string=''
  userName=sessionStorage.getItem('userName')


  onPublish(click:string){
    this.status=click
  //   let offer_owner: any = this.sow_details.product.offer_owner.find((element : any ) => element.node_Id == this.payload.product.offer_owner.value )
  // this.payload.product.offer_owner.name = offer_owner?.node_name

  // let procuct_line: any = this.sow_details.product.procuct_line.find((element : any ) => element.node_Id == this.payload.product.procuct_line.value )
  // this.payload.product.procuct_line.name = procuct_line?.node_name

  // let streategic_family: any = this.sow_details.product.streategic_family.find((element : any ) => element.node_Id == this.payload.product.strategic_family.value )
  // this.payload.product.strategic_family.name = streategic_family?.node_name

  // let family: any = this.sow_details.product.family.find((element : any ) => element.node_Id == this.payload.product.family.value )
  // this.payload.product.family.name = family?.node_name

  // let gdp_family: any = this.sow_details.product.gdp_family.find((element : any ) => element.node_Id == this.payload.product.gdp_family.value )
  // this.payload.product.gdp_family.name = gdp_family?.node_name

    this.payload.io=this.sow_details.io
    localStorage.setItem("publish", JSON.stringify(this.payload) ) // set publish
    this.payload.status = click

    console.log("payload",this.payload);
  }

  //payload example
  payload = {
   product : {
    offer_owner: {
          name: '',
          value: '',
         },
         procuct_line: {
          name: '',
          value: '',
         },
         strategic_family: {
          name: '',
          value: '',
         },
         family: {
          name: '',
          value: '',
         },
         gdp_family: {
          name: '',
          value: '',
         },
     },
     third_party : {
      disableSelect:false,
      vendor_name:'',
      vendor_product:'',
     },
     io : [
      { ai: '', ao: '', di: '', do: '', universal: '', other: '' },
      { ai: '', ao: '', di: '', do: '', universal: '', other: '' },
      { ai: '', ao: '', di: '', do: '', universal: '', other: '' },
     ],
     cabinate :[
      { label: 'I/O', value: '' },
      { label: 'Control', value: '' },
      { label: 'Supervisory', value: '' },
      { label: 'Enterprise', value: '' },
    ],
     status : ''

     }

  sow_details = {
    product: {
      offer_owner: [
        {
          node_Id: '190781',
          level: 'Offer Owner',
          node_name: 'DIGITAL ENERGY',
          hierarchy_name: 'offer_owner',
        },
        {
          node_Id: '190782',
          level: 'Offer Owner',
          node_name: 'EM SOFTWARE VERTICAL.',
          hierarchy_name: 'offer_owner',
        },
        {
          node_Id: '190783',
          level: 'Offer Owner',
          node_name: 'ENERGY MANAGEMENT',
          hierarchy_name: 'offer_owner',
        },
        {
          node_Id: '190784',
          level: 'Offer Owner',
          node_name: 'GLOBAL SERVICES',
          hierarchy_name: 'offer_owner',
        },
        {
          node_Id: '190785',
          level: 'Offer Owner',
          node_name: 'HOME & DISTRIBUTION',
          hierarchy_name: 'offer_owner',
        },
      ],
      procuct_line: [
        {
          node_Id: '116919',
          level: 'PL',
          node_name: 'DIGITAL BUILDING PROD',
          hierarchy_name: 'product_line',
        },
        {
          node_Id: '116920',
          level: 'PL',
          node_name: 'DIGITAL BUILDINGS PROJ',
          hierarchy_name: 'product_line',
        },
        {
          node_Id: '116921',
          level: 'PL',
          node_name: 'DIGITAL BUILDINGS SERV',
          hierarchy_name: 'product_line',
        },
        {
          node_Id: '117905',
          level: 'PL',
          node_name: 'MEDIUM VOLTAGE PRODUTS',
          hierarchy_name: 'product_line',
        },
      ],
      streategic_family: [
        {
          node_Id: '143907',
          level: 'SPF',
          node_name: 'ON DEMAND SERVICES',
          hierarchy_name: 'strategic_family',
        },
        {
          node_Id: '143914',
          level: 'SPF',
          node_name: 'SMALL PROJECTS',
          hierarchy_name: 'strategic_family',
        },
        {
          node_Id: '143920',
          level: 'SPF',
          node_name: 'TRADITIONAL ASP',
          hierarchy_name: 'strategic_family',
        },
        {
          node_Id: '155797',
          level: 'SPF',
          node_name: 'TRANSITIONS',
          hierarchy_name: 'strategic_family',
        },
      ],
      family: [
        {
          node_Id: '155798',
          level: 'FAM',
          node_name: 'EBO SOFTWARE MODERNIZ',
          hierarchy_name: 'family',
        },
        {
          node_Id: '155799',
          level: 'FAM',
          node_name: 'SECURITY TRANSITIONS',
          hierarchy_name: 'family',
        },
        {
          node_Id: '155800',
          level: 'FAM',
          node_name: 'FIRE TRANSITIONS',
          hierarchy_name: 'family',
        },
      ],
      gdp_family: [
        {
          node_Id: '309A3B',
          level: 'GDP',
          node_name: 'SECURITY TRANSITIONS',
          hierarchy_name: 'gdp',
        },
      ],
    },
    third_party: {
      table_name: 'Bit',
      field_Name: 'isThirdParty',
      display_Text: 'Third Party',
      field_Type: 'CheckBox',
      field_Value: true,
      is_Required: '1',
      sorty_Order: 1,
    },
    io: [
      { ai: '', ao: '', di: '', do: '', universal: '', other: '' },
      { ai: '', ao: '', di: '', do: '', universal: '', other: '' },
      { ai: '', ao: '', di: '', do: '', universal: '', other: '' },
    ],

    cabinate: [
      { io: 0 },
      { control: 0 },
      { supervisory: 0 },
      { enterprise: 0 }
    ]
  };

}
