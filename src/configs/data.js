import hcm from '../assets/popular/hcm.jpg';
import hcm2 from '../assets/popular/hcm2.jpg';
import cantho from '../assets/popular/cantho.jpg';
import cantho2 from '../assets/popular/cantho2.jpg';
import hanoi from '../assets/popular/hanoi.jpg';
import hanoi2 from '../assets/popular/hanoi2.jpg';
import bentre from '../assets/popular/bentre.jpg';
import bentre2 from '../assets/popular/bentre2.png'
import vungtau from '../assets/popular/vungtau.jpg';
import vungtau2 from '../assets/popular/vungtau2.jpg';
//footer icons
import youtube from '../assets/footer-icon/youtube.png';
import facebook from '../assets/footer-icon/facebook.png';
import instagram from '../assets/footer-icon/instagram.png';
import telegram from '../assets/footer-icon/telegram.png';
//icons
import { UserOutlined, WalletOutlined, StockOutlined, InboxOutlined } from '@ant-design/icons';
//logs
import deposit from '../assets/log/deposit.png';
import payup from '../assets/log/payment.png';
//types
import tennis from '../assets/types/tennis.png';
import barber from '../assets/types/barber.png';
import spa from '../assets/types/spa.png';
import restaurant from '../assets/types/restaurant.png';
import hotel from '../assets/types/hotel.png';
import football from '../assets/types/football.png';
import station from '../assets/types/station.png';
import hospital from '../assets/types/hospital.png';
import dentist from '../assets/types/dentist.png';
import coffeeshop from '../assets/types/coffeeshop.png';

export const dataPopular = [
    { id: 1, name: 'Vũng Tàu', numPlaces: 75, avg: 2380000, url: vungtau, hoverUrl: vungtau2 },
    { id: 2, name: 'Hồ Chí Minh', numPlaces: 88, avg: 3000000, url: hcm, hoverUrl: hcm2 },
    { id: 3, name: 'Cần Thơ', numPlaces: 65, avg: 2500000, url: cantho, hoverUrl: cantho2 },
    { id: 4, name: 'Hà Nội', numPlaces: 86, avg: 3000000, url: hanoi, hoverUrl: hanoi2 },
    { id: 5, name: 'Bến Tre', numPlaces: 23, avg: 580000, url: bentre, hoverUrl: bentre2 },
]

export const dataAbout = [
    { id: 1, title: 'What is Lorem Ipsum?', description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." },
    { id: 2, title: 'Why do we use it?', description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)." },
    { id: 3, title: 'Where does it come from?', description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source." },
    { id: 4, title: 'Where can I get some?', description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text." },
]

export const footerIcons = [
    { id: 1, icon: youtube },
    { id: 2, icon: facebook },
    { id: 3, icon: instagram },
    { id: 4, icon: telegram },
]

export const footerShortcutFirstCol = [
    { id: 1, title: 'Company', url: '/' },
    { id: 2, title: 'Jobs', url: '/' },
    { id: 3, title: 'Press', url: '/' },
    { id: 4, title: 'Mobile app - searching on the go', url: '/' },
    { id: 5, title: 'Investor relations', url: '/' },
]

export const footerShortcutSecondCol = [
    { id: 1, title: 'Help', url: '/' },
    { id: 2, title: 'Learn how we work', url: '/' },
    { id: 3, title: 'Terms and conditions', url: '/' },
    { id: 4, title: 'Legal Information', url: '/' },
    { id: 5, title: 'Privacy notice', url: '/' },
    { id: 6, title: 'Cyber security', url: '/' },
]

export const cardData = [
    {
        id: 1,
        name: 'Oyo 522 Acasa Hotel',
        image: 'https://imgcy.trivago.com/c_lfill,d_dummy.jpeg,e_sharpen:60,f_auto,h_225,q_auto,w_225/itemimages/19/06/19062518.jpeg',
        type: 'Hotel',
        distance: '0.5 km to the city',
        rating: 8.1,
        comments: 32,
        price: [
            { id: 1, name: 'Agoda', value: 150000 },
            { id: 2, name: 'Booking.com', value: 150000 },
        ]
    },
    {
        id: 2,
        name: 'Thuy Trang Hotel',
        image: 'https://imgcy.trivago.com/c_lfill,d_dummy.jpeg,e_sharpen:60,f_auto,h_225,q_auto,w_225/itemimages/34/36/34365098.jpeg',
        type: 'Hotel',
        distance: '0.0 km to the city',
        rating: 7.2,
        comments: 54,
        price: [
            { id: 1, name: 'Agoda', value: 202000 },
            { id: 2, name: 'Booking.com', value: 202000 },
        ]
    },
    {
        id: 3,
        name: 'Lan Rung Resort & Spa',
        image: 'https://imgcy.trivago.com/c_lfill,d_dummy.jpeg,e_sharpen:60,f_auto,h_225,q_auto,w_225/itemimages/13/06/1306221_v1.jpeg',
        type: 'Hotel',
        distance: '0.1 km away from the beach',
        rating: 8.1,
        comments: 198,
        price: [
            { id: 1, name: 'Agoda', value: 2160000 },
            { id: 2, name: 'Booking.com', value: 1905000 },
        ]
    },
    {
        id: 4,
        name: 'The Imperial Vung Tau',
        image: 'https://imgcy.trivago.com/c_lfill,d_dummy.jpeg,e_sharpen:60,f_auto,h_225,q_auto,w_225/itemimages/12/88/1288218_v2.jpeg',
        type: 'Hotel',
        distance: '0.2 km away from the beach',
        rating: 8.6,
        comments: 1361,
        price: [
            { id: 1, name: 'Agoda', value: 2610000 },
            { id: 2, name: 'Booking.com', value: 2396000 },
        ]
    },
]

export const dashboardCard = [
    { id: 1, name: 'Total Customers', value: '1.039', val: 40, icon: <UserOutlined />, color: 'rgb(38,191,148)' },
    { id: 2, name: 'Total Revenue', value: '5.655.221 VNĐ', val: 25, icon: <WalletOutlined />, color: 'rgb(35,183,229)' },
    { id: 3, name: 'Conversion Ratio', value: '12.9%', val: -12, icon: <StockOutlined />, color: 'rgb(132,90,223)' },
    { id: 3, name: 'Total deals', value: '259', val: 10, icon: <InboxOutlined />, color: 'rgb(245,184,73)' },
]

export const dashboardLineChart = [
    {
        "year": "1850",
        "value": 0,
        "category": "Liquid fuel"
    },
    {
        "year": "1850",
        "value": 54,
        "category": "Solid fuel"
    },
    {
        "year": "1850",
        "value": 0,
        "category": "Gas fuel"
    },
    {
        "year": "1850",
        "value": 0,
        "category": "Cement production"
    },
    {
        "year": "1850",
        "value": 0,
        "category": "Gas flarinl"
    },
    {
        "year": "1851",
        "value": 0,
        "category": "Liquid fuel"
    },
    {
        "year": "1851",
        "value": 54,
        "category": "Solid fuel"
    },
    {
        "year": "1851",
        "value": 0,
        "category": "Gas fuel"
    },
    {
        "year": "1851",
        "value": 0,
        "category": "Cement production"
    },
    {
        "year": "1851",
        "value": 0,
        "category": "Gas flarinl"
    },
    {
        "year": "1852",
        "value": 0,
        "category": "Liquid fuel"
    },
    {
        "year": "1852",
        "value": 57,
        "category": "Solid fuel"
    },
    {
        "year": "1852",
        "value": 0,
        "category": "Gas fuel"
    },
    {
        "year": "1852",
        "value": 0,
        "category": "Cement production"
    },
    {
        "year": "1852",
        "value": 0,
        "category": "Gas flarinl"
    },
    {
        "year": "1853",
        "value": 0,
        "category": "Liquid fuel"
    },
    {
        "year": "1853",
        "value": 59,
        "category": "Solid fuel"
    },
    {
        "year": "1853",
        "value": 0,
        "category": "Gas fuel"
    },
    {
        "year": "1853",
        "value": 0,
        "category": "Cement production"
    },
    {
        "year": "1853",
        "value": 0,
        "category": "Gas flarinl"
    },
    {
        "year": "1854",
        "value": 0,
        "category": "Liquid fuel"
    },
    {
        "year": "1854",
        "value": 69,
        "category": "Solid fuel"
    },
    {
        "year": "1854",
        "value": 0,
        "category": "Gas fuel"
    },
    {
        "year": "1854",
        "value": 0,
        "category": "Cement production"
    },
    {
        "year": "1854",
        "value": 0,
        "category": "Gas flarinl"
    },
    {
        "year": "1855",
        "value": 0,
        "category": "Liquid fuel"
    },
    {
        "year": "1855",
        "value": 71,
        "category": "Solid fuel"
    },
    {
        "year": "1855",
        "value": 0,
        "category": "Gas fuel"
    },
    {
        "year": "1855",
        "value": 0,
        "category": "Cement production"
    },
    {
        "year": "1855",
        "value": 0,
        "category": "Gas flarinl"
    },
    {
        "year": "1856",
        "value": 0,
        "category": "Liquid fuel"
    },
    {
        "year": "1856",
        "value": 76,
        "category": "Solid fuel"
    },
    {
        "year": "1856",
        "value": 0,
        "category": "Gas fuel"
    },
    {
        "year": "1856",
        "value": 0,
        "category": "Cement production"
    },
    {
        "year": "1856",
        "value": 0,
        "category": "Gas flarinl"
    },
    {
        "year": "1857",
        "value": 0,
        "category": "Liquid fuel"
    },
    {
        "year": "1857",
        "value": 77,
        "category": "Solid fuel"
    },
    {
        "year": "1857",
        "value": 0,
        "category": "Gas fuel"
    },
    {
        "year": "1857",
        "value": 0,
        "category": "Cement production"
    },
    {
        "year": "1857",
        "value": 0,
        "category": "Gas flarinl"
    },
    {
        "year": "1858",
        "value": 0,
        "category": "Liquid fuel"
    },
    {
        "year": "1858",
        "value": 78,
        "category": "Solid fuel"
    },
    {
        "year": "1858",
        "value": 0,
        "category": "Gas fuel"
    },
    {
        "year": "1858",
        "value": 0,
        "category": "Cement production"
    },
    {
        "year": "1858",
        "value": 0,
        "category": "Gas flarinl"
    },
    {
        "year": "1859",
        "value": 0,
        "category": "Liquid fuel"
    },
    {
        "year": "1859",
        "value": 83,
        "category": "Solid fuel"
    },
    {
        "year": "1859",
        "value": 0,
        "category": "Gas fuel"
    },
    {
        "year": "1859",
        "value": 0,
        "category": "Cement production"
    },
    {
        "year": "1859",
        "value": 0,
        "category": "Gas flarinl"
    },
    {
        "year": "1860",
        "value": 0,
        "category": "Liquid fuel"
    },
    {
        "year": "1860",
        "value": 91,
        "category": "Solid fuel"
    },
    {
        "year": "1860",
        "value": 0,
        "category": "Gas fuel"
    },
    {
        "year": "1860",
        "value": 0,
        "category": "Cement production"
    },
    {
        "year": "1860",
        "value": 0,
        "category": "Gas flarinl"
    },
    {
        "year": "1861",
        "value": 0,
        "category": "Liquid fuel"
    },
    {
        "year": "1861",
        "value": 95,
        "category": "Solid fuel"
    },
    {
        "year": "1861",
        "value": 0,
        "category": "Gas fuel"
    },
    {
        "year": "1861",
        "value": 0,
        "category": "Cement production"
    },
    {
        "year": "1861",
        "value": 0,
        "category": "Gas flarinl"
    },
    {
        "year": "1862",
        "value": 0,
        "category": "Liquid fuel"
    },
    {
        "year": "1862",
        "value": 96,
        "category": "Solid fuel"
    },
    {
        "year": "1862",
        "value": 0,
        "category": "Gas fuel"
    },
    {
        "year": "1862",
        "value": 0,
        "category": "Cement production"
    },
    {
        "year": "1862",
        "value": 0,
        "category": "Gas flarinl"
    },
    {
        "year": "1863",
        "value": 0,
        "category": "Liquid fuel"
    },
    {
        "year": "1863",
        "value": 103,
        "category": "Solid fuel"
    },
    {
        "year": "1863",
        "value": 0,
        "category": "Gas fuel"
    },
    {
        "year": "1863",
        "value": 0,
        "category": "Cement production"
    },
    {
        "year": "1863",
        "value": 0,
        "category": "Gas flarinl"
    },
    {
        "year": "1864",
        "value": 0,
        "category": "Liquid fuel"
    },
    {
        "year": "1864",
        "value": 112,
        "category": "Solid fuel"
    },
    {
        "year": "1864",
        "value": 0,
        "category": "Gas fuel"
    },
    {
        "year": "1864",
        "value": 0,
        "category": "Cement production"
    },
    {
        "year": "1864",
        "value": 0,
        "category": "Gas flarinl"
    },
    {
        "year": "1865",
        "value": 0,
        "category": "Liquid fuel"
    },
    {
        "year": "1865",
        "value": 119,
        "category": "Solid fuel"
    },
    {
        "year": "1865",
        "value": 0,
        "category": "Gas fuel"
    },
    {
        "year": "1865",
        "value": 0,
        "category": "Cement production"
    },
    {
        "year": "1865",
        "value": 0,
        "category": "Gas flarinl"
    },
    {
        "year": "1866",
        "value": 0,
        "category": "Liquid fuel"
    },
    {
        "year": "1866",
        "value": 122,
        "category": "Solid fuel"
    },
    {
        "year": "1866",
        "value": 0,
        "category": "Gas fuel"
    },
    {
        "year": "1866",
        "value": 0,
        "category": "Cement production"
    },
    {
        "year": "1866",
        "value": 0,
        "category": "Gas flarinl"
    },
    {
        "year": "1867",
        "value": 0,
        "category": "Liquid fuel"
    },
    {
        "year": "1867",
        "value": 130,
        "category": "Solid fuel"
    },
    {
        "year": "1867",
        "value": 0,
        "category": "Gas fuel"
    },
    {
        "year": "1867",
        "value": 0,
        "category": "Cement production"
    },
    {
        "year": "1867",
        "value": 0,
        "category": "Gas flarinl"
    },
    {
        "year": "1868",
        "value": 0,
        "category": "Liquid fuel"
    },
    {
        "year": "1868",
        "value": 134,
        "category": "Solid fuel"
    },
    {
        "year": "1868",
        "value": 0,
        "category": "Gas fuel"
    },
    {
        "year": "1868",
        "value": 0,
        "category": "Cement production"
    },
    {
        "year": "1868",
        "value": 0,
        "category": "Gas flarinl"
    },
    {
        "year": "1869",
        "value": 0,
        "category": "Liquid fuel"
    },
    {
        "year": "1869",
        "value": 142,
        "category": "Solid fuel"
    },
    {
        "year": "1869",
        "value": 0,
        "category": "Gas fuel"
    },
    {
        "year": "1869",
        "value": 0,
        "category": "Cement production"
    },
    {
        "year": "1869",
        "value": 0,
        "category": "Gas flarinl"
    },
    {
        "year": "1870",
        "value": 1,
        "category": "Liquid fuel"
    },
    {
        "year": "1870",
        "value": 146,
        "category": "Solid fuel"
    },
    {
        "year": "1870",
        "value": 0,
        "category": "Gas fuel"
    },
    {
        "year": "1870",
        "value": 0,
        "category": "Cement production"
    },
    {
        "year": "1870",
        "value": 0,
        "category": "Gas flarinl"
    },
    {
        "year": "1871",
        "value": 1,
        "category": "Liquid fuel"
    },
    {
        "year": "1871",
        "value": 156,
        "category": "Solid fuel"
    },
    {
        "year": "1871",
        "value": 0,
        "category": "Gas fuel"
    },
    {
        "year": "1871",
        "value": 0,
        "category": "Cement production"
    },
    {
        "year": "1871",
        "value": 0,
        "category": "Gas flarinl"
    },
    {
        "year": "1872",
        "value": 1,
        "category": "Liquid fuel"
    },
    {
        "year": "1872",
        "value": 173,
        "category": "Solid fuel"
    },
    {
        "year": "1872",
        "value": 0,
        "category": "Gas fuel"
    },
    {
        "year": "1872",
        "value": 0,
        "category": "Cement production"
    },
    {
        "year": "1872",
        "value": 0,
        "category": "Gas flarinl"
    },
    {
        "year": "1873",
        "value": 1,
        "category": "Liquid fuel"
    },
    {
        "year": "1873",
        "value": 183,
        "category": "Solid fuel"
    },
    {
        "year": "1873",
        "value": 0,
        "category": "Gas fuel"
    },
    {
        "year": "1873",
        "value": 0,
        "category": "Cement production"
    },
    {
        "year": "1873",
        "value": 0,
        "category": "Gas flarinl"
    },
    {
        "year": "1874",
        "value": 1,
        "category": "Liquid fuel"
    },
    {
        "year": "1874",
        "value": 173,
        "category": "Solid fuel"
    },
    {
        "year": "1874",
        "value": 0,
        "category": "Gas fuel"
    },
    {
        "year": "1874",
        "value": 0,
        "category": "Cement production"
    },
    {
        "year": "1874",
        "value": 0,
        "category": "Gas flarinl"
    },
    {
        "year": "1875",
        "value": 1,
        "category": "Liquid fuel"
    },
    {
        "year": "1875",
        "value": 187,
        "category": "Solid fuel"
    },
    {
        "year": "1875",
        "value": 0,
        "category": "Gas fuel"
    },
    {
        "year": "1875",
        "value": 0,
        "category": "Cement production"
    },
    {
        "year": "1875",
        "value": 0,
        "category": "Gas flarinl"
    },
    {
        "year": "1876",
        "value": 1,
        "category": "Liquid fuel"
    },
    {
        "year": "1876",
        "value": 190,
        "category": "Solid fuel"
    },
    {
        "year": "1876",
        "value": 0,
        "category": "Gas fuel"
    },
    {
        "year": "1876",
        "value": 0,
        "category": "Cement production"
    },
    {
        "year": "1876",
        "value": 0,
        "category": "Gas flarinl"
    },
    {
        "year": "1877",
        "value": 2,
        "category": "Liquid fuel"
    },
    {
        "year": "1877",
        "value": 192,
        "category": "Solid fuel"
    },
    {
        "year": "1877",
        "value": 0,
        "category": "Gas fuel"
    },
    {
        "year": "1877",
        "value": 0,
        "category": "Cement production"
    },
    {
        "year": "1877",
        "value": 0,
        "category": "Gas flarinl"
    },
    {
        "year": "1878",
        "value": 2,
        "category": "Liquid fuel"
    },
    {
        "year": "1878",
        "value": 194,
        "category": "Solid fuel"
    },
    {
        "year": "1878",
        "value": 0,
        "category": "Gas fuel"
    },
    {
        "year": "1878",
        "value": 0,
        "category": "Cement production"
    },
    {
        "year": "1878",
        "value": 0,
        "category": "Gas flarinl"
    },
    {
        "year": "1879",
        "value": 3,
        "category": "Liquid fuel"
    },
    {
        "year": "1879",
        "value": 207,
        "category": "Solid fuel"
    },
    {
        "year": "1879",
        "value": 0,
        "category": "Gas fuel"
    },
    {
        "year": "1879",
        "value": 0,
        "category": "Cement production"
    },
    {
        "year": "1879",
        "value": 0,
        "category": "Gas flarinl"
    },
    {
        "year": "1880",
        "value": 3,
        "category": "Liquid fuel"
    },
    {
        "year": "1880",
        "value": 233,
        "category": "Solid fuel"
    },
    {
        "year": "1880",
        "value": 0,
        "category": "Gas fuel"
    },
    {
        "year": "1880",
        "value": 0,
        "category": "Cement production"
    },
    {
        "year": "1880",
        "value": 0,
        "category": "Gas flarinl"
    },
    {
        "year": "1881",
        "value": 4,
        "category": "Liquid fuel"
    },
    {
        "year": "1881",
        "value": 239,
        "category": "Solid fuel"
    },
    {
        "year": "1881",
        "value": 0,
        "category": "Gas fuel"
    },
    {
        "year": "1881",
        "value": 0,
        "category": "Cement production"
    },
    {
        "year": "1881",
        "value": 0,
        "category": "Gas flarinl"
    },
    {
        "year": "1882",
        "value": 4,
        "category": "Liquid fuel"
    },
    {
        "year": "1882",
        "value": 252,
        "category": "Solid fuel"
    },
    {
        "year": "1882",
        "value": 0,
        "category": "Gas fuel"
    },
    {
        "year": "1882",
        "value": 0,
        "category": "Cement production"
    },
    {
        "year": "1882",
        "value": 0,
        "category": "Gas flarinl"
    },
    {
        "year": "1883",
        "value": 3,
        "category": "Liquid fuel"
    },
    {
        "year": "1883",
        "value": 269,
        "category": "Solid fuel"
    },
    {
        "year": "1883",
        "value": 0,
        "category": "Gas fuel"
    },
    {
        "year": "1883",
        "value": 0,
        "category": "Cement production"
    },
    {
        "year": "1883",
        "value": 0,
        "category": "Gas flarinl"
    },
    {
        "year": "1884",
        "value": 4,
        "category": "Liquid fuel"
    },
    {
        "year": "1884",
        "value": 271,
        "category": "Solid fuel"
    },
    {
        "year": "1884",
        "value": 0,
        "category": "Gas fuel"
    },
    {
        "year": "1884",
        "value": 0,
        "category": "Cement production"
    },
    {
        "year": "1884",
        "value": 0,
        "category": "Gas flarinl"
    },
    {
        "year": "1885",
        "value": 4,
        "category": "Liquid fuel"
    },
    {
        "year": "1885",
        "value": 273,
        "category": "Solid fuel"
    },
    {
        "year": "1885",
        "value": 1,
        "category": "Gas fuel"
    },
    {
        "year": "1885",
        "value": 0,
        "category": "Cement production"
    },
    {
        "year": "1885",
        "value": 0,
        "category": "Gas flarinl"
    },
    {
        "year": "1886",
        "value": 5,
        "category": "Liquid fuel"
    },
    {
        "year": "1886",
        "value": 275,
        "category": "Solid fuel"
    },
    {
        "year": "1886",
        "value": 2,
        "category": "Gas fuel"
    },
    {
        "year": "1886",
        "value": 0,
        "category": "Cement production"
    },
    {
        "year": "1886",
        "value": 0,
        "category": "Gas flarinl"
    },
    {
        "year": "1887",
        "value": 5,
        "category": "Liquid fuel"
    },
    {
        "year": "1887",
        "value": 287,
        "category": "Solid fuel"
    },
    {
        "year": "1887",
        "value": 3,
        "category": "Gas fuel"
    },
    {
        "year": "1887",
        "value": 0,
        "category": "Cement production"
    },
    {
        "year": "1887",
        "value": 0,
        "category": "Gas flarinl"
    },
    {
        "year": "1888",
        "value": 5,
        "category": "Liquid fuel"
    },
    {
        "year": "1888",
        "value": 317,
        "category": "Solid fuel"
    },
    {
        "year": "1888",
        "value": 5,
        "category": "Gas fuel"
    },
    {
        "year": "1888",
        "value": 0,
        "category": "Cement production"
    },
    {
        "year": "1888",
        "value": 0,
        "category": "Gas flarinl"
    },
    {
        "year": "1889",
        "value": 6,
        "category": "Liquid fuel"
    },
    {
        "year": "1889",
        "value": 318,
        "category": "Solid fuel"
    },
    {
        "year": "1889",
        "value": 3,
        "category": "Gas fuel"
    },
    {
        "year": "1889",
        "value": 0,
        "category": "Cement production"
    },
    {
        "year": "1889",
        "value": 0,
        "category": "Gas flarinl"
    },
    {
        "year": "1890",
        "value": 8,
        "category": "Liquid fuel"
    },
    {
        "year": "1890",
        "value": 345,
        "category": "Solid fuel"
    },
    {
        "year": "1890",
        "value": 3,
        "category": "Gas fuel"
    },
    {
        "year": "1890",
        "value": 0,
        "category": "Cement production"
    },
    {
        "year": "1890",
        "value": 0,
        "category": "Gas flarinl"
    },
    {
        "year": "1891",
        "value": 9,
        "category": "Liquid fuel"
    },
    {
        "year": "1891",
        "value": 360,
        "category": "Solid fuel"
    },
    {
        "year": "1891",
        "value": 2,
        "category": "Gas fuel"
    },
    {
        "year": "1891",
        "value": 0,
        "category": "Cement production"
    },
    {
        "year": "1891",
        "value": 0,
        "category": "Gas flarinl"
    },
    {
        "year": "1892",
        "value": 9,
        "category": "Liquid fuel"
    },
    {
        "year": "1892",
        "value": 363,
        "category": "Solid fuel"
    },
    {
        "year": "1892",
        "value": 2,
        "category": "Gas fuel"
    },
    {
        "year": "1892",
        "value": 0,
        "category": "Cement production"
    },
    {
        "year": "1892",
        "value": 0,
        "category": "Gas flarinl"
    },
    {
        "year": "1893",
        "value": 10,
        "category": "Liquid fuel"
    },
    {
        "year": "1893",
        "value": 358,
        "category": "Solid fuel"
    },
    {
        "year": "1893",
        "value": 2,
        "category": "Gas fuel"
    },
    {
        "year": "1893",
        "value": 0,
        "category": "Cement production"
    },
    {
        "year": "1893",
        "value": 0,
        "category": "Gas flarinl"
    },
    {
        "year": "1894",
        "value": 9,
        "category": "Liquid fuel"
    },
    {
        "year": "1894",
        "value": 372,
        "category": "Solid fuel"
    },
    {
        "year": "1894",
        "value": 2,
        "category": "Gas fuel"
    },
    {
        "year": "1894",
        "value": 0,
        "category": "Cement production"
    },
    {
        "year": "1894",
        "value": 0,
        "category": "Gas flarinl"
    },
    {
        "year": "1895",
        "value": 11,
        "category": "Liquid fuel"
    },
    {
        "year": "1895",
        "value": 393,
        "category": "Solid fuel"
    },
    {
        "year": "1895",
        "value": 2,
        "category": "Gas fuel"
    },
    {
        "year": "1895",
        "value": 0,
        "category": "Cement production"
    },
    {
        "year": "1895",
        "value": 0,
        "category": "Gas flarinl"
    },
    {
        "year": "1896",
        "value": 12,
        "category": "Liquid fuel"
    },
    {
        "year": "1896",
        "value": 405,
        "category": "Solid fuel"
    },
    {
        "year": "1896",
        "value": 2,
        "category": "Gas fuel"
    },
    {
        "year": "1896",
        "value": 0,
        "category": "Cement production"
    },
    {
        "year": "1896",
        "value": 0,
        "category": "Gas flarinl"
    },
    {
        "year": "1897",
        "value": 13,
        "category": "Liquid fuel"
    },
    {
        "year": "1897",
        "value": 425,
        "category": "Solid fuel"
    },
    {
        "year": "1897",
        "value": 2,
        "category": "Gas fuel"
    },
    {
        "year": "1897",
        "value": 0,
        "category": "Cement production"
    },
    {
        "year": "1897",
        "value": 0,
        "category": "Gas flarinl"
    },
    {
        "year": "1898",
        "value": 13,
        "category": "Liquid fuel"
    },
    {
        "year": "1898",
        "value": 449,
        "category": "Solid fuel"
    },
    {
        "year": "1898",
        "value": 2,
        "category": "Gas fuel"
    },
    {
        "year": "1898",
        "value": 0,
        "category": "Cement production"
    },
    {
        "year": "1898",
        "value": 0,
        "category": "Gas flarinl"
    },
    {
        "year": "1899",
        "value": 14,
        "category": "Liquid fuel"
    },
    {
        "year": "1899",
        "value": 491,
        "category": "Solid fuel"
    },
    {
        "year": "1899",
        "value": 3,
        "category": "Gas fuel"
    },
    {
        "year": "1899",
        "value": 0,
        "category": "Cement production"
    },
    {
        "year": "1899",
        "value": 0,
        "category": "Gas flarinl"
    },
    {
        "year": "1900",
        "value": 16,
        "category": "Liquid fuel"
    },
    {
        "year": "1900",
        "value": 515,
        "category": "Solid fuel"
    },
    {
        "year": "1900",
        "value": 3,
        "category": "Gas fuel"
    },
    {
        "year": "1900",
        "value": 0,
        "category": "Cement production"
    },
    {
        "year": "1900",
        "value": 0,
        "category": "Gas flarinl"
    },
    {
        "year": "1901",
        "value": 18,
        "category": "Liquid fuel"
    },
    {
        "year": "1901",
        "value": 531,
        "category": "Solid fuel"
    },
    {
        "year": "1901",
        "value": 4,
        "category": "Gas fuel"
    },
    {
        "year": "1901",
        "value": 0,
        "category": "Cement production"
    },
    {
        "year": "1901",
        "value": 0,
        "category": "Gas flarinl"
    },
    {
        "year": "1902",
        "value": 19,
        "category": "Liquid fuel"
    },
    {
        "year": "1902",
        "value": 543,
        "category": "Solid fuel"
    },
    {
        "year": "1902",
        "value": 4,
        "category": "Gas fuel"
    },
    {
        "year": "1902",
        "value": 0,
        "category": "Cement production"
    },
    {
        "year": "1902",
        "value": 0,
        "category": "Gas flarinl"
    },
    {
        "year": "1903",
        "value": 20,
        "category": "Liquid fuel"
    },
    {
        "year": "1903",
        "value": 593,
        "category": "Solid fuel"
    },
    {
        "year": "1903",
        "value": 4,
        "category": "Gas fuel"
    },
    {
        "year": "1903",
        "value": 0,
        "category": "Cement production"
    },
    {
        "year": "1903",
        "value": 0,
        "category": "Gas flarinl"
    },
    {
        "year": "1904",
        "value": 23,
        "category": "Liquid fuel"
    },
    {
        "year": "1904",
        "value": 597,
        "category": "Solid fuel"
    },
    {
        "year": "1904",
        "value": 4,
        "category": "Gas fuel"
    },
    {
        "year": "1904",
        "value": 0,
        "category": "Cement production"
    },
    {
        "year": "1904",
        "value": 0,
        "category": "Gas flarinl"
    },
    {
        "year": "1905",
        "value": 23,
        "category": "Liquid fuel"
    },
    {
        "year": "1905",
        "value": 636,
        "category": "Solid fuel"
    },
    {
        "year": "1905",
        "value": 5,
        "category": "Gas fuel"
    },
    {
        "year": "1905",
        "value": 0,
        "category": "Cement production"
    },
    {
        "year": "1905",
        "value": 0,
        "category": "Gas flarinl"
    },
    {
        "year": "1906",
        "value": 23,
        "category": "Liquid fuel"
    },
    {
        "year": "1906",
        "value": 680,
        "category": "Solid fuel"
    },
    {
        "year": "1906",
        "value": 5,
        "category": "Gas fuel"
    },
    {
        "year": "1906",
        "value": 0,
        "category": "Cement production"
    },
    {
        "year": "1906",
        "value": 0,
        "category": "Gas flarinl"
    },
    {
        "year": "1907",
        "value": 28,
        "category": "Liquid fuel"
    },
    {
        "year": "1907",
        "value": 750,
        "category": "Solid fuel"
    },
    {
        "year": "1907",
        "value": 5,
        "category": "Gas fuel"
    },
    {
        "year": "1907",
        "value": 0,
        "category": "Cement production"
    },
    {
        "year": "1907",
        "value": 0,
        "category": "Gas flarinl"
    },
    {
        "year": "1908",
        "value": 30,
        "category": "Liquid fuel"
    },
    {
        "year": "1908",
        "value": 714,
        "category": "Solid fuel"
    },
    {
        "year": "1908",
        "value": 5,
        "category": "Gas fuel"
    },
    {
        "year": "1908",
        "value": 0,
        "category": "Cement production"
    },
    {
        "year": "1908",
        "value": 0,
        "category": "Gas flarinl"
    },
    {
        "year": "1909",
        "value": 32,
        "category": "Liquid fuel"
    },
    {
        "year": "1909",
        "value": 747,
        "category": "Solid fuel"
    },
    {
        "year": "1909",
        "value": 6,
        "category": "Gas fuel"
    },
    {
        "year": "1909",
        "value": 0,
        "category": "Cement production"
    },
    {
        "year": "1909",
        "value": 0,
        "category": "Gas flarinl"
    },
    {
        "year": "1910",
        "value": 34,
        "category": "Liquid fuel"
    },
    {
        "year": "1910",
        "value": 778,
        "category": "Solid fuel"
    },
    {
        "year": "1910",
        "value": 7,
        "category": "Gas fuel"
    },
    {
        "year": "1910",
        "value": 0,
        "category": "Cement production"
    },
    {
        "year": "1910",
        "value": 0,
        "category": "Gas flarinl"
    },
    {
        "year": "1911",
        "value": 36,
        "category": "Liquid fuel"
    },
    {
        "year": "1911",
        "value": 792,
        "category": "Solid fuel"
    },
    {
        "year": "1911",
        "value": 7,
        "category": "Gas fuel"
    },
    {
        "year": "1911",
        "value": 0,
        "category": "Cement production"
    },
    {
        "year": "1911",
        "value": 0,
        "category": "Gas flarinl"
    },
    {
        "year": "1912",
        "value": 37,
        "category": "Liquid fuel"
    },
    {
        "year": "1912",
        "value": 834,
        "category": "Solid fuel"
    },
    {
        "year": "1912",
        "value": 8,
        "category": "Gas fuel"
    },
    {
        "year": "1912",
        "value": 0,
        "category": "Cement production"
    },
    {
        "year": "1912",
        "value": 0,
        "category": "Gas flarinl"
    },
    {
        "year": "1913",
        "value": 41,
        "category": "Liquid fuel"
    },
    {
        "year": "1913",
        "value": 895,
        "category": "Solid fuel"
    },
    {
        "year": "1913",
        "value": 8,
        "category": "Gas fuel"
    },
    {
        "year": "1913",
        "value": 0,
        "category": "Cement production"
    },
    {
        "year": "1913",
        "value": 0,
        "category": "Gas flarinl"
    },
    {
        "year": "1914",
        "value": 42,
        "category": "Liquid fuel"
    },
    {
        "year": "1914",
        "value": 800,
        "category": "Solid fuel"
    },
    {
        "year": "1914",
        "value": 8,
        "category": "Gas fuel"
    },
    {
        "year": "1914",
        "value": 0,
        "category": "Cement production"
    },
    {
        "year": "1914",
        "value": 0,
        "category": "Gas flarinl"
    },
    {
        "year": "1915",
        "value": 45,
        "category": "Liquid fuel"
    },
    {
        "year": "1915",
        "value": 784,
        "category": "Solid fuel"
    },
    {
        "year": "1915",
        "value": 9,
        "category": "Gas fuel"
    },
    {
        "year": "1915",
        "value": 0,
        "category": "Cement production"
    },
    {
        "year": "1915",
        "value": 0,
        "category": "Gas flarinl"
    },
    {
        "year": "1916",
        "value": 48,
        "category": "Liquid fuel"
    },
    {
        "year": "1916",
        "value": 842,
        "category": "Solid fuel"
    },
    {
        "year": "1916",
        "value": 10,
        "category": "Gas fuel"
    },
    {
        "year": "1916",
        "value": 0,
        "category": "Cement production"
    },
    {
        "year": "1916",
        "value": 0,
        "category": "Gas flarinl"
    },
    {
        "year": "1917",
        "value": 54,
        "category": "Liquid fuel"
    },
    {
        "year": "1917",
        "value": 891,
        "category": "Solid fuel"
    },
    {
        "year": "1917",
        "value": 11,
        "category": "Gas fuel"
    },
    {
        "year": "1917",
        "value": 0,
        "category": "Cement production"
    },
    {
        "year": "1917",
        "value": 0,
        "category": "Gas flarinl"
    },
    {
        "year": "1918",
        "value": 53,
        "category": "Liquid fuel"
    },
    {
        "year": "1918",
        "value": 873,
        "category": "Solid fuel"
    },
    {
        "year": "1918",
        "value": 10,
        "category": "Gas fuel"
    },
    {
        "year": "1918",
        "value": 0,
        "category": "Cement production"
    },
    {
        "year": "1918",
        "value": 0,
        "category": "Gas flarinl"
    },
    {
        "year": "1919",
        "value": 61,
        "category": "Liquid fuel"
    },
    {
        "year": "1919",
        "value": 735,
        "category": "Solid fuel"
    },
    {
        "year": "1919",
        "value": 10,
        "category": "Gas fuel"
    },
    {
        "year": "1919",
        "value": 0,
        "category": "Cement production"
    },
    {
        "year": "1919",
        "value": 0,
        "category": "Gas flarinl"
    },
    {
        "year": "1920",
        "value": 78,
        "category": "Liquid fuel"
    },
    {
        "year": "1920",
        "value": 843,
        "category": "Solid fuel"
    },
    {
        "year": "1920",
        "value": 11,
        "category": "Gas fuel"
    },
    {
        "year": "1920",
        "value": 0,
        "category": "Cement production"
    },
    {
        "year": "1920",
        "value": 0,
        "category": "Gas flarinl"
    },
    {
        "year": "1921",
        "value": 84,
        "category": "Liquid fuel"
    },
    {
        "year": "1921",
        "value": 709,
        "category": "Solid fuel"
    },
    {
        "year": "1921",
        "value": 10,
        "category": "Gas fuel"
    },
    {
        "year": "1921",
        "value": 0,
        "category": "Cement production"
    },
    {
        "year": "1921",
        "value": 0,
        "category": "Gas flarinl"
    },
    {
        "year": "1922",
        "value": 94,
        "category": "Liquid fuel"
    },
    {
        "year": "1922",
        "value": 740,
        "category": "Solid fuel"
    },
    {
        "year": "1922",
        "value": 11,
        "category": "Gas fuel"
    },
    {
        "year": "1922",
        "value": 0,
        "category": "Cement production"
    },
    {
        "year": "1922",
        "value": 0,
        "category": "Gas flarinl"
    },
    {
        "year": "1923",
        "value": 111,
        "category": "Liquid fuel"
    },
    {
        "year": "1923",
        "value": 845,
        "category": "Solid fuel"
    },
    {
        "year": "1923",
        "value": 14,
        "category": "Gas fuel"
    },
    {
        "year": "1923",
        "value": 0,
        "category": "Cement production"
    },
    {
        "year": "1923",
        "value": 0,
        "category": "Gas flarinl"
    },
    {
        "year": "1924",
        "value": 110,
        "category": "Liquid fuel"
    },
    {
        "year": "1924",
        "value": 836,
        "category": "Solid fuel"
    },
    {
        "year": "1924",
        "value": 16,
        "category": "Gas fuel"
    },
    {
        "year": "1924",
        "value": 0,
        "category": "Cement production"
    },
    {
        "year": "1924",
        "value": 0,
        "category": "Gas flarinl"
    },
    {
        "year": "1925",
        "value": 116,
        "category": "Liquid fuel"
    },
    {
        "year": "1925",
        "value": 842,
        "category": "Solid fuel"
    },
    {
        "year": "1925",
        "value": 17,
        "category": "Gas fuel"
    },
    {
        "year": "1925",
        "value": 0,
        "category": "Cement production"
    },
    {
        "year": "1925",
        "value": 0,
        "category": "Gas flarinl"
    },
    {
        "year": "1926",
        "value": 119,
        "category": "Liquid fuel"
    },
    {
        "year": "1926",
        "value": 846,
        "category": "Solid fuel"
    },
    {
        "year": "1926",
        "value": 19,
        "category": "Gas fuel"
    },
    {
        "year": "1926",
        "value": 0,
        "category": "Cement production"
    },
    {
        "year": "1926",
        "value": 0,
        "category": "Gas flarinl"
    },
    {
        "year": "1927",
        "value": 136,
        "category": "Liquid fuel"
    },
    {
        "year": "1927",
        "value": 905,
        "category": "Solid fuel"
    },
    {
        "year": "1927",
        "value": 21,
        "category": "Gas fuel"
    },
    {
        "year": "1927",
        "value": 0,
        "category": "Cement production"
    },
    {
        "year": "1927",
        "value": 0,
        "category": "Gas flarinl"
    },
    {
        "year": "1928",
        "value": 143,
        "category": "Liquid fuel"
    },
    {
        "year": "1928",
        "value": 890,
        "category": "Solid fuel"
    },
    {
        "year": "1928",
        "value": 23,
        "category": "Gas fuel"
    },
    {
        "year": "1928",
        "value": 10,
        "category": "Cement production"
    },
    {
        "year": "1928",
        "value": 0,
        "category": "Gas flarinl"
    },
    {
        "year": "1929",
        "value": 160,
        "category": "Liquid fuel"
    },
    {
        "year": "1929",
        "value": 947,
        "category": "Solid fuel"
    },
    {
        "year": "1929",
        "value": 28,
        "category": "Gas fuel"
    },
    {
        "year": "1929",
        "value": 10,
        "category": "Cement production"
    },
    {
        "year": "1929",
        "value": 0,
        "category": "Gas flarinl"
    },
    {
        "year": "1930",
        "value": 152,
        "category": "Liquid fuel"
    },
    {
        "year": "1930",
        "value": 862,
        "category": "Solid fuel"
    },
    {
        "year": "1930",
        "value": 28,
        "category": "Gas fuel"
    },
    {
        "year": "1930",
        "value": 10,
        "category": "Cement production"
    },
    {
        "year": "1930",
        "value": 0,
        "category": "Gas flarinl"
    },
    {
        "year": "1931",
        "value": 147,
        "category": "Liquid fuel"
    },
    {
        "year": "1931",
        "value": 759,
        "category": "Solid fuel"
    },
    {
        "year": "1931",
        "value": 25,
        "category": "Gas fuel"
    },
    {
        "year": "1931",
        "value": 8,
        "category": "Cement production"
    },
    {
        "year": "1931",
        "value": 0,
        "category": "Gas flarinl"
    },
    {
        "year": "1932",
        "value": 141,
        "category": "Liquid fuel"
    },
    {
        "year": "1932",
        "value": 675,
        "category": "Solid fuel"
    },
    {
        "year": "1932",
        "value": 24,
        "category": "Gas fuel"
    },
    {
        "year": "1932",
        "value": 7,
        "category": "Cement production"
    },
    {
        "year": "1932",
        "value": 0,
        "category": "Gas flarinl"
    },
    {
        "year": "1933",
        "value": 154,
        "category": "Liquid fuel"
    },
    {
        "year": "1933",
        "value": 708,
        "category": "Solid fuel"
    },
    {
        "year": "1933",
        "value": 25,
        "category": "Gas fuel"
    },
    {
        "year": "1933",
        "value": 7,
        "category": "Cement production"
    },
    {
        "year": "1933",
        "value": 0,
        "category": "Gas flarinl"
    },
    {
        "year": "1934",
        "value": 162,
        "category": "Liquid fuel"
    },
    {
        "year": "1934",
        "value": 775,
        "category": "Solid fuel"
    },
    {
        "year": "1934",
        "value": 28,
        "category": "Gas fuel"
    },
    {
        "year": "1934",
        "value": 8,
        "category": "Cement production"
    },
    {
        "year": "1934",
        "value": 0,
        "category": "Gas flarinl"
    },
    {
        "year": "1935",
        "value": 176,
        "category": "Liquid fuel"
    },
    {
        "year": "1935",
        "value": 811,
        "category": "Solid fuel"
    },
    {
        "year": "1935",
        "value": 30,
        "category": "Gas fuel"
    },
    {
        "year": "1935",
        "value": 9,
        "category": "Cement production"
    },
    {
        "year": "1935",
        "value": 0,
        "category": "Gas flarinl"
    },
    {
        "year": "1936",
        "value": 192,
        "category": "Liquid fuel"
    },
    {
        "year": "1936",
        "value": 893,
        "category": "Solid fuel"
    },
    {
        "year": "1936",
        "value": 34,
        "category": "Gas fuel"
    },
    {
        "year": "1936",
        "value": 11,
        "category": "Cement production"
    },
    {
        "year": "1936",
        "value": 0,
        "category": "Gas flarinl"
    },
    {
        "year": "1937",
        "value": 219,
        "category": "Liquid fuel"
    },
    {
        "year": "1937",
        "value": 941,
        "category": "Solid fuel"
    },
    {
        "year": "1937",
        "value": 38,
        "category": "Gas fuel"
    },
    {
        "year": "1937",
        "value": 11,
        "category": "Cement production"
    },
    {
        "year": "1937",
        "value": 0,
        "category": "Gas flarinl"
    },
    {
        "year": "1938",
        "value": 214,
        "category": "Liquid fuel"
    },
    {
        "year": "1938",
        "value": 880,
        "category": "Solid fuel"
    },
    {
        "year": "1938",
        "value": 37,
        "category": "Gas fuel"
    },
    {
        "year": "1938",
        "value": 12,
        "category": "Cement production"
    },
    {
        "year": "1938",
        "value": 0,
        "category": "Gas flarinl"
    },
    {
        "year": "1939",
        "value": 222,
        "category": "Liquid fuel"
    },
    {
        "year": "1939",
        "value": 918,
        "category": "Solid fuel"
    },
    {
        "year": "1939",
        "value": 38,
        "category": "Gas fuel"
    },
    {
        "year": "1939",
        "value": 13,
        "category": "Cement production"
    },
    {
        "year": "1939",
        "value": 0,
        "category": "Gas flarinl"
    },
    {
        "year": "1940",
        "value": 229,
        "category": "Liquid fuel"
    },
    {
        "year": "1940",
        "value": 1017,
        "category": "Solid fuel"
    },
    {
        "year": "1940",
        "value": 42,
        "category": "Gas fuel"
    },
    {
        "year": "1940",
        "value": 11,
        "category": "Cement production"
    },
    {
        "year": "1940",
        "value": 0,
        "category": "Gas flarinl"
    },
    {
        "year": "1941",
        "value": 236,
        "category": "Liquid fuel"
    },
    {
        "year": "1941",
        "value": 1043,
        "category": "Solid fuel"
    },
    {
        "year": "1941",
        "value": 42,
        "category": "Gas fuel"
    },
    {
        "year": "1941",
        "value": 12,
        "category": "Cement production"
    },
    {
        "year": "1941",
        "value": 0,
        "category": "Gas flarinl"
    },
    {
        "year": "1942",
        "value": 222,
        "category": "Liquid fuel"
    },
    {
        "year": "1942",
        "value": 1063,
        "category": "Solid fuel"
    },
    {
        "year": "1942",
        "value": 45,
        "category": "Gas fuel"
    },
    {
        "year": "1942",
        "value": 11,
        "category": "Cement production"
    },
    {
        "year": "1942",
        "value": 0,
        "category": "Gas flarinl"
    },
    {
        "year": "1943",
        "value": 239,
        "category": "Liquid fuel"
    },
    {
        "year": "1943",
        "value": 1092,
        "category": "Solid fuel"
    },
    {
        "year": "1943",
        "value": 50,
        "category": "Gas fuel"
    },
    {
        "year": "1943",
        "value": 10,
        "category": "Cement production"
    },
    {
        "year": "1943",
        "value": 0,
        "category": "Gas flarinl"
    },
    {
        "year": "1944",
        "value": 275,
        "category": "Liquid fuel"
    },
    {
        "year": "1944",
        "value": 1047,
        "category": "Solid fuel"
    },
    {
        "year": "1944",
        "value": 54,
        "category": "Gas fuel"
    },
    {
        "year": "1944",
        "value": 7,
        "category": "Cement production"
    },
    {
        "year": "1944",
        "value": 0,
        "category": "Gas flarinl"
    },
    {
        "year": "1945",
        "value": 275,
        "category": "Liquid fuel"
    }
]

export const dashboardTopDeals = [
    { id: 1, name: 'Huỳnh Phú Hòa', email: 'phuhoa704@gmail.com', avatarCode: 'HP', totalDeals: 2472000, color: '#f56a00' },
    { id: 2, name: 'Nguyễn Văn A', email: 'nvana2023@gmail.com', avatarCode: 'AN', totalDeals: 2310000, color: '#7265e6' },
    { id: 3, name: 'Nguyễn Văn B', email: 'nvanb2233@gmail.com', avatarCode: 'BN', totalDeals: 2100000, color: '#ffbf00' },
    { id: 4, name: 'Nguyễn Văn C', email: 'nvanc764@gmail.com', avatarCode: 'CN', totalDeals: 1570000, color: '#00a2ae' },
    { id: 5, name: 'Nguyễn Văn D', email: 'nvand72264@gmail.com', avatarCode: 'DN', totalDeals: 1250000, color: '#f56a00' },
    { id: 6, name: 'Nguyễn Văn E', email: 'nvane03920@gmail.com', avatarCode: 'EN', totalDeals: 1020000, color: '#7265e6' },
    { id: 7, name: 'Nguyễn Văn F', email: 'nvanf032320@gmail.com', avatarCode: 'FN', totalDeals: 980000, color: '#59351F' },
    { id: 8, name: 'Nguyễn Văn G', email: 'nvang0220@gmail.com', avatarCode: 'GN', totalDeals: 915000, color: '#999950' },
    { id: 9, name: 'Nguyễn Văn H', email: 'nvanh1444@gmail.com', avatarCode: 'HN', totalDeals: 830000, color: '#9E9764' },
    { id: 10, name: 'Nguyễn Văn I', email: 'nvani6113@gmail.com', avatarCode: 'IN', totalDeals: 789000, color: '#EDFF21' },
]

export const dashboardCols = [
    {
        "city": "Cần Thơ",
        "type": "Tháng 01",
        "value": 14500
    },
    {
        "city": "Cần Thơ",
        "type": "Tháng 02",
        "value": 8500
    },
    {
        "city": "Cần Thơ",
        "type": "Tháng 03",
        "value": 10000
    },
    {
        "city": "Cần Thơ",
        "type": "Tháng 04",
        "value": 7000
    },
    {
        "city": "An Giang",
        "type": "Tháng 01",
        "value": 9000
    },
    {
        "city": "An Giang",
        "type": "Tháng 02",
        "value": 8500
    },
    {
        "city": "An Giang",
        "type": "Tháng 03",
        "value": 11000
    },
    {
        "city": "An Giang",
        "type": "Tháng 04",
        "value": 6000
    },
    {
        "city": "Bến Tre",
        "type": "Tháng 01",
        "value": 16000
    },
    {
        "city": "Bến Tre",
        "type": "Tháng 02",
        "value": 5000
    },
    {
        "city": "Bến Tre",
        "type": "Tháng 03",
        "value": 6000
    },
    {
        "city": "Bến Tre",
        "type": "Tháng 04",
        "value": 10000
    },
    {
        "city": "Vĩnh Long",
        "type": "Tháng 01",
        "value": 14000
    },
    {
        "city": "Vĩnh Long",
        "type": "Tháng 02",
        "value": 9000
    },
    {
        "city": "Vĩnh Long",
        "type": "Tháng 03",
        "value": 10000
    },
    {
        "city": "Vĩnh Long",
        "type": "Tháng 04",
        "value": 9000
    },
    {
        "city": "Đồng Tháp",
        "type": "Tháng 01",
        "value": 14000
    },
    {
        "city": "Đồng Tháp",
        "type": "Tháng 02",
        "value": 9000
    },
    {
        "city": "Đồng Tháp",
        "type": "Tháng 03",
        "value": 10000
    },
    {
        "city": "Đồng Tháp",
        "type": "Tháng 04",
        "value": 6000
    },
    {
        "city": "Hậu Giang",
        "type": "Tháng 01",
        "value": 9000
    },
    {
        "city": "Hậu Giang",
        "type": "Tháng 02",
        "value": 8500
    },
    {
        "city": "Hậu Giang",
        "type": "Tháng 03",
        "value": 10000
    },
    {
        "city": "Hậu Giang",
        "type": "Tháng 04",
        "value": 6000
    },
    {
        "city": "Kiên Giang",
        "type": "Tháng 01",
        "value": 17000
    },
    {
        "city": "Kiên Giang",
        "type": "Tháng 02",
        "value": 6000
    },
    {
        "city": "Kiên Giang",
        "type": "Tháng 03",
        "value": 7000
    },
    {
        "city": "Kiên Giang",
        "type": "Tháng 04",
        "value": 10000
    },
    {
        "city": "Cà Mau",
        "type": "Tháng 01",
        "value": 18000
    },
    {
        "city": "Cà Mau",
        "type": "Tháng 02",
        "value": 11000
    },
    {
        "city": "Cà Mau",
        "type": "Tháng 03",
        "value": 15000
    },
    {
        "city": "Cà Mau",
        "type": "Tháng 04",
        "value": 14000
    }
]

export const userHistory = [
    {
        id: 1,
        name: 'Oyo 522 Acasa Hotel',
        image: 'https://imgcy.trivago.com/c_lfill,d_dummy.jpeg,e_sharpen:60,f_auto,h_225,q_auto,w_225/itemimages/19/06/19062518.jpeg',
        type: 'Hotel',
        distance: '0.5 km to the city',
        rating: 8.1,
        comments: 32,
        price: { id: 1, name: 'Agoda', value: 150000 }
    },
    {
        id: 2,
        name: 'Thuy Trang Hotel',
        image: 'https://imgcy.trivago.com/c_lfill,d_dummy.jpeg,e_sharpen:60,f_auto,h_225,q_auto,w_225/itemimages/34/36/34365098.jpeg',
        type: 'Hotel',
        distance: '0.0 km to the city',
        rating: 7.2,
        comments: 54,
        price: { id: 1, name: 'Agoda', value: 202000 }
    },
]

export const usersManagement = [
    { id: 1, fullname: 'Nguyễn Văn A', email: 'nvana21312@gmail.com', type: 'NTCSK', phone: '093242932' },
    { id: 2, fullname: 'Nguyễn Văn B', email: 'nvanb087@gmail.com', type: 'Người dùng', phone: '093213132' },
    { id: 3, fullname: 'Nguyễn Văn C', email: 'nvanc6161@gmail.com', type: 'Người dùng', phone: '098429104' },
]

export const logManagement = [
    { id: 1, title: 'Nạp tiền vào tài khoản', user: 'Nguyễn Văn A', amount: 2000000, icon: deposit, status: 'APPROVE', createdAt: '12:44 15/08/2023' },
    { id: 2, title: 'Nạp tiền vào tài khoản', user: 'Nguyễn Văn B', amount: 150000, icon: deposit, status: 'APPROVE', createdAt: '03:22 16/08/2023' },
    { id: 3, title: 'Nạp tiền vào tài khoản', user: 'Nguyễn Văn E', amount: 200000, icon: deposit, status: 'APPROVE', createdAt: '15:52 16/08/2023' },
    { id: 4, title: 'Nạp tiền vào tài khoản', user: 'Nguyễn Văn A', amount: 1500000, icon: deposit, status: 'PENDING', createdAt: '08:22 17/08/2023' },
    { id: 5, title: 'Nạp tiền vào tài khoản', user: 'Nguyễn Văn H', amount: 10000000, icon: deposit, status: 'APPROVE', createdAt: '10:31 17/08/2023' },
    { id: 6, title: 'Nạp tiền vào tài khoản', user: 'Nguyễn Văn B', amount: 200000, icon: deposit, status: 'PENDING', createdAt: '09:29 18/08/2023' },
    { id: 7, title: 'Nạp tiền vào tài khoản', user: 'Nguyễn Văn I', amount: 100000, icon: deposit, status: 'APPROVE', createdAt: '01:03 19/08/2023' },
    { id: 8, title: 'Nạp tiền vào tài khoản', user: 'Nguyễn Văn E', amount: 50000, icon: deposit, status: 'PENDING', createdAt: '02:11 19/08/2023' },
]

export const userLogs = [
    { id: 1, title: 'Nạp tiền vào tài khoản', amount: 2000000, icon: deposit, type: 'DEPOSIT', createdAt: '12:44 15/08/2023' },
    { id: 2, title: 'Thanh toán Sự kiện 1', amount: 100000, icon: payup, type: 'PAYUP', createdAt: '12:44 15/08/2023' },
    { id: 3, title: 'Đặt cọc Sự kiện 2', amount: 1000000, icon: payup, type: 'PAYUP', createdAt: '12:44 15/08/2023' },
    { id: 4, title: 'Nạp tiền vào tài khoản', amount: 5000000, icon: deposit, type: 'DEPOSIT', createdAt: '12:44 15/08/2023' },
    { id: 5, title: 'Thanh toán Sự kiện 2', amount: 3000000, icon: payup, type: 'PAYUP', createdAt: '12:44 15/08/2023' },
]

export const types = [
    { id: 1, name: 'Spa', icon: spa },
    { id: 2, name: 'Tennis', icon: tennis },
    { id: 3, name: 'Barber', icon: barber },
    { id: 4, name: 'Restaurant', icon: restaurant },
    { id: 5, name: 'Hotel', icon: hotel },
    { id: 6, name: 'Football', icon: football },
    { id: 7, name: 'Bus', icon: station },
    { id: 8, name: 'Hospital', icon: hospital },
    { id: 9, name: 'Dentist', icon: dentist },
    { id: 10, name: 'Coffee', icon: coffeeshop },
]