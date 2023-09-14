import { useState } from "react";
import { Modal, Form, Row, Col, Button, Upload, Input, message } from "antd";
import { FORM_MESSAGE } from "../../../configs/constants";
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { updateCategory } from "../../../redux/actions/Categories";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { ASSETS_URL } from "../../../configs/apiUrl";

const ModalEdit = ({ open, closeModal }) => {
    const dispatch = useDispatch();
    const categoryById = useSelector(state => state.categories.categoryById);
    const [form] = Form.useForm();
    const [image, setImage] = useState('');
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        if(Object.keys(categoryById).length > 0) {
            form.setFieldsValue({
                name: categoryById.name,
                image: categoryById.image
            })
            setImage(`${ASSETS_URL}${categoryById.image}`)
        }
    }, [categoryById])
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
    const handleOnUpdate = async(values) => {
        let formData = new FormData();
        if(values.image.file) {
            formData.append('image', values.image.file.originFileObj);
        }
        formData.append('name', values.name);
        let rs = await dispatch(updateCategory({
            id: categoryById.id,
            data: formData
        }))
        if(rs.payload.action) {
            closeModal();
        }
    }
    return ( 
        <Modal
            open={open}
            onCancel={closeModal}
            title={'Cập nhật danh mục'}
            footer={null}
        >
            <Form form={form} layout="vertical" onFinish={handleOnUpdate}>
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
                        <Button type="primary" htmlType="submit">Cập nhật</Button>
                    </Col>
                </Row>
            </Form>
        </Modal>
    );
}

export default ModalEdit;