import PlatformLayout from "@/components/layouts/supervisor-dashboard/PlatformLayout";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <PlatformLayout pageTitle="Dashboard">{children}</PlatformLayout>
      </body>
    </html>
  );
}
