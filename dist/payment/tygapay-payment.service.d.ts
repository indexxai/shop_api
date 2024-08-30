export declare class TygaPayPayentService {
    createNewOrder(email: string, orderId: string, amount: number): Promise<{
        payment_id: any;
        client_secret: any;
        redirect_url: any;
        customer: string;
    }>;
    createNewOrderForAcademy(email: string, orderId: string, amount: number): Promise<any>;
}
export declare class TygaPayService {
    private apiSecret;
    private readonly client;
    constructor(apiKey: string, apiSecret: string);
    createOrder(request: {
        orderNumber: string;
        type: 'payment' | 'deposit';
        email: string;
        amount: number;
        notifyUrl: string;
        returnUrl: string;
    }): Promise<unknown>;
    getUserByUserId(userId: string): Promise<unknown>;
    processApiRequest<T>(method: 'POST' | 'GET' | 'PUT' | 'DELETE', url: string, body?: any): Promise<T>;
    private extractApiPath;
    private signApiRequest;
}
