
import { ColorModeContext } from '@contexts/color-mode';
import { Typography, Layout, Menu, MenuProps, Switch, Card, Row, Col, theme, Flex } from 'antd'

import React, { useContext, useState } from 'react'

import { MainNav } from '@components/main-nav';
const { Title } = Typography;
const {Header } = Layout;

const Navbar=  ()=> {
    const { mode, setMode } = useContext(ColorModeContext);
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
    
    return (
        <Header style={{ padding: 0, background: colorBgContainer, display:"flex", alignItems:"center", justifyContent:"space-between"}}>
					<Menu mode="horizontal" style={{flex:1, height:"100%", alignItems:"center", justifyContent:"space-between", padding:"0px 20px 0px 20px"}}>
						<Flex>
						<Title level={3} style={{margin:0}}>MYAIJOBS</Title>
						<MainNav/>
						</Flex>
						 <Switch
							checkedChildren="🌛"
							unCheckedChildren="🔆"
							style={{marginLeft:"auto"}}
							onChange={() => setMode(mode === "light" ? "dark" : "light")}
							defaultChecked={mode === "dark"}
							/>
					</Menu>	
					</Header>
    );
}
export default Navbar;
