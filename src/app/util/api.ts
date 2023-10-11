import { AxiosResponse } from "axios";
import { ApiResponse } from "../class/ApiResponse";

export const transform = (response: AxiosResponse): Promise<ApiResponse<any>> => {
  return new Promise((resolve, reject) => {
    const result: ApiResponse<any> = {
      data: response.data,
      succeeded: response.status === 200,
      errors: response.data.errors,
    };
    resolve(result);
  });
};
