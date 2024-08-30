import { Component, inject } from '@angular/core';
import { LocalStorageService } from '../../data/services/local-storage.service';
import { Note } from '../../data/interfaces/note.interface';
import { NoteCardComponent } from '../note-card/note-card.component';

@Component({
  selector: 'app-note-list',
  standalone: true,
  imports: [NoteCardComponent],
  templateUrl: './note-list.component.html',
  styleUrl: './note-list.component.scss',
})
export class NoteListComponent {
  localStorageService = inject(LocalStorageService);
  notes: Note[];

  constructor() {
    this.notes = this.localStorageService.getNotesFromArray();
  }
}
