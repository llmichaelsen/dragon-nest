import { Component, OnInit, ViewChild } from '@angular/core';
import { DragonService } from '../dragon/dragon.service';
import { Dragon } from '../dragon/dragon';

import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { MatSnackBar } from '@angular/material';
import { HelperService } from '../shared/helper.service';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {

  dragonList: Dragon[] = [];

  displayedColumns: string[] = ['id', 'name', 'type', 'acoes'];
  dataSource: MatTableDataSource<Dragon>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(
    private dragonService: DragonService,
    private _snackBar: MatSnackBar,
    private helperServ: HelperService) { 
    
  }

  ngOnInit() {
    this.loadDragons();
  }

  setDragons(dragons){
    this.dragonList = dragons;
    this.dataSource = new MatTableDataSource(dragons);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }  

  loadDragons(){
    this.dragonService.getAll().subscribe(
      res  => this.setDragons(res),
      error => console.log(error)
   );
  }

  deleteDragon(dragon: Dragon) {
    var r = confirm("Você tem certeza disso?");
    if (r) {
      this.dragonService.delete(dragon).subscribe(
        res => this.dragonDeleted(dragon),
        error => console.log(error)
      )
    } 
  }

  private dragonDeleted(dragon){
    this.loadDragons();
    this.helperServ.openSnackBar(`Dragão ${dragon.name} deletado com sucesso!`, 'Fechar' )
  }

}