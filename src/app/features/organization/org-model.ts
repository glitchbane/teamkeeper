export class Organization {
  constructor(
    public _id: string,
    public name: string,
    public location: string,
    public createdDate?: Date,
    public modifiedDate?: Date
  ){}
}
