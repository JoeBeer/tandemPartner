export class User {
  constructor(
    public uid: string,
    public firstname: string,
    public lastname: string,
    public dateOfBirth: Date,
    public sex: string,
    public city: string,
    public activities: string[],
    public offers: string[],
    public mail?: string
  ) {}
}
