import './globals.css';
import { ReduxProvider } from '../store/provider';
import Nav from './(components)/Nav';
import AuthProvider from './(components)/AuthProvider';

export const metadata = {
  title: 'My App',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <AuthProvider>
        <body>
          <Nav />
          <ReduxProvider>{children}</ReduxProvider>
        </body>
      </AuthProvider>
    </html>
  );
}