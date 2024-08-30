import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NoteCardComponent } from './common-ui/note-card/note-card.component';
import { NoteListComponent } from './common-ui/note-list/note-list.component';
import { AddNoteFormComponent } from './common-ui/add-note-form/add-note-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NoteCardComponent,
    NoteListComponent,
    AddNoteFormComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
