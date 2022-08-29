import { useEffect, useState } from "react";
import "./ChildPage.css";
import { Button, Table, Form, Input, Modal } from "antd";
import { getContract, getSelectedAddress } from "../../wallet-connection/WalletCard";
import { ethers } from "ethers";
import * as dayjs from "dayjs";

export default function DataTable() {
  const [isWithdrawStateOpen, setIsWithdrawStateOpen] = useState(false);
  const [isSenderStateOpen, setIsSenderStateOpen] = useState(false);
  const [isChildStateOpen, setIsChildOpen] = useState(false);
  const [selectedChild, setSelectedChild] = useState();
  const [rows, setRows] = useState([]);

  const handleWithdraw = (data) => {
    console.log("gelen:", { data, selectedChild });
    //contracta gönder await

    setIsWithdrawStateOpen(false);
    
  };

  const handleSend = (data) => {
    console.log("giden:", { data, selectedChild });
    //contracta gönder await

    setIsSenderStateOpen(false);
    PchildBalance(data.value);
  };

  const handleAddChild = async(child) => {
    console.log("cocuk ekle:", child);
    //tx = await contract...
    //await tx.wait()
    await setChildren(child);
    setRows((prev) => {
      return [...prev, child];
    });
    setIsChildOpen(false);
  };
  const PchildBalance= async(value) =>{
    const contract = await getContract();
    const tx = await contract.send(selectedChild.addr,{value});
    await tx.wait();
    

    console.log("child's balance: ",tx);
    
    getChildren();
    
    
  }

  const getChildren = async () => {
    const contract = await getContract();
    const children = await contract.getChildrenList(await getSelectedAddress());

    console.log("Gelen çocuklar: ", children);
    setRows(children);
  };
  const setChildren = async (child) =>{
    
    const contract = await getContract();
    const tx = await contract.addChild(child.address,child.name,dayjs(child.date).unix());
    await tx.wait();

  }

  useEffect(() => {
    
    getChildren();    
  }, []);

  const columns = [
    {
      dataIndex: "name",
      title: "Ad ve Soyad",
    },
    {
      dataIndex: "idNumber",
      title: "TC",
      render: (data) => (data || -1).toString()
    },
    {
      dataIndex: "balance",
      title: "Miktar",
      render: (data) => (data || 0).toString()
    },
    {
      dataIndex: "withdrawDate",
      title: "Tarih",
      render: (data) => (data || 0).toString()
    },
    {
      width: 1,
      render: (_, row) => (
        <Button
          onClick={() => {
            setSelectedChild(row);
            setIsSenderStateOpen(true);
          }}
        >
          Yatır
        </Button>
      ),
    },
    {
      width: 1,
      render: (_, row) => (
        <Button
          onClick={() => {
            setSelectedChild(row);
            setIsWithdrawStateOpen(true);
          }}
        >
          Çek
        </Button>
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
      >
        <Form onFinish={handleAddChild} layout="vertical">
          <Form.Item label="Ad ve Soyad" name="name">
            <Input type="text" />
          </Form.Item>
          <Form.Item label="Cüzdan Adresi" name="address">
            <Input type="text" />
          </Form.Item>
          <Form.Item label="Çekebileceği Tarih" name="date">
            <Input type="date" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Ekle
            </Button>
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
            <Input type="number" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Yatır
            </Button>
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
            <Input type="number" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Çek
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}
