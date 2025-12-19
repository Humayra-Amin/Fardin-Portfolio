export default {
    content: [
      "./index.html",
      "./src/**/*.{js,jsx,ts,tsx}"
    ],
    theme: {
      extend: {
        animation: {
          "spin-fast": "spin 20s linear infinite",
          "spin-faster": "spin 50s linear infinite",
        },
      },
    },
    plugins: [],
  }
  