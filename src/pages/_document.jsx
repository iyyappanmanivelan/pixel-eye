import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          rel="stylesheet"
          href="/plugins/bootstrap/css/bootstrap.min.css"
        />
        <link rel="stylesheet" href="/plugins/icofont/icofont.min.css" />
        <link rel="stylesheet" href="/plugins/slick-carousel/slick/slick.css" />
        <link
          rel="stylesheet"
          href="/plugins/slick-carousel/slick/slick-theme.css"
        />
        <link rel="stylesheet" href="/css/style.css0" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
        />
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
        <script src="/plugins/counterup/jquery.easing.js"></script>
        <script src="/plugins/slick-carousel/slick/slick.min.js"></script>
        <script src="/plugins/counterup/jquery.waypoints.min.js"></script>

        <script src="/plugins/shuffle/shuffle.min.js"></script>
        <script src="/plugins/counterup/jquery.counterup.min.js"></script>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />

        <link
          rel="stylesheet"
          type="text/css"
          charset="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.min.css"
        />
        <script src="/js/script.js"></script>
        <script src="/js/contact.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
        <script src="https://checkout.razorpay.com/v1/checkout.js"></script>
      </Head>
      <body >
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
