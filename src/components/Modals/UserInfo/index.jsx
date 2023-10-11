import { useState } from "react";
import { Modal, Form, Button, Input, Tabs, Row, Col, Upload, message } from "antd";
import { LoadingOutlined, PlusOutlined, UploadOutlined, EditOutlined } from "@ant-design/icons";
import { FORM_MESSAGE } from "../../../configs/constants";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { updateAvatar, changePassword } from "../../../redux/actions/Profile";
import { ASSETS_URL } from "../../../configs/apiUrl";

const { Password } = Input;

const ModalUserInfo = ({ open, closeModal }) => {
    const dispatch = useDispatch();
    const [updateAvtForm] = Form.useForm();
    const [changePwdForm] = Form.useForm();
    const [image, setImage] = useState('');
    const [loading, setLoading] = useState(false);
    const userInfo = useSelector(state => state.profile.profile);
    const loadingState = useSelector(state => state.loading.loading);
    useEffect(() => {
        if (userInfo) {
            setImage(`${ASSETS_URL}${userInfo.avatar}`);
        }
    }, [userInfo])
    const uploadButton = (
        <div>
            {loading ? <LoadingOutlined /> : <PlusOutlined />}
            <div style={{ marginTop: 8 }}>Upload</div>
        </div>
    );
    const dummyRequest = async ({ file, onSuccess }) => {
        setTimeout(() => {
            onSuccess("ok");
        }, 0);
    }
    const getBase64 = (img, callback) => {
        const reader = new FileReader();
        reader.addEventListener('load', () => callback(reader.result));
        reader.readAsDataURL(img);
    };

    const handleChangeImage = async (info) => {
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
        return isJpgOrPng;
    };
    const handleUploadAvatar = (values) => {
        const formData = new FormData();
        formData.append('avatar', values.avatar.file.originFileObj);
        dispatch(updateAvatar(formData));
    }
    const handleChangePassword = (values) => {
        dispatch(changePassword({...values}));
    }
    return (
        <Modal
            title='Thông tin tài khoản'
            open={open}
            onCancel={closeModal}
            footer={null}
        >
            <Tabs defaultActiveKey="1">
                <Tabs.TabPane tab='Ảnh đại diện' key={'1'}>
                    <Form form={updateAvtForm} layout="vertical" onFinish={handleUploadAvatar}>
                        <Row>
                            <Col md={24}>
                                <Form.Item label='Ảnh đại diện' name={'avatar'}>
                                    <Upload
                                        name="image"
                                        listType="picture-card"
                                        className="image-uploader"
                                        showUploadList={false}
                                        customRequest={dummyRequest}
                                        beforeUpload={beforeUpload}
                                        onChange={handleChangeImage}
                                    >
                                        {image !== '' ? <img src={image} alt="avatar" style={{ width: '100%', height: '90%' }} /> : uploadButton}
                                    </Upload>
                                </Form.Item>
                            </Col>
                            <Col md={24} style={{ textAlign: 'right' }}>
                                <Button icon={<UploadOutlined />} type="primary" htmlType="submit" loading={loadingState}>Tải lên</Button>
                            </Col>
                        </Row>
                    </Form>
                </Tabs.TabPane>
                <Tabs.TabPane tab='Thay đổi mật khẩu' key={'2'}>
                    <Form form={changePwdForm} layout="vertical" onFinish={handleChangePassword}>
                        <Row>
                            <Col md={24}>
                                <Form.Item label='Mật khẩu cũ' name={'password_old'} rules={[
                                    {
                                        required: true,
                                        message: FORM_MESSAGE.PASSWORD.REQUIRED
                                    },
                                    {
                                        pattern: new RegExp(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/g),
                                        message: FORM_MESSAGE.PASSWORD.INVALID
                                    }
                                ]}>
                                    <Password placeholder='Mật khẩu cũ' />
                                </Form.Item>
                            </Col>
                            <Col md={24}>
                                <Form.Item label='Mật khẩu mới' name={'password'} rules={[
                                    {
                                        required: true,
                                        message: FORM_MESSAGE.PASSWORD.REQUIRED
                                    },
                                    {
                                        pattern: new RegExp(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/g),
                                        message: FORM_MESSAGE.PASSWORD.INVALID
                                    }
                                ]}>
                                    <Password placeholder='Mật khẩu mới' />
                                </Form.Item>
                            </Col>
                            <Col md={24}>
                                <Form.Item label='Nhập lại mật khẩu mới' name={'password_confirm'} rules={[
                                    {
                                        required: true,
                                        message: FORM_MESSAGE.PASSWORD.REQUIRED
                                    },
                                    {
                                        pattern: new RegExp(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/g),
                                        message: FORM_MESSAGE.PASSWORD.INVALID
                                    }
                                ]}>
                                    <Password placeholder='Nhập lại mật khẩu mới' />
                                </Form.Item>
                            </Col>
                            <Col md={24} style={{ textAlign: 'right' }}>
                                <Button type="primary" htmlType="submit" icon={<EditOutlined />} loading={loadingState}>Cập nhật</Button>
                            </Col>
                        </Row>
                    </Form>
                </Tabs.TabPane>
            </Tabs>
        </Modal>
    );
}

export default ModalUserInfo;