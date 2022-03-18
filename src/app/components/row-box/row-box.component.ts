import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-row-box',
  templateUrl: './row-box.component.html',
  styleUrls: ['./row-box.component.scss']
})
export class RowBoxComponent implements OnInit {

  @Input() letter!:string;

  constructor() { }

  ngOnInit(): void {

  }



}
