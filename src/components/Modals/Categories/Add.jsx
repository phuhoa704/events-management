import { useState } from "react";
import { Modal, Form, Row, Col, Button, Upload, Input, message } from "antd";
import { FORM_MESSAGE } from "../../../configs/constants";
import { LoadingOutlined, PlusOutlined, FileAddOutlined } from '@ant-design/icons';
import { createCategory } from "../../../redux/actions/Categories";
import { useDispatch } from "react-redux";

const ModalAdd = ({ open, closeModal }) => {
    const dispatch = useDispatch();
    const [form] = Form.useForm();
    const [image, setImage] = useState('');
    const [loading, setLoading] = useState(false);
    const getBase64 = (img, callback) => {
        const reader = new FileReader();
        reader.addEventListener('load', () => callback(reader.result));
        reader.readAsDataURL(img);
    };
    const handleChangeImage = (info) => {
        if (info.file.status === 'uploading') {
            setLoading(true);
            return;
        }
        if (info.file.status === 'done') {
            // Get this url from response in real world.
            getBase64(info.file.originFileObj, (url) => {
                setLoading(false);
                setImage(url);
            });
        }
    };
    const beforeUpload = (file) => {
        const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
        if (!isJpgOrPng) {
            message.error('You can only upload JPG/PNG file!');
        }
        const isLt2M = file.size / 1024 / 1024 < 2;
        if (!isLt2M) {
            message.error('Image must smaller than 2MB!');
        }
        return isJpgOrPng && isLt2M;
    };
    const dummyRequest = async ({ file, onSuccess }) => {
        setTimeout(() => {
            onSuccess("ok");
        }, 0);
    }
    const uploadButton = (
        <div>
            {loading ? <LoadingOutlined /> : <PlusOutlined />}
            <div style={{ marginTop: 8 }}>Upload</div>
        </div>
    );
    const handleOnCreate = async(values) => {
        let formData = new FormData();
        formData.append('image', values.image.file.originFileObj);
        formData.append('name', values.name);
        let rs = await dispatch(createCategory(formData));
        if(rs.payload.action) {
            form.resetFields();
            setImage('');
            closeModal();
        }
    }
    return (
        <Modal
            open={open}
            onCancel={closeModal}
            title={'Thêm danh mục'}
            footer={null}
        >
            <Form form={form} layout="vertical" onFinish={handleOnCreate}>
                <Row gutter={10}>
                    <Col md={24}>
                        <Form.Item label='Ảnh' name={'image'} rules={[
                            {
                                required: true,
                                message: FORM_MESSAGE.IMAGE.REQUIRED
                            },
                        ]}>
                            <Upload
                                name="image"
                                listType="picture-card"
                                className="avatar-uploader"
                                showUploadList={false}
                                customRequest={dummyRequest}
                                beforeUpload={beforeUpload}
                                onChange={handleChangeImage}
                            >
                                {image !== '' ? <img src={image} alt="avatar" style={{ width: '100%', height: '90%' }} /> : uploadButton}
                            </Upload>
                        </Form.Item>
                    </Col>
                    <Col md={24}>
                        <Form.Item label='Tên danh mục' name={'name'}  rules={[
                            {
                                required: true,
                                message: FORM_MESSAGE.CATEGORY.REQUIRED
                            },
                        ]}>
                            <Input placeholder="Tên danh mục" size="large"/>
                        </Form.Item>
                    </Col>
                    <Col md={24} style={{ textAlign: 'right' }}>
                        <Button icon={<FileAddOutlined />} type="primary" htmlType="submit">Thêm mới</Button>
                    </Col>
                </Row>
            </Form>
        </Modal>
    );
}

export default ModalAdd;