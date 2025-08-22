import './globals.css'

export const metadata = {
  title: 'Karan Dahiya - Eportfolio',
  description: 'Full-Stack Developer Portfolio Mockup',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/kd-logo.svg" type="image/svg+xml" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Prevent zooming
              document.addEventListener('gesturestart', function(e) {
                e.preventDefault();
              });
              
              document.addEventListener('gesturechange', function(e) {
                e.preventDefault();
              });
              
              document.addEventListener('gestureend', function(e) {
                e.preventDefault();
              });
              
              // Prevent double tap zoom
              let lastTouchEnd = 0;
              document.addEventListener('touchend', function(event) {
                const now = (new Date()).getTime();
                if (now - lastTouchEnd <= 300) {
                  event.preventDefault();
                }
                lastTouchEnd = now;
              }, false);
              
              // Force viewport scale
              function setViewportScale() {
                const viewport = document.querySelector('meta[name=viewport]');
                if (viewport) {
                  viewport.setAttribute('content', 'width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover');
                }
              }
              
              // Set viewport on load and resize
              window.addEventListener('load', setViewportScale);
              window.addEventListener('resize', setViewportScale);
              window.addEventListener('orientationchange', setViewportScale);
              
              // Prevent any scaling
              document.addEventListener('touchmove', function(e) {
                if (e.scale !== 1) {
                  e.preventDefault();
                }
              }, { passive: false });
            `,
          }}
        />
      </head>
      <body className="bg-neutral-50 text-neutral-900">
        {children}
      </body>
    </html>
  )
}