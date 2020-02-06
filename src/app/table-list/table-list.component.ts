import { Component, OnInit, ViewChild } from '@angular/core';
import { DragonService } from '../dragon/dragon.service';
import { Dragon } from '../dragon/dragon';

import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {

  dragonList: Dragon[] = [];
  obs;

  displayedColumns: string[] = ['id', 'name', 'type', 'acoes'];
  dataSource: MatTableDataSource<Dragon>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private dragonService: DragonService) { 
    
  }

  setDragons(dragons){
    this.dragonList = dragons;
    this.dataSource = new MatTableDataSource(dragons);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnInit() {
    this.setDragons([]);
    this.obs = this.dragonService.getAll().subscribe(
       res  => this.setDragons(res),
       error => console.log(error)
    );
  }

}