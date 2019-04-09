export class User {
  constructor(
    public uid: string,
    public firstname: string,
    public lastname: string,
    public dateOfBirth: Date,
    public sex: number,
    public city: number,
    public activities: number[],
    public offers: number[],
    public mail?: string
  ) {}
}
