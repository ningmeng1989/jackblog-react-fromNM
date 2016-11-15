/**
 * Created by JIANBO on 2016/11/15.
 */
import React,{Component,PropTypes} from 'react'

export default class LoadMore extends Component{
    static propTypes={
        addDate:PropTypes.func.isRequired,
        options:PropTypes.object.isRequired,
        isMore:PropTypes.bool.isRequired,
        isFetching:PropTypes.bool.isRequired
    };
    render(){
        const {addData,options,isMore,isFetching}=this.props;
        return (
            <div className="load-more">
                {
                    isMore&&
                        <button className="ladda-button" onClick={e=>addData(e,{'currentPage':++options.currentPage},true)}>
                            {
                                isFetching?
                                    <span className="ladda-spinner">
                                        <i className="fa fa-spinner fa-spin">
                                        </i>
                                    </span>
                                    :
                                    <span className="ladda-label">
                                        点击查看更多
                                    </span>
                            }
                        </button>
                }
            </div>
        )
    }
}