import React from 'react';
import About from '../components/About/About';
import Cards from '../components/Cards/Cards';
import Citation from '../components/Citation/Citation';
import Clients from '../components/Clients/Clients';
import Coach from '../components/Coach/Coach';
import Contact from '../components/Contact/Contact';
import Content from '../components/Content/Content';
import Features from '../components/Features/Features';
import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';
import Home from '../components/Home/Home';
import More from '../components/More/More';
import Price from '../components/Price/Price';
import Testimonials from '../components/Testimonials/Testimonials';
import { heroOne, heroTwo, heroThree, heroFour } from '../data/HeroData';
import { Heading } from '../globalStyles';

const HomePage = () => {
	return (
		<>
			<Home/>
			{/* <Header/> */}
			<About/>
			<Cards/>
			<Price/>
			{/* <Hero />
			<Features />
			<Clients />
			<Heading id="projects">Our Projects</Heading>
			<Content {...heroOne} />
			<Content {...heroTwo} />
			<Content {...heroThree} />
			<Content {...heroFour} /> */}
		</>
	);
};

export default HomePage;