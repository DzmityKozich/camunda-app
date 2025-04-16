import {
  ProcessDefinition,
  ProcessDefinitionService,
} from 'entity/ProcessDefinition';
import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';
import { inject } from '@angular/core';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { tapResponse } from '@ngrx/operators';
import { pipe, switchMap, tap } from 'rxjs';

type ProcessDefinitionListState = {
  list: ProcessDefinition[];
  loading: boolean;
};

const initialState: ProcessDefinitionListState = {
  list: [],
  loading: false,
};

export const ProcessDefinitionListStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withMethods(
    (store, processDefinitionService = inject(ProcessDefinitionService)) => ({
      loadProcessDefinitionList: rxMethod<void>(
        pipe(
          tap(() => patchState(store, { loading: true })),
          switchMap(() =>
            processDefinitionService.getProcessDefinitionList().pipe(
              tapResponse({
                next: (list) => patchState(store, { list, loading: false }),
                error: () => patchState(store, { loading: false }),
              })
            )
          )
        )
      ),
    })
  )
);
