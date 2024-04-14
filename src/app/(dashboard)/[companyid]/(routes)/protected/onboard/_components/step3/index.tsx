import { DeleteOutlined } from "@ant-design/icons";
import { DeleteButton } from "@refinedev/antd";
import {
	Button,
	Checkbox,
	Col,
	DatePicker,
	Divider,
	Flex,
	Form,
	Input,
	Radio,
	Row,
	Typography,
} from "antd";
import React, { useState } from "react";

export const Step3 = () => {
	const [exp, setExp] = useState<"yes" | "no">("no");

	return (
		<Form.List name={"work"}>
			{(fields, { add, remove }) => {
				return (
					<>
						{fields.length === 0 && (!exp || exp === "no") ? (
							<>
								<Radio.Group
									onChange={(e) => {
										setExp(e.target.value);
										if (e.target.value === "yes") {
											add();
										}
									}}
								>
									<Flex
										style={{
											flexDirection: "column",
											marginBottom: 24,
										}}
									>
										<Typography.Title level={4}>
											Do you have a prior work experience?
										</Typography.Title>
										<Radio value={"yes"}>Yes</Radio>
										<Radio value={"no"}>No</Radio>
									</Flex>
								</Radio.Group>
							</>
						) : (
							<>
								{fields.map((field, index) => {
									return (
										<React.Fragment key={field.key}>
											<Flex style={{}}>
												<Typography
													style={{
														margin: 0,
														padding: 0,
														marginBottom: 12,
														color: "gray",
														fontWeight: "bold",
													}}
												>
													Work Experience {index + 1}{" "}
													<DeleteOutlined
														onClick={() => {
															if (
																fields.length ===
																1
															) {
																setExp("no");
															}
															remove(index);
														}}
														style={{ color: "red" }}
													/>
												</Typography>
											</Flex>
											<Form.Item
												rules={[
													{
														required: true,
													},
												]}
												labelCol={{
													span: 24,
												}}
												name={[index, "company"]}
												label={"Company Name"}
											>
												<Input />
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
												name={[index, "roles"]}
												label={
													"Roles & Responsiblities"
												}
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
												name={[index, "duration"]}
												label={"Duration"}
											>
												<DatePicker.RangePicker />
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
									Add Work Experience
								</Button>
							</>
						)}
					</>
				);
			}}
		</Form.List>
	);
};
