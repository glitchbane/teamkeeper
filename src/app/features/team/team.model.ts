export class Team {

  constructor(
    public _id: string,
    public name: string,
    public organizationId: string,
    public imageUrl?: string,
    public inceptionDate?: Date,
    public disbandedDate?: Date,
    public createdDate?: Date,
    public modifiedDate?: Date
  ){}
}
