import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { Map, List } from 'immutable';

function* testSaga(action) {
	try {
		console.log(action);
		const newValue = Map({
			id: action.subject.value.get('id'),
			prop: action.subject.value.get('prop'),
			test: 'test saga',
		});
debugger;
		yield put({type: 'action/items/create', subject: {newValue}});
		console.log('running testSaga!');
	} catch (e) {
		yield put({type: 'action/items/create', message: e.message});
	}
}


/**
 * takeEvery - Запускает testSaga для каждого отправленного действия TEST_SAGA_REQUESTED.
 * Позволяет проводить одновременные выборки.
 */
function* mySaga() {
	console.log('running mySaga!');
	yield takeEvery("action/items/create", testSaga);
}
export default mySaga;


/**
 * В качестве альтернативы вы можете использовать takeLatest.
 * takeLatest - Не разрешает одновременные выборки. Если "TEST_SAGA_REQUESTED" получает
 * отправляется, пока выборка уже ожидает, эта ожидающая выборка отменяется
 * и только последний будет запущен.
 */
// function* mySaga() {
// 	console.log('running mySaga!');
// 	yield takeLatest("action/items/create", testSaga);
// }
// export default mySaga;

