// import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
// import 'rxjs/add/operator/concatMap';
// import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/pluck';
// import 'rxjs/add/operator/share';
import 'rxjs/add/operator/switchMap';

import { combineEpics } from 'redux-observable';

import * as articleEpics from './articles';

export default combineEpics(
	...Object.values(articleEpics),
);
