
export interface Account {
    id_user: number;
    pass: string;
    user_name: string;
    EmployeeId: number;
    role: number
}



export interface AuthSate {
    isLoggedIn: boolean;
    logging: boolean;
    account: Account | {};
}