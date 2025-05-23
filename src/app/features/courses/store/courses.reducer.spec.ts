import { cursoReducer, initialState } from './courses.reducer';
import { CursoState } from './courses.reducer';

fdescribe('Curso Reducer', () => {
  describe('acción desconocida', () => {
    it('debería retornar el estado previo', () => {
      const action = { type: 'UNKNOWN_ACTION' } as any;

      const result = cursoReducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});

