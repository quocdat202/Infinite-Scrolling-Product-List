
export interface ProductTypes {
    id: number;
    title: string;
    description: string;
    images: string[];
}

export interface responseType {
    messageResponse: string;
    statusCode: number;
    data: any;
    isLoading: boolean;
}

export interface dataProducts {
    data: [];
}
