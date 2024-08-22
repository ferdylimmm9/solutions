export class ApiError {
    message: string;
    statusCode?: number;
    errors?: { [key: string]: string };
    /** Contains information about the original error */
    original?: any;
  }

export class IdInput {
  id: string;
}
