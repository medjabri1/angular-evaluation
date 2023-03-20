import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Customer } from 'src/app/models/Customer';

@Component({
  selector: 'app-editable-element',
  templateUrl: './editable-element.component.html',
  styleUrls: ['./editable-element.component.css']
})
export class EditableElementComponent {

  @Input() value: string = '';
  @Input() customer?: Customer;
  @Input() type: string = '';
  @Input() prop: string = '';
  @Input() isEditing?: boolean = false;

  @Output() change = new EventEmitter<Object>();

  genders: Array<String> = ['Female', 'Male'];
  types: Array<String> = ['Save', 'Check'];

  onChange($event: any) {

    this.change.emit({ event: $event, prop: this.prop });
  }

}
