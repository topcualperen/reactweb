import { useEffect, useState } from "react";
import "./ChildPage.css";
import { Button, Table, Form, Input, Modal } from "antd";
import { getContract } from "../../wallet-connection/WalletCard";

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
  };

  const handleAddChild = (child) => {
    console.log("cocuk ekle:", child);
    //tx = await contract...
    //await tx.wait()

    setRows((prev) => {
      return [...prev, child];
    });
    setIsChildOpen(false);
  };

  const getCildren = async () => {
    const contract = await getContract();
    const children = await contract.getChildrenList(
      "0x78CE9a3242aE67BDa4C27Ed4bf798A647acd5B9C"
    );

    console.log("Gelen çocuklar: ", children);
    setRows(children);
  };

  useEffect(() => {
    getCildren();    
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
            setSelectedChild(row.lastName);
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
            setSelectedChild(row.lastName);
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

      <Button onClick={() => setIsChildOpen(true)}>Çocuk Ekle</Button>

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
            <Input type="text" />
          </Form.Item>
          <Form.Item label="Cüzdan Adresi" name="adress">
            <Input type="text" />
          </Form.Item>
          <Form.Item label="Çekebileceği Tarih" name="date">
            <Input type="date" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Çocuk Ekle
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
