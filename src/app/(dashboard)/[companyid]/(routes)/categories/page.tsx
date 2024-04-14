"use client";

import {
  DeleteButton,
  EditButton,
  List,
  ShowButton,
  useTable,
} from "@refinedev/antd";
import { BaseRecord } from "@refinedev/core";
import { Button, Space, Table } from "antd";
import { useParams, useRouter } from "next/navigation";

export default function CategoryList() {
  // const { tableProps } = useTable({
  //   syncWithLocation: true,
  // });
  const router = useRouter();
  const params = useParams();

  return (
    <List>
      <Button onClick={()=>{router.push(`/${params.companyid}/categories/create`)}}> Create </Button>
      <Table rowKey="id" style={{padding:"20px"}}>
        <Table.Column dataIndex="id" title={"ID"} />
        <Table.Column dataIndex="title" title={"title"} />
        <Table.Column
          title={"Actions"}
          dataIndex="actions"
          render={(_, record: BaseRecord) => (
            <Space>
              <EditButton hideText size="small" recordItemId={record.id} />
              <ShowButton hideText size="small" recordItemId={record.id} />
              <DeleteButton hideText size="small" recordItemId={record.id} />
            </Space>
          )}
        />
      </Table>
    </List>
  );
}
