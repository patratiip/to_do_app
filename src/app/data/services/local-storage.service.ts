import { Injectable } from '@angular/core';
import { Note } from '../interfaces/note.interface';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  notes: Note[] = [new Note(1, 'Ass', 'ASSHOLE', new Date(2024 - 1 - 1))];

  setNoteToArray(value: Note) {
    this.notes.push(value);
  }

  getNotesFromArray() {
    return this.notes;
  }
}
