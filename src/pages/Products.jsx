import React, { useEffect, useState } from 'react';
import { Button, Flex, Image, Popconfirm, Space, Table } from 'antd';
import { API } from '../api';
import ProductDrawer from '../components/ProductDrawer';

function Products() {

  const [products, setProducts] = useState([])

  function getProducts() {
    API.get("/products").then(res => setProducts(res.data))
  }

  useEffect(() => {
    getProducts()
  }, [])

  const [drawerOpen, setDrawerOpen] = useState(false);

  const showDrawer = () => {
    setDrawerOpen(true);
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
      render: (item) => (
        <Space>
          <Button>Edit</Button>
          <Popconfirm
            title="Delete the task"
            description="Are you sure to delete this task?"
            okText="Yes"
            cancelText="No"
          >
            <Button danger onClick={() => handleDelet(item)}>Delete</Button>
          </Popconfirm>
        </Space>
      )
    }
  ]

  const handleDelet = (el) => {
    API.delete(`/products/${el.id}`).then(() => {
      getProducts();
    }).catch(err => console.error("Error deleting product:", err));
  }
  getProducts();

  return (
    <>
      <Flex justify='end'>
        <Button className='add-products' type='primary' size='large' onClick={showDrawer}>+ Add products</Button>
      </Flex>
      <Table dataSource={products} columns={columns} />
      <ProductDrawer setDrawerOpen={setDrawerOpen} drawerOpen={drawerOpen} />
    </>
  )
}

export default Products
