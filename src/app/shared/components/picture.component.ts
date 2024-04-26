import { Component, Input } from '@angular/core';

@Component({
  selector: 'picture-component',
  templateUrl: './picture.component.html',
  styleUrls: ['./picture.component.css']
})
export class PictureComponent {
	@Input()
	public vehicleType: string | null = 'auto';
}
