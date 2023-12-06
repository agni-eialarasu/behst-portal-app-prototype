import type { AxiosInstance } from "axios";
import axios from "axios";

export abstract class BaseService {
  protected apiPrefix: string;
  protected http: AxiosInstance;

  protected constructor() {
    // const apiHost = import.meta.env.VITE_APP_API_HOST;
    const apiHost = `${window.location.origin}`;
    this.apiPrefix = apiHost + "/data";
    this.http = axios.create({
      baseURL: this.apiPrefix,
    });
  }

  getApiPrefix(): string {
    return this.apiPrefix;
  }
}
