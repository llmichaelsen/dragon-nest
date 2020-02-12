import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DragonService } from '../dragon.service';
import { Dragon } from '../dragon';
import { HelperService } from '../../shared/helper.service';

@Component({
  selector: 'app-detail-dragon',
  templateUrl: './detail-dragon.component.html',
  styleUrls: ['./detail-dragon.component.scss']
})
export class DetailDragonComponent implements OnInit {

  dragon: Dragon;

  constructor(
    private route: ActivatedRoute,
    private dragonService: DragonService,
    private helperServ: HelperService
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id')

    this.dragonService.getDragon(id).subscribe(
      res => this.setDragon(res),
      error => console.log(error)
    )
  }

  setDragon(dragon) {
    this.dragon = dragon;
    this.dragon.createdAt = this.helperServ.datetimeToString(dragon.createdAt);
  }

}
