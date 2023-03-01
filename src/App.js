import React, { useState } from "react";
import { Button, Input, Modal, Table } from "antd";
import "./App.css";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

function App() {
  const [isEditing, setIsEditing] = useState(false);
  const [editingRecord, setEditingRecord] = useState(null);
  const [dataSource, setDataSource] = useState([
    {
      id: 1,
      name: "John",
      email: "john@gmail.com",
      address: "Street 1",
    },
    {
      id: 2,
      name: "David",
      email: "david@gmail.com",
      address: "Street 2",
    },
    {
      id: 3,
      name: "Silvia",
      email: "Silvia@gmail.com",
      address: "Street 4",
    },
    {
      id: 4,
      name: "Mary",
      email: "mary@gmail.com",
      address: "Street 4",
    },
  ]);

  const columns = [
    {
      key: "1",
      title: "Id",
      dataIndex: "id",
    },
    {
      key: "2",
      title: "Name",
      dataIndex: "name",
    },
    {
      key: "3",
      title: "Email",
      dataIndex: "email",
    },
    {
      key: "4",
      title: "Address",
      dataIndex: "address",
    },
    {
      key: "5",
      title: "Actions",
      render: (record) => {
        return (
          <>
            <EditOutlined onClick={() => onEditStudent(record)} />
            <DeleteOutlined
              onClick={() => onDeleteStudent(record)}
              style={{ color: "red", marginLeft: 12, cursor: "pointer" }}
            />
          </>
        );
      },
    },
  ];

  const onAddStudent = () => {
    const newStudent = {
      id: parseInt(Math.random() * 1000),
      name: "Mary",
      email: "mary@gmail.com",
      address: "Street 4",
    };
    setDataSource((prev) => {
      return [...prev, newStudent];
    });
  };

  const onDeleteStudent = (record) => {
    Modal.confirm({
      title: "Are you sure?",
      okText: "Yes",
      cancelText: "No",
      okType: "danger",
      onOk: () => {
        setDataSource((prev) => {
          return prev.filter((student) => student.id !== record.id);
        });
      },
    });
  };

  const onEditStudent = (record) => {
    setIsEditing(true);
    setEditingRecord({ ...record });
  };

  const resetEditing = () => {
    setEditingRecord(null);
    setIsEditing(false);
  };

  return (
    <div className="App">
      <header className="App-header">
        <Button onClick={onAddStudent}>Add new entry</Button>
        <Table columns={columns} dataSource={dataSource}></Table>
        <Modal
          title="Edit record"
          okText="Save"
          // okType=""
          open={isEditing}
          onCancel={() => {
            resetEditing();
          }}
          onOk={() => {
            setDataSource((pre) => {
              return pre.map((student) => {
                if (student.id === editingRecord.id) {
                  return editingRecord;
                } else {
                  return student;
                }
              });
            });
            resetEditing();
          }}
        >
          <Input
            value={editingRecord?.name}
            onChange={(e) =>
              setEditingRecord((pre) => {
                return { ...pre, name: e.target.value };
              })
            }
          />
          <Input
            value={editingRecord?.address}
            onChange={(e) =>
              setEditingRecord((pre) => {
                return { ...pre, address: e.target.value };
              })
            }
          />
          <Input
            value={editingRecord?.email}
            onChange={(e) =>
              setEditingRecord((pre) => {
                return { ...pre, email: e.target.value };
              })
            }
          />
        </Modal>
      </header>
    </div>
  );
}

export default App;
