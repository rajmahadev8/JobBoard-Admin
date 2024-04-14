import { DeleteOutlined } from "@ant-design/icons";
import { DeleteButton } from "@refinedev/antd";
import {
	Button,
	Col,
	DatePicker,
	Divider,
	Flex,
	Form,
	Input,
	Row,
	Select,
	Typography,
} from "antd";
import React from "react";

export const Step4 = () => {
	return (
		<Form.List name={"projects"}>
			{(fields, { add, remove }) => {
				return (
					<>
						{fields.map((field, index) => {
							return (
								<React.Fragment key={field.key}>
									<Flex>
										<Typography
											style={{
												margin: 0,
												padding: 0,
												marginBottom: 12,
												color: "gray",
												fontWeight: "bold",
											}}
										>
											Project {index + 1}{" "}
											{index !== 0 && (
												<DeleteOutlined
													style={{ color: "red" }}
													onClick={() => {
														remove(index);
													}}
												/>
											)}
										</Typography>
									</Flex>
									<Form.Item
										labelCol={{
											span: 24,
										}}
										rules={[
											{
												required: true,
											},
										]}
										name={[index, "title"]}
										label={"Project Name"}
									>
										<Input />
									</Form.Item>
									<Form.Item
										labelCol={{
											span: 24,
										}}
										rules={[
											{
												required: true,
											},
										]}
										name={[index, "description"]}
										label={"Description"}
									>
										<Input.TextArea
											autoSize={{
												minRows: 3,
											}}
										/>
									</Form.Item>
									<Form.Item
										rules={[
											{
												required: true,
											},
										]}
										labelCol={{
											span: 24,
										}}
										name={[index, "techStack"]}
										label={"Tech Stack"}
									>
										<Select mode="tags" />
									</Form.Item>
									<Divider />
								</React.Fragment>
							);
						})}
						<Button
							type="primary"
							style={{ marginBottom: 24 }}
							onClick={() => {
								add();
							}}
						>
							Add Project
						</Button>
					</>
				);
			}}
		</Form.List>
	);
};
