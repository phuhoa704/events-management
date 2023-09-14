import { Row, Col, Image, Button, Table, Popconfirm, Tabs, Tooltip } from "antd";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listCategories, swapCategoriesOrder, categoryById, deleteCategory, getTrashList, restoreTrash, deleteTrash } from "../../../../../redux/actions/Categories";
import { ASSETS_URL } from "../../../../../configs/apiUrl";
import { EyeOutlined, FolderAddOutlined, DeleteOutlined, UndoOutlined } from '@ant-design/icons';
import { DndContext, PointerSensor, useSensor, useSensors } from '@dnd-kit/core';
import { restrictToVerticalAxis } from '@dnd-kit/modifiers';
import {
    SortableContext,
    arrayMove,
    useSortable,
    verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import moment from "moment";
import ModalAdd from "../../../../Modals/Categories/Add";
import ModalEdit from "../../../../Modals/Categories/Edit";
import { MOVE_TO_TRASH, RESTORE_POPCONFIRM, DELETE_POPCONFIRM } from "../../../../../configs/constants";

const Categories = () => {
    const dispatch = useDispatch();
    const [modalAdd, setModalAdd] = useState(false);
    const [modalEdit, setModalEdit] = useState(false);
    const [dataSource, setDataSource] = useState([]);
    const { categories, trashBin } = useSelector(state => state.categories)
    useEffect(() => {
        if (!(categories.length > 0)) {
            dispatch(listCategories([]));
        }
        if(!(trashBin.length > 0)) {
            dispatch(getTrashList([]));
        }
    }, [])
    useEffect(() => {
        if (categories.length > 0) {
            setDataSource(categories)
        }
    }, [categories])
    const columns = [
        {
            title: '#',
            render: (_, __, index) => index + 1
        },
        {
            title: 'Ảnh',
            render: (_, record) => (
                <Image src={`${ASSETS_URL}${record.image}`} width={60} height={60} />
            )
        },
        {
            title: 'Tên loại',
            dataIndex: 'name'
        },
        {
            title: 'Ngày tạo',
            dataIndex: 'created_at',
            render: (_, record) => moment(record.created_at).format('DD-MM-YYYY')
        },
        {
            title: 'Cập nhật lúc',
            dataIndex: 'updated_at',
            render: (_, record) => moment(record.updated_at).format('DD-MM-YYYY')
        },
        {
            title: '',
            render: (_, record) => (
                <>
                    <Tooltip title='Chi tiết' placement="bottom">
                        <Button icon={<EyeOutlined />} style={{ marginRight: 5 }} onClick={() => {
                            dispatch(categoryById(record.id));
                            setModalEdit(true);
                        }}></Button>
                    </Tooltip>
                    <Tooltip title='Chuyển vào thùng rác' placement="bottom">
                        <Popconfirm
                            okText={MOVE_TO_TRASH.OKTEXT}
                            cancelText={MOVE_TO_TRASH.CANCELTEXT}
                            title={MOVE_TO_TRASH.TITLE}
                            onConfirm={() => dispatch(deleteCategory(record.id))}
                        >
                            <Button icon={<DeleteOutlined />} type="primary" danger></Button>
                        </Popconfirm>
                    </Tooltip>
                </>
            )
        }
    ];
    const trashColumns = [
        {
            title: '#',
            render: (_, __, index) => index + 1
        },
        {
            title: 'Ảnh',
            render: (_, record) => (
                <Image src={`${ASSETS_URL}${record.image}`} width={60} height={60} />
            )
        },
        {
            title: 'Tên loại',
            dataIndex: 'name'
        },
        {
            title: 'Ngày tạo',
            dataIndex: 'created_at',
            render: (_, record) => moment(record.created_at).format('DD-MM-YYYY')
        },
        {
            title: 'Cập nhật lúc',
            dataIndex: 'updated_at',
            render: (_, record) => moment(record.updated_at).format('DD-MM-YYYY')
        },
        {
            title: '',
            render: (_, record) => (
                <>
                    <Tooltip title='Hoàn tác' placement="bottom">
                        <Popconfirm
                            okText={RESTORE_POPCONFIRM.OKTEXT}
                            cancelText={RESTORE_POPCONFIRM.CANCELTEXT}
                            title={RESTORE_POPCONFIRM.TITLE}
                            onConfirm={() => dispatch(restoreTrash(record.id))}
                        >
                            <Button icon={<UndoOutlined />} style={{ marginRight: 5 }}></Button>
                        </Popconfirm>
                    </Tooltip>
                    <Tooltip title='Xóa' placement="bottom">
                        <Popconfirm
                            okText={DELETE_POPCONFIRM.OKTEXT}
                            cancelText={DELETE_POPCONFIRM.CANCELTEXT}
                            title={DELETE_POPCONFIRM.TITLE}
                            onConfirm={() => dispatch(deleteTrash(record.id))}
                        >
                            <Button icon={<DeleteOutlined />} type="primary" danger></Button>
                        </Popconfirm>
                    </Tooltip>
                </>
            )
        }
    ];
    const RowDrag = (props) => {
        const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({
            id: props['data-row-key'],
        });

        const style = {
            ...props.style,
            transform: CSS.Transform.toString(transform && { ...transform, scaleY: 1 }),
            transition,
            cursor: 'move',
            ...(isDragging ? { position: 'relative', zIndex: 1 } : {}),
        };

        return <tr {...props} ref={setNodeRef} style={style} {...attributes} {...listeners} />;
    };
    const sensors = useSensors(
        useSensor(PointerSensor, {
            activationConstraint: {
                distance: 1,
            },
        }),
    );
    const onDragEnd = ({ active, over }) => {
        if (active.id !== over?.id) {
            setDataSource((prev) => {
                const activeIndex = prev.findIndex((i) => i.id === active.id);
                const overIndex = prev.findIndex((i) => i.id === over?.id);
                return arrayMove(prev, activeIndex, overIndex);
            });
            dispatch(swapCategoriesOrder({
                id1: active.id,
                id2: over?.id
            }))
        }
    };
    const tabItems = [
        {
            key: '1', label: 'Danh mục', children: <Row gutter={[10, 10]}>
                <Col md={24} style={{ textAlign: 'right' }}>
                    <Button icon={<FolderAddOutlined />} onClick={() => setModalAdd(true)}>Tạo mới</Button>
                </Col>
                <Col md={24}>
                    <DndContext sensors={sensors} modifiers={[restrictToVerticalAxis]} onDragEnd={onDragEnd}>
                        <SortableContext
                            items={dataSource.map((i) => i.id)}
                            strategy={verticalListSortingStrategy}
                        >
                            <Table columns={columns} dataSource={dataSource} rowKey={'id'} components={{
                                body: {
                                    row: RowDrag
                                }
                            }} />
                        </SortableContext>
                    </DndContext>
                </Col>
            </Row>
        },
        {
            key: '2',
            label: 'Thùng rác',
            children: <Row>
                <Col md={24}>
                    <Table columns={trashColumns} dataSource={trashBin} />
                </Col>
            </Row>
        }
    ]
    return (
        <>
            <ModalAdd
                open={modalAdd}
                closeModal={() => setModalAdd(false)}
            />
            <ModalEdit
                open={modalEdit}
                closeModal={() => setModalEdit(false)}
            />
            <Tabs defaultActiveKey="1" items={tabItems} style={{ width: '100%' }} />
        </>
    );
}

export default Categories;