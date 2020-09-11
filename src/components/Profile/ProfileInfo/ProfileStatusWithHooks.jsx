import React, {useEffect, useState} from "react";

const ProfileStatusWithHooks = (props) => {
    const [editMode,setEditMode] = useState(false);
    const [status,setStatus] = useState(props.status);

    useEffect ( () => {
        setStatus(props.status)
    }, [props.status]);

    const startEditMode = () => {
        setEditMode(true);
    };

    const endEditMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    }

    const onStatusEdit = (e) => {
        setStatus(e.currentTarget.value)
    }

    return (
        <div>
            {editMode ? <div>
                    <input onChange={onStatusEdit} autoFocus={true} value={status} onBlur={endEditMode} autoFocus={true}/>
                </div> :
                <div>
                    <span onDoubleClick={startEditMode} >{props.status || '--------'}</span>
                </div>
            }
        </div>
    );
};
export default ProfileStatusWithHooks;
