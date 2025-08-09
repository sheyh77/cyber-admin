import React, { useEffect, useState } from 'react';
import { urls } from '../contants/urls';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { API } from '../api';
import { Button, Card, Flex, Popconfirm } from 'antd';
import BrandsModal from '../components/BrandsModal';
const { Meta } = Card;

function Brands() {
  const [brands, setBrands] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingData, setEditingData] = useState(null);

  function getBrands() {
    API.get(urls.brands.get).then(res => setBrands(res.data)).catch(err => console.log(err))
  }

  function showModal() {
    setIsModalOpen(true)
  }

  useEffect(() => {
    getBrands()
  }, [])

  function handleDelete(el) {
    API.delete(urls.brands.delete(el.id)).then(res => {
      if ((res.status) === 200) {
        getBrands()
      }
    }).catch(err => console.log(err))
  }

  function handleEdit(el) {
    showModal()
    setEditingData(el)
  }

  return (
    <>
      <Flex justify='end'>
        <Button
          className="add-product"
          type="primary"
          size="large"
          onClick={showModal}
        >+ Add brand</Button>
      </Flex>
      <Flex gap={24} wrap="wrap" justify='center'>
        {
          brands.map(item => (
            <Card
              style={{ width: 300 }}
              cover={
                <img
                  alt={item.name}
                  src={item.image}
                />
              }
              actions={[
                <EditOutlined key="edit" onClick={() => handleEdit(item)} />,
                <Popconfirm
                  title="Delete the brand"
                  description="Are you sure to delete this brand?"
                  okText="Yes"
                  cancelText="No"
                  onConfirm={() => handleDelete(item)}
                >
                  <DeleteOutlined key="delete" />
                </Popconfirm>
              ]}
            >
              <Meta
                title={item.name}
                description={item.country}
              />
            </Card>
          ))
        }
      </Flex>
      <BrandsModal
        modalOpen={isModalOpen}
        setModalOpen={setIsModalOpen}
        getBrands={getBrands}
        editingData={editingData}
        setEditingData={setEditingData}
      />
    </>
  )
}

export default Brands