import { NombreCompletoPipe } from './nombre-completo.pipe';

fdescribe('NombreCompletoPipe', () => {
  it('create an instance', () => {
    const pipe = new NombreCompletoPipe();
    expect(pipe).toBeTruthy();
  });
});
