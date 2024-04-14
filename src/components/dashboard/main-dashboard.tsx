
import { ColorModeContext } from '@contexts/color-mode';
import { Typography, Layout, Menu, MenuProps, Switch, Card, Row, Col, theme, Flex, Divider, List, Grid, Button } from 'antd'

import React, { useContext, useState } from 'react'

import { Overview } from '@components/overview';
import OverviewTable from '@components/overview-table';
import { MainNav } from '@components/main-nav';
import Navbar from './navbar';
import { useParams, useRouter } from 'next/navigation';
const { Title } = Typography;
const { Header } = Layout;1
export const MainDashboard = () => {
	
	interface GraphData {
		name: string;
		total: number;
	}
	const graphData: GraphData[] = [
		{ name: "Jan", total: 1 },
		{ name: "Feb", total: 2 },
		{ name: "Mar", total: 0 },
		{ name: "Apr", total: 4 },
		{ name: "May", total: 6 },
		{ name: "Jun", total: 1 },
		{ name: "Jul", total: 3 },
		{ name: "Aug", total: 4 },
		{ name: "Sep", total: 5 },
		{ name: "Oct", total: 1 },
		{ name: "Nov", total: 1 },
		{ name: "Dec", total: 1 },
	];
	const router = useRouter();
	const params = useParams();
	return (
		<>
		<Row style={{justifyContent:"space-between"}}>
		<Flex style={{flexDirection:"column"}}>
			<Typography.Title level={2} style={{ textAlign: "start", margin:"0px" }} >
				Dashboard
			</Typography.Title>
			<Typography.Text type='secondary' style={{ textAlign: "start" }} >
				Overview of your Job Posts
			</Typography.Text>
		</Flex>
		<Flex style={{alignItems:'center'}} >
			<Button size='large' onClick={()=>{router.push(`/${params.companyid}/hiring/create`)}}> Post a new Job</Button>
		</Flex>
		</Row>
			<Divider />
		<List grid={{gutter:2}}>
			<List.Item >
				<Card>
				<Row>
					<Col span={24}>
						<Typography.Title level={3} style={{ textAlign: "start" }}>
							Hires per month
						</Typography.Title>
					</Col>
				</Row>
				
				<Overview data={graphData} />
				</Card>
			</List.Item>
			
			<List.Item >
			<Card>
			<Typography.Title level={3} style={{ textAlign: "start" }}>
				Total Applications
			</Typography.Title>
				<OverviewTable />
			</Card>
			</List.Item>
			</List>
		</>
	)
}

