const v = (n) => `var(--${n})`
const hide = { opacity: 0, transform: 'translateY(.3em)', filter: 'blur(8px)' }
const show = { opacity: 1, transform: 'none', filter: 'none' }
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: Object.fromEntries(['bg','card','ink','mute','line','dev','devbg','qa','qabg','oth'].map((n) => [n, v(n)])),
      fontFamily: { display: ['Sora', 'DM Sans', 'sans-serif'], sans: ['DM Sans', 'system-ui', 'sans-serif'] },
      keyframes: {
        marquee: { to: { transform: 'translateX(-50%)' } },
        float: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(26px)' } },
        page: { '0%': { opacity: 0, transform: 'translateY(14px)' }, '100%': { opacity: 1, transform: 'none' } },
        swap: { '0%': hide, '7%, 45%': show, '52%, 100%': { ...hide, transform: 'translateY(-.3em)' } },
      },
      animation: { marquee: 'marquee 32s linear infinite', float: 'float 9s ease-in-out infinite', page: 'page .5s ease both', swapA: 'swap 6s infinite', swapB: 'swap 6s 3s infinite' },
    },
  },
  plugins: [],
}
