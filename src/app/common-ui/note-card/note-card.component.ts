import { Component, Inject, Input } from '@angular/core';
import { Note } from '../../data/interfaces/note.interface';

@Component({
  selector: 'app-note-card',
  standalone: true,
  imports: [],
  templateUrl: './note-card.component.html',
  styleUrl: './note-card.component.scss',
})
export class NoteCardComponent {
  @Input() note!: Note;
}
