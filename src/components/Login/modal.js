/**
 * Created by JIANBO on 2016/11/14.
 */
import React,{Component,PropTypes} from 'react'
import {Modal} from 'react-bootstrap'
import SNSLogin from './snsLogin'

export default class loginModal extends Component{
    render(){
        const {isShowModal,closeModal,logins}=this.props;
        return (
            <div>
                <Modal show={isShowModal} backdrop={true} onHide={closeModal}>
                    <Model.header>
                        <Model.Title className="text-center">请用一下方式登录</Model.Title>
                    </Model.header>
                    <Modal.Body>
                        <div className="portlet-body">
                            <SNSLogin logins={logins}/>
                        </div>
                    </Modal.Body>
                </Modal>
            </div>
        )
    }
}