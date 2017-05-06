import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import {ajax} from 'rxjs/observable/dom/ajax';
import {receivePosts} from '../actions';
import {REQUEST_POSTS} from '../actions';

export const getEvent = action$ => {
  return action$.ofType(REQUEST_POSTS).mergeMap(action => {
    return ajax.getJSON(`https://connpass.com/api/v1/event/?keyword=${action.payload}`).map(response => receivePosts(response));
  });
};
