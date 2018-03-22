export default function createAction(label) {
	const type = `poki/${label}`;
	const actionCreator = payload => ({ type, ...payload });
	actionCreator.type = type;
	return actionCreator;
}
