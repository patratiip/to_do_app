export interface NoteInterface {
  id: number;
  title: string;
  description: string;
  dateAndTime: Date;
}

export class Note {
  id?: number;
  title?: string;
  description?: string;
  dateAndTime?: Date;

  constructor(
    id: number,
    title: string,
    description: string,
    dateAndTime: Date
  ) {
    return new Note(
      (this.id = id),
      (this.title = title),
      (this.description = description),
      (this.dateAndTime = dateAndTime)
    );
  }
}
