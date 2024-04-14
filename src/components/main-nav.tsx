"use client";

import { Button, Menu } from "antd";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";

export function MainNav({
    className,
    ...props
}:React.HTMLAttributes<HTMLElement>) {
    const pathname = usePathname();
    const params = useParams();
    const routes = [
        {
            href:`/${params.companyid}`,
            label: 'Dashboard',
            active: pathname === `/${params.companyid}`,
        },
        {
            href:`/${params.companyid}/hiring`,
            label: 'Hiring',
            active: pathname === `/${params.companyid}/hiring`,
        },
        {
            href:`/${params.companyid}/categories`,
            label: 'Categories',
            active: pathname === `/${params.companyid}/categories`,
        },
        {
            href:`/${params.companyid}/settings`,
            label: 'Settings',
            active: pathname === `/${params.companyid}/settings`,
        },
    ];
   
    return (
        <nav style={{display:"flex",alignItems:"center", gap:"1rem", margin:"0em 1.5em 0px 1.4em"}}>
            {routes.map((route)=>{
               return ( <Button type="link" style={{color:route.active?"#3498db":"#8e8e8e", borderRadius:0, borderBottom:route.active?"1px solid":"0"}} key={route.href} href={route.href}>
                    {route.label}
                </Button>)
            })}
        </nav>   
    );
}
