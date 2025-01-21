export interface ICreateUserDto{
    name:string
    email:string
    password:string
}

export interface IAuthenticateUserDto{
    email:string
    password:string
}