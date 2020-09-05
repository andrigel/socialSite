import React from "react";

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    }
    componentDidUpdate(prevProps, prevState) {
        if(prevProps.status !== this.props.status) {
            this.setState({status:this.props.status})
        }
    }

    onStatusEdit = (e) => {
        this.setState({status: e.currentTarget.value})
    }

    startEditMode = (e) => {
        this.setState({editMode:true})
    }
    endEditMode = (e) => {
        this.setState({editMode:false})
        this.props.updateStatus(this.state.status);
    }

    render() {
        return (
            <div>
                {this.state.editMode ? <div>
                        <input onChange={this.onStatusEdit} autoFocus={true} onBlur={this.endEditMode} value={this.state.status}/>
                    </div> :
                    <div>
                        <span onDoubleClick={this.startEditMode}>{this.props.status || '--------'}</span>
                    </div>
                }
            </div>
        );
    }
};
export default ProfileStatus;
