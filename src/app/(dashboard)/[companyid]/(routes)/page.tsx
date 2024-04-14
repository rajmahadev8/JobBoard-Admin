"use client";

import {
	Authenticated,
	useGetIdentity,
	useIsAuthenticated,
} from "@refinedev/core";
// import { NavigateToResource } from "@refinedev/nextjs-router";

import {
	Empty,
	Layout,
	Spin,
	Typography,
} from "antd";
// const { Title } = Typography;

// import { redirect, useRouter } from "next/navigation";

import { SiderComponent } from "@components/dashboard/sider";
import { MainDashboard } from "@components/dashboard/main-dashboard";

// const { Header, Content, Footer, Sider } = Layout;
// const items = new Array(3).fill(null).map((_, index) => ({
// 	key: index + 1,
// 	label: `nav ${index + 1}`,
// }));
export default function IndexPage() {

	const id = useGetIdentity<{ onboard: boolean }>();
	// const rotuer = useRouter();
	// useEffect(() => {
	// 	if (id) {
	// 		if (!id?.data?.onboard) {
	// 			rotuer.replace("/onboard");
	// 		}
	// 	}
	// }, [id]);

	return (
		<Spin spinning={id.isLoading}>
			{id.isError ? (
				<Empty />
			) : (

				<Layout style={{ minHeight: '100vh' }}>
					{/* <SiderComponent/> */}
					<Layout style={{margin:"30px"}}>
						<MainDashboard/>
					</Layout>
				</Layout>
			)}
		</Spin>
	);
}
