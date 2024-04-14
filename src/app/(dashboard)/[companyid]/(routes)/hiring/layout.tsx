"use client";

import {Layout } from "antd";

export type ProtectedLayoutProps = {
	children: React.ReactNode;
};

export default function ProtectedLayout({ children }: ProtectedLayoutProps) {
	return (
				<Layout style={{ margin:"30px", justifyContent:"center", alignItems:"center" }}>
                     
					{children}
				</Layout>
	);
}
