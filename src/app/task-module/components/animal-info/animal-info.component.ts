import { Component, OnInit } from '@angular/core';
import { RestService } from '../../../services/rest.service';

@Component({
  selector: 'app-animal-info',
  templateUrl: './animal-info.component.html',
  styleUrls: ['./animal-info.component.scss']
})
export class AnimalInfoComponent implements OnInit {

  constructor (private restService: RestService){}

  ngOnInit(): void {
    // this.callingAPI();

  }

  inputAnimalName:any =''
  animalList:any = []
  filteredAnimalList:any =[]

  flag : boolean = false


  // callingAPI(){
  //   this.restService.getWithHeader("https://api.api-ninjas.com/v1/animals?name="+this.animalName).subscribe({
  //     next:(data:any)=>{
  //       console.log("data",data);

  //     }
  //   })
  // }


  demoFunction( event: any){

    this.inputAnimalName = (event.target.value);

      this.restService.getWithHeader("https://api.api-ninjas.com/v1/animals?name="+this.inputAnimalName).subscribe({
        next:(data:any)=>{

          this.filteredAnimalList = data

          this.flag= true

          console.log(this.filteredAnimalList)

          // let index = 0
          // for (let i = 0; i < this.filteredAnimalList.length; i++) {
          //   index = index + 1 ;

          // console.log("Name : ", this.filteredAnimalList[i].name);
          // console.log("Scientific Name  : ", this.filteredAnimalList[i].taxonomy.scientific_name);
          // console.log("Habitat : ", this.filteredAnimalList[i].characteristics.habitat);
          // console.log("Diet : ", this.filteredAnimalList[i].characteristics.diet);
          // console.log("Lifespan : ", this.filteredAnimalList[i].characteristics.lifespan);
          // console.log("Location : ", this.filteredAnimalList[i].characteristics.location);

          // console.log("Description : ",'Name of this Animal is'+ this.filteredAnimalList[i].name +'. It is also known as '+this.filteredAnimalList[i].taxonomy.scientific_name
          // +". It found in "+this.filteredAnimalList[i].characteristics.location + ". Its average lifespan is "+this.filteredAnimalList[i].characteristics.lifespan

          // )


          // console.log("Characteristics : ", this.filteredAnimalList[i].characteristics)

          // }

        }
      })

    }

  }

