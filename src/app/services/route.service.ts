import { Injectable } from '@angular/core';
import { EndpointService } from './endpoint.service';
import { User } from '../models/user.model';
import { map } from 'rxjs/operators';
import { Response } from '@angular/http';
import { Gender } from '../enums/gender';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class RouteService {

    constructor(private router: Router) { }

    redirectTo(url: string) {
        this.router.navigateByUrl(url);
    }
}
