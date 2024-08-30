import { Module } from '@nestjs/common';
import { AuthModule } from 'src/auth/auth.module';
import { PaypalPaymentService } from './paypal-payment.service';
import { StripePaymentService } from './stripe-payment.service';
import { TygaPayPayentService } from './tygapay-payment.service';

@Module({
  imports: [AuthModule],
  providers: [StripePaymentService, PaypalPaymentService, TygaPayPayentService],
  exports: [StripePaymentService, PaypalPaymentService, TygaPayPayentService],
})
export class PaymentModule {}
