import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { Map, List } from 'immutable';

function* testSaga(action) {
	try {
		const id = action.subject.value.get('id');
		const prop = action.subject.value.get('prop');

		console.log("Добавлен элемент -> ", 'id:',id, 'prop',prop);

		// yield put({type: 'action/items/create', subject: {value}});
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

