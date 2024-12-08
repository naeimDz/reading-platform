import PlatformLayout from "@/components/layouts/supervisor-dashboard/PlatformLayout";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (

        <PlatformLayout pageTitle="Dashboard">{children}</PlatformLayout>

  );
}
