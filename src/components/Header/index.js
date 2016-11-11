/**
 * Created by JIANBO on 2016/11/11.
 */
import React,{ProTypes,Component} from 'react'
import {Link} from 'react-router'
import {Dropdown} from 'react-bootstrap'
import defaultAvatar from '../../assets/images/avatar.png'

export default class Header extends Component{
    render(){
        const {
            styleMode,
            auth,
            logout,
            location
        }=this.props;

        return(
            <div className="navbar-box navbar-skin">
                <div className="navbar-menu">
                    <Link className={'navbar-item log '+(location.pathname!=='/apps'&&'active')} title="首页" to="/">
                        Hu
                    </Link>
                    <Link activeClassName="active" className="navbar-item mobile" title="移动应用" to="/apps">
                        <i className="fa fa-mobile"></i>
                    </Link>

                </div>

            </div>
        )
    }
}

