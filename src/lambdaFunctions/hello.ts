import { APIGatewayProxyEvent, APIGatewayProxyHandler } from "aws-lambda";
import { StatusCodes } from "http-status-codes";
import { createApiGatewayResponse } from "../implementation/common/httpUtils";
import { HelloResponse } from "../implementation/common/interfaces";

export const handler: APIGatewayProxyHandler = async (
  event: APIGatewayProxyEvent
) => {
  const helloResponse: HelloResponse = {
    message: "Hello from the first lambda!",
  };
  return createApiGatewayResponse(StatusCodes.OK, helloResponse);
};
