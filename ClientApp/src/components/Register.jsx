import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router'

import { userActions } from '../actions';

//import './UnloggedForm.css';

class RegisterPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {
                firstName: '',
                lastName: '',
                username: '',
                password: ''
            },
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const { name, value } = event.target;
        const { user } = this.state;
        this.setState({
            user: {
                ...user,
                [name]: value
            }
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        this.setState({ submitted: true });
        const { user } = this.state;
        const { dispatch } = this.props;
        if (user.firstName && user.lastName && user.username && user.password) {
            this.props.register(user).then(user => {
                this.props.history.push('/login');
            });
        }
    }

    render() {
        const { registering } = this.props;
        const { user, submitted } = this.state;
        return (
            <form className="unlogged-form" name="form" onSubmit={this.handleSubmit}>
                <div className={'form-group' + (submitted && !user.firstName ? ' has-error' : '')}>
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" className="form-control" name="firstName" value={user.firstName} onChange={this.handleChange} />
                    {submitted && !user.firstName &&
                        <div className="help-block">First Name is required</div>
                    }
                </div>
                <div className={'form-group' + (submitted && !user.lastName ? ' has-error' : '')}>
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" className="form-control" name="lastName" value={user.lastName} onChange={this.handleChange} />
                    {submitted && !user.lastName &&
                        <div className="help-block">Last Name is required</div>
                    }
                </div>
                <div className={'form-group' + (submitted && !user.username ? ' has-error' : '')}>
                    <label htmlFor="username">Username</label>
                    <input type="text" className="form-control" name="username" value={user.username} onChange={this.handleChange} />
                    {submitted && !user.username &&
                        <div className="help-block">Username is required</div>
                    }
                </div>
                <div className={'form-group' + (submitted && !user.password ? ' has-error' : '')}>
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" name="password" value={user.password} onChange={this.handleChange} />
                    {submitted && !user.password &&
                        <div className="help-block">Password is required</div>
                    }
                </div>
                <div className="buttons">
                    <button className="btn btn-primary">Register</button>
                    {registering &&
                        <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                    }
                    <Link to="/login" className="btn btn-link">Cancel</Link>
                </div>
            </form>
        );
    }
}

function mapStateToProps(state) {
    const { registering } = state.registration;
    return {
        registering
    };
}

function mapDispatchToProps(dispatch) {
    return {
        register: bindActionCreators(userActions.register, dispatch)
    }
}

const connectedRegisterPage = withRouter(connect(mapStateToProps, mapDispatchToProps)(RegisterPage));
export { connectedRegisterPage as Register };