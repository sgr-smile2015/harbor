import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import { RequestOptions, Headers } from '@angular/http';

/**
 * Convert the different async channels to the Promise<T> type.
 * 
 * @export
 * @template T
 * @param {(Observable<T> | Promise<T> | T)} async
 * @returns {Promise<T>}
 */
export function toPromise<T>(async: Observable<T> | Promise<T> | T): Promise<T> {
    if (!async) {
        return Promise.reject("Bad argument");
    }

    if (async instanceof Observable) {
        let obs: Observable<T> = async;
        return obs.toPromise();
    } else {
        return Promise.resolve(async);
    }
}

/**
 * The default cookie key used to store current used language preference.
 */
export const DEFAULT_LANG_COOKIE_KEY = 'harbor-lang';

/**
 * Declare what languages are supported now.
 */
export const DEFAULT_SUPPORTING_LANGS = ['en-us', 'zh-cn', 'es-es'];

/**
 * The default language.
 */
export const DEFAULT_LANG = 'en-us';

export const HTTP_JSON_OPTIONS: RequestOptions = new RequestOptions({
    headers: new Headers({
        "Content-Type": 'application/json'
    })
});
