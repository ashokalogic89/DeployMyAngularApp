import { Component, OnInit , Input, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-note-list-item',
  templateUrl: './note-list-item.component.html',
  styleUrls: ['./note-list-item.component.css']
})
export class NoteListItemComponent implements OnInit {

  @Input() note : String;
  
  @Output() noteTObeDelete : EventEmitter<String> = new   EventEmitter<String>();
  
  constructor() { }

  ngOnInit(): void {
  }

  NoteTobeDeleted(){
    this.noteTObeDelete.emit(this.note);
  }
  
}
