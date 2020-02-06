import { Component, OnInit } from '@angular/core';
import { DragonService } from '../dragon/dragon.service';
import { Dragon } from '../dragon/dragon';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {

  dragonList: Dragon[] = [];
  obs;

  constructor(private dragonService: DragonService) { }

  ngOnInit() {
    this.obs = this.dragonService.getAll().subscribe(
       res  => this.dragonList = res,
       error => console.log(error)
    );
  /*
    this.dragonService.create(new Dragon('Julius', 'Challenger', [])).subscribe(
      res => console.log(res),
      error => console.log(error)
    );
    */
  }

}
