// import icons
import { BsCheck, BsChevronRight } from 'react-icons/bs';

// import images
import C1 from '../src/assets/img/courses/c1.jpg';
import C2 from '../src/assets/img/courses/c2.jpg';
import C3 from '../src/assets/img/courses/c3.jpg';
import C4 from '../src/assets/img/courses/c4.jpg'

export const navigation = [
  {
    name: 'Home',
    href: '#',
  },
  {
    name: 'About Us',
    href: '#',
  },
  {
    name: 'Services',
    href: '#',
  },
  {
    name: 'Gallery',
    href: '#',
  },
  {
    name: 'FAQs',
    href: '#',
  },
  {
    name: 'Contact',
    href: '#',
  },
];

export const facts = [
  {
    startNumber: '1',
    endNumber: '5',
    unit: '',
    title: 'Years of Experience',
    desc: 'We are 5 years of experienced in this yoga field. Giving the best instructions.',
  },
  {
    startNumber: '1',
    endNumber: '5',
    unit: 'K',
    title: 'Happy Clients',
    desc: 'We have over five thousand clients all over the world. They are very satisfied.',
  },
  {
    startNumber: '1',
    endNumber: '15',
    unit: '',
    title: 'Experienced Trainers',
    desc: 'We have over fifteen dedicated and experienced trainer for yoga and meditation.',
  },
  {
    startNumber: '1',
    endNumber: '24',
    unit: '',
    title: 'Monthly Classes',
    desc: 'Yoga is a physical, mental and spritual practice discipline. We provide 24+ classes monthly.',
  },
];

export const courses = [
  {
    image: C1,
    title: 'Yoga Classes',
    desc: 'Experience the art of mindfulness and flexibility with our expertly guided yoga sessions designed for all levels.',
    link: 'Get started',
    delay: '600',
  },
  {
    image: C2,
    title: 'Physiotherapy',
    desc: 'Enhance your recovery and mobility through personalized physiotherapy sessions tailored to your needs.',
    link: 'Get started',
    delay: '800',
  },
  {
    image: C3,
    title: 'Diet and Weight Loss Plan',
    desc: 'Achieve your fitness goals with customized diet plans and effective weight management strategies.',
    link: 'Get started',
    delay: '900',
  },
  {
    image: C4,
    title: 'Aerobics & Zumba',
    desc: 'Energize your workouts with fun and engaging aerobics and Zumba classes, perfect for all fitness levels.',
    link: 'Get started',
    delay: '1000',
  },
  
];

export const pricing = [
  {
    title: 'Single yoga class',
    price: '$15.',
    list: [
      {
        icon: <BsCheck />,
        name: 'Pay as you go',
      },
      {
        icon: <BsCheck />,
        name: 'Perfect for non-residence',
      },
      {
        icon: <BsCheck />,
        name: 'Acces to all classes',
      },
    ],
    buttonText: 'Book now',
    buttonIcon: <BsChevronRight />,
    delay: '600',
  },
  {
    title: 'Single yoga class',
    price: '$60.',
    list: [
      {
        icon: <BsCheck />,
        name: 'Pay as you go',
      },
      {
        icon: <BsCheck />,
        name: 'Perfect for non-residence',
      },
      {
        icon: <BsCheck />,
        name: 'Acces to all classes',
      },
      {
        icon: <BsCheck />,
        name: 'Acces to all mentors',
      },
    ],
    buttonText: 'Book now',
    buttonIcon: <BsChevronRight />,
    delay: '800',
  },
  {
    title: 'Single yoga class',
    price: '$150.',
    list: [
      {
        icon: <BsCheck />,
        name: 'Pay as you go',
      },
      {
        icon: <BsCheck />,
        name: 'Perfect for non-residence',
      },
      {
        icon: <BsCheck />,
        name: 'Acces to all classes',
      },
      {
        icon: <BsCheck />,
        name: 'Acces to all mentors',
      },
    ],
    buttonText: 'Book now',
    buttonIcon: <BsChevronRight />,
    delay: '900',
  },
];
