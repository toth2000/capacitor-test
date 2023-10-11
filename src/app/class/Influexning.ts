import { HttpClient } from "./HttpClient";
import { InfluexningInterface } from "../interface/Influenxing";
import { transform } from "../util/api";
import { ApiResponse } from "./ApiResponse";
import { CURRENT_BASE_URL } from "../constant/url";


export abstract class Influenxing<T>
  extends HttpClient
  implements InfluexningInterface<T>
{
  protected collection: string | undefined;

  public async get(id: string): Promise<ApiResponse<T>> {
    const instance = this.createInstance();
    const result = await instance
      .get(`${CURRENT_BASE_URL}/${this.collection}/`)
      .then(transform);
    return result as ApiResponse<T>;
  }

  public async getMany(): Promise<ApiResponse<T[]>> {
    const instance = this.createInstance();
    const result = await instance
      .get(`${CURRENT_BASE_URL}/${this.collection}/`)
      .then(transform);
    return result as ApiResponse<T[]>;
  }

  public async create(id: string, item: T): Promise<ApiResponse<T>> {
    const instance = this.createInstance();
    const result = await instance
      .post(`${CURRENT_BASE_URL}/${this.collection}/`, item)
      .then(transform);
    return result as ApiResponse<T>;
  }

  public async update(id: string, item: T): Promise<ApiResponse<T>> {
    const instance = this.createInstance();
    const result = await instance
      .put(`${CURRENT_BASE_URL}/${this.collection}/${id}`, item)
      .then(transform);
    return result as ApiResponse<T>;
  }

  public async delete(id: any): Promise<ApiResponse<T>> {
    const instance = this.createInstance();
    const result = await instance
      .delete(`${CURRENT_BASE_URL}/${this.collection}/${id}`)
      .then(transform);
    return result as ApiResponse<T>;
  }
}
