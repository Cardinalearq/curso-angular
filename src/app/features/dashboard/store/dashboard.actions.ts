import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';

import { Dashboard } from './dashboard.model';

export const DashboardActions = createActionGroup({
  source: 'Dashboard/API',
  events: {
    'Load Dashboards': props<{ dashboards: Dashboard[] }>(),
    'Add Dashboard': props<{ dashboard: Dashboard }>(),
    'Upsert Dashboard': props<{ dashboard: Dashboard }>(),
    'Add Dashboards': props<{ dashboards: Dashboard[] }>(),
    'Upsert Dashboards': props<{ dashboards: Dashboard[] }>(),
    'Update Dashboard': props<{ dashboard: Update<Dashboard> }>(),
    'Update Dashboards': props<{ dashboards: Update<Dashboard>[] }>(),
    'Delete Dashboard': props<{ id: string }>(),
    'Delete Dashboards': props<{ ids: string[] }>(),
    'Clear Dashboards': emptyProps(),
  }
});
