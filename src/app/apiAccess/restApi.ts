import { HttpMethod } from "blocking-proxy/built/lib/webdriver_commands";
import * as request from "requestretry";

export class RestApi {

    constructor()
    {
    }

    public async apiRequest(
        httpMethod: HttpMethod,
        url: string,
        headers: any = {}): Promise<any> {
        try {
            let response: any = await request({
                method: httpMethod[httpMethod],
                url: url,
                headers: headers,
                json: true
            });
            return response.body;
        }
        catch(error){
            
        }
    }
}