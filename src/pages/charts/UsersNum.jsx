import React from 'react';
import { Button, Col, Row, Statistic } from 'antd';

const UsersNum = () => (
    <Row gutter={16}>
        <div className="users">
            <div className="users-num">
                <Col span={12}>
                    <Statistic title="Active Users" value={1} />
                </Col>
            </div>
            <div className="users-balance users-num">
                <Col span={12}>
                    <Statistic title="Account Balance" value={100} precision={2} />
                </Col>
            </div>
        </div>
    </Row>
);
export default UsersNum;