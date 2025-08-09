import React, { useEffect } from 'react';
import { Form, Input, Modal } from 'antd';
import { API } from '../api';
import { urls } from '../contants/urls';

function BrandsModal({ modalOpen, setModalOpen, getBrands, editingData, setEditingData }) {
    const [form] = Form.useForm()

    useEffect(() => {
        form.setFieldsValue(editingData)
    }, [editingData])

    function handleCancel() {
        setModalOpen(false)
        form.resetFields()
    }

    function handleSubmit(value) {
        if (editingData === null) {
            API.post(urls.brands.post, value).then(res => {
                if (res.status === 201) {
                    getBrands()
                    handleCancel()
                }
            }).catch(err => console.log(err))
        }else {
            API.patch(urls.brands.path(editingData.id), value).then(res => {
                if(res.status === 200) {
                    getBrands()
                    handleCancel()
                }
            }).catch(err => console.log(err))
        }
    }

    return (
        <Modal
            title="Basic Modal"
            closable={{ 'aria-label': 'Custom Close Button' }}
            open={modalOpen}
            onCancel={handleCancel}
            onOk={() => form.submit()}
        >
            <Form form={form} name="product-form" initialValues={{ is_popular: false }} onFinish={handleSubmit}>
                <Form.Item
                    label="Name"
                    name="name"
                    rules={[{ required: true, message: "Iltimos brand nomini kiriting!" }]}
                >
                    <Input placeholder='Brand nomi'></Input>
                </Form.Item>
                <Form.Item
                    label="Image"
                    name="image"
                    rules={[{ required: true, message: "Iltimos brand rasmini kiriting!" }, { type: "url" }]}
                >
                    <Input placeholder='Brand rasmi' />
                </Form.Item>
                <Form.Item
                    label="Description"
                    name="desc"
                    rules={[{ required: true, message: "Tavsif kiriting!" }]}
                >
                    <Input placeholder='Brand tavsifi' />
                </Form.Item>
            </Form>
        </Modal>
    )
}

export default BrandsModal
