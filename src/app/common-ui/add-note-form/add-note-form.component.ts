import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { LocalStorageService } from '../../data/services/local-storage.service';

@Component({
  selector: 'app-add-note-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add-note-form.component.html',
  styleUrl: './add-note-form.component.scss',
})
export class AddNoteFormComponent {

  localStorageService = inject(LocalStorageService);


  noteForm = new FormGroup({
    noteTitle: new FormControl(null),
    noteDescription: new FormControl(null),
  });

  onSubmit(event : Event) {
    event
  }
}
