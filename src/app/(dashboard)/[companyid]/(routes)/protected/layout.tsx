"use client";

import { Header } from "@components/header";

import { Authenticated } from "@refinedev/core";
import { Avatar, ConfigProvider, Layout, Menu } from "antd";
import Link from "next/link";

export type ProtectedLayoutProps = {
	children: React.ReactNode;
};

export default function ProtectedLayout({ children }: ProtectedLayoutProps) {
	return (
		<Authenticated key="protected" redirectOnFail="/login">
			<ConfigProvider
				theme={{
					token: {
						fontFamily: "Montserrat",
						colorLinkHover:"#3498db"
					},
				}}
			>
				<Layout style={{ display: "flex", minHeight: "100vh" }}>
					{/* <Header >
					
						<span className="demo-logo" style={{ fontWeight:"600"}}>
							AIMYJOBS
						</span>
						
					</Header> */}
					{children}
				</Layout>
			</ConfigProvider>
		</Authenticated>
	);
}
