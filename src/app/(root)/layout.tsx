
import { Authenticated } from "@refinedev/core";
import { ConfigProvider } from "antd";
import { redirect } from "next/navigation";
export default async function SetupLayout({children}:{children:React.ReactNode}) {


    return(
        <>
        <Authenticated key="protected" redirectOnFail="/login">
        <ConfigProvider
				theme={{
					token: {
                        fontWeightStrong:600,
					},
				}}
			>
            {children}
            </ConfigProvider>
            </Authenticated>
        </>
    )
}