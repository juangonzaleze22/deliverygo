import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-empty',
  templateUrl: './empty.component.html',
  styleUrls: ['./empty.component.scss']
})
export class EmptyComponent implements OnInit {

  @Input() text: string;
  @Input() icon: string;

  constructor() { }

  ngOnInit(): void {
  }

}
