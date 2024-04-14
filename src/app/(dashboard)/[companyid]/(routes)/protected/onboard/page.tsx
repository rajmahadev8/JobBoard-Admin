"use client";
import {
	Button,
	Card,
	Flex,
	Form,
	Input,
	Layout,
	Steps,
	Typography,
} from "antd";
import { useState } from "react";
import { Step1 } from "./_components/step1";
import { Step2 } from "./_components/step2";
import { Step3 } from "./_components/step3";
import { Step5 } from "./_components/step5";
import { Step4 } from "./_components/step4";
import { Step6 } from "./_components/step6";

const pagesFields = ["name", "email", ""];
const titles = [
	"Add your personal information",
	"Add your educational information",
	"Add work experience",
	"Add your projects",
	"Add your skills",
	"Miscellaneous information/Preferences",
];

export default function OnBoard() {
	const [current, setCurrent] = useState(0);
	const goToNext = () => {
		if (current <= 4) {
			setCurrent(current + 1);
		}
	};

	const goToPrev = () => {
		if (current > 0) {
			setCurrent(current - 1);
		}
	};

	return (
		<Layout
			style={{
				justifyContent: "center",
				display: "flex",
				alignItems: "center",
				height: "100%",
			}}
		>
			<Card
				style={{
					margin: 12,
					maxWidth: "600px",
					height: "max-content",
					width: "600px",
				}}
			>
				<Flex
					style={{
						width: "100%",
						justifyContent: "center",
						alignItems: "center",
						flexDirection: "column",
					}}
				>
					<Typography.Title level={5} style={{ fontWeight: "bold" }}>
						Step {current + 1}/6: {titles[current]}
					</Typography.Title>
					<Form
						style={{
							marginTop: 20,
							width: "100%",
						}}
						initialValues={{
							education: [
								{
									college: "",
									degreeName: "",
									cgpa: "",
									duration: [],
								},
							],
							projects: [
								{
									title: "",
									description: "",
									techStack: [],
								},
							],
						}}
					>
						<div
							style={{
								display: current === 0 ? "block" : "none",
							}}
						>
							<Step1 />
						</div>
						<div
							style={{
								display: current === 1 ? "block" : "none",
							}}
						>
							<Step2 />
						</div>
						<div
							style={{
								display: current === 2 ? "block" : "none",
							}}
						>
							<Step3 />
						</div>
						<div
							style={{
								display: current === 3 ? "block" : "none",
							}}
						>
							<Step4 />
						</div>
						<div
							style={{
								display: current === 4 ? "block" : "none",
							}}
						>
							<Step5 />
						</div>
						<div
							style={{
								display: current === 5 ? "block" : "none",
							}}
						>
							<Step6 />
						</div>
					</Form>
					<Flex style={{ alignSelf: "start" }}>
						{current !== 0 && (
							<Button
								style={{ marginRight: 12 }}
								type="default"
								onClick={goToPrev}
							>
								Previous
							</Button>
						)}
						<Button type="primary" onClick={goToNext}>
							{current === 5 ? "Submit" : "Next"}
						</Button>
					</Flex>
				</Flex>
			</Card>
		</Layout>
	);
}
