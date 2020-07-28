import moment from 'moment';

export interface ILogger {
  readonly debug: (msg: string, params?: any) => void;
  readonly warn: (msg: string, params?: any) => void;
  readonly error: (msg: string, params?: any) => void;
  readonly info: (msg: string, params?: any) => void;
}

export enum LogMode {
  D = 'D',
  W = 'W',
  E = 'E',
  I = 'I'
}

export default class Logger implements ILogger {
  private static instance: Logger;
  private readonly fileName: string;

  static getInstance = (fileName: string): Logger => {
    return Logger.instance || (new Logger(fileName));
  }

  private constructor(fileName: string) {
    this.fileName = fileName;
  }

  private drawColor = (msg: string, type?: string): string[] => {
    const styleArr: string[] = [
      msg,
      'color: #95a5a6; font-weight: bold',
      'color: #242424; font-weight: bold'
    ];

    switch (type) {
      case LogMode.D: {
        return [
          ...styleArr,
          'color: #27ae60; font-weight: bold',
          'color: #242424; font-weight: 400'
        ];
      }
      case LogMode.W: {
        return [
          ...styleArr,
          'color: #d35400; font-weight: bold',
          'color: #242424;'
        ];
      }
      case LogMode.I: {
        return [
          ...styleArr,
          'color: #7f8c8d; font-weight: bold',
          'color: #242424;'
        ];
      }
      case LogMode.E: {
        return [
          ...styleArr,
          'color: #c0392b; font-weight: bold',
          'color: #242424;'
        ];
      }
    }
    return [];
  };

  private log = (mode: LogMode, msg: string, params: any = ''): void => {
    console.log(
      ...this.drawColor(
        `%c[${moment().format('DD/MM/YYYY HH:mm:ss.SSS')}] %c [${this.fileName}] %c{${mode}}: %c ${msg}`,
        mode
      ), params
    );
  }

  public debug = (msg: string, params?: any): void => {
    this.log(LogMode.D, msg, params);
  };

  public warn = (msg: string, params?: any): void => {
    this.log(LogMode.W, msg, params);
  };

  public error = (msg: string, params?: any): void => {
    this.log(LogMode.E, msg, params);
  };

  public info = (msg: string, params?: any): void => {
    this.log(LogMode.I, msg, params);
  };
}
