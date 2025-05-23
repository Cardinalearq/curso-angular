import { authReducer, initialState } from './auth.reducer';

fdescribe('Auth Reducer', () => {
  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = authReducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
