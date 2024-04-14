import { DeleteOutlined } from "@ant-design/icons";
import {
	Button,
	Col,
	DatePicker,
	Divider,
	Flex,
	Form,
	Input,
	InputNumber,
	Row,
	Typography,
} from "antd";

export const Step2 = () => {
	return (
		<>
			<Form.List name={"education"}>
				{(fields, { add, remove }) => {
					return (
						<>
							{fields.map((field, index) => {
								return (
									<>
										<Flex>
											<Typography
												style={{
													fontWeight: "bold",
													color: "gray",
												}}
											>
												Degree {index + 1}{" "}
												{index !== 0 && (
													<DeleteOutlined
														onClick={() => {
															remove(index);
														}}
														style={{ color: "red" }}
													/>
												)}
											</Typography>
										</Flex>
										<Row gutter={8}>
											<Col span={12}>
												<Form.Item
													rules={[
														{
															required: true,
														},
													]}
													labelCol={{
														span: 24,
													}}
													name={[index, "college"]}
													key={field.key}
													label={
														"College/University Name"
													}
												>
													<Input placeholder="Ex: Vishwakarma Government Engineering College" />
												</Form.Item>
											</Col>
											<Col span={12}>
												<Form.Item
													labelCol={{
														span: 24,
													}}
													rules={[
														{
															required: true,
														},
													]}
													name={[index, "degreeName"]}
													key={field.key}
													label={"Degree Name"}
												>
													<Input placeholder="B.Tech" />
												</Form.Item>
											</Col>
										</Row>
										<Row gutter={8}>
											<Col span={12}>
												<Form.Item
													labelCol={{
														span: 24,
													}}
													rules={[
														{
															required: true,
														},
													]}
													name={[index, "cgpa"]}
													key={field.key}
													label={"CGPA/GPA"}
												>
													<InputNumber
														style={{
															width: "100%",
														}}
														placeholder="Enter your CGPA"
													/>
												</Form.Item>
											</Col>
											<Col span={12}>
												<Form.Item
													labelCol={{
														span: 24,
													}}
													rules={[
														{
															required: true,
														},
													]}
													name={[index, "duration"]}
													key={field.key}
													label={"Duration"}
												>
													<DatePicker.RangePicker
														style={{
															width: "100%",
														}}
													/>
												</Form.Item>
											</Col>
										</Row>
										<Divider />
									</>
								);
							})}
							<div
								style={{
									width: "100%",
								}}
							>
								<Button
									type="primary"
									style={{
										marginBottom: 24,
									}}
									onClick={() => {
										add();
									}}
								>
									Add Education Section
								</Button>
							</div>
						</>
					);
				}}
			</Form.List>
		</>
	);
};
