
import "./globals.css";
import Page from "./expenseTraccker/page";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/css/bootstrap.min.css" rel="stylesheet" ></link>
      </head>
      <body >
     <Page></Page>
        {children}
      </body>
    </html>
  );
}
