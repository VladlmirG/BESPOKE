module.exports = {
    content: ["*.{html,js}"],
    theme: {
      extend: {
        gridTemplateRows: {
          // simple 16 columns grid
          'row': 'auto 1fr',
        },

        gridTemplateColumns: {
          // simple 16 columns grid
          'events': 'repeat(auto-fit, minmax(250px, 1fr))',
        }
      },
    },
    plugins: [],
  }