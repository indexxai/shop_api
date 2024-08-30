import axios, { AxiosInstance } from 'axios';
import { URL } from 'url';
import qs from 'qs';
import crypto from 'crypto';

export class TygaPayPayentService {
  async createNewOrder(email: string, orderId: string, amount: number) {
    // Store this in a secure place.
    const apiKey = 'ce04fbce-de08-4011-a51a-e3877980e3f8';
    const apiSecret =
      '4db73b8d5997857aad795408f3cb15d9738ddbf1114167d0ce6e0954c487c5d0';

    const service = new TygaPayService(apiKey, apiSecret);

    // 2. POST EXAMPLE
    const order = await service.createOrder({
      orderNumber: orderId,
      type: 'payment',
      email: email,
      amount: amount,
      notifyUrl: 'https://api.indexx.ai/api/v1/inex/order/paypalWebhook',
      returnUrl: `{redirectUrl}/orders/${orderId}/payment`,
    }) as any;
    console.log(order);
    // Transform the response to match the required format
    const transformedOrder = {
      payment_id: order.data.orderId,
      client_secret: null, // TygaPay doesn't seem to return this, so defaulting to null
      redirect_url: order.data.paymentUrl || null,
      customer: email, // Assuming the customer is the email in this context
    };
  
    return transformedOrder;
  }

  async createNewOrderForAcademy(
    email: string,
    orderId: string,
    amount: number,
  ) {
    // Store this in a secure place.
    const apiKey = 'ce04fbce-de08-4011-a51a-e3877980e3f8';
    const apiSecret =
      '4db73b8d5997857aad795408f3cb15d9738ddbf1114167d0ce6e0954c487c5d0';

    const service = new TygaPayService(apiKey, apiSecret);

    // 2. POST EXAMPLE
    const order = await service.createOrder({
      orderNumber: orderId,
      type: 'payment',
      email: email,
      amount: amount,
      notifyUrl: 'https://academy.indexx.ai/api/tygapay/webhook',
      returnUrl: `https://academy.indexx.ai/tygapay-success?type=tygapay&orderId=${orderId}`,
    });
    console.log(order);
    return order as any;
  }
}

/**
 * Refer to the API documentation here: https://tygapay.github.io/docs/
 */
export class TygaPayService {
  private readonly client: AxiosInstance;

  /**
   * Initializes a new instance of the TygaPayService.
   * @param apiKey The API key used for authenticating API requests.
   * @param apiSecret The secret key used for signing API requests.
   */
  constructor(apiKey: string, private apiSecret: string) {
    this.client = axios.create({
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
      },
    });
  }

  /**
   * POST EXAMPLE
   * Creates a new order in the TygaPay system.
   * @param request The order details.
   * @returns The API response.
   */
  public async createOrder(request: {
    orderNumber: string;
    type: 'payment' | 'deposit';
    email: string;
    amount: number;
    notifyUrl: string;
    returnUrl: string;
  }) {
    const url = 'https://orders-v1-api-rdqehkur6a-ey.a.run.app/orders';
    return this.processApiRequest('POST', url, request);
  }

  /**
   * GET EXAMPLE
   * Retrieves a user by their user ID from TygaPay.
   * @param userId The user's unique identifier.
   * @returns The user's details.
   */
  public async getUserByUserId(userId: string) {
    const url = `https://users-v1-api-rdqehkur6a-ey.a.run.app/user?userId=${userId}`;
    return this.processApiRequest('GET', url);
  }

  /**
   * Processes an API request to TygaPay.
   * @param method The HTTP method (POST, GET, PUT, DELETE).
   * @param url The endpoint URL.
   * @param body The request payload, if any.
   * @returns The API response as a generic type T.
   */
  public async processApiRequest<T>(
    method: 'POST' | 'GET' | 'PUT' | 'DELETE',
    url: string,
    body?: any,
  ): Promise<T> {
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
      return response.data as T;
    } catch (error) {
      console.error('TygaPay API request failed', error);
      throw error;
    }
  }

  /**
   * Extracts the API path from a URL.
   * @param url The full URL.
   * @returns The extracted path and query string.
   */
  private extractApiPath(url: string) {
    const parsedUrl = new URL(url);
    const apiPath = `${parsedUrl.pathname}${parsedUrl.search}`;
    console.log(`Parsed URL: ${apiPath}`);
    return apiPath;
  }

  /**
   * Signs an API request by generating a hash signature.
   * @param body The request payload.
   * @param apiPath The API path.
   * @returns The signature string.
   */
  private signApiRequest(body: any, apiPath: string) {
    const bodyQueryString = qs.stringify(body, {
      encode: false,
      delimiter: '&',
      allowDots: true,
    });
    console.log(bodyQueryString);

    const stringToSign = apiPath + bodyQueryString;
    const signature = crypto
      .createHmac('sha256', this.apiSecret)
      .update(stringToSign)
      .digest('hex');

    return signature;
  }
}

///new TygaPaySandbox().runExamples();
