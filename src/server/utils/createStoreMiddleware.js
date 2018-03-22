import configureStore from '../../app/utils/configureStore';

export default function createStoreMiddleware(req, res, next) {
	req.store = configureStore();
	next();
}
