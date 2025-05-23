import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';

import { Courses } from './courses.model';

export const CoursesActions = createActionGroup({
  source: 'Courses/API',
  events: {
    'Load Coursess': props<{ coursess: Courses[] }>(),
    'Add Courses': props<{ courses: Courses }>(),
    'Upsert Courses': props<{ courses: Courses }>(),
    'Add Coursess': props<{ coursess: Courses[] }>(),
    'Upsert Coursess': props<{ coursess: Courses[] }>(),
    'Update Courses': props<{ courses: Update<Courses> }>(),
    'Update Coursess': props<{ coursess: Update<Courses>[] }>(),
    'Delete Courses': props<{ id: string }>(),
    'Delete Coursess': props<{ ids: string[] }>(),
    'Clear Coursess': emptyProps(),
  }
});
