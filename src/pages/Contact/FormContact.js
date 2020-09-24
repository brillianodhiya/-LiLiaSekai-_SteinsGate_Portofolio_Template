import React from "react";
import { Form, Input, Button } from "antd";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const validateMessages = {
  // eslint-disable-next-line
  required: "${label} is required!",
  types: {
    // eslint-disable-next-line
    email: "${label} is not validate email!",
    // eslint-disable-next-line
    number: "${label} is not a validate number!",
  },
  number: {
    // eslint-disable-next-line
    range: "${label} must be between ${min} and ${max}",
  },
};

const FormContact = () => {
  const onFinish = (values) => {
    console.log(values);
  };
  return (
    <div>
      <Form
        {...layout}
        name="nest-messages"
        onFinish={onFinish}
        validateMessages={validateMessages}
      >
        <Form.Item
          name={["user", "name"]}
          label="Name"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={["user", "email"]}
          label="Email"
          rules={[{ type: "email" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item name={["user", "phone"]} label="Phone">
          <Input />
        </Form.Item>
        <Form.Item name={["user", "website"]} label="Website">
          <Input />
        </Form.Item>
        <Form.Item name={["user", "message"]} label="Message">
          <Input.TextArea />
        </Form.Item>
        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default FormContact;
