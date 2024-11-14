import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;


// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   sassOptions: {
//     logger: {
//       warn: function(message) {
//         console.warn(message);
//       },
//       debug: function(message) {
//         console.log(message);
//       }
//     }
//   },
//   webpack: (config) => {
//     config.module.rules.forEach((rule) => {
//       const { oneOf } = rule;
//       if (oneOf) {
//         oneOf.forEach((one) => {
//           if (!`${one.issuer?.and}`.includes('_app')) return;
//           one.issuer.and = [path.resolve(__dirname)];
//         });
//       }
//     });
//     return config;
//   },
// }

// module.exports = nextConfig;