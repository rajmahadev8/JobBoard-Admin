import { DeleteButton } from "@refinedev/antd";
import {
	AutoComplete,
	Button,
	Col,
	DatePicker,
	Divider,
	Flex,
	Form,
	Input,
	InputNumber,
	Radio,
	Row,
	Select,
	Typography,
} from "antd";
import React from "react";

export const Step6 = () => {
	return (
		<React.Fragment>
			<Form.Item
				name={"privacy"}
				label={"Privacy Settings"}
				labelCol={{
					span: 24,
				}}
			>
				<Radio.Group>
					<Radio value={"all"}>
						Allow all companies to see my profile except those I
						block below
					</Radio>
					<Radio value={"apply"}>
						Only companies I apply to can see my profile
					</Radio>
				</Radio.Group>
			</Form.Item>
			<Divider />
			<Form.Item
				name={"yoe"}
				label={
					"How many years of work experience do you have? Don't include internships."
				}
				labelCol={{
					span: 24,
				}}
			>
				<InputNumber max={100} suffix={"Years"} />
			</Form.Item>
			<Divider />
			<Form.Item
				name={"preferred_role"}
				label={"What is your preferred role?"}
				labelCol={{
					span: 24,
				}}
			>
				<Input />
			</Form.Item>
			<Divider />
			<Form.Item
				name={"job_type"}
				label={"What kind of jobs are you looking for?"}
				labelCol={{
					span: 24,
				}}
			>
				<Select
					mode="multiple"
					options={[
						{
							label: "Internship",
							value: "internship",
						},
						{
							label: "Full-Time",
							value: "fulltime",
						},
					]}
				/>
			</Form.Item>
			<Divider />
			<Form.Item
				name={"notice_period"}
				label={"When can you join the company if selected?"}
				labelCol={{
					span: 24,
				}}
			>
				<Select
					options={[
						{
							label: "Immediately",
							value: "immediately",
						},
						{
							label: "15 days",
							value: "15days",
						},
						{
							label: "1 month",
							value: "1month",
						},
						{
							label: "2 months",
							value: "2months",
						},
						{
							label: "3 months +",
							value: "3months+",
						},
					]}
				/>
			</Form.Item>
			<Divider />
			<Form.Item
				name={"current_location"}
				label={"Where are you currently located?"}
				labelCol={{
					span: 24,
				}}
			>
				<AutoComplete
					options={[
						{
							label: "Immediately",
							value: "Immediately",
						},
						{
							label: "15 days",
							value: "15 days",
						},
						{
							label: "1 month",
							value: "1 month",
						},
						{
							label: "2 months",
							value: "2 months",
						},
						{
							label: "3 months +",
							value: "3 months +",
						},
					]}
				/>
			</Form.Item>
			<Divider />
			<Form.Item
				name={"preferred_location"}
				label={"Where are you open to working?"}
				labelCol={{
					span: 24,
				}}
			>
				<Select
					mode="tags"
					options={[
						{
							label: "Immediately",
							value: "immediately",
						},
						{
							label: "15 days",
							value: "15days",
						},
						{
							label: "1 month",
							value: "1month",
						},
						{
							label: "2 months",
							value: "2months",
						},
						{
							label: "3 months +",
							value: "3months+",
						},
					]}
				/>
			</Form.Item>
		</React.Fragment>
	);
};
