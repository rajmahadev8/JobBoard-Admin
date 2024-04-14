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

export const Step5 = () => {
	return (
		<Form.Item
			name={"skills"}
			label={"Skills"}
			labelCol={{
				span: 24,
			}}
		>
			<Select mode="tags" />
		</Form.Item>
	);
};
