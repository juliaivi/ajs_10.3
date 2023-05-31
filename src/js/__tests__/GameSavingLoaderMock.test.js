import GameSavingLoader from '../GameSavingLoader';
import read from '../reader';

jest.mock('../reader');// становится моком

beforeEach(() => { // перед каждым тестом сбрасываем все данные которые могут быть
  jest.resetAllMocks();
});

test('error catch check', async () => {
  expect.assertions(1);// выполняет один раз
  await read.mockReturnValue(new Error('Error'));// Принимает значение, которое будет возвращено при каждом вызове фиктивной функции.
  // await expect(GameSavingLoader.load()).rejects.toBeInstanceOf(Error); //чтобы проверить, что данный объект является экземпляром того или иного класса
  await expect(GameSavingLoader.load()).rejects.toThrow(Error);// toThrowдля проверки того, что функция вызывается при ее вызове
});

// Используйте .rejects, чтобы развернуть причину отклоненного обещания, чтобы можно было связать любой другой сопоставитель. Если обещание выполняется, утверждение терпит неудачу.
