"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TygaPayService = exports.TygaPayPayentService = void 0;
const axios_1 = __importDefault(require("axios"));
const url_1 = require("url");
const qs_1 = __importDefault(require("qs"));
const crypto_1 = __importDefault(require("crypto"));
class TygaPayPayentService {
    async createNewOrder(email, orderId, amount) {
        const apiKey = 'ce04fbce-de08-4011-a51a-e3877980e3f8';
        const apiSecret = '4db73b8d5997857aad795408f3cb15d9738ddbf1114167d0ce6e0954c487c5d0';
        const service = new TygaPayService(apiKey, apiSecret);
        const redirectUrl = process.env.SHOP_URL || 'http://localhost:3003';
        const order = await service.createOrder({
            orderNumber: orderId,
            type: 'payment',
            email: email,
            amount: amount,
            notifyUrl: 'https://api.indexx.ai/api/v1/inex/order/paypalWebhook',
            returnUrl: `${redirectUrl}/orders/${orderId}/payment`,
        });
        console.log(order);
        const transformedOrder = {
            payment_id: order.data.orderId,
            client_secret: null,
            redirect_url: order.data.paymentUrl || null,
            customer: email,
        };
        return transformedOrder;
    }
    async createNewOrderForAcademy(email, orderId, amount) {
        const apiKey = 'ce04fbce-de08-4011-a51a-e3877980e3f8';
        const apiSecret = '4db73b8d5997857aad795408f3cb15d9738ddbf1114167d0ce6e0954c487c5d0';
        const service = new TygaPayService(apiKey, apiSecret);
        const order = await service.createOrder({
            orderNumber: orderId,
            type: 'payment',
            email: email,
            amount: amount,
            notifyUrl: 'https://academy.indexx.ai/api/tygapay/webhook',
            returnUrl: `https://academy.indexx.ai/tygapay-success?type=tygapay&orderId=${orderId}`,
        });
        console.log(order);
        return order;
    }
}
exports.TygaPayPayentService = TygaPayPayentService;
class TygaPayService {
    constructor(apiKey, apiSecret) {
        this.apiSecret = apiSecret;
        this.client = axios_1.default.create({
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': apiKey,
            },
        });
    }
    async createOrder(request) {
        const url = 'https://orders-v1-api-rdqehkur6a-ey.a.run.app/orders';
        return this.processApiRequest('POST', url, request);
    }
    async getUserByUserId(userId) {
        const url = `https://users-v1-api-rdqehkur6a-ey.a.run.app/user?userId=${userId}`;
        return this.processApiRequest('GET', url);
    }
    async processApiRequest(method, url, body) {
        try {
            const apiPath = this.extractApiPath(url);
            const signature = this.signApiRequest(body, apiPath);
            const response = await this.client.request({
                method,
                url,
                data: body,
                headers: {
                    'x-api-hash': signature,
                },
            });
            return response.data;
        }
        catch (error) {
            console.error('TygaPay API request failed', error);
            throw error;
        }
    }
    extractApiPath(url) {
        const parsedUrl = new url_1.URL(url);
        const apiPath = `${parsedUrl.pathname}${parsedUrl.search}`;
        console.log(`Parsed URL: ${apiPath}`);
        return apiPath;
    }
    signApiRequest(body, apiPath) {
        const bodyQueryString = qs_1.default.stringify(body, {
            encode: false,
            delimiter: '&',
            allowDots: true,
        });
        console.log(bodyQueryString);
        const stringToSign = apiPath + bodyQueryString;
        const signature = crypto_1.default
            .createHmac('sha256', this.apiSecret)
            .update(stringToSign)
            .digest('hex');
        return signature;
    }
}
exports.TygaPayService = TygaPayService;
//# sourceMappingURL=tygapay-payment.service.js.map