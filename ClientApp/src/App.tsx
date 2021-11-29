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


class App extends React.Component {
    render() {
        /*// const alert = this.props.alert;*/
        return (
            <div>
                <Layout>
                    <Route exact path='/' component={Home} />
                    <Route path='/counter' component={Counter} />
                    <Route path='/fetch-data/:startDateIndex?' component={FetchData} />
                    <Route path='/authorize' component={Login} />
                </Layout>
            </div>

        );
    }
}

function mapStateToProps(state) {
    const { alert } = state;
    return {
        alert
    };
}

//export default () => (
//}



const connectedApp = withRouter(connect(mapStateToProps)(App));

export  { connectedApp as App };
