import { Button, Drawer, Flex, Form, Image, Input, Space, Table } from 'antd'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { API } from '../api'

function Products() {

  const [products, setProducts] = useState([])

  function getProducts() {
    API.get("/products").then(res => setProducts(res.data))
  }

  useEffect(() => {
    getProducts()
  }, [])

  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id"
    },
    {
      title: "Image",
      dataIndex: "image",
      key: "image",
      render: (item) => (
        <Image width={100} src={item} />
      )
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name"
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price"
    },
    {
      title: "Action",
      key: "action",
      render: () => (
        <Space>
          <Button>Edit</Button>
          <Button danger>Delete</Button>
        </Space>
      )
    }
  ]

  const onFinish = (value) => {
    console.log(value);
  }

  return (
    <>
      <Flex justify='end'>
        <Button className='add-products' type='primary' size='large' onClick={showDrawer}>+ Add products</Button>
      </Flex>
      <Table dataSource={products} columns={columns} />
      <Drawer title="Add product" onClose={onClose} open={open}>
        <Form name='product form' onFinish={onFinish}>
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: "Iltimos mahsulot nomini kiriting!" }]}
          >
            <Input placeholder='Mahsulot nomi'></Input>
          </Form.Item>
        </Form>
      </Drawer>

    </>
  )
}

export default Products
