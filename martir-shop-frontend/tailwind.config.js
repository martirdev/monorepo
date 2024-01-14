/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', '**/*.{ts,tsx,html}'],
  theme: {
    fontSize: {
      header: [
        '2.25rem',
        {
          lineHeight: '3.375rem',
          fontWeight: '700'
        }
      ],
      'page-title': [
        '2.25rem',
        {
          lineHeight: '3.5rem',
          fontWeight: '500'
        }
      ],
      subtitle: [
        '1.5rem',
        {
          lineHeight: '2.25rem',
          fontWeight: '700'
        }
      ],
      paragraph: [
        '1rem',
        {
          lineHeight: '1.5rem',
          fontWeight: '400'
        }
      ],
      'paragraph-2': [
        '1.25rem',
        {
          lineHeight: '1.625rem',
          fontWeight: '400'
        }
      ],
      small: [
        '0.75rem',
        {
          lineHeight: '1rem',
          fontWeight: '400'
        }
      ],
      bold: [
        '1rem',
        {
          lineHeight: '1.5rem',
          fontWeight: '700'
        }
      ],
      'bold-2': [
        '1.25rem',
        {
          lineHeight: '1.625rem',
          fontWeight: '700'
        }
      ],
      hero: [
        '3rem',
        {
          lineHeight: '4rem',
          fontWeight: '700'
        }
      ],
      link: [
        '1rem',
        {
          lineHeight: '1.5rem',
          fontWeight: '700'
        }
      ]
    },
    extend: {
      colors: {
        // Common - цвета используются только для фона блоков или текстов
        'common-black': '#000000',
        'common-darkest-gray': '#131313',
        'common-bg': '#222222',
        'common-light-gray': '#C6C6C6',
        'common-white': '#FFFFFF',
        'common-gray': '#838383',
        'common-dark-gray': '#424242',
        'common-mate-glass': 'F2F3F4',
        // Primary - цвет обозначающий действие, если элемент является интерактивным, то нужно добавить обозначение данным цветом
        'primary-light': '#68ADFD',
        'primary-normal': '#3691FC',
        'primary-dark': '#0476FB',
        // Success - цвет обозначающий согласие с происходящим
        'success-light': '#66FF9A',
        'success-normal': '#35FF7A',
        // Danger - цвет обозначающий о том что действие опасно и нужно отнестись с вниманием
        'danger-light': '#EF1060',
        'danger-normal': '#BF0D4D',
        // Warning - цвет обозначает предупреждение что нужно ознакомиться с происходящим
        'warning-light': '#F6E96F',
        'warning-normal': '#F3E13F'
      }
    }
  },
  plugins: [require('@tailwindcss/typography')],
  corePlugins: {preflight: false}
};
