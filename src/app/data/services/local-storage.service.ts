import { Injectable } from '@angular/core';
import { Note } from '../interfaces/note.interface';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  note1 = new Note(1, 'Ass', 'ASSHOLE', new Date(2024 - 1 - 1));
  note2 = new Note(2, 'Ass', 'ASSHOLE', new Date(2024 - 1 - 1));
  notes: Note[] = [this.note1, this.note2];

  setNoteToArray(value: Note) {
    this.notes.push(value);
  }

  getNotesFromArray() {
    return this.notes;
  }
}
