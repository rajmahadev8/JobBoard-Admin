
import { ColorModeContext } from '@contexts/color-mode';
import { Typography, Layout, Menu, MenuProps } from 'antd'
import {
	BranchesOutlined,
	BugFilled,
	DesktopOutlined,
	FileOutlined,
	PieChartOutlined,
	TeamOutlined,
	UserOutlined,
	
} from "@ant-design/icons";
import React, { useContext, useState } from 'react'
const { Title } = Typography;
const {Sider } = Layout;
export const SiderComponent=()=> {
    const [collapsed, setCollapsed] = useState(false);
	const { mode, setMode } = useContext(ColorModeContext);

    type MenuItem = Required<MenuProps>['items'][number];
	function getItem(
		label: React.ReactNode,
		key: React.Key,
		icon?: React.ReactNode,
		children?: MenuItem[],
	  ): MenuItem {
		return {
		  key,
		  icon,
		  children,
		  label,
		} as MenuItem;
	  }
	
    const items: MenuItem[] = [
		getItem('Option 1', '1', <PieChartOutlined />, ),
		getItem('Option 2', '2', <DesktopOutlined />),
		getItem('User', 'sub1', <UserOutlined />, [
		  getItem('Tom', '3'),
		  getItem('Bill', '4'),
		  getItem('Alex', '5'),
		]),
		getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
		getItem('Files', '9', <FileOutlined />),
	  ];
	  const navigation = ()=>{
        
      }
  return (
        <Sider 
		    collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}
			theme={mode=="light"?"light":"dark"}
		>
		<Title level={3} style={{padding:"15px" , fontFamily:"sans-serif", display:collapsed?"none":"block"}}>
		    <BugFilled/>
			MYAIJOBS
		</Title>
		<BugFilled  style={{fontSize:"1.8em" ,display:collapsed?"flex":"none", justifyContent:"center", padding:"20px"}}/>
		<Menu
            theme={mode=="light"?"light":"dark"}
            mode="inline"
            defaultSelectedKeys={['1']}
            items={items}
            onClick={navigation}
		/>
	    </Sider>
  )
}

