import React, { Component } from 'react';
import { connect } from 'react-redux';
import destroySession from '../actions/destroySession.action';
import { Redirect } from 'react-router-dom';
import Label from '../components/Label';
import Input from '../components/Input';
import "./UserShow.css";

class UserShow extends Component {
  constructor (props) {
    super(props);
    this.linkHandler = this.linkHandler.bind(this);
  }
  linkHandler = (event) => {
    event.preventDefault();
    this.props.destroySession();
  }

  render() {
    if (!this.props.userShow) {
      return <Redirect to="/home" />
    }
    const { userShow } = this.props
    return (
      <div className="userShow">
        <form className="userShow">
          <div className="userShow" style={{ width: "70%", margin: "auto" }}>
            <a href="#" onClick={(event) => this.linkHandler(event)}>New Search</a>
            <h2>Twitter User</h2>
            {userShow &&
              <div className="container">
                <div className="containerText">
                  <table><tbody>
                    <tr>
                      <td><img className="containerImage" src={`${process.env.PUBLIC_URL}/profile/photos/${userShow.image}`}></img></td>
                      <td>
                        <table border="0" width="100%">
                          {userShow &&
                            <tbody>
                              <tr><td colSpan="2" align="center"><Label> <h1>{userShow.userName}</h1></Label></td></tr>
                              <tr><td colSpan="2" align="center"><Input defaultValue={userShow.location} readOnly /></td></tr>
                              <tr><td colSpan="2" align="center"><Input defaultValue={userShow.twitterHandle} readOnly></Input></td></tr>
                              <tr><td> <Label > <h3>{userShow.followerCount} Followers</h3></Label></td></tr>
                              <tr><td> <Label><h2>Last Five Tweets</h2></Label></td></tr>
                              {userShow.tweets.map(t => {
                                return <tr key={t.tweet}><td><li><Label> {t.tweet}</Label></li></td></tr>
                              })}
                            </tbody>
                          }
                        </table>
                      </td>
                    </tr>
                  </tbody>
                  </table>
                </div>
              </div>
            }
          </div>
        </form>
      </div >
    );
  }
}

function mapStateToProps(state) {
  return {
    userShow: state.userShow.userShow
  }
}

const mapDispatcherToProps = {
  destroySession
}

export default connect(mapStateToProps, mapDispatcherToProps)(UserShow);