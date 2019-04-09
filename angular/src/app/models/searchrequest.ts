export class Searchrequest {
  constructor(
  public minAgeParam: number,
  public maxAgeParam: number,
  public sexParam: number,
  public offerParam: number,
  public createdAt: Date,
  public cityParam?: number
  ) {}
}
