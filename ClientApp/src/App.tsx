import * as React from 'react';
import { Route } from 'react-router';
import Layout from './components/Layout';
import Home from './components/Home';
import { Counter } from './components/Counter';
import FetchData from './components/FetchData';
import { Login } from './components/Authorize';

import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import './custom.css'
import { Register } from './components/Register';


class App extends React.Component {
    render() {
        const alert = this.props.alert;
        return (
            <div>
                {this.props.alert.message &&
                    <div className={'alert ' + alert.type}>{alert.message}</div>
                }
                <Layout>
                    {/*<Route exact path='/' component={Home} />*/}
                    {/*<Route path='/counter' component={Counter} />*/}
                    {/*<Route path='/fetch-data/:startDateIndex?' component={FetchData} />*/}
                    <Route path='/authorize' component={Login} />
                    <Route path='/register' component={Register} />
                </Layout>
            </div>

        );
    }
}

function mapStateToProps(state: { alert: {}}) {
    const { alert } = state;
    return {
        alert
    };
}

//export default () => (
//}



const connectedApp = withRouter(connect(mapStateToProps)(App));

export  { connectedApp as App };
