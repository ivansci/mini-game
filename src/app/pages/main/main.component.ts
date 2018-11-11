import { Component, OnInit } from '@angular/core';
import { ColorService } from '../../services/color.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html'
})

export class MainComponent implements OnInit {

  color: string;
  position: number;

  constructor(private colorService: ColorService) { }

  ngOnInit() {
    this.changeColor();
    this.position = 0;
  }

  // Get Random color from service
  changeColor() {
    this.colorService.getColor()
    .subscribe(
      data => {
        if (data.colors[0].hex) {
          this.color = '#' + data.colors[0].hex;
        }
      });
    }

    // On Click change css class
    changePosition() {
      this.position = this.position + 1;
      this.changeColor();

      if (this.position > 3) {
          this.position = 0;
      }
  }
}
