import { useEffect, useState } from "react";
import "./ChildPage.css";
import { Button, Table, Form, Input, Modal } from "antd";

export default function DataTable() {
  const [isWithdrawStateOpen, setIsWithdrawStateOpen] = useState(false);
  const [isSenderStateOpen, setIsSenderStateOpen] = useState(false);
  const [isChildStateOpen, setIsChildOpen] = useState(false);
  const [selectedChild, setSelectedChild] = useState();
  const [rows, setRows] = useState();

  const handleWithdraw = (data) => {
    console.log("gelen:", {data, selectedChild});
    //contracta gönder await

    setIsWithdrawStateOpen(false);
  };

  const handleSend = (data) => {
    console.log("giden:", {data, selectedChild});
    //contracta gönder await

    setIsSenderStateOpen(false);
  };

  const handleAddChild = (child) => {
    console.log("cocuk ekle:", child);
    //tx = await contract...
    //await tx.wait()

    setRows((prev) => {
      return [...prev, child]
    })
    setIsChildOpen(false);
  }

  useEffect(() => {
    const children = [
      { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
      { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
      { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
      { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
      { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: 0 },
      { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
      { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
      { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
      { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
    ];

    setRows(children);
  }, [])

  const columns = [
    {
      dataIndex: "lastName", 
      title: "Ad ve Soyad",
    },
    {
      dataIndex: "age",
      title: "Devredilecek Miktar",
    },
    {
      dataIndex: "fullName",
      title: "Devir Tarihi",
    },
    {
      width: 1,
      render: (_, row) => (
        <Button onClick={() => {
          setSelectedChild(row.lastName)
          setIsSenderStateOpen(true)
        }}>Yatır</Button>
      ),
    },
    {
      width: 1,
      render: (_, row) => (
        <Button onClick={() => {
          setSelectedChild(row.lastName)
          setIsWithdrawStateOpen(true)
        }}>Çek</Button>
      ),
    },
  ];

  return (
    
    <div style={{ height: 400, width: "100%", padding: "25px" }}>
      <Table
        className="deneme-class"
        dataSource={rows}
        columns={columns}
        pagination={{ pageSize: 6 }}
      />

      <Button onClick={() => setIsChildOpen(true)}>Ekle</Button>

      <Modal
        title="CrypOcean"
        visible={isChildStateOpen}
        footer={null}
        // onOk={handleOk}
        onCancel={() => setIsChildOpen(false)}
        style={{backdropFilter:"blur(10px)"}}
      >
        <Form onFinish={handleAddChild} layout="vertical">
          <Form.Item label="Ad ve Soyad" name="name">
            <Input type="text"/>
          </Form.Item>
          <Form.Item label="Cüzdan Adresi" name="adress">
            <Input type="text"/>
          </Form.Item>
          <Form.Item label="Çekebileceği Tarih" name="date">
            <Input type="date"/>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">Ekle</Button>
          </Form.Item>
        </Form>
      </Modal>

      <Modal
        title="CrypOcean"
        visible={isSenderStateOpen}
        footer={null}
        // onOk={handleOk}
        onCancel={() => setIsSenderStateOpen(false)}
      >
        <Form onFinish={handleSend} layout="vertical">
          <Form.Item label="Yatırılacak Miktar" name="value">
            <Input type="number"/>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">Yatır</Button>
          </Form.Item>
        </Form>
      </Modal>

      <Modal
        title="CrypOcean"
        visible={isWithdrawStateOpen}
        footer={null}
        // onOk={handleOk}
        onCancel={() => setIsWithdrawStateOpen(false)}
      >
        <Form onFinish={handleWithdraw} layout="vertical">
          <Form.Item label="Çekilecek Miktar" name="value">
            <Input type="number"/>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">Çek</Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}
