import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import {
	Avatar,
	Col,
	Form,
	GetProp,
	Input,
	Row,
	Select,
	Upload,
	UploadProps,
	message,
} from "antd";
import { useState } from "react";
import "./step1.css";
import { supabaseClient } from "@utility/supabase-client";
import { useGetIdentity } from "@refinedev/core";
import { UploadRequestOption } from "rc-upload/lib/interface";
type FileType = Parameters<GetProp<UploadProps, "beforeUpload">>[0];

const getBase64 = (img: FileType, callback: (url: string) => void) => {
	const reader = new FileReader();
	reader.addEventListener("load", () => callback(reader.result as string));
	reader.readAsDataURL(img);
};
export const Step1 = () => {
	const [loading, setLoading] = useState(false);
	const [imageUrl, setImageUrl] = useState<string>();

	const handleChange: UploadProps["onChange"] = (info) => {
		if (info.file.status === "uploading") {
			setLoading(true);
			return;
		}
		if (info.file.status === "done") {
			// Get this url from response in real world.
			getBase64(info.file.originFileObj as FileType, (url) => {
				setLoading(false);
				setImageUrl(info.file.response);
			});
		}
	};
	const beforeUpload = (file: FileType) => {
		const isJpgOrPng =
			file.type === "image/jpeg" || file.type === "image/png";
		if (!isJpgOrPng) {
			message.error("You can only upload JPG/PNG file!");
		}
		const isLt2M = file.size / 1024 / 1024 < 2;
		if (!isLt2M) {
			message.error("Image must smaller than 2MB!");
		}
		return isJpgOrPng && isLt2M;
	};

	const uploadButton = (
		<button style={{ border: 0, background: "none" }} type="button">
			{loading ? <LoadingOutlined /> : <PlusOutlined />}
			<div style={{ marginTop: 8 }}>Upload</div>
		</button>
	);
	const identity = useGetIdentity<{ id: string }>();
	const customRequest = async ({
		onSuccess,
		file,
		filename,
	}: UploadRequestOption) => {
		const res = await supabaseClient.storage
			.from("avatars")
			.upload(
				`${identity.data?.id}/profile_pic${filename
					?.split(".")
					.slice(-1)}`,
				file
			);
		if (onSuccess) onSuccess(res.data?.path);
	};

	return (
		<>
			<Row gutter={8} style={{ margin: 24 }}>
				<Col
					span={24}
					style={{ justifyContent: "center", display: "flex" }}
				>
					<Upload
						name="avatar"
						listType="picture-circle"
						className="avatar-uploader"
						showUploadList={false}
						beforeUpload={beforeUpload}
						onChange={handleChange}
						customRequest={customRequest}
						style={{ margin: "auto", display: "flex" }}
					>
						{imageUrl ? (
							<img
								src={imageUrl}
								alt="avatar"
								style={{ width: "100%" }}
							/>
						) : (
							uploadButton
						)}
					</Upload>
				</Col>
			</Row>
			<Row gutter={8}>
				<Col span={12}>
					<Form.Item
						rules={[
							{
								required: true,
							},
						]}
						name={"firstName"}
						label={"First Name"}
						labelCol={{
							span: 24,
						}}
					>
						<Input />
					</Form.Item>
				</Col>
				<Col span={12}>
					<Form.Item
						rules={[
							{
								required: true,
							},
						]}
						name={"lastName"}
						label={"Last Name"}
						labelCol={{
							span: 24,
						}}
					>
						<Input />
					</Form.Item>
				</Col>
			</Row>
			<Row gutter={8}>
				<Col span={12}>
					<Form.Item
						rules={[
							{
								required: true,
							},
						]}
						name={"email"}
						label={"E-Mail"}
						labelCol={{
							span: 24,
						}}
					>
						<Input />
					</Form.Item>
				</Col>
				<Col span={12}>
					<Form.Item
						name={"phone"}
						label={"Phone"}
						labelCol={{
							span: 24,
						}}
					>
						<Input />
					</Form.Item>
				</Col>
			</Row>
			<Row gutter={8}>
				<Col span={12}>
					<Form.Item
						name={"gender"}
						label={"Gender"}
						labelCol={{
							span: 24,
						}}
					>
						<Select
							allowClear
							options={[
								{
									label: "Male",
									value: "male",
								},
								{
									label: "Female",
									value: "female",
								},
								{
									label: "Others",
									value: "others",
								},
							]}
						/>
					</Form.Item>
				</Col>
				<Col span={12}>
					<Form.Item
						labelCol={{
							span: 24,
						}}
						name={"diversity"}
						label={"Diversity"}
					>
						<Select
							mode="multiple"
							options={[
								{
									label: "LGBTQ+",
									value: "lgbtq+",
								},
								{
									label: "Single Parent",
									value: "singleparent",
								},
								{
									label: "Immigrant",
									value: "immigrant",
								},
								{
									label: "Military Veteran",
									value: "military",
								},
								{
									label: "Retired (60+)",
									value: "retired",
								},
								{
									label: "Disbaled",
									value: "disabled",
								},
							]}
						/>
					</Form.Item>
				</Col>
			</Row>
			<Row gutter={8}>
				<Col span={12}>
					<Form.Item
						name={"github"}
						label={"Github URL"}
						labelCol={{
							span: 24,
						}}
					>
						<Input />
					</Form.Item>
				</Col>
				<Col span={12}>
					<Form.Item
						name={"bitbucket"}
						label={"Bitbucket URL"}
						labelCol={{
							span: 24,
						}}
					>
						<Input />
					</Form.Item>
				</Col>
			</Row>
			<Row gutter={8}>
				<Col span={12}>
					<Form.Item
						name={"website"}
						label={"Website/Blog/Portfolio URL"}
						labelCol={{
							span: 24,
						}}
					>
						<Input />
					</Form.Item>
				</Col>
				<Col span={12}>
					<Form.Item
						name={"linkedin"}
						label={"Linkedin URL"}
						labelCol={{
							span: 24,
						}}
					>
						<Input />
					</Form.Item>
				</Col>
			</Row>
			<Row gutter={8}>
				<Col span={12}>
					<Form.Item
						name={"stackoverflow"}
						label={"StackOverflow URL"}
						labelCol={{
							span: 24,
						}}
					>
						<Input />
					</Form.Item>
				</Col>
				<Col span={12}>
					<Form.Item
						name={"dribble"}
						label={"Dribble URL"}
						labelCol={{
							span: 24,
						}}
					>
						<Input />
					</Form.Item>
				</Col>
			</Row>
		</>
	);
};
