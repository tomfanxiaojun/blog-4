/**
 * Created by jack on 16-8-24.
 */

import fetchUtil from '../util/fetch';
import SERVER from '../constant/server';

export const generatorUrl = (url: string = '', params: string | { [key: string]: string } = '') =>
	params ? `${url}?${generatorQueryString(params)}` : url;

export const generatorQueryString = (params: string | { [key: string]: string }) =>
	typeof params === 'object'
		? Object.keys(params).map((key: string) => `${key}=${encodeURIComponent(params[key])}`).join('&')
		: params;

// TODO
const httpFetch = (url: RequestInfo, options?: RequestInit) => {
	url = SERVER.HOST + url;
	return fetchUtil(url, options);
};

export default httpFetch;
