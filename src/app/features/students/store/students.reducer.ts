import { createFeature, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Students } from './students.model';
import { StudentsActions } from './students.actions';

export const studentsesFeatureKey = 'studentses';

export interface State extends EntityState<Students> {
  // additional entities state properties
}

export const adapter: EntityAdapter<Students> = createEntityAdapter<Students>();

export const initialState: State = adapter.getInitialState({
  // additional entity state properties
});

export const reducer = createReducer(
  initialState,
  on(StudentsActions.addStudents,
    (state, action) => adapter.addOne(action.students, state)
  ),
  on(StudentsActions.upsertStudents,
    (state, action) => adapter.upsertOne(action.students, state)
  ),
  on(StudentsActions.addStudentss,
    (state, action) => adapter.addMany(action.studentss, state)
  ),
  on(StudentsActions.upsertStudentss,
    (state, action) => adapter.upsertMany(action.studentss, state)
  ),
  on(StudentsActions.updateStudents,
    (state, action) => adapter.updateOne(action.students, state)
  ),
  on(StudentsActions.updateStudentss,
    (state, action) => adapter.updateMany(action.studentss, state)
  ),
  on(StudentsActions.deleteStudents,
    (state, action) => adapter.removeOne(action.id, state)
  ),
  on(StudentsActions.deleteStudentss,
    (state, action) => adapter.removeMany(action.ids, state)
  ),
  on(StudentsActions.loadStudentss,
    (state, action) => adapter.setAll(action.studentss, state)
  ),
  on(StudentsActions.clearStudentss,
    state => adapter.removeAll(state)
  ),
);

export const studentsesFeature = createFeature({
  name: studentsesFeatureKey,
  reducer,
  extraSelectors: ({ selectStudentsesState }) => ({
    ...adapter.getSelectors(selectStudentsesState)
  }),
});

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = studentsesFeature;
