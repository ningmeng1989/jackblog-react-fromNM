import React, { PropTypes, Component } from 'react'

export default class Sidebar extends Component{
  static propTypes = {
    indexImg: PropTypes.any.isRequired
  }

  render(){
    const {indexImg} = this.props
    let styles = { backgroundImage: 'url(' + indexImg + ')'}
    return (
      <div className="col-sm-3 sidebar-box">
        <div className="cover-img" style={styles}></div>
        <div className="bottom-block">
          <h1>Jianbo Wang</h1>
          <h3>第二个Reactjs项目</h3>
          <h3>--from jackblog</h3>
        </div>
      </div>
    )
  }
}
