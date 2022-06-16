import { render, screen } from '@testing-library/react';
import Header from '../Components/Header';

 test('Test Basic Render', () => {
     render(<Header/>);
     const h2 =  screen.getByText('Contact Manager');
     expect(h2).toBeInTheDocument() ;
})


