import React from 'react'
import ProductNum from './charts/ProductNum'
import UsersNum from './charts/UsersNum'

function Dashboard() {
  return (
    <section className="dashboard">
      <UsersNum />
      <ProductNum />
    </section>
  )
}

export default Dashboard