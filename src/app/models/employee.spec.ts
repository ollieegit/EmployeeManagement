import { Employee } from './employee';

describe('Employee.Ts', () => {
  it('should create an instance', () => {
    expect(new Employee(0, "", "", "Female", "default")).toBeTruthy();
  });
});
