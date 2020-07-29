import React from 'react';
import {connect} from "react-redux";
import Users from "./Users";
import {bindActionCreators} from "redux";
import * as usersActions from '../../redux/actions/usersActions'
import * as axios from "axios";

class UsersAPI extends React.Component
{
    componentDidMount()
    {
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.selectedPage}&count=${this.props.pageSize}`)
            .then(resp => {
                this.props.setUsers(resp.data.items);
                this.props.setTotalUsersCount(resp.data.totalCount)
            });
    }

    onPageChanged = (pageNumber) =>
    {
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(resp => {
                this.props.setUsers(resp.data.items);
                this.props.setTotalUsersCount(resp.data.totalCount)
            });
        this.props.setCurrentPage(pageNumber);
    }

    render(){
        return(
            <Users {...this.props} onPageChanged={this.onPageChanged}/>
        )}
};

const mapStateToProps = (state) => {
    return {
        users:state.usersPage.users,
        pageSize:state.usersPage.pageSize,
        currentPage:state.usersPage.currentPage,
        totalUsersCount:state.usersPage.totalUsersCount
    }
}
const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators(usersActions,dispatch)
});

const UsersContainer = connect(mapStateToProps,mapDispatchToProps)(UsersAPI);
export default UsersContainer;