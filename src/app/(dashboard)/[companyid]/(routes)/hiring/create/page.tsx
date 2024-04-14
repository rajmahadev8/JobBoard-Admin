"use client";

import { Create, useForm, useSelect } from "@refinedev/antd";

import { DeleteOutlined } from "@ant-design/icons";
import {
	Button,
	Card,
	Col,
	DatePicker,
	Divider,
	Flex,
	Form,
	Input,
	InputNumber,
	Row,
	Select,
	Typography,
} from "antd";
import TextArea from "antd/es/input/TextArea";
const { Option } = Select;
export default function PostJob() {
  // const { formProps, saveButtonProps } = useForm({});

  // const { selectProps: categorySelectProps } = useSelect({
  //   resource: "categories",
  // });
  const onChange = (value: string) => {
    console.log(`selected ${value}`);
  };
  const selectAfter = (
    <Select defaultValue="USD" style={{ width: 60 }}>
      <Option value="USD">$</Option>
      <Option value="EUR">€</Option>
      <Option value="GBP">£</Option>
      <Option value="INR">₹</Option>
    </Select>
  );
  return (
    // <Create saveButtonProps={saveButtonProps}>
      // <Form {...formProps} layout="vertical">
    <Card style={{
     
      maxWidth: "800px",
      height: "max-content",
      width: "800px",
    }}>
      <Create title="Hire the best talent from AI" footerButtons={<Button
									type="primary"
									style={{
										marginBottom: 24,
									}}
								>
									Submit
								</Button>}> 
        <Form style={{padding:"0px"}}>

							      <Flex>
									<Typography
										style={{
										fontWeight: "bold",
										color: "gray",
									}}
											>
												{/* Job Title  */}
											</Typography>
										</Flex>
										<Row gutter={8} >
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
													name={"jobtitle"}
													key={"jobtitle"}
													label={
														"Job Title "
													}
												>
													<Input placeholder="Eg: Software Developer" />
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
													name={"jobfunction"}
													key={"jobfunction"}
													label={"Job Function"}
												>
													<Select mode="tags" placeholder="Role"/>
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
													name={"jobtype"}
													key={"jobtype"}
													label={"Job Type"}
												>
													<Select
                            showSearch
                            placeholder="Fulltime/Internship"
                            optionFilterProp="children"
                            onChange={onChange}
                            options={[
                              {
                                value: 'internship',
                                label: 'Internship',
                              },
                              {
                                value: 'fulltime',
                                label: 'Full Time',
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
													rules={[
														{
															required: true,
														},
													]}
													name={"location"}
													key={"location"}
													label={"Where is this job located"}
												>
													<Select mode="tags" placeholder="Eg. Mumbai"/>
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
													name={"experience"}
													key={"experience"}
													label={"Work Experience Range"}
												>
                        <Row gutter={8}>
                          <Col span={12}>
													<Select
                            showSearch
                            placeholder="Min"
                            optionFilterProp="children"
                            onChange={onChange}
                            options={[
                              {
                                value: '0',
                                label: '0 Years',
                              },
                              {
                                value: '1',
                                label: '1 Years',
                              },
                            ]}
                          />
                        </Col>
                        <Col span={12}>                      
                        <Select
                            showSearch
                            placeholder="Max"
                            optionFilterProp="children"
                            onChange={onChange}
                            options={[
                              {
                                value: '0',
                                label: '0 Years',
                              },
                              {
                                value: '1',
                                label: '1 Years',
                              },
                            ]}
                          />
                          </Col>
                        </Row>
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
													name={"location"}
													key={"location"}
													label={"Annual Salary of Job"}
												>
                          <Row gutter={8}>
                            <Col span={12}>
                            <InputNumber addonAfter={selectAfter} placeholder="Min"/>
                            </Col>
                            <Col span={12}>                      
                            <InputNumber addonAfter={selectAfter} placeholder="Max"/>
                            </Col>
                          </Row>
												</Form.Item>
											</Col>
										</Row>
                    <Row>
                    <Form.Item
                    style={{width:"100%"}}
                    labelCol={{
                      span: 24,
                    }}
                    rules={[
                      {
                        required: true,
                      },
                    ]}
                    name={"description"}
                    key={"description"}
                    label={"Job Description"}>
                      <TextArea style={{minHeight:"200px"}} ></TextArea>
                    </Form.Item>
                    </Row>
                    <Row >
                    <Form.Item
                    style={{width:"100%"}}
                    labelCol={{
                      span: 24,
                    }}
                    rules={[
                      {
                        required: true,
                      },
                    ]}
                    name={"showncandidate"}
                    key={"showncandidate"}
                    label={"Who should be shown candidates for this job?"}>
                      <Select mode="tags"/>
                    </Form.Item>
                    </Row>
                    <Row >
                    <Form.Item
                    style={{width:"100%"}}
                    labelCol={{
                      span: 24,
                    }}
                    rules={[
                      {
                        required: true,
                      },
                    ]}
                    name={"skills"}
                    key={"skills"}
                    label={"Candidates should have any of the following skills"}>
                      <Select mode="tags"/>
                    </Form.Item>
                    </Row>
      </Form>
    </Create>
    </Card>
  );
}
