import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Toolbar } from '../classes/toolbar';

@Injectable({ providedIn: 'root' })
export class SharedService {

  toolbarState = new Subject<Toolbar>();

}
