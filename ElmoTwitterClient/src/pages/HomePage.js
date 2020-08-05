import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Button from '../components/Button';
import Input from '../components/Input';
import Label from '../components/Label';
import getUserProfile from '../actions/getUserProfile.action';
import getUserShow from '../actions/getUserShow.action';

class HomePage extends Component {
    constructor (props) {
        super(props);
        this.state = {
            submitted: false,
            userSearchData: "",
            errorOccurred: false
        }
        this.changeHandler = this.changeHandler.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
        this.linkHandler = this.linkHandler.bind(this);
    }
    changeHandler = (event) => {
        this.setState({
            [ event.target.name ]: event.target.value
        });
    }
    submitHandler = (event) => {
        event.preventDefault();
        this.setState({ submitted: true });
        const userSearchData = this.state.userSearchData;
        this.props.getUserProfile(userSearchData);
    }
    linkHandler = (event, userId) => {
        event.preventDefault();
        this.props.getUserShow(userId);
    }
    render() {
        const { submitted } = this.state;
        if (this.props.userShow) {
            return <Redirect to="/user" />
        }
        return (
            <form className="userSearchForm">
                <table border="0" width="40%" align="center">
                    <tbody>
                        <tr>
                            <td colSpan="2" align="center">
                                <h1>Twitter Search</h1>
                            </td>
                        </tr>
                        <tr>
                            <td width="20%"><Label>Enter User name or Location</Label></td>
                            <td align="left">
                                <Input type="userSearchData" name="userSearchData" placeholder="User name or Location" onChange={this.changeHandler} />
                            </td>
                        </tr>
                        <tr align="center">
                            <td colSpan="2">
                                <Button className="button button1" onClick={this.submitHandler}>Search</Button>
                            </td>
                        </tr>
                        <tr>
                            <td width="50%" colSpan="2">{this.props.errorOccurred && <p style={{ color: "red" }}>{this.props.errorMsg}</p>}</td>
                        </tr>
                        <tr>
                            <td colSpan="2">
                                {submitted && this.props.userDetails && this.props.userDetails.map(data => {
                                    return (
                                        <li key={data.id}><a href="#" key={data.id} onClick={(event) => this.linkHandler(event, data.id)}>{data.name}({data.location})</a></li>
                                    );
                                })}
                            </td></tr>
                    </tbody>
                </table>
            </form >
        );
    }
}

function mapStateToProps(state) {
    return {
        userDetails: state.userProfile.user,
        userShow: state.userShow.userShow,
        errorMsg: state.userProfile.errorMsg,
        errorOccurred: state.userProfile.errorOccurred
    }
}

const mapDispatcherToProps = {
    getUserProfile,
    getUserShow
}

export default connect(mapStateToProps, mapDispatcherToProps)(HomePage);