import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../../styles/theme';
import Header from './Header';

// Simple smoke test to ensure Header renders navigation items

describe('Header component', () => {
  test('renders navigation links', () => {
    render(
      <ThemeProvider theme={theme}>
        <MemoryRouter>
          <Header />
        </MemoryRouter>
      </ThemeProvider>
    );

    // Navigation items
    expect(screen.getAllByText(/Home/i)[0]).toBeInTheDocument();
    expect(screen.getAllByText(/Sobre/i)[0]).toBeInTheDocument();
    expect(screen.getAllByText(/Projetos/i)[0]).toBeInTheDocument();
    expect(screen.getAllByText(/Contato/i)[0]).toBeInTheDocument();
  });
});
