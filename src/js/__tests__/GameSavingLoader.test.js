import GameSavingLoader from '../GameSavingLoader';
import read from '../reader';

jest.mock('../reader');// становится моком

beforeEach(() => { // перед каждым тестом сбрасываем все данные которые могут быть
  jest.resetAllMocks();
});

const data = '{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}';
const buffer = new ArrayBuffer(data.length * 2);
const bufferView = new Uint16Array(buffer);
for (let i = 0; i < data.length; i++) {
  bufferView[i] = data.charCodeAt(i);// возвращает числовое значение Юникода для символа по указанному индексу
}
// в процессе разработке, пока не работает
// test('resolved case of the "read" function is passing correctly', async () => {
//   await read.mockReturnValue(buffer);

//   const expectation = [  ];

//   await expect(read()).resolves.toEqual();
// });

test('resolved case of the "read" function is passing correctly', async () => {
  await read.mockReturnValue(buffer);

  const expectation = {
    id: 9,
    created: 1546300800,
    userInfo: {
      id: 1,
      name: 'Hitman',
      level: 10,
      points: 2000,
    },
  };

  await expect(GameSavingLoader.load()).resolves.toEqual(expectation);
});

test('error catch check', async () => {
  expect.assertions(1);// выполняет один раз
  await read.mockReturnValue(new Error('Error'));// Принимает значение, которое будет возвращено при каждом вызове фиктивной функции.
  // await expect(GameSavingLoader.load()).rejects.toBeInstanceOf(Error); //чтобы проверить, что данный объект является экземпляром того или иного класса
  await expect(GameSavingLoader.load()).rejects.toThrow(Error);// toThrowдля проверки того, что функция вызывается при ее вызове
});

// Используйте .rejects, чтобы развернуть причину отклоненного обещания, чтобы можно было связать любой другой сопоставитель. Если обещание выполняется, утверждение терпит неудачу.
