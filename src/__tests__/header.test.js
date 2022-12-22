import React from 'react';
import Header from '../components/header/header';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import { toHaveTextContent } from '@testing-library/jest-dom';
import { useRef } from 'react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import animalReducer from '../features/animalSlice';
import detailReducer from '../features/detailSlice';
import favoriteReducer from '../features/favoriteSlice';
import userReducer from '../features/userSlice';
import reviewReducer from '../features/reviewSlice';
import calendarReducer from '../features/calendarSlice';

const mockStore = configureStore({
  reducer: {
    animals: animalReducer,
    detail: detailReducer,
    favorite: favoriteReducer,
    user: userReducer,
    review: reviewReducer,
    calendar: calendarReducer
  },
});

describe('Header', () => {
    it('renders the header', () => {
        render(
            <Provider store={mockStore}>
                <Header />
            </Provider>,
            document.body
        );
    
        const headerElement = screen.getByTestId('header');
        expect(headerElement).toBeDefined();
    });
    it('renders the menu icon', () => {
        render(
            <Provider store={mockStore}>
                <Header />
            </Provider>,
           document.body
        );
        const menu = screen.getByTestId('MenuIcon');
        expect(menu).toBeDefined();
    });
    
    it('routes to the homepage when clicked', () => {
        render(
            <Provider store={mockStore}>
                <Header />
            </Provider>,
            document.body
        );
        const homeLink = screen.getByText('HappyTails');
        expect(homeLink).toBeDefined();
        // const profileLink = screen.getByRole('')
        fireEvent.click(homeLink);
        expect(window.location.pathname).toBe('/');
    });
    it('detects the text in the header component', () => {
        render(
            <Provider store={mockStore}>
                <Header />
            </Provider>,
            document.body
        );
        const headerElement = screen.getByTestId('header');
        expect(headerElement).toHaveTextContent('HappyTails');
        // expect(headerElement).toHaveTextContent('Profile');
    });
});




