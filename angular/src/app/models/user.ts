export class User {
  constructor(
    public firstname: string,
    public lastname: string,
    public city: string,
    public dateOfBirth: Date,
    public activities: string[],
    public offers: string[],
    public sex: string,
    public uid: string,
    public mail?: string,
  ) {}
}
