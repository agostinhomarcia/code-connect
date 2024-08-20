

export const metadata = {
  title: "Code Connect",
  description: "Uma Rede Social para Desenvolvedores",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  );
}
