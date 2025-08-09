import React from 'react';
import { Button, Drawer, Form, Input, InputNumber, Switch } from 'antd';
import { API } from '../api';
import { urls } from '../contants/urls';

function ProductDrawer({ setDrawerOpen, drawerOpen }) {

    const onFinish = (value) => {
        API.post(urls.products.post, value).then(res => console.log(res)).catch(err => console.error(err));
    }

    const onClose = () => {
        setDrawerOpen(false);
    };

    const editingData = () => {
        
    }

    return (
        <Drawer title={`${editingData === null ? "Add" : "Edit"} product`} onClose={onClose} open={drawerOpen}>
            <Form name='product form' onFinish={onFinish}>
                <Form.Item
                    label="Name"
                    name="name"
                    rules={[{ required: true, message: "Iltimos mahsulot nomini kiriting!" }]}
                >
                    <Input placeholder='Mahsulot nomi'></Input>
                </Form.Item>
                <Form.Item
                    label="Image"
                    name="image"
                    rules={[{ required: true, message: "Iltimos mahsulot rasmini kiriting!" }, { type: "url" }]}
                >
                    <Input placeholder='Mahsulot rasmi' />
                </Form.Item>
                <Form.Item
                    label="Description"
                    name="desc"
                    rules={[{ required: true, message: "Tavsif kiriting!" }]}
                >
                    <Input.TextArea placeholder='Mahsulot tavsifi' />
                </Form.Item>
                <Form.Item
                    label="Price"
                    name="price"
                    rules={[{ required: true, message: "Iltimos mahsulot narxini kiriting!" }]}
                >
                    <InputNumber placeholder='Mahsulot narxi' />
                </Form.Item>
                <Form.Item
                    label="Old Price"
                    name="olde_price"
                    rules={[{ required: true, message: "Mahsulotning eski narxini kiriting!" }]}
                >
                    <InputNumber placeholder='Mahsulot narxi' />
                </Form.Item>
                <Form.Item
                    label="Is popular"
                    name="is_popular"
                    rules={[{ required: true, message: "Mahsulotning eski narxini kiriting!" }]}
                >
                    <Switch />
                </Form.Item>
                <Form.Item>
                    <Button type='primary' htmlType='submit' size='large'>Add product</Button>
                </Form.Item>
            </Form>
        </Drawer>
    )
}

export default ProductDrawer
