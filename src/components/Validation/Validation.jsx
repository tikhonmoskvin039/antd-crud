import {
  Button,
  Checkbox,
  DatePicker,
  Form,
  Input,
  Select,
  Space,
} from "antd";
import React from "react";

const Validation = () => {
  return (
    <Space>
      <Form
        autoComplete="off"
        labelCol={{ span: 10 }}
        wrapperCol={{ span: 14 }}
        onFinish={(values) => console.log(values)}
        onFinishFailed={(error) => {
          console.log({ error });
        }}
      >
        <Form.Item
          name="fullName"
          label="Full name"
          rules={[
            {
              required: true,
              message: "Please enter your name!",
            },
            {
              whitespace: true,
            },
            {
              min: 3,
            },
          ]}
          hasFeedback
        >
          <Input placeholder="Type your name" />
        </Form.Item>
        <Form.Item
          rules={[
            {
              required: true,
              message: "Please enter your email!",
            },
            {
              type: "email",
              message: "Please enter a valid email!",
            },
          ]}
          hasFeedback
          name="email"
          label="Email"
        >
          <Input placeholder="Type your email" />
        </Form.Item>
        <Form.Item
          name="password"
          label="Password"
          rules={[
            {
              required: true,
            },
            { min: 6 },
            {
              validator: (_, value) =>
                value && value.includes("A")
                  ? Promise.resolve()
                  : Promise.reject("Password does not match criteria"),
            },
          ]}
          hasFeedback
        >
          <Input.Password placeholder="Type your password" />
        </Form.Item>
        <Form.Item
          name="confirmPassword"
          label="Confirm Password"
          dependencies={["password"]}
          rules={[
            {
              required: true,
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  "The two passwords thay you entered doesn`t match"
                );
              },
            }),
          ]}
          hasFeedback
        >
          <Input.Password placeholder="Type your password" />
        </Form.Item>
        <Form.Item name="gender" label="Gender" requiredMark="optional">
          <Select placeholder="Select your gender">
            <Select.Option value="male">Male</Select.Option>
            <Select.Option value="female">Female</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item
          name="dob"
          label="Date of Birth"
          rules={[
            {
              required: true,
              message: "Please provide your DoB!",
            },
          ]}
          hasFeedback
        >
          <DatePicker
            style={{ width: "100%" }}
            picker="date"
            placeholder="Chose date of birth"
          />
        </Form.Item>
        <Form.Item
          name="webside"
          label="Website"
          rules={[
            {
              type: "url",
              message: "Please enter a valid URL!",
            },
          ]}
          hasFeedback
        >
          <Input placeholder="Add your website URL" />
        </Form.Item>
        <Form.Item
          name="agreement"
          wrapperCol={{ span: 24 }}
          valuePropName="checked"
          rules={[
            {
              validator: (_, value) =>
                value
                  ? Promise.resolve()
                  : Promise.reject("To proceed, you need to agree!"),
            },
          ]}
        >
          <Checkbox>
            Agree to our <a href="#">Terms and Conditions</a>
          </Checkbox>
        </Form.Item>
        <Form.Item wrapperCol={{ span: 24 }}>
          <Button block htmlType="submit" type="primary">
            Register
          </Button>
        </Form.Item>
      </Form>
    </Space>
  );
};

export default Validation;
