import { Model } from "../dto/Model"
import { ModelAttribute } from "../dto/ModelAttribute"

export const modelList: Model[] = [
  {
    id: 1,
    name: "забор",
    path: "Солодовничье/РО/комплекс/Обследование",
    triangulation: [],
    color: "2500172",
  },
  {
    id: 2,
    name: "Порода",
    path: "Кукушкино/КТ/проба",
    triangulation: [],
    color: "2500172",
  },
  {
    id: 3,
    name: "Шахта-14",
    path: "Кукушкино/разработка",
    triangulation: [],
    color: "2500172",
  },
  {
    id: 4,
    name: "ИТ 6_3",
    path: "Солодовничье/поле 8",
    triangulation: [],
    color: "2500172",
  },
  {
    id: 5,
    name: "ВЕ 6_45",
    path: "Солодовничье/поле 18",
    triangulation: [],
    color: "2500172",
  },
  {
    id: 6,
    name: "РШВ 1",
    path: "Кукушкино/поле 16",
    triangulation: [],
    color: "2500172",
  },
  {
    id: 7,
    name: "Шахта-5",
    path: "Солодовничье/разработка",
    triangulation: [],
    color: "2500172",
  },
  {
    id: 8,
    name: "Шахта-6",
    path: "Солодовничье/разработка",
    triangulation: [],
    color: "2500172",
  },
  {
    id: 9,
    name: "ИТ 6_4",
    path: "Солодовничье/поле 8",
    triangulation: [],
    color: "2500172",
  },
  {
    id: 10,
    name: "ИТ 6_5",
    path: "Солодовничье/поле 8",
    triangulation: [],
    color: "2500172",
  },
  {
    id: 11,
    name: "ИТ 6_6",
    path: "Солодовничье/поле 8",
    triangulation: [],
    color: "2500172",
  },
  {
    id: 12,
    name: "порода(12.12.2008)",
    path: "Солодовничье/Обследование",
    triangulation: [],
    color: "2500172",
  },
  {
    id: 13,
    name: "порода(12.12.2019)",
    path: "Солодовничье/Обследование",
    triangulation: [],
    color: "2500172",
  },
]

export const modelAttributes: ModelAttribute[][] = [
  [
    {
      id: 1,
      name: "Цвет",
      value: "2500172",
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
      value: "2500172",
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
      value: "2500172",
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
      value: "2500172",
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
      value: "2500172",
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
      value: "2500172",
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
      value: "2500172",
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
      value: "2500172",
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
      value: "2500172",
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
      value: "2500172",
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
      value: "2500172",
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
      value: "2500172",
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
      value: "2500172",
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
  ],
]
