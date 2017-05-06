import { combineEpics } from 'redux-observable';
import { getEvent } from './posts';

const eventEpic = combineEpics(getEvent);

export default eventEpic;
