import { Typography } from "antd";

const { Title, Text } = Typography;

const AboutCard = ({ record }) => {
    return (
        <div className="about-card">
            <Title level={4}>{record.title}</Title>
            <Text>{record.description}</Text>
        </div>
    );
}

export default AboutCard;