import { http, HttpResponse } from 'msw';
import { Product } from './types';

const products: Product[] = [
  {
    "name": "Зимний свитер",
    "description": "Тёплый свитер для зимних прогулок.",
    "id": "1"
  },
  {
    "id": "2",
    "name": "Чашка с новогодним принтом",
    "price": 500,
    "description": "Чашка для горячего напитка с праздничным рисунком."
  },
  {
    "id": "3",
    "name": "Портативная зарядка в виде снежинки",
    "price": 1200,
    "description": "Маленькая зарядка в виде снежинки для телефона."
  },
  {
    "name": "Флешка в форме ёлочной игрушки",
    "description": "USB-флешка в форме новогодней игрушки, ёлочки.",
    "id": "4"
  },
  {
    "id": "5",
    "name": "Новогодний мерч для программистов",
    "price": 700,
    "description": "Футболка с весёлым принтом о программировании и новогодней тематике."
  },
  {
    "id": "6",
    "name": "Книга по React для новичков",
    "price": 1500,
    "description": "Подарочная книга для начинающих программистов по React, идеальна для зимних чтений."
  },
  {
    "id": "7",
    "name": "Плед с кодом на Python",
    "price": 1600,
    "description": "Тёплый плед с фрагментами кода на Python, отличное дополнение для зимнего уюта."
  },
  {
    "id": "8",
    "name": "Календарь с IT мемами",
    "price": 600,
    "description": "Праздничный календарь на 2024 год с забавными мемами для айтишников."
  },
  {
    "id": "9",
    "name": "Настольная лампа с RGB подсветкой",
    "price": 2500,
    "description": "Лампа с регулируемой RGB подсветкой, идеально подходит для работы в зимние вечера."
  },
  {
    "id": "10",
    "name": "Снегопад из кодов",
    "price": 900,
    "description": "Мобильный аксессуар с эффектом снежного дождя, наполняющий экран телефона снежинками с кодом."
  },
  {
    "id": "11",
    "name": "Праздничная кружка с QR-кодом",
    "price": 750,
    "description": "Чашка с новогодним дизайном и QR-кодом, который ведёт на страницу с полезным айти-ресурсом."
  }
];

export const handlers = [
  http.get('http://localhost:5000/products', () => {
    // верните данные в json формате
  }),

  http.post('http://localhost:5000/products', (req) => {
    // Получаем данные товара из тела запроса

    // Генерируем новый id для товара

    // Добавляем новый товар в список

    // Возвращаем новый товар с статусом 201
  }),
]
