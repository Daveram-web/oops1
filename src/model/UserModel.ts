import { BaseModel } from "./BaseModel";

export interface IUser {
  id: number | null;
  name: string;
  email: string;
  avathar: string;
  bio?: string;
  password: string;
  gender?: string;
  language_id?: string;
  date_of_birth?: string;
  device_id: string;
  gener_id?: string;
  is_notify: number;
  oauth_provider: string;
  otp: number;
  google_auth?: string;
  apple_auth?: string;
  otp_expirity?: number;
}

export class User implements IUser {
  constructor(
    public id: number | null,
    public name: string,
    public publicemail: string,
    public avathar: string,
    public device_id: string,
    public password: string,
    public is_notify: number,
    public oauth_provider: string,
    public otp: number,
    public email: string,
    public bio?: string,
    public gender?: string,
    public language_id?: string,
    public date_of_birth?: string,
    public gener_id?: string,
    public google_auth?: string,
    public apple_auth?: string,
    public otp_expirity?: number
  ) {}
}

export class UserModel extends BaseModel<User> {
  constructor() {
    super("user");
  }
  MaptoRow(row: any): User {
    return new User(
      row.id,
      row.name,
      row.email,
      row.avathar,
      row.bio,
      row.password,
      row.gender,
      row.language_id,
      row.date_of_birth,
      row.device_id,
      row.gener_id,
      row.is_notify,
      row.oauth_provider,
      row.otp,
      row.google_auth,
      row.apple_auth,
      row.otp_expirity
    );
  }
}

