import { Aside } from '@/components/Aside';
import './globals.css'

export const metadata = {
  title: "Code Connect",
  description: "Uma Rede Social para Desenvolvedores",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        <div className='app-container'>
          <Aside />
          {children}
        </div>
      </body>
    </html>
  );
}
