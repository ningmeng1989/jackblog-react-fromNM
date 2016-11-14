/**
 * Created by JIANBO on 2016/11/11.
 */
import React,{Component,PropTypes} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {Field,reduxForm} from 'redux-from'
import * as Actions from '../../actions'

const validate=values=>{
    const error={};
    if(!values.nickname){
        errors.nickname="Required";
    }else if(values.nickname.length<=2||values.nickname.length>15){
        errors.nickname="请输入2-15字符，中英文，数字和下划线";
    }else if(!/^[(\u4e00-\u9fa5)0-9a-zA-Z\_\s@]+$/.test(values.nickname)){
        errors.nickname="昵称不合法";
    }
    return errors;
};
const validatorClass=field=>{
    let initClass='from-control';
    if(field.invalid){
        initClass+=' ng-invalid'
    }
    if(field.dirty){
        initClass+=' ng-dirty'
    }
    return initClass
};
const renderField=prs=>(
    <input className={validatorClass(prs.meta)} name={prs.name} maxLength={prs.maxLength} minLength={prs.minLength} {...prs.input} placeholder={prs.placeholder} type={prs.type} />
);
const mapStateToProps=state=>{
    return {
        auth:state.auth.toJS(),
        initialValues:state.auth.toJS().user
    }
};
const mapDispatchToProps=dispatch=>{
    return {
        actions:bindActionCreators(Actions,dispatch)
    }
};
@connect(mapStateToProps,mapDispatchToProps)
@reduxForm({
    form:"settings",
    validate
})

export default class Settings extends Component{
    constructor(props){
        super(props);
        this.submitForm=this.submitForm.bind(this);
    }
    static propTypes={
        actions:PropTypes.object.isRequired,
        auth:PropTypes.object.isRequired,
        dirty:PropTypes.bool,
        invalid:PropTypes.bool,
        handleSubmit:PropTypes.func
    };
    submitForm(values){
        const {actions}=this.props;
        actions.updateUser(values);
    }
    render(){
        const {dirty,invalid,handleSubmit}=this.props;
        return (
            <div className="settings-box">
                <div className="settings-container">
                    <h2 className="title">
                        设置
                    </h2>
                    <hr />
                    <div className="profile">
                        <div className="control-group">
                            <form className="settings-form" onSubmit={handleSubmit(this.submitForm)} noValidate>
                                <div className="from-group">
                                    <label className="control-label">
                                        昵称
                                    </label>
                                    <Field name="nickname" component={renderField} type="text" minLength="2" maxLength="15" placeholder="2-15字符，中英文、数字和下划线"/>
                                </div>
                                <button type="submit" disabled={dirty&&invalid} className="btn btn-block btn-lg btn-primary">
                                    保  存
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
