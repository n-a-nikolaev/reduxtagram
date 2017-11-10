// React
import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

// Router
import {
    Router,
    Route,
    Link,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';
import browserHistory from './utils/history';

// Styles
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

// Components
import Single from './components/Single';
import PhotoGrid from './components/PhotoGrid';

import StoreFactory from './StoreFactory';
import reducers from './reducers/index';
import posts from './data/posts';
import comments from './data/comments';
const defaultState = {
    posts,
    comments
};
// Create store
const store = StoreFactory(reducers, defaultState, browserHistory);
// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store);
history.listen(location => {
    console.info('-> location:', location);
});

const router = (
    <Provider store={store}>
        <Router history={history}>
            <div className="main-container">
                <h1 className="text-center">
                    <Link to="/">Reduxtagram</Link>
                </h1>
                <div className="main-content container" role="main">
                    <div className="row">
                        <div className="col-xs-12">
                            <Route exact path="/" component={PhotoGrid} />
                            <Route path="/view/:postId" component={Single} />
                        </div>
                    </div>
                </div>
            </div>
        </Router>
    </Provider>
);

ReactDOM.render(router, document.getElementById('root'));
registerServiceWorker();
