export class Match {
  constructor(
    public initiatorID: string,
    public partnerID: string,
    public matchedOffer: string,
    public accepted: boolean
  ) {}
}
