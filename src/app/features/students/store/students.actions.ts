import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';

import { Students } from './students.model';

export const StudentsActions = createActionGroup({
  source: 'Students/API',
  events: {
    'Load Studentss': props<{ studentss: Students[] }>(),
    'Add Students': props<{ students: Students }>(),
    'Upsert Students': props<{ students: Students }>(),
    'Add Studentss': props<{ studentss: Students[] }>(),
    'Upsert Studentss': props<{ studentss: Students[] }>(),
    'Update Students': props<{ students: Update<Students> }>(),
    'Update Studentss': props<{ studentss: Update<Students>[] }>(),
    'Delete Students': props<{ id: string }>(),
    'Delete Studentss': props<{ ids: string[] }>(),
    'Clear Studentss': emptyProps(),
  }
});
