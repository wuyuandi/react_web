import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import logo from './yuandiwu.png';
import './style.css';
import axios from 'axios';
import { Menu } from 'antd';
import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
  ShareAltOutlined
} from '@ant-design/icons';
class AppHeader extends Component {

	constructor(props) {
		super(props);
		this.state = {
			list: [

			{
				id: 1,
				icon: <MailOutlined/>,
				title: "我草泥马"

			},{
				id: 2,
				icon: <AppstoreOutlined/>,
				title: "大傻逼吧"
			},{
				id: 3,
				icon: <SettingOutlined/>,
				title: "你是傻屌"
			},{
				id: 4,
				icon: <ShareAltOutlined />,
				title: "没有几把"
			}]
		}
	}


	getMenuItems() {
		return this.state.list.map(item => {
			return (
				<Menu.Item key={item.id}>
					<Link to={`/${item.id}`}>
						{item.icon}
      					{item.title}
      				</Link>

        		</Menu.Item>
			)
		})
	}

	componentDidMount() {
	//ajax请求后端数据
		// axios.get('http://www.dell-lee.com/react/api/header.json').then((res) => {
		// 	this.setState({
		// 		list:res.data.data
		// 	})

		// })

	}

	render() {
		return (
			<Fragment>
			<img src={logo} className="app-header-logo"/>
			<Menu mode="horizontal" className= 'app-header-menu'>

			{this.getMenuItems()}

        	</Menu>
        	</Fragment>
		)
	}
}
export default AppHeader;