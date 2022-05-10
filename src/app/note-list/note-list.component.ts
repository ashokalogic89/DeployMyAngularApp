import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css']
})
export class NoteListComponent implements OnInit {

  note : String;
  noteList : Array<String> = [];
 
  constructor() { }

  ngOnInit(): void {
  }

  addNote(){
    this.noteList.push(this.note);
    this.note = '';
   console.log(this.noteList.length);
  }

  deleteNote( noteDelete : String){
    const indexOfTheNoteToDelete = this.noteList.indexOf(noteDelete);
    this.noteList.splice(indexOfTheNoteToDelete,1);
    

  }

}
