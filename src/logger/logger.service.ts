import { Injectable } from '@nestjs/common';
import { parse } from 'stack-trace';

@Injectable()
export class LoggerService {
    logMessage(message: string) {
        console.log(message);
    }

    logError(error: any) {
        console.log('Error Logging')
        console.debug(error);
    }
}
