import { createFeature, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Courses } from './courses.model';
import { CoursesActions } from './courses.actions';

export const coursesesFeatureKey = 'courseses';

export interface State extends EntityState<Courses> {
  // additional entities state properties
}

export const adapter: EntityAdapter<Courses> = createEntityAdapter<Courses>();

export const initialState: State = adapter.getInitialState({
  // additional entity state properties
});

export const reducer = createReducer(
  initialState,
  on(CoursesActions.addCourses,
    (state, action) => adapter.addOne(action.courses, state)
  ),
  on(CoursesActions.upsertCourses,
    (state, action) => adapter.upsertOne(action.courses, state)
  ),
  on(CoursesActions.addCoursess,
    (state, action) => adapter.addMany(action.coursess, state)
  ),
  on(CoursesActions.upsertCoursess,
    (state, action) => adapter.upsertMany(action.coursess, state)
  ),
  on(CoursesActions.updateCourses,
    (state, action) => adapter.updateOne(action.courses, state)
  ),
  on(CoursesActions.updateCoursess,
    (state, action) => adapter.updateMany(action.coursess, state)
  ),
  on(CoursesActions.deleteCourses,
    (state, action) => adapter.removeOne(action.id, state)
  ),
  on(CoursesActions.deleteCoursess,
    (state, action) => adapter.removeMany(action.ids, state)
  ),
  on(CoursesActions.loadCoursess,
    (state, action) => adapter.setAll(action.coursess, state)
  ),
  on(CoursesActions.clearCoursess,
    state => adapter.removeAll(state)
  ),
);

export const coursesesFeature = createFeature({
  name: coursesesFeatureKey,
  reducer,
  extraSelectors: ({ selectCoursesesState }) => ({
    ...adapter.getSelectors(selectCoursesesState)
  }),
});

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = coursesesFeature;
