import React from 'react'
import s from "./ProfileStatus.module.css";

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    }
    
    componentDidUpdate(prevProps, prevStatus){
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            });
        }
    }

    aktivateEdit = () => {
        this.setState( {
            editMode: true
        });
    }

    deacktivateEdit = () => {
        this.setState( {
            editMode: false
        });
        this.props.updateStatus(this.state.status);
    }
    onInputChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    render() {
       return  (<div>
                {!this.state.editMode &&
                    <div className={s.status}>
                        <span onDoubleClick={this.aktivateEdit}>{this.props.status || "Здесь должен быть статус"}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                    <input autoFocus={true} 
                           onBlur={this.deacktivateEdit} 
                           value={this.state.status} 
                           onInput={this.onInputChange}/>
                    </div>
                }
        </div>)
    }
}

export default ProfileStatus
