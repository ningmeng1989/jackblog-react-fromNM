/**
 * Created by JIANBO on 2016/11/15.
 */
import React,{Component,PropTypes} from 'react'

export default class Like extends Component{
    static propTypes={
        likeCount:PropTypes.number,
        isLike:PropTypes.bool,
        toggleLike:PropTypes.func.isRequired
    };
    render(){
        const {likeCount,isLike,toggleLike}=this.props;
        return(
            <div className="article-share clearfix">
                <a className={isLike?'like-btn not-liked':'like-btn'} href="javascript:;">
                    <span className="like-content">
                        <i className={isLike?"fa fa-heart":"fa fa-heart-o"}></i>喜欢
                    </span>
                    <span className="like-count">{likeCount}</span>
                </a>
            </div>
        )
    }

}