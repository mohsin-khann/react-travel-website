import SpainImg from './Images/spain.jpg';
import PortugalImg from './Images/portugal.jpg';
import GreeceImg from './Images/greece.jpg';
import MaldivesImg from './Images/maldives.jpg';

let RecentHolidaysItems = [
    {
        id: 1,
        itemImage: SpainImg,
        itemTitle: 'Costa del Sol, Spain',
        itemDescription: 'Short walk to golden beaches and seaside cafés',
        itemNights: '4 nights',
        itemPrice: '£499'
    },
    {
        id: 2,
        itemImage: PortugalImg,
        itemTitle: 'Algarve, Portugal',
        itemDescription: 'Clifftop views with direct access to the beach',
        itemNights: '2 nights',
        itemPrice: '£299'
    },
    {
        id: 3,
        itemImage: GreeceImg,
        itemTitle: 'Santorini, Greece',
        itemDescription: 'Sunset views just minutes from the coastline',
        itemNights: '3 nights',
        itemPrice: '£799'
    },
    {
        id: 4,
        itemImage: MaldivesImg,
        itemTitle: 'Malé Atoll, Maldives',
        itemDescription: 'Overwater villas with private beach access',
        itemNights: '5 nights',
        itemPrice: '£1499'
    }
];

export default RecentHolidaysItems;
