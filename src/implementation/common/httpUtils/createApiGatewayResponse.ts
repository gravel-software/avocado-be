import { APIGatewayProxyResult } from "aws-lambda";
import { StatusCodes } from "http-status-codes";

export const createApiGatewayResponse = (
  statusCode: StatusCodes,
  responseBody: Object
): APIGatewayProxyResult => {
  return {
    statusCode,
    body: JSON.stringify(responseBody),
    headers: { "Content-Type": "text/plain" },
  };
};
