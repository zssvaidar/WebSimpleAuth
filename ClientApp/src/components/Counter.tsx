
import * as React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { ApplicationState } from '../store';
import * as CounterStore from '../store/Counter';

import { withRouter } from 'react-router'
import { bindActionCreators } from 'redux';
//type CounterProps =
//    CounterStore.CounterState &
//    typeof CounterStore.actionCreators &
//    RouteComponentProps<{}>;

//class Counter extends React.PureComponent<CounterProps> {
//    public render() {
//        return (
//            <React.Fragment>
//                <h1>Counter</h1>

//                <p>This is a simple example of a React component.</p>

//                <p aria-live="polite">Current count: <strong>{this.props.count}</strong></p>

//                <button type="button"
//                    className="btn btn-primary btn-lg"
//                    onClick={() => { this.props.increment(); }}>
//                    Increment
//                </button>
//            </React.Fragment>
//        );
//    }
//};

//export default connect(
//    (state: ApplicationState) => state.counter,
//    CounterStore.actionCreators
//)(Counter);

type AppProps = {}
type AppState = {}
class CounterPage extends React.Component<AppProps, AppState>{

    constructor(props: AppProps) {
        super(props);

        this.state = {
            count: 0,
        };

        this.handleIncrement = this.handleIncrement.bind(this);
    }

    handleIncrement(e) {
        const { name, value } = e.target;
        this.setState({ [name]: this.state.count + 1 });
        //const { count } = this.state;
        //this.setState({
            //[count]+=1
        //});
        
    }

    public render() {
        const { count } = this.state;
        return (
            <React.Fragment>
                <h1>Counter</h1>

                <p>This is a simple example of a React component.</p>

                <p aria-live="polite">Current count: <strong>{count}</strong></p>

                <input type="button"
                    className="btn btn-primary btn-lg"
                    name="count"
                    value="Increment"
                    onClick={ this.handleIncrement }/>
                    Increment
             
            </React.Fragment>
        );
    }
};



function mapStateToProps(state: any) {
    const { count } = state;
    return {
        count
    };
}

function mapDispatchToProps(dispatch: any) {
    return {    
        increment: bindActionCreators(CounterStore.actionCreators.increment, dispatch),
        decrement: bindActionCreators(CounterStore.actionCreators.decrement, dispatch)
    }
}

const connectedLoginPage = withRouter(connect(mapStateToProps, mapDispatchToProps)(CounterPage));
export { connectedLoginPage as Counter };