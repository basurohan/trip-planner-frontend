export class Trip {
  constructor(
    public id: string,
    public order: string,
    public country: string,
    public city: string,
    public hotel: string,
    public ticketConfirmationNumber: string,
    public noOfTraveller: string,
    public budget: string,
    public startDate: string,
    public endDate: string,
    public thingsToDo: string
  ) {}
}
