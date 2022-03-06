//----------------------
// <auto-generated>
//     Generated using the NSwag toolchain v13.15.10.0 (NJsonSchema v10.6.10.0 (Newtonsoft.Json v13.0.0.0)) (http://NSwag.org)
// </auto-generated>
//----------------------

/* tslint:disable */
/* eslint-disable */
// ReSharper disable InconsistentNaming

import { mergeMap as _observableMergeMap, catchError as _observableCatch } from 'rxjs/operators';
import { Observable, throwError as _observableThrow, of as _observableOf } from 'rxjs';
import { Injectable, Inject, Optional, InjectionToken } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpResponseBase } from '@angular/common/http';

export const apiEndpoint = new InjectionToken<string>('apiEndpoint');

export interface IApiClient {
    /**
     * @return Success
     */
    creditGET(): Observable<UserCreditDto>;
    /**
     * @param body (optional) 
     * @return Success
     */
    creditPOST(body?: CoinWithQuantityDto[] | undefined): Observable<UserCreditDto>;
    /**
     * @return Success
     */
    return(): Observable<CoinWithQuantityDto[]>;
    /**
     * @return Success
     */
    productsAll(): Observable<ProductSlotDto[]>;
    /**
     * @return Success
     */
    products(id: number): Observable<ProductSlotDto>;
    /**
     * @param body (optional) 
     * @return Success
     */
    order(body?: SlotOrderDto | undefined): Observable<SaleDto>;
}

@Injectable()
export class ApiClient implements IApiClient {
    private http: HttpClient;
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(@Inject(HttpClient) http: HttpClient, @Optional() @Inject(apiEndpoint) baseUrl?: string) {
        this.http = http;
        this.baseUrl = baseUrl !== undefined && baseUrl !== null ? baseUrl : "";
    }

    /**
     * @return Success
     */
    creditGET(): Observable<UserCreditDto> {
        let url_ = this.baseUrl + "/api/Credit";
        url_ = url_.replace(/[?&]$/, "");

        let options_ : any = {
            observe: "response",
            responseType: "blob",
            headers: new HttpHeaders({
                "Accept": "text/plain"
            })
        };

        return this.http.request("get", url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.processCreditGET(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processCreditGET(response_ as any);
                } catch (e) {
                    return _observableThrow(e) as any as Observable<UserCreditDto>;
                }
            } else
                return _observableThrow(response_) as any as Observable<UserCreditDto>;
        }));
    }

    protected processCreditGET(response: HttpResponseBase): Observable<UserCreditDto> {
        const status = response.status;
        const responseBlob =
            response instanceof HttpResponse ? response.body :
            (response as any).error instanceof Blob ? (response as any).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }}
        if (status === 200) {
            return blobToText(responseBlob).pipe(_observableMergeMap((_responseText: string) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = UserCreditDto.fromJS(resultData200);
            return _observableOf(result200);
            }));
        } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(_observableMergeMap((_responseText: string) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return _observableOf(null as any);
    }

    /**
     * @param body (optional) 
     * @return Success
     */
    creditPOST(body?: CoinWithQuantityDto[] | undefined): Observable<UserCreditDto> {
        let url_ = this.baseUrl + "/api/Credit";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(body);

        let options_ : any = {
            body: content_,
            observe: "response",
            responseType: "blob",
            headers: new HttpHeaders({
                "Content-Type": "application/json",
                "Accept": "text/plain"
            })
        };

        return this.http.request("post", url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.processCreditPOST(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processCreditPOST(response_ as any);
                } catch (e) {
                    return _observableThrow(e) as any as Observable<UserCreditDto>;
                }
            } else
                return _observableThrow(response_) as any as Observable<UserCreditDto>;
        }));
    }

    protected processCreditPOST(response: HttpResponseBase): Observable<UserCreditDto> {
        const status = response.status;
        const responseBlob =
            response instanceof HttpResponse ? response.body :
            (response as any).error instanceof Blob ? (response as any).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }}
        if (status === 200) {
            return blobToText(responseBlob).pipe(_observableMergeMap((_responseText: string) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = UserCreditDto.fromJS(resultData200);
            return _observableOf(result200);
            }));
        } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(_observableMergeMap((_responseText: string) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return _observableOf(null as any);
    }

    /**
     * @return Success
     */
    return(): Observable<CoinWithQuantityDto[]> {
        let url_ = this.baseUrl + "/api/Credit/return";
        url_ = url_.replace(/[?&]$/, "");

        let options_ : any = {
            observe: "response",
            responseType: "blob",
            headers: new HttpHeaders({
                "Accept": "text/plain"
            })
        };

        return this.http.request("post", url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.processReturn(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processReturn(response_ as any);
                } catch (e) {
                    return _observableThrow(e) as any as Observable<CoinWithQuantityDto[]>;
                }
            } else
                return _observableThrow(response_) as any as Observable<CoinWithQuantityDto[]>;
        }));
    }

    protected processReturn(response: HttpResponseBase): Observable<CoinWithQuantityDto[]> {
        const status = response.status;
        const responseBlob =
            response instanceof HttpResponse ? response.body :
            (response as any).error instanceof Blob ? (response as any).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }}
        if (status === 200) {
            return blobToText(responseBlob).pipe(_observableMergeMap((_responseText: string) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            if (Array.isArray(resultData200)) {
                result200 = [] as any;
                for (let item of resultData200)
                    result200!.push(CoinWithQuantityDto.fromJS(item));
            }
            else {
                result200 = <any>null;
            }
            return _observableOf(result200);
            }));
        } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(_observableMergeMap((_responseText: string) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return _observableOf(null as any);
    }

    /**
     * @return Success
     */
    productsAll(): Observable<ProductSlotDto[]> {
        let url_ = this.baseUrl + "/api/Products";
        url_ = url_.replace(/[?&]$/, "");

        let options_ : any = {
            observe: "response",
            responseType: "blob",
            headers: new HttpHeaders({
                "Accept": "text/plain"
            })
        };

        return this.http.request("get", url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.processProductsAll(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processProductsAll(response_ as any);
                } catch (e) {
                    return _observableThrow(e) as any as Observable<ProductSlotDto[]>;
                }
            } else
                return _observableThrow(response_) as any as Observable<ProductSlotDto[]>;
        }));
    }

    protected processProductsAll(response: HttpResponseBase): Observable<ProductSlotDto[]> {
        const status = response.status;
        const responseBlob =
            response instanceof HttpResponse ? response.body :
            (response as any).error instanceof Blob ? (response as any).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }}
        if (status === 200) {
            return blobToText(responseBlob).pipe(_observableMergeMap((_responseText: string) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            if (Array.isArray(resultData200)) {
                result200 = [] as any;
                for (let item of resultData200)
                    result200!.push(ProductSlotDto.fromJS(item));
            }
            else {
                result200 = <any>null;
            }
            return _observableOf(result200);
            }));
        } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(_observableMergeMap((_responseText: string) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return _observableOf(null as any);
    }

    /**
     * @return Success
     */
    products(id: number): Observable<ProductSlotDto> {
        let url_ = this.baseUrl + "/api/Products/{id}";
        if (id === undefined || id === null)
            throw new Error("The parameter 'id' must be defined.");
        url_ = url_.replace("{id}", encodeURIComponent("" + id));
        url_ = url_.replace(/[?&]$/, "");

        let options_ : any = {
            observe: "response",
            responseType: "blob",
            headers: new HttpHeaders({
                "Accept": "text/plain"
            })
        };

        return this.http.request("get", url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.processProducts(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processProducts(response_ as any);
                } catch (e) {
                    return _observableThrow(e) as any as Observable<ProductSlotDto>;
                }
            } else
                return _observableThrow(response_) as any as Observable<ProductSlotDto>;
        }));
    }

    protected processProducts(response: HttpResponseBase): Observable<ProductSlotDto> {
        const status = response.status;
        const responseBlob =
            response instanceof HttpResponse ? response.body :
            (response as any).error instanceof Blob ? (response as any).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }}
        if (status === 200) {
            return blobToText(responseBlob).pipe(_observableMergeMap((_responseText: string) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = ProductSlotDto.fromJS(resultData200);
            return _observableOf(result200);
            }));
        } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(_observableMergeMap((_responseText: string) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return _observableOf(null as any);
    }

    /**
     * @param body (optional) 
     * @return Success
     */
    order(body?: SlotOrderDto | undefined): Observable<SaleDto> {
        let url_ = this.baseUrl + "/api/Products/order";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(body);

        let options_ : any = {
            body: content_,
            observe: "response",
            responseType: "blob",
            headers: new HttpHeaders({
                "Content-Type": "application/json",
                "Accept": "text/plain"
            })
        };

        return this.http.request("post", url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.processOrder(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processOrder(response_ as any);
                } catch (e) {
                    return _observableThrow(e) as any as Observable<SaleDto>;
                }
            } else
                return _observableThrow(response_) as any as Observable<SaleDto>;
        }));
    }

    protected processOrder(response: HttpResponseBase): Observable<SaleDto> {
        const status = response.status;
        const responseBlob =
            response instanceof HttpResponse ? response.body :
            (response as any).error instanceof Blob ? (response as any).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }}
        if (status === 200) {
            return blobToText(responseBlob).pipe(_observableMergeMap((_responseText: string) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = SaleDto.fromJS(resultData200);
            return _observableOf(result200);
            }));
        } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(_observableMergeMap((_responseText: string) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return _observableOf(null as any);
    }
}

export class CoinWithQuantityDto implements ICoinWithQuantityDto {
    coinValue?: number;
    quantity?: number;

    constructor(data?: ICoinWithQuantityDto) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.coinValue = _data["coinValue"];
            this.quantity = _data["quantity"];
        }
    }

    static fromJS(data: any): CoinWithQuantityDto {
        data = typeof data === 'object' ? data : {};
        let result = new CoinWithQuantityDto();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["coinValue"] = this.coinValue;
        data["quantity"] = this.quantity;
        return data;
    }
}

export interface ICoinWithQuantityDto {
    coinValue?: number;
    quantity?: number;
}

export class ProductSlotDto implements IProductSlotDto {
    id?: number;
    name?: string | undefined;
    price?: number;
    quantity?: number;

    constructor(data?: IProductSlotDto) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.id = _data["id"];
            this.name = _data["name"];
            this.price = _data["price"];
            this.quantity = _data["quantity"];
        }
    }

    static fromJS(data: any): ProductSlotDto {
        data = typeof data === 'object' ? data : {};
        let result = new ProductSlotDto();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id;
        data["name"] = this.name;
        data["price"] = this.price;
        data["quantity"] = this.quantity;
        return data;
    }
}

export interface IProductSlotDto {
    id?: number;
    name?: string | undefined;
    price?: number;
    quantity?: number;
}

export class SaleDto implements ISaleDto {
    product?: ProductSlotDto;
    quantity?: number;
    orderPrice?: number;
    changeCoins?: CoinWithQuantityDto[] | undefined;

    constructor(data?: ISaleDto) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.product = _data["product"] ? ProductSlotDto.fromJS(_data["product"]) : <any>undefined;
            this.quantity = _data["quantity"];
            this.orderPrice = _data["orderPrice"];
            if (Array.isArray(_data["changeCoins"])) {
                this.changeCoins = [] as any;
                for (let item of _data["changeCoins"])
                    this.changeCoins!.push(CoinWithQuantityDto.fromJS(item));
            }
        }
    }

    static fromJS(data: any): SaleDto {
        data = typeof data === 'object' ? data : {};
        let result = new SaleDto();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["product"] = this.product ? this.product.toJSON() : <any>undefined;
        data["quantity"] = this.quantity;
        data["orderPrice"] = this.orderPrice;
        if (Array.isArray(this.changeCoins)) {
            data["changeCoins"] = [];
            for (let item of this.changeCoins)
                data["changeCoins"].push(item.toJSON());
        }
        return data;
    }
}

export interface ISaleDto {
    product?: ProductSlotDto;
    quantity?: number;
    orderPrice?: number;
    changeCoins?: CoinWithQuantityDto[] | undefined;
}

export class SlotOrderDto implements ISlotOrderDto {
    quantity?: number;
    slotNumber?: number;

    constructor(data?: ISlotOrderDto) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.quantity = _data["quantity"];
            this.slotNumber = _data["slotNumber"];
        }
    }

    static fromJS(data: any): SlotOrderDto {
        data = typeof data === 'object' ? data : {};
        let result = new SlotOrderDto();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["quantity"] = this.quantity;
        data["slotNumber"] = this.slotNumber;
        return data;
    }
}

export interface ISlotOrderDto {
    quantity?: number;
    slotNumber?: number;
}

export class UserCreditDto implements IUserCreditDto {
    credit?: number;

    constructor(data?: IUserCreditDto) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.credit = _data["credit"];
        }
    }

    static fromJS(data: any): UserCreditDto {
        data = typeof data === 'object' ? data : {};
        let result = new UserCreditDto();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["credit"] = this.credit;
        return data;
    }
}

export interface IUserCreditDto {
    credit?: number;
}

export class ApiException extends Error {
    override message: string;
    status: number;
    response: string;
    headers: { [key: string]: any; };
    result: any;

    constructor(message: string, status: number, response: string, headers: { [key: string]: any; }, result: any) {
        super();

        this.message = message;
        this.status = status;
        this.response = response;
        this.headers = headers;
        this.result = result;
    }

    protected isApiException = true;

    static isApiException(obj: any): obj is ApiException {
        return obj.isApiException === true;
    }
}

function throwException(message: string, status: number, response: string, headers: { [key: string]: any; }, result?: any): Observable<any> {
    return _observableThrow(new ApiException(message, status, response, headers, result));
}

function blobToText(blob: any): Observable<string> {
    return new Observable<string>((observer: any) => {
        if (!blob) {
            observer.next("");
            observer.complete();
        } else {
            let reader = new FileReader();
            reader.onload = event => {
                observer.next((event.target as any).result);
                observer.complete();
            };
            reader.readAsText(blob);
        }
    });
}