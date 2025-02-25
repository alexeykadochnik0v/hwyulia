export const users = [
    {
      userid: 1,
      username: 'fill_pos',
      role: 'admin',
      solvedTasks: [
        { id_list: '1', title: 'Изучить TypeScript' }
      ],
      difficulty: {
        easy: 5,
        medium: 5,
        hard: 5
      }
    },
    {
      userid: 2,
      username: 'Alias_Lus',
      role: 'user',
      solvedTasks: [],
      difficulty: {
        easy: 1,
        medium: 1,
        hard: 0
      }
    },
    {
      userid: 3,
      username: 'Alex_Smal',
      role: 'user',
      solvedTasks: [
        { id_list: '2', title: 'Написать приложение' },
        { id_list: '4', title: 'Счетчик' }
      ],
      difficulty: {
        easy: 1,
        medium: 1,
        hard: 0
      }
    },
    {
      userid: 4,
      username: 'juan_Milleri',
      role: 'user',
      solvedTasks: [],
      difficulty: {
        easy: 2,
        medium: 1,
        hard: 1
      }
    },
    {
      userid: 5,
      username: 'Dmitri_Polor',
      role: 'admin',
      solvedTasks: [],
      difficulty: {
        easy: 5,
        medium: 5,
        hard: 5
      }
    }
];

export const tasks = [
    {
      id: 1,
      title: 'Изучить TypeScript',
      description: 'Прочитать документацию и пройти несколько уроков.',
      createdat: '2024-12-05',
      updateat: '2024-12-05',
      userid: 1,
      difficulty: 'Легкий',
      category: 'Теория',
      comments: []
    },
    {
      id: 2,
      title: 'Написать приложение',
      description: 'Создать приложение с использованием TypeScript и Express.',
      createdat: '2024-12-04',
      updateat: '2024-12-04',
      userid: 3,
      difficulty: 'Сложный',
      category: 'Массивы',
      comments: []
    },
    {
      id: 3,
      title: 'Счетчик',
      description: 'Учитывая целое число n, верните функцию counter. Эта функция counter сначала возвращает n, а затем при каждом последующем вызове возвращает на 1 больше предыдущего значения (n, n + 1, n + 2 и т. д.).',
      createdat: '2024-12-01',
      updateat: '2024-12-02',
      userid: 5,
      difficulty: 'Средний',
      category: 'Функции',
      comments: []
    },
    {
      id: 4,
      title: 'Функции в JavaScript',
      description: 'Изучение основ функций в JavaScript, включая синтаксис, аргументы и возвращаемые значения.',
      createdat: '2024-12-02',
      updateat: '2024-12-02',
      userid: 3,
      difficulty: 'Средний',
      category: 'Функции',
      comments: [
        {
          id: 1,
          description: 'Анонимная функция - это функция без имени после ключевого слова function.',
          createdat: '2024-12-03',
          updateat: '2024-12-03',
          userid: 2
        }
      ]
    }
];