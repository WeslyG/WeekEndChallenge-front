import { Injectable } from '@angular/core';
import { DbKeys } from './db-keys.service';

@Injectable({
    providedIn: 'root'
})

export class LocalStorageService {
    constructor() { }

    getDataFromStorage(key: string) {
        return this.JSonTryParse(localStorage.getItem(key));
    }

    saveDataToStorage(key: string, value: string) {
        localStorage.setItem(key, value);
    }

    // clearLocalStorage() {
        // localStorage.removeItem('AuthToken');
        // localStorage.clear();
    // }

    clearStorage() {
        localStorage.removeItem(DbKeys.ID_TOKEN);
        localStorage.removeItem(DbKeys.USER);
    }

    private JSonTryParse(value: string) {
        try {
            return JSON.parse(value);
        } catch (e) {
            if (value === 'undefined') {
                return undefined;
            }
            return value;
        }
    }
}
