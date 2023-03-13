import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../../Services/api-service.service';

@Component({
  selector: 'app-monstres',
  templateUrl: './monstres.component.html',
  styleUrls: ['./monstres.component.css']
})
export class MonstresComponent implements OnInit {

  constructor(private apiService: ApiServiceService) { }
  url: string = "http://www.dnd5eapi.co";
  ListMonstres: any = [];
  imageSelected:string = "";
  completeInfoMonstre: any = [];
  ngOnInit(): void {
  }

  getMonstres(): void {
    this.apiService.getMonstres().subscribe((data: any) => {
      console.log(data);
      this.ListMonstres = data.results;
    });
  }
  showMonstreImage(id: string): void {
    this.apiService.getMonstre(id).subscribe((data: any) => {
      console.log(data);
      this.imageSelected = this.url+data.image;
    });
  }
  async getMonstre(id: string): Promise<void> {
    await this.apiService.getMonstre(id).subscribe((data: any) => {
      return data;
    });
  }

  async updateMonstreInfo(event:any, index:string) {
    console.log(index);
    if(event.target.checked) {
      await this.apiService.getMonstre(index).subscribe((data: any) => {
        console.log(data);
        this.completeInfoMonstre.push(data);
      });

    } else {
      this.completeInfoMonstre.splice(this.completeInfoMonstre.indexOf(this.getMonstre(index)), 1);
    }
  }


}
