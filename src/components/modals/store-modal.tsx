"use client";


import { useStoreModal } from "@/hooks/use-store-modal";
import { Button, Form, Input, Modal, Select } from 'antd';
import { useForm } from '@refinedev/react-hook-form'


import { useState } from 'react';
import axios from 'axios';
import { BaseKey, useGetIdentity } from "@refinedev/core";
interface IUser {
    id: BaseKey;
    name: string;
    avatar: string;
  };
  
export interface IProfile {
    id?: string
    username?: string
    website?: string
    avatar_url?: string
  }
export const StoreModal = ()=>{
    const { data: userIdentity } = useGetIdentity<IUser>()
    const {
        refineCore: { formLoading, queryResult, onFinish },
        register,
        control,
        handleSubmit,
      } = useForm<IProfile>({
        refineCoreProps: {
          resource: 'profiles',
          action: 'edit',
          id: userIdentity?.id,
          redirect: false,
          onMutationError: (data) => alert(data?.message),
        },
      })

    const [loading, setLoading] = useState(false);
    const storeModal = useStoreModal();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
      };
    
      const handleOk = () => {
        try{
                    setLoading(true);
                    window.location.assign(`/123`)
                }catch(error){
                    console.log(error);
                
                }finally{
                    setLoading(false);
                }
      };
    
      const handleCancel = () => {
        setIsModalOpen(false);
      };

    // const onSubmit=async(values: z.infer<typeof formSchema>)=>{
    //     try{
    //         setLoading(true);
    //         const response = await axios.post('/api/stores',values);
            
    //         window.location.assign(`${response.data.id}`)
    //     }catch(error){
    //         console.log(error);
    //         toast.error("Something went wrong");
    //     }finally{
    //         setLoading(false);
    //     }
    // }
    return(
        <Modal title="Create Company Profile" 
                open={storeModal.isOpen} 
                onOk={handleOk} 
                onCancel={storeModal.onClose} 
                centered
                footer={(_) => (
                    <>
                      <Button danger onClick={storeModal.onClose}>Cancel</Button>
                      <Button   onClick={handleOk}>Submit</Button>

                    </>
                  )}
        >
            <div>
                <div className='space-y-4 py-2 pb-4 '>
                <p>
                Add necessary data related to your company 
                </p>
                    <form onSubmit={handleSubmit(onFinish)}>
                    <Form.Item
						rules={[
							{
								required: true,
							},
						]}
						name={"companyName"}
						label={"Company Name"}
						labelCol={{
							span: 24,
						}}
                        
					>
						<Input />
                    </Form.Item>
                    <Form.Item
						rules={[
							{
								required: true,
							},
						]}
						name={"tagline"}
						label={"Tagline"}
						labelCol={{
							span: 24,
						}}
					>
						<Input />
                    </Form.Item>
                    <Form.Item
						rules={[
							{
								required: true,
							},
						]}
						name={"foundedIn"}
						label={"Founded In"}
						labelCol={{
							span: 24,
						}}
					>
						<Input />
                    </Form.Item>
                    <Form.Item
						rules={[
							{
								required: true,
							},
						]}
						name="employees"
						label={"No. of Employees"}
						labelCol={{
							span: 24,
						}}
					>
						<Select mode="tags" />
                    </Form.Item>
                    <Form.Item
						rules={[
							{
								required: true,
							},
						]}
						name="industries"
						label={"Industries"}
						labelCol={{
							span: 24,
						}}
					>
						<Select mode="tags" />
                    </Form.Item>
                    <Form.Item
						rules={[
							{
								required: true,
							},
						]}
						name="headquaters"
						label={"Headquaters"}
						labelCol={{
							span: 24,
						}}
					>
						<Select mode="tags" />
                    </Form.Item>
                    </form>
                
                </div>
            </div>
        </Modal>
    )
}