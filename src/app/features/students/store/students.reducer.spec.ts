import { studentsReducer, initialState } from './students.reducer';

fdescribe('Students Reducer', () => {
  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;
      const result = studentsReducer(initialState, action);
      expect(result).toBe(initialState);
    });
  });
});
