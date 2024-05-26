import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import * as cors from 'cors';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  app.useGlobalPipes(new ValidationPipe({ disableErrorMessages: false }));
  
  // Enable CORS
  // CORS Configuration
  const allowedOrigins = ['http://localhost:3000' ,'https://burgeranime.vercel.app']; // https://burgeranime.vercel.app
  const corsOptions = {
    origin: function (origin: string, callback: Function) {
      if (allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
    optionsSuccessStatus: 200,
  };

  app.use(cors());
  
  const port = process.env.PORT || 5000;
  await app.listen(port);
}

bootstrap();