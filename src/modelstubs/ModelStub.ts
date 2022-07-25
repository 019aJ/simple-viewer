import { Model } from "../dto/Model"
import { ModelAttribute } from "../dto/ModelAttribute"
import { getRandomCube, randomColor } from "./FigureGenerator"

export const modelList: Model[] = [
  {
    id: 1,
    name: "забор",
    path: "Солодовничье/РО/комплекс/Обследование",
    triangulation: getRandomCube(),
    color: randomColor(),
  },
  {
    id: 2,
    name: "Порода",
    path: "Кукушкино/КТ/проба",
    triangulation: getRandomCube(),
    color: randomColor(),
  },
  {
    id: 3,
    name: "Шахта-14",
    path: "Кукушкино/разработка",
    triangulation: getRandomCube(),
    color: randomColor(),
  },
  {
    id: 4,
    name: "ИТ 6_3",
    path: "Солодовничье/поле 8",
    triangulation: getRandomCube(),
    color: randomColor(),
  },
  {
    id: 5,
    name: "ВЕ 6_45",
    path: "Солодовничье/поле 18",
    triangulation: getRandomCube(),
    color: randomColor(),
  },
  {
    id: 6,
    name: "РШВ 1",
    path: "Кукушкино/поле 16",
    triangulation: getRandomCube(),
    color: randomColor(),
  },
  {
    id: 7,
    name: "Шахта-5",
    path: "Солодовничье/разработка",
    triangulation: getRandomCube(),
    color: randomColor(),
  },
  {
    id: 8,
    name: "Шахта-6",
    path: "Солодовничье/разработка",
    triangulation: getRandomCube(),
    color: randomColor(),
  },
  {
    id: 9,
    name: "ИТ 6_4",
    path: "Солодовничье/поле 8",
    triangulation: getRandomCube(),
    color: randomColor(),
  },
  {
    id: 10,
    name: "ИТ 6_5",
    path: "Солодовничье/поле 8",
    triangulation: getRandomCube(),
    color: randomColor(),
  },
  {
    id: 11,
    name: "ИТ 6_6",
    path: "Солодовничье/поле 8",
    triangulation: getRandomCube(),
    color: randomColor(),
  },
  {
    id: 12,
    name: "порода(12.12.2008)",
    path: "Солодовничье/Обследование",
    triangulation: getRandomCube(),
    color: randomColor(),
  },
  {
    id: 13,
    name: "порода(12.12.2019)",
    path: "Солодовничье/Обследование",
    triangulation: getRandomCube(),
    color: randomColor(),
  },
]

export const modelAttributes: ModelAttribute[][] = [
  [
    {
      id: 1,
      name: "Цвет",
      value: "red",
      identifier: "color",
    },
    {
      id: 2,
      name: "Имя",
      value: "Солодовничье/РО/комплекс/Обследование/забор",
      identifier: "name",
    },
    {
      id: 3,
      name: "Тип модели",
      value: "str",
      identifier: "type",
    },
    {
      id: 4,
      name: "Основной элемент",
      value: "комплекс",
      identifier: "elem",
    },
    {
      id: 5,
      name: "Техпроект",
      value: "РО",
      identifier: "techpr",
    },
  ],
  [
    {
      id: 1,
      name: "Цвет",
      value: "green",
      identifier: "color",
    },
    {
      id: 2,
      name: "Имя",
      value: "Кукушкино/КТ/проба/Порода",
      identifier: "name",
    },
    {
      id: 3,
      name: "Тип модели",
      value: "str",
      identifier: "type",
    },
    {
      id: 5,
      name: "Техпроект",
      value: "КТ",
      identifier: "techpr",
    },
  ],
  [
    {
      id: 1,
      name: "Цвет",
      value: "pink",
      identifier: "color",
    },
    {
      id: 2,
      name: "Имя",
      value: "Кукушкино/разработка/Шахта-14",
      identifier: "name",
    },
    {
      id: 3,
      name: "Тип модели",
      value: "trdb",
      identifier: "type",
    },
  ],
  [
    {
      id: 1,
      name: "Цвет",
      value: "yellow",
      identifier: "color",
    },
    {
      id: 2,
      name: "Имя",
      value: "Солодовничье/поле 8/ИТ 6_3",
      identifier: "name",
    },
    {
      id: 3,
      name: "Тип модели",
      value: "str",
      identifier: "type",
    },
    {
      id: 4,
      name: "Основное поле",
      value: "поле 8",
      identifier: "osn",
    },
  ],
  [
    {
      id: 1,
      name: "Цвет",
      value: "Aquamarine",
      identifier: "color",
    },
    {
      id: 2,
      name: "Имя",
      value: "Солодовничье/поле 18/ВЕ 6_45",
      identifier: "name",
    },
    {
      id: 3,
      name: "Тип модели",
      value: "trdb",
      identifier: "type",
    },
    {
      id: 4,
      name: "Основное поле",
      value: "поле 18",
      identifier: "osn",
    },
  ],
  [
    {
      id: 1,
      name: "Цвет",
      value: "violet",
      identifier: "color",
    },
    {
      id: 2,
      name: "Имя",
      value: "Кукушкино/поле 16/РШВ 1",
      identifier: "name",
    },
    {
      id: 3,
      name: "Тип модели",
      value: "trdb",
      identifier: "type",
    },
    {
      id: 4,
      name: "Основное поле",
      value: "поле 16",
      identifier: "osn",
    },
  ],
  [
    {
      id: 1,
      name: "Цвет",
      value: "black",
      identifier: "color",
    },
    {
      id: 2,
      name: "Имя",
      value: "Солодовничье/разработка/Шахта-5",
      identifier: "name",
    },
    {
      id: 3,
      name: "Тип модели",
      value: "str",
      identifier: "type",
    },
  ],
  [
    {
      id: 1,
      name: "Цвет",
      value: "darkgreen",
      identifier: "color",
    },
    {
      id: 2,
      name: "Имя",
      value: "Солодовничье/разработка/Шахта-6",
      identifier: "name",
    },
    {
      id: 3,
      name: "Тип модели",
      value: "str",
      identifier: "type",
    },
  ],
  [
    {
      id: 1,
      name: "Цвет",
      value: "blue",
      identifier: "color",
    },
    {
      id: 2,
      name: "Имя",
      value: "Солодовничье/поле 8/ИТ 6_4",
      identifier: "name",
    },
    {
      id: 3,
      name: "Тип модели",
      value: "str",
      identifier: "type",
    },
    {
      id: 4,
      name: "Основное поле",
      value: "поле 8",
      identifier: "osn",
    },
  ],
  [
    {
      id: 1,
      name: "Цвет",
      value: "orange",
      identifier: "color",
    },
    {
      id: 2,
      name: "Имя",
      value: "Солодовничье/поле 8/ИТ 6_5",
      identifier: "name",
    },
    {
      id: 3,
      name: "Тип модели",
      value: "str",
      identifier: "type",
    },
    {
      id: 4,
      name: "Основное поле",
      value: "поле 8",
      identifier: "osn",
    },
  ],
  [
    {
      id: 1,
      name: "Цвет",
      value: "yellow",
      identifier: "color",
    },
    {
      id: 2,
      name: "Имя",
      value: "Солодовничье/поле 8/ИТ 6_6",
      identifier: "name",
    },
    {
      id: 3,
      name: "Тип модели",
      value: "str",
      identifier: "type",
    },
    {
      id: 4,
      name: "Основное поле",
      value: "поле 8",
      identifier: "osn",
    },
  ],
  [
    {
      id: 1,
      name: "Цвет",
      value: "brown",
      identifier: "color",
    },
    {
      id: 2,
      name: "Имя",
      value: "Солодовничье/Обследование/порода(12.12.2008)",
      identifier: "name",
    },
    {
      id: 3,
      name: "Тип модели",
      value: "str",
      identifier: "type",
    },
  ],
  [
    {
      id: 1,
      name: "Цвет",
      value: "purple",
      identifier: "color",
    },
    {
      id: 2,
      name: "Имя",
      value: "Солодовничье/Обследование/порода(12.12.2019)",
      identifier: "name",
    },
    {
      id: 3,
      name: "Тип модели",
      value: "str",
      identifier: "type",
    },
    {
      id: 4,
      name: "Источник данных",
      value: "Автоматическая синхронизация",
      identifier: "type",
    },
  ],
]
