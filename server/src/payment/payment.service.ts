import { ForbiddenException, Injectable } from '@nestjs/common';
import axios from 'axios';
import { MakePaymentDto } from './dto/make-payment.dto';

@Injectable()
export class PaymentService {
  async makePayment(makePaymentDto: MakePaymentDto) {
    try {
      const { data } = await axios({
        method: 'POST',
        url: 'https://api.yookassa.ru/v3/payments',
        headers: {
          'Content-Type': 'application/json',
          'Idempotence-Key': Date.now(),
        },
        auth: {
          username: '216151',
          password: 'test_W0lATiuNvG9z7w_deOlsjHP37FiOuY0w5SjNNGbE-s8',
        },
        data: {
          amount: {
            value: makePaymentDto.amount,
            currency: 'RUB',
          },
          capture: true,
          confirmation: {
            type: 'redirect',
            return_url: 'http://localhost:3001/order',
          },
          description: 'Заказ №1',
        },
      });

      return data;
    } catch (error) {
      throw new ForbiddenException(error);
    }
  }
}