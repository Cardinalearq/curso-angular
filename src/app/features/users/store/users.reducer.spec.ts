import { usuariosReducer, initialState } from './users.reducer';

fdescribe('Users Reducer', () => {
  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;
      const result = usuariosReducer(initialState, action);
      expect(result).toBe(initialState);
    });
  });
});

