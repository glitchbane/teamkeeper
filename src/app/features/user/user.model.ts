
export class User{

  constructor(
    public _id: string,
    public authId: string,
    public email: string,
    public role: string,
    public organizationId: string,
    public teamId: string,
    public profileId: string,
    public createdDate: Date = null,
    public modifiedDate: Date = null
){};
}
