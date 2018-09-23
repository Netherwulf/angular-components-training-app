import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-server-elememt',
  templateUrl: './server-elememt.component.html',
  styleUrls: ['./server-elememt.component.css']
})
export class ServerElememtComponent implements OnInit {

  @Input() element: {type: string, name: string, content: string};

  constructor() { }

  ngOnInit() {
  }

}
