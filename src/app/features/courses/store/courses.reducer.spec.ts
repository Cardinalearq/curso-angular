import { cursoReducer, initialState } from './courses.reducer';

fdescribe('Curso Reducer', () => {
  describe('accion desconocida', () => {
    it('deberia retornar el estado previo', () => {
      const action = { type: 'UNKNOWN_ACTION' } as any;
      const result = cursoReducer(initialState, action);
      expect(result).toBe(initialState);
    });
  });
});

