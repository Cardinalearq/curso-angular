import { createFeature, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Dashboard } from './dashboard.model';
import { DashboardActions } from './dashboard.actions';

export const dashboardsFeatureKey = 'dashboards';

export interface State extends EntityState<Dashboard> {
  // additional entities state properties
}

export const adapter: EntityAdapter<Dashboard> = createEntityAdapter<Dashboard>();

export const initialState: State = adapter.getInitialState({
  // additional entity state properties
});

export const reducer = createReducer(
  initialState,
  on(DashboardActions.addDashboard,
    (state, action) => adapter.addOne(action.dashboard, state)
  ),
  on(DashboardActions.upsertDashboard,
    (state, action) => adapter.upsertOne(action.dashboard, state)
  ),
  on(DashboardActions.addDashboards,
    (state, action) => adapter.addMany(action.dashboards, state)
  ),
  on(DashboardActions.upsertDashboards,
    (state, action) => adapter.upsertMany(action.dashboards, state)
  ),
  on(DashboardActions.updateDashboard,
    (state, action) => adapter.updateOne(action.dashboard, state)
  ),
  on(DashboardActions.updateDashboards,
    (state, action) => adapter.updateMany(action.dashboards, state)
  ),
  on(DashboardActions.deleteDashboard,
    (state, action) => adapter.removeOne(action.id, state)
  ),
  on(DashboardActions.deleteDashboards,
    (state, action) => adapter.removeMany(action.ids, state)
  ),
  on(DashboardActions.loadDashboards,
    (state, action) => adapter.setAll(action.dashboards, state)
  ),
  on(DashboardActions.clearDashboards,
    state => adapter.removeAll(state)
  ),
);

export const dashboardsFeature = createFeature({
  name: dashboardsFeatureKey,
  reducer,
  extraSelectors: ({ selectDashboardsState }) => ({
    ...adapter.getSelectors(selectDashboardsState)
  }),
});

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = dashboardsFeature;
