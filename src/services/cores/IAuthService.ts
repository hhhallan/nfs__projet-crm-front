export interface IAuthService {
   login(email: string, password: string): Promise<string>;
   resetPwd(email: string): Promise<any>;
   changePwd(resetToken: string, password: string): Promise<any>;
}