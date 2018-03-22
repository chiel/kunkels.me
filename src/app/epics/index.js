import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

import { combineEpics } from 'redux-observable';

import * as articleEpics from './articles';

export default combineEpics(
	...Object.values(articleEpics),
);
